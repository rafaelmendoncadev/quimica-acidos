import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getChapterBySlug, ALL_CHAPTERS } from '../data/chapters';
import { EXERCISE_BANK } from '../data/exercises/bank';
import { Sidebar } from '../components/layout/Sidebar';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { KatexMath } from '../components/common/KatexMath';
import { WarningBox } from '../components/common/WarningBox';
import { DidYouKnowBox } from '../components/common/DidYouKnowBox';
import { SummaryBox } from '../components/common/SummaryBox';
import { SolvedExerciseCard } from '../components/exercises/SolvedExerciseCard';
import { ExerciseCard } from '../components/exercises/ExerciseCard';
import { QuizSession } from '../components/exercises/QuizSession';
import { PhScaleVisualizer } from '../components/interactive/PhScaleVisualizer';
import { NeutralizationCalc } from '../components/interactive/NeutralizationCalc';
import { useProgress } from '../hooks/useProgress';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Target, 
  Sparkles, 
  PenTool, 
  Award,
  Layers
} from 'lucide-react';

export const ChapterView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { progress, markChapterAsStudied, recordExerciseAnswer, recordQuizAttempt } = useProgress();
  
  const [activeTab, setActiveTab] = useState<'teoria' | 'exercicios' | 'quiz'>('teoria');

  const chapter = getChapterBySlug(slug || '');

  // Exercícios específicos deste capítulo
  const chapterExercises = chapter 
    ? EXERCISE_BANK.filter(ex => ex.chapterSlug === chapter.slug || ex.chapterId === chapter.id)
    : [];

  // Marcar aula como estudada ao carregar e rolar para o topo
  useEffect(() => {
    if (chapter) {
      window.scrollTo(0, 0);
      markChapterAsStudied(chapter.slug);
    }
  }, [chapter?.slug, markChapterAsStudied]);

  if (!chapter) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Capítulo não encontrado</h2>
        <p className="text-sm text-slate-500">O capítulo solicitado não existe ou foi movido.</p>
        <Link to="/conteudos" className="inline-block px-5 py-2.5 rounded-xl bg-science-600 text-white font-bold text-sm">
          Ver todos os capítulos
        </Link>
      </div>
    );
  }

  const isStudied = progress.studiedChapterSlugs.includes(chapter.slug);

  return (
    <div className="py-4 space-y-6">
      
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs 
        items={[
          { label: 'Conteúdos', to: '/conteudos' },
          { label: 'Ácidos', to: '/conteudos' },
          { label: chapter.title }
        ]} 
      />

      {/* Layout com Sidebar e Área Principal */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar Fixa à Esquerda (Desktop) */}
        <Sidebar />

        {/* Conteúdo Central da Aula */}
        <main className="flex-1 w-full min-w-0 space-y-8">
          
          {/* Header do Capítulo */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-science-100 text-science-800 dark:bg-science-950 dark:text-science-300">
                Capítulo {chapter.id < 10 ? `0${chapter.id}` : chapter.id} de 19
              </span>

              {isStudied && (
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  Aula Concluída (+15 XP)
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {chapter.title}
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {chapter.subtitle}
            </p>

            {/* Objetivos Pedagógicos */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <Target className="w-4 h-4 text-science-600" />
                <span>Objetivos de Aprendizagem:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                {chapter.learningGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-science-500 font-bold">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Abas Internas da Aula */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('teoria')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'teoria'
                    ? 'bg-science-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Teoria & Exemplos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('exercicios')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'exercicios'
                    ? 'bg-science-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <PenTool className="w-4 h-4" />
                <span>Exercícios ({chapterExercises.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'quiz'
                    ? 'bg-science-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Quiz do Capítulo</span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ABA 1: TEORIA & EXEMPLOS                                   */}
          {/* ========================================================= */}
          {activeTab === 'teoria' && (
            <div className="space-y-8">
              
              {/* Seções de Texto Teórico */}
              {chapter.sections.map((sec) => (
                <div key={sec.id} className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                    {sec.title}
                  </h3>
                  <div className="text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-3 whitespace-pre-line font-normal">
                    {sec.content}
                  </div>
                  {sec.latexSnippet && (
                    <KatexMath math={sec.latexSnippet} block={true} />
                  )}
                </div>
              ))}

              {/* Fórmulas Químicas do Capítulo */}
              {chapter.formulas.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>📐</span> Fórmulas Químicas Essenciais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {chapter.formulas.map((form, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                        <span className="text-xs font-bold uppercase text-science-600 dark:text-science-400 block">
                          {form.title}
                        </span>
                        <KatexMath math={form.latex} block={true} />
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {form.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inserção de Widgets Interativos Dedicados */}
              {(chapter.slug === 'ph' || chapter.slug === 'poh' || chapter.slug === 'indicadores') && (
                <PhScaleVisualizer />
              )}

              {(chapter.slug === 'neutralizacao' || chapter.slug === 'reacoes') && (
                <NeutralizationCalc />
              )}

              {/* Exemplos Práticos do Cotidiano */}
              {chapter.practicalExamples.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>🧪</span> Exemplos e Aplicações Práticas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {chapter.practicalExamples.map((ex, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{ex.title}</h4>
                          {ex.category && (
                            <span className="text-[10px] uppercase font-bold text-science-600 dark:text-science-400 bg-science-50 dark:bg-science-950 px-2 py-0.5 rounded-full">
                              {ex.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {ex.description}
                        </p>
                        {ex.formula && (
                          <KatexMath math={ex.formula} className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Caixas de Pegadinha (Seção 26 do spec) */}
              {chapter.commonPitfalls.map((p, i) => (
                <WarningBox key={i} title={p.title} warning={p.warning} explanation={p.explanation} />
              ))}

              {/* Caixas de "Você Sabia?" (Seção 25 do spec) */}
              {chapter.didYouKnow.map((item, i) => (
                <DidYouKnowBox key={i} title={item.title} text={item.text} />
              ))}

              {/* Exercício Resolvido Passo a Passo (Seção 8 do spec) */}
              {chapter.solvedExercises.map((solved) => (
                <SolvedExerciseCard key={solved.id} exercise={solved} />
              ))}

              {/* Resumo em 1 Minuto (Seção 27 do spec) */}
              <SummaryBox points={chapter.oneMinuteSummary} />

              {/* Botão de Próxima Etapa */}
              <div className="p-6 rounded-2xl bg-science-50 dark:bg-science-950/40 border border-science-200 dark:border-science-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-science-900 dark:text-science-200">
                    Fixe o conteúdo na prática!
                  </h4>
                  <p className="text-xs text-science-700 dark:text-science-400">
                    Resolva os exercícios propostos com dicas ou teste sua retenção no Quiz.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('exercicios')}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-science-600 hover:bg-science-700 text-white flex items-center gap-2 shadow-md transition-all shrink-0"
                >
                  <span>Ir para Exercícios Propostos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* ABA 2: EXERCÍCIOS PROPOSTOS COM DICAS                      */}
          {/* ========================================================= */}
          {activeTab === 'exercicios' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-science-600" />
                  Exercícios Propostos: {chapter.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Modo Prática ativo: responda com calma. Caso erre, o sistema fornecerá a <strong>Dica 1</strong> e depois a <strong>Dica 2</strong> antes de revelar a resolução passo a passo.
                </p>
              </div>

              {chapterExercises.length > 0 ? (
                chapterExercises.map((ex) => (
                  <ExerciseCard
                    key={ex.id}
                    exercise={ex}
                    mode="practice"
                    onAnswer={(id, optIdx, isCorr, usedH) => recordExerciseAnswer(id, optIdx, isCorr, usedH)}
                  />
                ))
              ) : (
                <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
                  Nenhum exercício cadastrado especificamente para este capítulo.
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* ABA 3: QUIZ DO CAPÍTULO                                    */}
          {/* ========================================================= */}
          {activeTab === 'quiz' && (
            <QuizSession
              chapterSlug={chapter.slug}
              chapterTitle={chapter.title}
              exercises={chapterExercises}
              onCompleteQuiz={(attempt) => recordQuizAttempt(attempt)}
            />
          )}

          {/* Navegação Inferior: Aula Anterior / Próxima Aula */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            {chapter.prevChapterSlug ? (
              <Link
                to={`/quimica/acidos/${chapter.prevChapterSlug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Capítulo Anterior</span>
              </Link>
            ) : <div />}

            <Link
              to="/conteudos"
              className="text-xs font-bold text-slate-500 hover:text-science-600 dark:hover:text-science-400 flex items-center gap-1"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Todos</span>
            </Link>

            {chapter.nextChapterSlug ? (
              <Link
                to={`/quimica/acidos/${chapter.nextChapterSlug}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-science-600 hover:bg-science-700 text-white text-xs md:text-sm font-bold shadow-md transition-all"
              >
                <span>Próximo Capítulo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to="/progresso"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-bold shadow-md transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Ver Meu Estudo</span>
              </Link>
            )}
          </div>

        </main>

      </div>

    </div>
  );
};
