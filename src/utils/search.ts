import { ALL_CHAPTERS } from '../data/chapters';
import { EXERCISE_BANK } from '../data/exercises/bank';
import { GLOSSARY_TERMS } from '../data/glossary';

export interface SearchResultItem {
  id: string;
  type: 'capitulo' | 'exercicio' | 'glossario';
  title: string;
  description: string;
  url: string;
  badgeText: string;
}

export function searchGlobal(query: string): SearchResultItem[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery || cleanQuery.length < 2) return [];

  const results: SearchResultItem[] = [];

  // Buscar em capítulos
  ALL_CHAPTERS.forEach(chap => {
    const matchTitle = chap.title.toLowerCase().includes(cleanQuery);
    const matchSubtitle = chap.subtitle.toLowerCase().includes(cleanQuery);
    const matchConcepts = chap.keyConcepts.some(k => k.toLowerCase().includes(cleanQuery));
    const matchSections = chap.sections.some(s => s.content.toLowerCase().includes(cleanQuery));

    if (matchTitle || matchSubtitle || matchConcepts || matchSections) {
      results.push({
        id: `chap-${chap.slug}`,
        type: 'capitulo',
        title: chap.title,
        description: chap.subtitle,
        url: `/quimica/acidos/${chap.slug}`,
        badgeText: 'Capítulo Teórico',
      });
    }
  });

  // Buscar em termos do glossário
  GLOSSARY_TERMS.forEach(term => {
    const matchTerm = term.term.toLowerCase().includes(cleanQuery);
    const matchDef = term.definition.toLowerCase().includes(cleanQuery);

    if (matchTerm || matchDef) {
      results.push({
        id: `gloss-${term.id}`,
        type: 'glossario',
        title: term.term,
        description: term.definition,
        url: `/glossario?term=${encodeURIComponent(term.term)}`,
        badgeText: `Glossário • ${term.category}`,
      });
    }
  });

  // Buscar no banco de questões
  EXERCISE_BANK.forEach(ex => {
    const matchQuestion = ex.question.toLowerCase().includes(cleanQuery);
    const matchExplanation = ex.explanation.toLowerCase().includes(cleanQuery);
    const matchTags = ex.tags.some(t => t.toLowerCase().includes(cleanQuery));

    if (matchQuestion || matchExplanation || matchTags) {
      results.push({
        id: `ex-${ex.id}`,
        type: 'exercicio',
        title: `Exercício #${ex.id.toUpperCase()} (${ex.difficulty})`,
        description: ex.question.slice(0, 120) + '...',
        url: `/exercicios?search=${encodeURIComponent(ex.id)}`,
        badgeText: `Questão • ${ex.difficulty}`,
      });
    }
  });

  return results.slice(0, 20); // Limitar a 20 resultados mais relevantes
}
