import React, { useMemo } from 'react';
import katex from 'katex';

interface KatexMathProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const KatexMath: React.FC<KatexMathProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (e) {
      console.warn('KaTeX rendering error for:', math, e);
      return `<span class="text-red-500 font-mono text-sm">[Erro de fórmula: ${math}]</span>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div 
        className={`my-3 overflow-x-auto text-center py-2 px-3 bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span 
      className={`inline-block px-1 align-baseline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
