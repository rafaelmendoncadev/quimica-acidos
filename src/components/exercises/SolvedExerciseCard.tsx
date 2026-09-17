import React, { useState } from 'react';
import { SolvedExercise } from '../../types/chemistry';
import { KatexMath } from '../common/KatexMath';
import { CheckCircle2, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface SolvedExerciseCardProps {
  exercise: SolvedExercise;
}

export const SolvedExerciseCard: React.FC<SolvedExerciseCardProps> = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="my-6 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all">
      
      {/* Header do Card */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 bg-gradient-to-r from-indigo-50/70 to-white dark:from-indigo-950/40 dark:to-slate-900 border-b border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-sm">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Exercício Resolvido Passo a Passo
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {exercise.title}
            </h4>
          </div>
        </div>

        <button 
          aria-label={isOpen ? 'Ocultar resolução' : 'Expandir resolução'}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="p-6 space-y-6">
          
          {/* Enunciado */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Enunciado:
            </span>
            <p className="mt-1 text-slate-800 dark:text-slate-200 text-base leading-relaxed font-medium">
              {exercise.question}
            </p>
          </div>

          {/* Dados */}
          {exercise.givenData && exercise.givenData.length > 0 && (
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                Dados fornecidos:
              </span>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 font-mono">
                {exercise.givenData.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Passos de Resolução */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
              Passo a Passo da Resolução:
            </span>

            {exercise.steps.map((step) => (
              <div key={step.stepNumber} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-extrabold shrink-0">
                  {step.stepNumber}
                </span>
                <div className="flex-1 space-y-1.5">
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.detail}
                  </p>
                  {step.mathLatex && (
                    <KatexMath math={step.mathLatex} block={true} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Resposta final destacada */}
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                Resposta Final:
              </span>
              <p className="text-base font-bold text-emerald-900 dark:text-emerald-100 mt-0.5">
                {exercise.finalAnswer}
              </p>
            </div>
          </div>

          {/* Por que essa é a resposta? */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Por que essa é a resposta?
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {exercise.explanation}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
