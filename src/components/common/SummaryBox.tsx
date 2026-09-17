import React from 'react';
import { BookCheck, CheckCircle2 } from 'lucide-react';

interface SummaryBoxProps {
  points: string[];
}

export const SummaryBox: React.FC<SummaryBoxProps> = ({ points }) => {
  return (
    <div className="my-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 shadow-sm">
      <div className="flex items-center gap-2.5 pb-4 border-b border-emerald-200/70 dark:border-emerald-800/40">
        <div className="p-2 rounded-lg bg-emerald-600 text-white">
          <BookCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
            <span>🧠</span> Resumo em 1 Minuto
          </h3>
          <p className="text-xs text-emerald-700 dark:text-emerald-400">
            Pontos-chave essenciais para fixar e revisar antes das avaliações
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span className="leading-snug">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
