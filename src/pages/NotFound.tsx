import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Home, BookOpen } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="text-center py-20 px-4 space-y-6 max-w-lg mx-auto">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-100 dark:bg-slate-800 text-science-600 dark:text-science-400 flex items-center justify-center text-4xl shadow-inner">
        <FlaskConical className="w-10 h-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
          Página não encontrada
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Esta reação química não produziu nenhum resultado! O link pode estar incorreto ou a página foi deslocada.
        </p>
      </div>
      <div className="flex justify-center gap-3 pt-2">
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-science-600 hover:bg-science-700 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
        <Link
          to="/conteudos"
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm flex items-center gap-2 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>Ver Conteúdos</span>
        </Link>
      </div>
    </div>
  );
};
