import React, { useState } from 'react';
import { Exercise } from '../../types/chemistry';
import { QuizAttempt } from '../../types/progress';
import { ExerciseCard } from './ExerciseCard';
import { Award, RotateCcw, ArrowRight, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuizSessionProps {
  chapterSlug: string;
  chapterTitle: string;
  exercises: Exercise[];
  onCompleteQuiz: (attempt: QuizAttempt) => void;
}

export const QuizSession: React.FC<QuizSessionProps> = ({
  chapterSlug,
  chapterTitle,
  exercises,
  onCompleteQuiz,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [result, setResult] = useState<{ score: number; total: number; percentage: number; wrongIds: string[] } | null>(null);

  // Selecionar até 10 questões para o quiz do capítulo
  const quizExercises = exercises.slice(0, 10);

  const handleSelectOption = (exerciseId: string, optionIndex: number) => {
    if (isFinished) return;
    setUserAnswers(prev => ({
      ...prev,
      [exerciseId]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    const wrongIds: string[] = [];

    quizExercises.forEach(ex => {
      const selected = userAnswers[ex.id];
      if (selected !== undefined && selected === ex.correctAnswerIndex) {
        score++;
      } else {
        wrongIds.push(ex.id);
      }
    });

    const total = quizExercises.length;
    const percentage = Math.round((score / total) * 100);
    const attempt: QuizAttempt = {
      id: `quiz-${chapterSlug}-${Date.now()}`,
      chapterSlug,
      timestamp: Date.now(),
      score,
      total,
      percentage,
      wrongExerciseIds: wrongIds,
    };

    setResult({ score, total, percentage, wrongIds });
    setIsFinished(true);
    onCompleteQuiz(attempt);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setIsFinished(false);
    setResult(null);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / quizExercises.length) * 100);

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl border-2 border-indigo-200 dark:border-indigo-900/80 bg-white dark:bg-slate-900 shadow-lg">
      
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
            <Award className="w-3.5 h-3.5" /> Avaliação Formativa de Fixação
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1">
            Quiz do Capítulo: {chapterTitle}
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Responda às questões no modo simulado para testar sua retenção conceitual.
          </p>
        </div>

        {!isFinished && (
          <div className="flex flex-col items-end">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
              Respondidas: <span className="text-indigo-600 dark:text-indigo-400 font-mono">{answeredCount} / {quizExercises.length}</span>
            </div>
            <div className="w-36 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tela de Resultado quando finalizado */}
      {isFinished && result && (
        <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg">
            {result.percentage >= 70 ? '🎉' : '📖'}
          </div>
          
          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">
              {result.percentage >= 70 ? 'Excelente Desempenho!' : 'Bom Treino! Continue Praticando'}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Você acertou <strong className="text-indigo-600 dark:text-indigo-400 font-mono">{result.score} de {result.total}</strong> questões ({result.percentage}% de aproveitamento).
            </p>
          </div>

          {/* Recomendações pedagógicas de revisão */}
          {result.wrongIds.length > 0 ? (
            <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Conteúdo Recomendado para Revisão:
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Revise os conceitos teóricos do capítulo <strong className="text-slate-800 dark:text-slate-200">{chapterTitle}</strong> e releia as caixas de "Cuidado com estas pegadinhas" antes de tentar novamente.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Parabéns! Você dominou completamente todos os tópicos deste capítulo!
            </div>
          )}

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 flex items-center gap-2 text-slate-700 dark:text-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
              Refazer Quiz
            </button>
            <Link
              to="/conteudos"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Próximo Capítulo
            </Link>
          </div>
        </div>
      )}

      {/* Lista de Questões do Quiz */}
      <div className="space-y-6 mt-6">
        {quizExercises.map((ex, idx) => (
          <div key={ex.id} className="relative">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Questão {idx + 1} de {quizExercises.length}
            </div>
            <ExerciseCard
              exercise={ex}
              mode="simulated"
              showSimulatedResult={isFinished}
              onAnswer={(id, optionIdx) => handleSelectOption(id, optionIdx)}
            />
          </div>
        ))}
      </div>

      {/* Botão de Envio */}
      {!isFinished && (
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleSubmitQuiz}
            disabled={answeredCount === 0}
            className="px-8 py-3 rounded-xl font-extrabold text-sm bg-gradient-to-r from-indigo-600 to-science-600 hover:from-indigo-700 hover:to-science-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            <span>Finalizar Quiz e Ver Resultados</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
