export type Difficulty = 'facil' | 'medio' | 'dificil';

export type ExerciseType = 
  | 'multipla_escolha'
  | 'verdadeiro_falso'
  | 'calculo'
  | 'interpretacao'
  | 'balanceamento';

export interface SolvedExerciseStep {
  stepNumber: number;
  title: string;
  detail: string;
  mathLatex?: string;
}

export interface SolvedExercise {
  id: string;
  title: string;
  question: string;
  givenData: string[];
  steps: SolvedExerciseStep[];
  finalAnswer: string;
  explanation: string;
}

export interface FormulaItem {
  title: string;
  latex: string;
  explanation: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string; // Markdown / text formatted
  latexSnippet?: string;
}

export interface PracticalExample {
  title: string;
  description: string;
  formula?: string;
  category?: string;
}

export interface CommonPitfall {
  title: string;
  warning: string;
  explanation: string;
}

export interface DidYouKnowItem {
  title: string;
  text: string;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  learningGoals: string[];
  keyConcepts: string[];
  formulas: FormulaItem[];
  sections: ContentSection[];
  practicalExamples: PracticalExample[];
  commonPitfalls: CommonPitfall[];
  didYouKnow: DidYouKnowItem[];
  oneMinuteSummary: string[];
  solvedExercises: SolvedExercise[];
  prevChapterSlug?: string;
  nextChapterSlug?: string;
}

export interface Exercise {
  id: string;
  module: 'acidos';
  chapterId: number;
  chapterSlug: string;
  difficulty: Difficulty;
  type: ExerciseType;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
  explanation: string;
  hint1: string;
  hint2: string;
  tags: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'Teoria' | 'Classificação' | 'Propriedades' | 'Reações' | 'Ambiente';
  formula?: string;
  example?: string;
  relatedChapterSlug?: string;
}
