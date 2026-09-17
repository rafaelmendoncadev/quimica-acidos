import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EXERCISE_BANK } from '../data/exercises/bank';
import { CHAPTERS_LIST } from '../components/layout/Sidebar';
import { ExerciseCard } from '../components/exercises/ExerciseCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { useProgress } from '../hooks/useProgress';
import { Difficulty, Exercise } from '../types/chemistry';
import { 
  PenTool, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Sparkles,
  RotateCcw,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const ExercisesHub: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progress, recordExerciseAnswer } = useProgress();

  const initialSearch = searchParams.get('search') || '';

  // Filtros
  const [query, setQuery] = useState(initialSearch);
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unanswered' | 'correct' | 'wrong'>('all');
  const [exerciseMode, setExerciseMode] = useState<'practice' | 'simulated'>('practice');

  // Modo Simulado: respostas submetidas
  const [simulatedAnswers, setSimulatedAnswers] = useState<Record<string, number>>({});
  const [simulatedSubmitted, setSimulatedSubmitted] = useState<boolean>(false);

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtragem
  const filteredExercises = useMemo(() => {
    return EXERCISE_BANK.filter(ex => {
      // Busca texto
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchId = ex.id.toLowerCase().includes(q);
        const matchQuestion = ex.question.toLowerCase().includes(q);
        const matchTags = ex.tags.some(t => t.toLowerCase().includes(q));
        if (!matchId && !matchQuestion && !matchTags) return false;
      }

      // Capítulo
      if (selectedChapterId !== 'all' && ex.chapterId !== selectedChapterId) {
        return false;
      }

      // Dificuldade
      if (selectedDifficulty !== 'all' && ex.difficulty !== selectedDifficulty) {
        return false;
      }

      // Status do aluno no progresso
      const attempt = progress.exerciseAttempts[ex.id];
      if (selectedStatus === 'unanswered' && attempt) return false;
      if (selectedStatus === 'correct' && (!attempt || !attempt.isCorrect)) return false;
      if (selectedStatus === 'wrong' && (!attempt || attempt.isCorrect)) return false;

      return true;
    });
  }, [query, selectedChapterId, selectedDifficulty, selectedStatus, progress.exerciseAttempts]);

  // Total de páginas
  const totalPages = Math.ceil(filteredExercises.length / itemsPerPage) || 1;
  const paginatedExercises = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredExercises.slice(start, start + itemsPerPage);
  }, [filteredExercises, currentPage]);

  const resetFilters = () => {
    setQuery('');
    setSelectedChapterId('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
    setCurrentPage(1);
  };

  const handleSimulatedSubmit = () => {
    setSimulatedSubmitted(true);
    // Registrar todas no progresso
    paginatedExercises.forEach(ex => {
      const selected = simulatedAnswers[ex.id];
      if (selected !== undefined) {
        recordExerciseAnswer(ex.id, selected, selected === ex.correctAnswerIndex, false);
      }
    });
  };

  const simulatedScore = useMemo(() => {
    if (!simulatedSubmitted) return null;
    let correct = 0;
    paginatedExercises.forEach(ex => {
      if (simulatedAnswers[ex.id] === ex.correctAnswerIndex) {
        correct++;
      }
    });
    return {
      correct,
      total: paginatedExercises.length,
      percent: Math.round((correct / paginatedExercises.length) * 100),
    };
  }, [simulatedSubmitted, paginatedExercises, simulatedAnswers]);

  return (
    <div className="space-y-8 py-4">
      
      <Breadcrumbs items={[{ label: 'Banco de Exercícios' }]} />

      {/* Header do Hub */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-science-600 text-white shadow-md">
              <PenTool className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Banco de Exercícios ({EXERCISE_BANK.length} Questões)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Filtre por assunto, dificuldade e status para praticar no seu ritmo ou simular condições de prova.
          </p>
        </div>

        {/* Seletor de Modo: Estudo vs Simulado */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 self-start md:self-auto">
          <button
            type="button"
            onClick={() => {
              setExerciseMode('practice');
              setSimulatedSubmitted(false);
              setSimulatedAnswers({});
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              exerciseMode === 'practice'
                ? 'bg-white dark:bg-slate-900 text-science-600 dark:text-science-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modo Estudo (com dicas)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setExerciseMode('simulated');
              setSimulatedSubmitted(false);
              setSimulatedAnswers({});
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              exerciseMode === 'simulated'
                ? 'bg-science-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Modo Simulado Rigoroso</span>
          </button>
        </div>
      </div>

      {/* Painel Multifacetado de Filtros */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Filter className="w-4 h-4" /> Filtros e Busca Rápida
          </span>
          <button
            type="button"
            onClick={resetFilters}
            className="text-xs font-semibold text-science-600 dark:text-science-400 hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Limpar filtros
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Campo de Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar por termo ou #tag..."
              className="w-full pl-9 pr-3 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-science-500"
            />
          </div>

          {/* Filtro por Capítulo */}
          <div>
            <select
              value={selectedChapterId}
              onChange={(e) => {
                setSelectedChapterId(e.target.value === 'all' ? 'all' : Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
            >
              <option value="all">Todos os 19 Capítulos</option>
              {CHAPTERS_LIST.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          {/* Filtro por Dificuldade */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value as any);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
            >
              <option value="all">Todas as Dificuldades</option>
              <option value="facil">🟢 Fácil (Básico)</option>
              <option value="medio">🟡 Médio (Intermediário)</option>
              <option value="dificil">🔴 Difícil (Avançado)</option>
            </select>
          </div>

          {/* Filtro por Status do Aluno */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value as any);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
            >
              <option value="all">Todos os Status</option>
              <option value="unanswered">⚪ Não respondidos</option>
              <option value="correct">🟢 Acertados</option>
              <option value="wrong">🔴 Precisa revisar (Errados)</option>
            </select>
          </div>

        </div>

        {/* Resumo da Contagem */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span>
            Mostrando <strong>{paginatedExercises.length}</strong> de <strong>{filteredExercises.length}</strong> exercícios encontrados
          </span>
          <span className="font-mono">
            Página {currentPage} de {totalPages}
          </span>
        </div>
      </div>

      {/* Resultado no Modo Simulado */}
      {exerciseMode === 'simulated' && simulatedSubmitted && simulatedScore && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-science-50 dark:from-indigo-950/40 dark:to-science-950/40 border border-indigo-200 dark:border-indigo-800 text-center space-y-3">
          <div className="text-3xl">📊</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Resultado do Bloco Simulado
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Você acertou <strong className="text-science-600 dark:text-science-400 font-mono">{simulatedScore.correct} de {simulatedScore.total}</strong> questões ({simulatedScore.percent}%).
          </p>
          <div className="text-xs text-slate-500">
            O gabarito comentado e a resolução passo a passo de cada questão foram liberados nos cartões abaixo.
          </div>
        </div>
      )}

      {/* Lista de Questões */}
      <div className="space-y-6">
        {paginatedExercises.length > 0 ? (
          paginatedExercises.map((ex, index) => (
            <div key={ex.id} className="relative">
              <div className="text-xs font-bold text-slate-400 mb-1">
                Item #{(currentPage - 1) * itemsPerPage + index + 1} de {filteredExercises.length}
              </div>
              <ExerciseCard
                exercise={ex}
                mode={exerciseMode}
                showSimulatedResult={exerciseMode === 'simulated' && simulatedSubmitted}
                onAnswer={(id, optIdx, isCorr, usedH) => {
                  if (exerciseMode === 'simulated') {
                    setSimulatedAnswers(prev => ({ ...prev, [id]: optIdx }));
                  } else {
                    recordExerciseAnswer(id, optIdx, isCorr, usedH);
                  }
                }}
              />
            </div>
          ))
        ) : (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 space-y-3">
            <HelpCircle className="w-8 h-8 mx-auto text-slate-400" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Nenhum exercício encontrado</h4>
            <p className="text-xs text-slate-500">Tente ajustar ou limpar os filtros de busca para visualizar mais questões.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-science-600 text-white"
            >
              Resetar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Botão de Envio no Modo Simulado */}
      {exerciseMode === 'simulated' && !simulatedSubmitted && paginatedExercises.length > 0 && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={handleSimulatedSubmit}
            className="px-8 py-3 rounded-xl font-black text-sm bg-gradient-to-r from-science-600 to-indigo-600 hover:from-science-700 hover:to-indigo-700 text-white shadow-lg flex items-center gap-2"
          >
            <span>Finalizar Bloco e Corrigir</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(prev => Math.max(prev - 1, 1));
              window.scrollTo(0, 0);
            }}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 px-3">
            Página {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage(prev => Math.min(prev + 1, totalPages));
              window.scrollTo(0, 0);
            }}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
};
