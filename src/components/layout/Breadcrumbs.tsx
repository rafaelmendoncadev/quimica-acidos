import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 py-3 overflow-x-auto">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-science-600 dark:hover:text-science-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Início</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.to && !isLast ? (
              <Link 
                to={item.to} 
                className="hover:text-science-600 dark:hover:text-science-400 transition-colors truncate max-w-[200px]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[250px]" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
