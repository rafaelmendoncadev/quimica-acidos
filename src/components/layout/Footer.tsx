import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-10 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Coluna 1: Sobre */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-science-600 text-white flex items-center justify-center">
                <FlaskConical className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                Química Fácil — Ácidos
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Plataforma educacional gratuita e aberta voltada para estudantes do 2º ano do Ensino Médio, 
              estruturada com rigor científico, progressão pedagógica, exemplos cotidianos e tecnologia interativa.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Conteúdo alinhado às diretrizes de Química do Ensino Médio e ENEM.</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Módulo de Ácidos
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/quimica/acidos/o-que-sao-acidos" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">01. O que são ácidos?</Link></li>
              <li><Link to="/quimica/acidos/arrhenius" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">02. Teoria de Arrhenius</Link></li>
              <li><Link to="/quimica/acidos/ph" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">10. Conceito e Cálculo de pH</Link></li>
              <li><Link to="/quimica/acidos/neutralizacao" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">14. Neutralização total e parcial</Link></li>
              <li><Link to="/conteudos" className="text-science-600 dark:text-science-400 font-semibold hover:underline">Ver todos os 19 capítulos →</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Prática e Recursos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Recursos Interativos
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/exercicios" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">Banco de 100+ Exercícios</Link></li>
              <li><Link to="/glossario" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">Glossário Químico (30+ termos)</Link></li>
              <li><Link to="/progresso" className="hover:text-science-600 dark:hover:text-science-400 transition-colors">Meu Estudo e Estatísticas</Link></li>
              <li className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-medium pt-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simuladores de pH e Neutralização</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Química Fácil. Aprendizagem intuitiva de Ciências da Natureza.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com dedicação pedagógica para o Ensino Médio</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
