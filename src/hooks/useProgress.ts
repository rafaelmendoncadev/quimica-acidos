import { useState, useEffect, useCallback } from 'react';
import { StudentProgress, ExerciseAttempt, QuizAttempt } from '../types/progress';
import { ALL_BADGES } from '../data/badges';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'quimica_facil_progress_v1';

const DEFAULT_PROGRESS: StudentProgress = {
  studiedChapterSlugs: [],
  completedChapterSlugs: [],
  exerciseAttempts: {},
  quizAttempts: [],
  xp: 0,
  unlockedBadgeIds: [],
  studyStreakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
};

export function useProgress() {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Erro ao carregar progresso local:', e);
    }
    return DEFAULT_PROGRESS;
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Erro ao salvar progresso local:', e);
    }
  }, [progress]);

  // Check and unlock badges based on progress
  const checkBadges = useCallback((current: StudentProgress): string[] => {
    const newlyUnlocked: string[] = [...current.unlockedBadgeIds];
    const totalChapters = current.studiedChapterSlugs.length;
    const correctExercises = Object.values(current.exerciseAttempts).filter(a => a.isCorrect).length;

    const unlock = (id: string) => {
      if (!newlyUnlocked.includes(id)) {
        newlyUnlocked.push(id);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
          });
        } catch {
          // ignore in headless
        }
      }
    };

    if (totalChapters >= 1) unlock('first-chapter');
    if (totalChapters >= 5) unlock('five-chapters');
    if (totalChapters >= 19) unlock('acids-master');

    if (correctExercises >= 1) unlock('first-exercise');
    if (correctExercises >= 10) unlock('ten-exercises');
    if (correctExercises >= 50) unlock('fifty-exercises');
    if (correctExercises >= 100) unlock('hundred-exercises');

    if (current.studiedChapterSlugs.includes('ph') && current.studiedChapterSlugs.includes('poh')) {
      unlock('ph-expert');
    }

    const perfectQuiz = current.quizAttempts.some(q => q.percentage === 100);
    if (perfectQuiz) unlock('first-quiz-perfect');

    if (current.studyStreakDays >= 3) unlock('study-streak-3');

    return newlyUnlocked;
  }, []);

  const markChapterAsStudied = useCallback((slug: string) => {
    setProgress(prev => {
      if (prev.studiedChapterSlugs.includes(slug)) {
        return { ...prev, lastStudiedChapterSlug: slug };
      }
      const updatedStudied = [...prev.studiedChapterSlugs, slug];
      const updatedXp = prev.xp + 15; // +15 XP por capítulo
      const updatedProgress: StudentProgress = {
        ...prev,
        studiedChapterSlugs: updatedStudied,
        lastStudiedChapterSlug: slug,
        xp: updatedXp,
      };
      updatedProgress.unlockedBadgeIds = checkBadges(updatedProgress);
      return updatedProgress;
    });
  }, [checkBadges]);

  const recordExerciseAnswer = useCallback((
    exerciseId: string,
    selectedOptionIndex: number,
    isCorrect: boolean,
    usedHints: boolean
  ) => {
    setProgress(prev => {
      const existing = prev.exerciseAttempts[exerciseId];
      const attemptsCount = existing ? existing.attemptsCount + 1 : 1;
      
      const newAttempt: ExerciseAttempt = {
        exerciseId,
        selectedOptionIndex,
        isCorrect,
        timestamp: Date.now(),
        attemptsCount,
        usedHints,
      };

      // Só concede XP no primeiro acerto da questão
      const isFirstSuccess = isCorrect && (!existing || !existing.isCorrect);
      const xpGained = isFirstSuccess ? (usedHints ? 15 : 25) : 0;

      const updatedProgress: StudentProgress = {
        ...prev,
        exerciseAttempts: {
          ...prev.exerciseAttempts,
          [exerciseId]: newAttempt,
        },
        xp: prev.xp + xpGained,
      };

      updatedProgress.unlockedBadgeIds = checkBadges(updatedProgress);
      return updatedProgress;
    });
  }, [checkBadges]);

  const recordQuizAttempt = useCallback((quiz: QuizAttempt) => {
    setProgress(prev => {
      const xpEarned = Math.round(quiz.score * 10);
      const updated: StudentProgress = {
        ...prev,
        quizAttempts: [...prev.quizAttempts, quiz],
        xp: prev.xp + xpEarned,
      };
      updated.unlockedBadgeIds = checkBadges(updated);
      return updated;
    });
  }, [checkBadges]);

  // Estatísticas agregadas
  const totalStudiedChapters = progress.studiedChapterSlugs.length;
  const attemptsArray = Object.values(progress.exerciseAttempts);
  const totalAnswered = attemptsArray.length;
  const totalCorrect = attemptsArray.filter(a => a.isCorrect).length;
  const totalWrong = attemptsArray.filter(a => !a.isCorrect).length;
  const accuracyPercentage = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return {
    progress,
    markChapterAsStudied,
    recordExerciseAnswer,
    recordQuizAttempt,
    totalStudiedChapters,
    totalAnswered,
    totalCorrect,
    totalWrong,
    accuracyPercentage,
    unlockedBadges: ALL_BADGES.filter(b => progress.unlockedBadgeIds.includes(b.id)),
    allBadges: ALL_BADGES,
  };
}
