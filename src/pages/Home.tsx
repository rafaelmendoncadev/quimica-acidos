import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FlaskConical, 
  BookOpen, 
  PenTool, 
  TrendingUp, 
  ArrowRight, 
  Search, 
  CheckCircle, 
  Sparkles,
  Award,
  Zap,
  HelpCircle
} from 'lucide-react';
import { searchGlobal, SearchResultItem } from '../utils/search';
import { CHAPTERS_LIST } from '../components/layout/Sidebar';
import { useProgress } from '../hooks/useProgress';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const { progress } = useProgress();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const res = searchGlobal(searchQuery);
      setSearchResults(res);
    }
  };

  const completedCount = progress.studiedChapterSlugs.length;

  return (
    <div className="space-y-16 py-6">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-science-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-science-800/40">
        
        {/* Glow decorativo de fundo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-science-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-science-500/20 border border-science-400/30 text-science-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            2º Ano do Ensino Médio • Módulo 1 Completo
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Aprenda Química de um jeito <span className="bg-gradient-to-r from-science-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">simples e intuitivo</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Teoria clara e descomplicada, fórmulas químicas renderizadas, simuladores de pH interativos e mais de 100 exercícios comentados passo a passo para você dominar tudo sobre <strong className="text-white">Ácidos</strong>.
          </p>

          {/* Barra de Busca Global */}
          <form onSubmit={handleSearch} className="relative max-w-xl pt-2">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchResults(searchGlobal(e.target.value));
                }}
                placeholder="Busque por assunto, fórmula ou termo (ex: pH, Arrhenius, sulfúrico)..."
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-science-400 transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 rounded-xl bg-science-500 hover:bg-science-600 text-white text-xs font-bold shadow-md transition-all"
              >
                Buscar
              </button>
            </div>

            {/* Dropdown de Resultados da Busca */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
                <div className="text-xs font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                  Resultados encontrados ({searchResults.length}):
                </div>
                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                    className="flex flex-col p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">{item.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-science-100 text-science-800 dark:bg-science-950 dark:text-science-300 font-semibold">
                        {item.badgeText}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </form>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/quimica/acidos/o-que-sao-acidos"
              className="px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-science-500 to-indigo-600 hover:from-science-600 hover:to-indigo-700 text-white shadow-lg shadow-science-500/25 flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <span>Começar a Estudar</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/exercicios"
              className="px-6 py-4 rounded-2xl font-bold text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm flex items-center gap-2 transition-all"
            >
              <PenTool className="w-4 h-4 text-science-300" />
              <span>Praticar Exercícios</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Cards Principais da Metodologia Pedagógica */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-science-100 dark:bg-science-950/60 text-science-600 dark:text-science-400 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">19 Aulas Didáticas</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Progressão conceitual rigorosa para o Ensino Médio, do conceito de Arrhenius até a acidificação dos oceanos.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Exercícios Resolvidos</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Mais de 30 questões solucionadas passo a passo, detalhando a lógica de cálculo e por que aquela é a resposta.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
            <PenTool className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">100+ Questões com Dicas</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Treine com dicas progressivas antes de ver a resposta e simule provas com cronômetro no Modo Rigoroso.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Progresso & Conquistas</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Acompanhe sua taxa de acertos, acumule pontos de experiência (XP) e desbloqueie medalhas sem ranking invasivo.
          </p>
        </div>

      </section>

      {/* Módulo Inicial em Destaque: Ácidos */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-science-600 dark:text-science-400">
              Módulo Ativo • 2º Ano EM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              🧪 Módulo 1: Ácidos Inorgânicos
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Aprenda todo o conteúdo de ácidos com explicações simples, exemplos práticos e simuladores de pH.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500">
              Concluídos: <strong className="text-science-600 dark:text-science-400">{completedCount} de 19</strong>
            </span>
            <Link
              to="/conteudos"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-science-50 hover:bg-science-100 dark:bg-science-950 dark:hover:bg-science-900 text-science-700 dark:text-science-300 border border-science-200 dark:border-science-800 transition-all"
            >
              Ver Grade Completa →
            </Link>
          </div>
        </div>

        {/* Grade com os 19 Capítulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6">
          {CHAPTERS_LIST.map((chap) => {
            const isStudied = progress.studiedChapterSlugs.includes(chap.slug);
            return (
              <Link
                key={chap.slug}
                to={`/quimica/acidos/${chap.slug}`}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-science-400 dark:hover:border-science-600 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-800 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3 truncate">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isStudied 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                  }`}>
                    {chap.id < 10 ? `0${chap.id}` : chap.id}
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-science-600 dark:group-hover:text-science-400 truncate">
                    {chap.shortTitle}
                  </span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-science-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            );
          })}
        </div>

      </section>

      {/* Seção Prática Rápida: Chamada de Ação Final */}
      <section className="rounded-3xl bg-gradient-to-r from-science-600 to-indigo-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-black">
          Preparado para gabaritar suas provas de Química?
        </h2>
        <p className="text-science-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Estude no seu próprio ritmo, faça anotações, teste simuladores visuais de bancada e monitore sua evolução no painel.
        </p>
        <div className="pt-2 flex justify-center gap-4 flex-wrap">
          <Link
            to="/quimica/acidos/o-que-sao-acidos"
            className="px-8 py-3.5 rounded-xl font-black text-sm bg-white text-science-800 hover:bg-slate-100 shadow-md hover:scale-105 transition-all"
          >
            Começar Aula 01 Agora
          </Link>
          <Link
            to="/exercicios"
            className="px-8 py-3.5 rounded-xl font-bold text-sm bg-science-700/60 hover:bg-science-700 border border-white/20 text-white backdrop-blur-sm transition-all"
          >
            Fazer Simulado Rápido
          </Link>
        </div>
      </section>

    </div>
  );
};
