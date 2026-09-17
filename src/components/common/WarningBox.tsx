import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
  title?: string;
  warning: string;
  explanation: string;
}

export const WarningBox: React.FC<WarningBoxProps> = ({ 
  title = "Cuidado com estas pegadinhas!", 
  warning, 
  explanation 
}) => {
  return (
    <div className="my-6 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 dark:bg-amber-950/30 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>⚠️</span> {title}
          </h4>
          <p className="mt-1 font-semibold text-amber-800 dark:text-amber-300">
            "{warning}"
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};
