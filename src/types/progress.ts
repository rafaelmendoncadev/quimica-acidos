export interface ExerciseAttempt {
  exerciseId: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
  timestamp: number;
  attemptsCount: number;
  usedHints: boolean;
}

export interface QuizAttempt {
  id: string;
  chapterSlug: string;
  timestamp: number;
  score: number;
  total: number;
  percentage: number;
  wrongExerciseIds: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number;
  category: 'capitulos' | 'exercicios' | 'streak' | 'perfeicao';
}

export interface StudentProgress {
  studiedChapterSlugs: string[];
  completedChapterSlugs: string[];
  exerciseAttempts: Record<string, ExerciseAttempt>;
  quizAttempts: QuizAttempt[];
  xp: number;
  unlockedBadgeIds: string[];
  lastStudiedChapterSlug?: string;
  studyStreakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
}
