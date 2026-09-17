import React, { useState } from 'react';
import { Exercise } from '../../types/chemistry';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { KatexMath } from '../common/KatexMath';
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  Eye, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  mode?: 'practice' | 'simulated';
  onAnswer?: (exerciseId: string, optionIndex: number, isCorrect: boolean, usedHints: boolean) => void;
  showSimulatedResult?: boolean;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  mode = 'practice',
  onAnswer,
  showSimulatedResult = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [hintsUnlocked, setHintsUnlocked] = useState<number>(0); // 0, 1, 2
  const [showFullResolution, setShowFullResolution] = useState<boolean>(false);

  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  const isCorrect = selectedOption !== null && selectedOption === exercise.correctAnswerIndex;

  const handleSubmitPractice = () => {
    if (selectedOption === null) return;
    setHasSubmitted(true);
    const correct = selectedOption === exercise.correctAnswerIndex;

    // Se errou pela primeira vez no modo prática, desbloqueia a Dica 1 automaticamente
    if (!correct && hintsUnlocked === 0) {
      setHintsUnlocked(1);
    }

    if (onAnswer) {
      onAnswer(exercise.id, selectedOption, correct, hintsUnlocked > 0);
    }
  };

  const handleNextHint = () => {
    if (hintsUnlocked < 2) {
      setHintsUnlocked(prev => prev + 1);
    } else {
      setShowFullResolution(true);
    }
  };

  // No modo simulado com resultado exibido
  const simulatedDisplayState = mode === 'simulated' && showSimulatedResult;

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all">
      
      {/* Header do Card */}
      <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold">
            #{exercise.id.toUpperCase()}
          </span>
          <DifficultyBadge difficulty={exercise.difficulty} />
          <span className="text-xs text-slate-500 dark:text-slate-400 capitalize hidden sm:inline">
            • {exercise.type.replace('_', ' ')}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {exercise.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corpo do Exercício */}
      <div className="p-6 space-y-6">
        
        {/* Enunciado da questão */}
        <div className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
          {exercise.question}
        </div>

        {/* Alternativas */}
        <div className="space-y-2.5">
          {exercise.options.map((optionText, idx) => {
            const letter = optionLetters[idx] || `${idx + 1}`;
            const isSelected = selectedOption === idx;
            const isAnswerKey = idx === exercise.correctAnswerIndex;

            // Determinar estilo das alternativas
            let styleClass = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200';
            
            if (mode === 'practice' && hasSubmitted) {
              if (isSelected && isCorrect) {
                styleClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20';
              } else if (isSelected && !isCorrect) {
                styleClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/20';
              } else if (showFullResolution && isAnswerKey) {
                styleClass = 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border-dashed';
              }
            } else if (simulatedDisplayState) {
              if (isSelected && isCorrect) {
                styleClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100';
              } else if (isSelected && !isCorrect) {
                styleClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100';
              } else if (isAnswerKey) {
                styleClass = 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border-dashed';
              }
            } else if (isSelected) {
              styleClass = 'border-science-500 bg-science-50 dark:bg-science-950/40 text-science-900 dark:text-science-100 ring-2 ring-science-500/20';
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={mode === 'practice' ? hasSubmitted && isCorrect : simulatedDisplayState}
                onClick={() => {
                  setSelectedOption(idx);
                  if (mode === 'simulated' && onAnswer) {
                    onAnswer(exercise.id, idx, idx === exercise.correctAnswerIndex, false);
                  }
                }}
                className={`w-full p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all text-sm md:text-base font-normal ${styleClass}`}
              >
                <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                  isSelected 
                    ? 'bg-science-600 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {letter}
                </span>
                <div className="flex-1 pt-0.5 leading-snug">
                  {optionText}
                </div>
              </button>
            );
          })}
        </div>

        {/* Botão de envio no Modo Prática */}
        {mode === 'practice' && !hasSubmitted && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={handleSubmitPractice}
              className="px-6 py-2.5 rounded-xl font-bold text-sm bg-science-600 hover:bg-science-700 text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              <span>Responder Questão</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Feedback no Modo Prática após envio */}
        {mode === 'practice' && hasSubmitted && (
          <div className="space-y-4 pt-2">
            
            {/* Mensagem Correta */}
            {isCorrect && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-base font-bold text-emerald-900 dark:text-emerald-100">
                    Parabéns! Resposta Correta!
                  </h5>
                  <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    {exercise.explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Mensagem Incorreta com Sistema de Dicas */}
            {!isCorrect && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h5 className="text-base font-bold text-rose-900 dark:text-rose-100">
                      Resposta incorreta!
                    </h5>
                    <p className="mt-0.5 text-sm text-rose-800 dark:text-rose-300">
                      Não se preocupe, errar faz parte do aprendizado. Veja a dica abaixo e tente novamente ou explore a resolução completa.
                    </p>
                  </div>
                </div>

                {/* Exibição da Dica 1 */}
                {hintsUnlocked >= 1 && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
                        Dica 1:
                      </span>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                        {exercise.hint1}
                      </p>
                    </div>
                  </div>
                )}

                {/* Exibição da Dica 2 */}
                {hintsUnlocked >= 2 && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
                        Dica 2 (Avançada):
                      </span>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                        {exercise.hint2}
                      </p>
                    </div>
                  </div>
                )}

                {/* Resolução Completa Comentada */}
                {showFullResolution && (
                  <div className="p-5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-bold text-sm">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span>Resolução Comentada Completa:</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {exercise.explanation}
                    </p>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 pt-1">
                      Alternativa correta: {optionLetters[exercise.correctAnswerIndex]}
                    </div>
                  </div>
                )}

                {/* Botões de Ação para o Aluno */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHasSubmitted(false);
                      setSelectedOption(null);
                    }}
                    className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    Tentar Novamente
                  </button>

                  <div className="flex items-center gap-2">
                    {hintsUnlocked < 2 && (
                      <button
                        type="button"
                        onClick={handleNextHint}
                        className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 hover:bg-amber-200 transition-colors flex items-center gap-1.5"
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Ver Próxima Dica ({hintsUnlocked + 1}/2)</span>
                      </button>
                    )}

                    {!showFullResolution && (
                      <button
                        type="button"
                        onClick={() => setShowFullResolution(true)}
                        className="px-4 py-2 text-xs font-bold rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Resolução Completa</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

        {/* Exibição no Modo Simulado após submissão final */}
        {simulatedDisplayState && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Resposta Correta ({optionLetters[exercise.correctAnswerIndex]})
                </span>
              ) : (
                <span className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <XCircle className="w-4 h-4" /> Gabarito: {optionLetters[exercise.correctAnswerIndex]}
                </span>
              )}
            </div>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {exercise.explanation}
            </p>
          </div>
        )}

      </div>

    </div>
  );
};
