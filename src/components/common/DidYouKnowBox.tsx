import React from 'react';
import { Lightbulb } from 'lucide-react';

interface DidYouKnowBoxProps {
  title?: string;
  text: string;
}

export const DidYouKnowBox: React.FC<DidYouKnowBoxProps> = ({ 
  title = "Você Sabia?", 
  text 
}) => {
  return (
    <div className="my-5 rounded-xl border border-sky-200 dark:border-sky-900 bg-gradient-to-r from-sky-50 to-indigo-50/50 dark:from-sky-950/20 dark:to-indigo-950/20 p-5 shadow-sm">
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
            <span>💡</span> {title}
          </h4>
          <p className="mt-1.5 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
