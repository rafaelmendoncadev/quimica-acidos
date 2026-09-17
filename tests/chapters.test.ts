import { describe, it, expect } from 'vitest';
import { ALL_CHAPTERS } from '../src/data/chapters';
import { SOLVED_EXERCISES } from '../src/data/exercises/solved';
import { GLOSSARY_TERMS } from '../src/data/glossary';

describe('Validação Pedagógica dos Capítulos, Exercícios Resolvidos e Glossário', () => {

  it('deve conter exatamente os 19 capítulos de Ácidos previstos no SPEC', () => {
    expect(ALL_CHAPTERS.length).toBe(19);
    for (let i = 1; i <= 19; i++) {
      const chap = ALL_CHAPTERS.find(c => c.id === i);
      expect(chap).toBeDefined();
    }
  });

  it('todos os capítulos devem conter objetivos, fórmulas, pegadinhas e resumos em 1 minuto', () => {
    ALL_CHAPTERS.forEach(chap => {
      expect(chap.learningGoals.length).toBeGreaterThanOrEqual(3);
      expect(chap.keyConcepts.length).toBeGreaterThanOrEqual(3);
      expect(chap.sections.length).toBeGreaterThanOrEqual(2);
      expect(chap.commonPitfalls.length).toBeGreaterThanOrEqual(1);
      expect(chap.didYouKnow.length).toBeGreaterThanOrEqual(1);
      expect(chap.oneMinuteSummary.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('deve conter pelo menos 30 exercícios resolvidos passo a passo', () => {
    expect(SOLVED_EXERCISES.length).toBeGreaterThanOrEqual(30);
    SOLVED_EXERCISES.forEach(solved => {
      expect(solved.steps.length).toBeGreaterThanOrEqual(2);
      expect(solved.finalAnswer.trim().length).toBeGreaterThan(5);
      expect(solved.explanation.trim().length).toBeGreaterThan(10);
    });
  });

  it('deve conter pelo menos 30 termos no glossário', () => {
    expect(GLOSSARY_TERMS.length).toBeGreaterThanOrEqual(30);
    GLOSSARY_TERMS.forEach(term => {
      expect(term.term.trim().length).toBeGreaterThan(0);
      expect(term.definition.trim().length).toBeGreaterThan(10);
    });
  });

});
