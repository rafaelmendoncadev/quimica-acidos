import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { ALL_CHAPTERS, getChapterBySlug } from '../data/chapters';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { 
  BarChart2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Flame, 
  Award, 
  BookOpen, 
  RotateCcw, 
  ArrowRight,
  TrendingUp,
  Target
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { 
    progress, 
    totalStudiedChapters, 
    totalAnswered, 
    totalCorrect, 
    totalWrong, 
    accuracyPercentage,
    unlockedBadges,
    allBadges 
  } = useProgress();

  const totalChapters = ALL_CHAPTERS.length;
  const progressPercent = Math.round((totalStudiedChapters / totalChapters) * 100);

  const lastChapter = progress.lastStudiedChapterSlug 
    ? getChapterBySlug(progress.lastStudiedChapterSlug) 
    : ALL_CHAPTERS[0];

  // Capítulos recomendados para revisão rápida (onde o aluno errou exercícios recentemente)
  const chaptersWithErrors = React.useMemo(() => {
    const errorChapSlugs = new Set<string>();
    Object.values(progress.exerciseAttempts).forEach(att => {
      if (!att.isCorrect) {
        // Encontrar capítulo do exercício
        errorChapSlugs.add(att.exerciseId);
      }
    });

    // Buscar capítulos correspondentes
    return ALL_CHAPTERS.filter(c => progress.studiedChapterSlugs.includes(c.slug)).slice(0, 4);
  }, [progress.exerciseAttempts, progress.studiedChapterSlugs]);

  return (
    <div className="space-y-8 py-4">
      
      <Breadcrumbs items={[{ label: 'Meu Estudo' }]} />

      {/* Header do Painel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-science-600 dark:text-science-400 flex items-center gap-1.5">
            <BarChart2 className="w-4 h-4" /> Desempenho e Evolução
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            Meu Painel de Estudos
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Acompanhe seu progresso nos 19 capítulos de Ácidos, suas taxas de acerto e conquistas desbloqueadas.
          </p>
        </div>

        {/* Card de XP e Streak */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-black text-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{progress.xp} XP</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-200 font-black text-sm shadow-sm">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{progress.studyStreakDays} dias seguidos</span>
          </div>
        </div>
      </div>

      {/* Grid de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Progresso do Módulo */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Módulo Ácidos</span>
            <BookOpen className="w-4 h-4 text-science-600" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
            {progressPercent}%
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-science-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs text-slate-500 block">
            {totalStudiedChapters} de {totalChapters} capítulos estudados
          </span>
        </div>

        {/* Exercícios Resolvidos */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Questões Feitas</span>
            <Target className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
            {totalAnswered}
          </div>
          <div className="flex items-center gap-3 text-xs pt-1">
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {totalCorrect} acertos
            </span>
            <span className="text-rose-600 font-bold flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" /> {totalWrong} erros
            </span>
          </div>
        </div>

        {/* Taxa de Aproveitamento */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Aproveitamento</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {accuracyPercentage}%
          </div>
          <span className="text-xs text-slate-500 block">
            {totalAnswered > 0 ? 'Média geral de precisão' : 'Resolva exercícios para calcular'}
          </span>
        </div>

        {/* Quizzes Realizados */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Quizzes Finalizados</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
            {progress.quizAttempts.length}
          </div>
          <span className="text-xs text-slate-500 block">
            Avaliações de fixação de capítulo
          </span>
        </div>

      </div>

      {/* Banner de Continuidade de Estudo */}
      {lastChapter && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-science-600 to-indigo-700 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-science-200">
              Continuar de Onde Parou
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              {lastChapter.title}
            </h3>
            <p className="text-xs sm:text-sm text-science-100 max-w-lg">
              {lastChapter.subtitle}
            </p>
          </div>

          <Link
            to={`/quimica/acidos/${lastChapter.slug}`}
            className="px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm bg-white text-science-900 hover:bg-slate-100 shadow-md hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Retomar Aula</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Modo Revisão Rápida (Seção 29 do spec) */}
      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              <RotateCcw className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Modo Revisão Rápida
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Conteúdos priorizados com base no seu histórico recente de estudo.
              </p>
            </div>
          </div>
          <Link
            to="/exercicios?status=wrong"
            className="text-xs font-bold text-science-600 dark:text-science-400 hover:underline"
          >
            Treinar Questões Erradas →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {chaptersWithErrors.map((c) => (
            <Link
              key={c.slug}
              to={`/quimica/acidos/${c.slug}`}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 hover:bg-white dark:hover:bg-slate-800 transition-all space-y-2 group"
            >
              <div className="text-xs font-mono font-bold text-science-600 dark:text-science-400">
                Capítulo {c.id < 10 ? `0${c.id}` : c.id}
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-science-600 transition-colors line-clamp-1">
                {c.title.replace(/^\d+\.\s*/, '')}
              </h4>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block line-clamp-1">
                {c.subtitle}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Gamificação Moderada: Medalhas e Conquistas (Seção 30 do spec) */}
      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🏆</span> Conquistas & Medalhas ({unlockedBadges.length} de {allBadges.length})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Metas de estudo alcançadas sem ranking público.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {allBadges.map((badge) => {
            const isUnlocked = progress.unlockedBadgeIds.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${
                  isUnlocked
                    ? 'border-amber-300 dark:border-amber-800/80 bg-amber-50/40 dark:bg-amber-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 opacity-50 grayscale'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {badge.title}
                    </h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
