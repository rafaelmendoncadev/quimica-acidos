import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  ShieldCheck,
  Lock
} from 'lucide-react';
import { ALL_CHAPTERS } from '../data/chapters';
import { useProgress } from '../hooks/useProgress';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const Contents: React.FC = () => {
  const { progress } = useProgress();

  const completedCount = progress.studiedChapterSlugs.length;
  const progressPercent = Math.round((completedCount / ALL_CHAPTERS.length) * 100);

  const futureModules = [
    {
      title: 'Bases (Hidróxidos)',
      icon: '🧪',
      tag: 'Em breve',
      description: 'Conceito de dissociação iônica, classificação de bases fortes e fracas, solubilidade e nomenclatura oficial.',
      lessonsCount: 14,
    },
    {
      title: 'Sais Inorgânicos',
      icon: '🧂',
      tag: 'Em breve',
      description: 'Salificação, solubilidade, sais normais, ácidos e básicos, e reações de dupla troca.',
      lessonsCount: 16,
    },
    {
      title: 'Óxidos',
      icon: '🔥',
      tag: 'Em breve',
      description: 'Óxidos básicos, ácidos (anidridos), anfóteros, neutros e peróxidos.',
      lessonsCount: 12,
    },
    {
      title: 'Reações Inorgânicas & Balanceamento',
      icon: '⚗️',
      tag: 'Em breve',
      description: 'Síntese, análise, simples troca com fila de reatividade e dupla troca com condições de ocorrência.',
      lessonsCount: 18,
    },
    {
      title: 'Estequiometria & Soluções',
      icon: '⚖️',
      tag: 'Em breve',
      description: 'Cálculo estequiométrico com rendimento e pureza, molaridade, diluição e misturas.',
      lessonsCount: 20,
    }
  ];

  return (
    <div className="space-y-10 py-4">
      
      <Breadcrumbs items={[{ label: 'Conteúdos e Módulos' }]} />

      {/* Header do Hub de Conteúdos */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-science-600 dark:text-science-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> Grade Curricular do Ensino Médio
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Módulos de Química
        </h1>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Navegue pela sequência didática completa. O módulo de Ácidos está totalmente disponível com 19 capítulos interativos.
        </p>
      </div>

      {/* Módulo Principal Ativo: Ácidos */}
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-science-500/40 dark:border-science-600/40 shadow-xl space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-science-600 to-indigo-600 text-white flex items-center justify-center text-3xl shadow-lg shadow-science-500/20 shrink-0">
              🧪
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  Módulo Ativo
                </span>
                <span className="text-xs text-slate-500">19 Capítulos</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Ácidos Inorgânicos
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Teorias de Arrhenius, Brønsted e Lewis, nomenclatura, força, pH, neutralização e impactos ambientais.
              </p>
            </div>
          </div>

          {/* Barra de Progresso do Módulo */}
          <div className="min-w-[200px] p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              <span>Seu progresso</span>
              <span className="text-science-600 dark:text-science-400 font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-science-500 to-indigo-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
              {completedCount} de {ALL_CHAPTERS.length} capítulos concluídos
            </span>
          </div>
        </div>

        {/* Lista de Aulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_CHAPTERS.map((chap) => {
            const isStudied = progress.studiedChapterSlugs.includes(chap.slug);
            return (
              <Link
                key={chap.slug}
                to={`/quimica/acidos/${chap.slug}`}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-science-400 dark:hover:border-science-600 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-800/60 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-science-600 dark:text-science-400">
                      Capítulo {chap.id < 10 ? `0${chap.id}` : chap.id}
                    </span>
                    {isStudied ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5" /> {chap.estimatedMinutes} min
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-science-600 dark:group-hover:text-science-400 line-clamp-1">
                    {chap.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {chap.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-science-600 dark:text-science-400">
                  <span>Estudar aula</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      {/* Módulos Futuros (Em Breve) */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Próximos Módulos Curriculares
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            A arquitetura da plataforma foi desenvolvida de forma modular para acolher os próximos assuntos do Ensino Médio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureModules.map((mod, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/60 opacity-80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Lock className="w-3 h-3" /> {mod.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 text-xs text-slate-400">
                Previsto: {mod.lessonsCount} aulas didáticas
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
