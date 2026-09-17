import React from 'react';
import { Difficulty } from '../../types/chemistry';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className = '' }) => {
  switch (difficulty) {
    case 'facil':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Fácil
        </span>
      );
    case 'medio':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Médio
        </span>
      );
    case 'dificil':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border border-rose-200 dark:border-rose-800 ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          Difícil
        </span>
      );
    default:
      return null;
  }
};
