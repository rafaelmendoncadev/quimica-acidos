import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { GLOSSARY_TERMS } from '../data/glossary';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { KatexMath } from '../components/common/KatexMath';
import { BookA, Search, Tag, ArrowRight, ExternalLink } from 'lucide-react';

export const Glossary: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTerm = searchParams.get('term') || '';

  const [search, setSearch] = useState(initialTerm);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const set = new Set(GLOSSARY_TERMS.map(t => t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(t => {
      const matchSearch = 
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase()) ||
        (t.example && t.example.toLowerCase().includes(search.toLowerCase()));

      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;

      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  return (
    <div className="space-y-8 py-4">
      
      <Breadcrumbs items={[{ label: 'Glossário Químico' }]} />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-indigo-600 text-white shadow-md">
            <BookA className="w-5 h-5" />
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">
            Glossário de Química ({GLOSSARY_TERMS.length} Termos)
          </h1>
        </div>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Dicionário terminológico completo para consulta rápida de conceitos, definições e fórmulas fundamentais do Ensino Médio.
        </p>
      </div>

      {/* Barra de Filtros */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise por termo químico ou palavra-chave (ex: Ka, hidrônio, Arrhenius)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-science-500"
            />
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
            >
              <option value="all">Todas as Categorias</option>
              {categories.filter(c => c !== 'all').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

        </div>

        <div className="text-xs text-slate-400">
          Encontrados <strong>{filteredTerms.length}</strong> termos correspondentes.
        </div>
      </div>

      {/* Grade de Termos do Glossário */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTerms.map((item) => (
          <div 
            key={item.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {item.category}
                </span>
                {item.relatedChapterSlug && (
                  <Link
                    to={`/quimica/acidos/${item.relatedChapterSlug}`}
                    className="text-xs font-semibold text-science-600 dark:text-science-400 hover:underline flex items-center gap-1"
                  >
                    <span>Ver na aula</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {item.term}
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {item.definition}
              </p>

              {item.formula && (
                <div className="pt-1">
                  <KatexMath math={item.formula} block={true} />
                </div>
              )}

              {item.example && (
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl">
                  <strong>Exemplo:</strong> {item.example}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
