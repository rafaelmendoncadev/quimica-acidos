import { describe, it, expect } from 'vitest';
import { EXERCISE_BANK } from '../src/data/exercises/bank';
import { ALL_CHAPTERS } from '../src/data/chapters';

describe('Validação do Banco de Questões (Seção 46 e 48 do SPEC)', () => {
  
  it('deve conter no mínimo 100 questões no banco de dados', () => {
    expect(EXERCISE_BANK.length).toBeGreaterThanOrEqual(100);
  });

  it('deve respeitar a distribuição mínima de dificuldades (>=30 fáceis, >=50 médias, >=20 difíceis)', () => {
    const easyCount = EXERCISE_BANK.filter(e => e.difficulty === 'facil').length;
    const mediumCount = EXERCISE_BANK.filter(e => e.difficulty === 'medio').length;
    const hardCount = EXERCISE_BANK.filter(e => e.difficulty === 'dificil').length;

    expect(easyCount).toBeGreaterThanOrEqual(30);
    expect(mediumCount).toBeGreaterThanOrEqual(50);
    expect(hardCount).toBeGreaterThanOrEqual(20);
  });

  it('todas as questões devem possuir identificador único sem repetições', () => {
    const ids = new Set<string>();
    EXERCISE_BANK.forEach(ex => {
      expect(ids.has(ex.id)).toBe(false);
      ids.add(ex.id);
    });
  });

  it('todas as questões devem ter exatamente 5 alternativas (A, B, C, D, E) com gabarito válido (0 a 4)', () => {
    EXERCISE_BANK.forEach(ex => {
      expect(ex.options.length).toBe(5);
      expect(ex.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(ex.correctAnswerIndex).toBeLessThanOrEqual(4);
      expect(ex.options[ex.correctAnswerIndex].trim().length).toBeGreaterThan(0);
    });
  });

  it('todas as questões devem conter explicação pedagógica, Dica 1 e Dica 2 preenchidas', () => {
    EXERCISE_BANK.forEach(ex => {
      expect(ex.question.trim().length).toBeGreaterThan(10);
      expect(ex.explanation.trim().length).toBeGreaterThan(10);
      expect(ex.hint1.trim().length).toBeGreaterThan(5);
      expect(ex.hint2.trim().length).toBeGreaterThan(5);
      expect(ex.tags.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('todas as questões devem estar vinculadas a um capítulo existente (1 a 19)', () => {
    const validChapterIds = new Set(ALL_CHAPTERS.map(c => c.id));
    const validChapterSlugs = new Set(ALL_CHAPTERS.map(c => c.slug));

    EXERCISE_BANK.forEach(ex => {
      expect(validChapterIds.has(ex.chapterId)).toBe(true);
      expect(validChapterSlugs.has(ex.chapterSlug)).toBe(true);
    });
  });

});
