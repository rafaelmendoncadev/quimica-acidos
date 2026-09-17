import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

interface ChapterNavItem {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
}

export const CHAPTERS_LIST: ChapterNavItem[] = [
  { id: 1, slug: 'o-que-sao-acidos', title: '01. O que são ácidos?', shortTitle: 'O que são ácidos' },
  { id: 2, slug: 'arrhenius', title: '02. Teoria de Arrhenius', shortTitle: 'Arrhenius' },
  { id: 3, slug: 'bronsted-lowry', title: '03. Teoria de Brønsted-Lowry', shortTitle: 'Brønsted-Lowry' },
  { id: 4, slug: 'lewis', title: '04. Teoria de Lewis', shortTitle: 'Lewis' },
  { id: 5, slug: 'classificacao', title: '05. Classificação dos Ácidos', shortTitle: 'Classificação' },
  { id: 6, slug: 'hidrogenios-ionizaveis', title: '06. Hidrogênios Ionizáveis', shortTitle: 'H⁺ Ionizáveis' },
  { id: 7, slug: 'nomenclatura', title: '07. Nomenclatura dos Ácidos', shortTitle: 'Nomenclatura' },
  { id: 8, slug: 'forca-acidos', title: '08. Força dos Ácidos', shortTitle: 'Força dos Ácidos' },
  { id: 9, slug: 'grau-ionizacao', title: '09. Grau de Ionização (α)', shortTitle: 'Grau de Ionização' },
  { id: 10, slug: 'ph', title: '10. Conceito e Escala de pH', shortTitle: 'Conceito de pH' },
  { id: 11, slug: 'poh', title: '11. Escala de pOH e Relações', shortTitle: 'Escala de pOH' },
  { id: 12, slug: 'indicadores', title: '12. Indicadores Ácido-Base', shortTitle: 'Indicadores' },
  { id: 13, slug: 'reacoes', title: '13. Reações dos Ácidos', shortTitle: 'Reações dos Ácidos' },
  { id: 14, slug: 'neutralizacao', title: '14. Neutralização Total e Parcial', shortTitle: 'Neutralização' },
  { id: 15, slug: 'ka-pka', title: '15. Constantes Ka e pKa', shortTitle: 'Ka e pKa' },
  { id: 16, slug: 'acidos-poliproticos', title: '16. Ácidos Polipróticos', shortTitle: 'Polipróticos' },
  { id: 17, slug: 'cotidiano', title: '17. Ácidos no Cotidiano', shortTitle: 'No Cotidiano' },
  { id: 18, slug: 'chuva-acida', title: '18. Fenômeno da Chuva Ácida', shortTitle: 'Chuva Ácida' },
  { id: 19, slug: 'acidificacao-oceanos', title: '19. Acidificação dos Oceanos', shortTitle: 'Acidificação dos Oceanos' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { progress } = useProgress();

  const completedCount = progress.studiedChapterSlugs.length;
  const progressPercent = Math.round((completedCount / CHAPTERS_LIST.length) * 100);

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-4">
        
        {/* Module Header */}
        <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-science-600 dark:text-science-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Módulo 1
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
              {completedCount}/{CHAPTERS_LIST.length}
            </span>
          </div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
            Ácidos Inorgânicos
          </h3>
          
          {/* Progress bar */}
          <div className="mt-2.5">
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-science-500 to-indigo-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1">
              <span>Progresso geral</span>
              <span className="font-bold text-science-600 dark:text-science-400">{progressPercent}%</span>
            </div>
          </div>
        </div>

        {/* Chapters Navigation List */}
        <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
          {CHAPTERS_LIST.map((chapter) => {
            const path = `/quimica/acidos/${chapter.slug}`;
            const isActive = location.pathname === path;
            const isStudied = progress.studiedChapterSlugs.includes(chapter.slug);

            return (
              <Link
                key={chapter.slug}
                to={path}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-science-600 text-white font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  {isStudied ? (
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                  ) : (
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-white' : 'bg-slate-300 dark:bg-slate-700'}`} />
                  )}
                  <span className="truncate">{chapter.title}</span>
                </div>

                <ChevronRight className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''}`} />
              </Link>
            );
          })}
        </nav>

        {/* Link para simulados do módulo */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/exercicios"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-science-50 to-indigo-50 dark:from-science-950/40 dark:to-indigo-950/40 border border-science-200 dark:border-science-800/80 text-science-800 dark:text-science-300 text-xs font-bold hover:shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Banco de 100+ Exercícios</span>
          </Link>
        </div>

      </div>
    </aside>
  );
};
