import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH06_HIDROGENIOS_IONIZAVEIS: Chapter = {
  id: 6,
  slug: 'hidrogenios-ionizaveis',
  title: '06. Número de Hidrogênios Ionizáveis',
  subtitle: 'Monoácidos, diácidos, triácidos, tetrácidos e as pegadinhas dos ácidos de fósforo',
  description: 'Entenda por que a contagem de letras "H" na fórmula química não é garantia de ionização e domine as exceções clássicas do ENEM e vestibulares.',
  estimatedMinutes: 16,
  learningGoals: [
    'Classificar ácidos de acordo com o número de prótons liberados na ionização',
    'Compreender o requisito químico para que um hidrogênio seja ionizável',
    'Explicar por que o H₃PO₃ é diácido e o H₃PO₂ é monoácido',
    'Reconhecer o comportamento de ácidos orgânicos como o ácido acético'
  ],
  keyConcepts: [
    'Monoácido (1 H⁺ ionizável)',
    'Diácido (2 H⁺ ionizáveis)',
    'Triácido (3 H⁺ ionizáveis)',
    'Tetrácido (4 H⁺ ionizáveis)',
    'Polaridade da ligação e átomos eletronegativos'
  ],
  formulas: [
    {
      title: 'Classificação por prótons liberados',
      latex: '\\text{Monoácido: } HCl \\rightarrow 1\\,H^+ \\quad | \\quad \\text{Diácido: } H_2SO_4 \\rightarrow 2\\,H^+',
      explanation: 'O prefixo indica a quantidade máxima de prótons cedidos por molécula.'
    },
    {
      title: 'Exceção do Ácido Fosforoso',
      latex: 'H_3PO_3 \\xrightarrow{H_2O} 2\\,H^+ + HPO_3^{2-}',
      explanation: 'Embora tenha 3 átomos de H, apenas 2 estão ligados a oxigênios e podem se ionizar.'
    }
  ],
  sections: [
    {
      id: 'sec-classificacao-h',
      title: 'A Escala de Prótons Ionizáveis',
      content: 'A classificação quanto ao número de hidrogênios ionizáveis por molécula é fundamental para o balanceamento de reações e cálculos de neutralização:\n\n• Monoácidos: liberam exatamente 1 H⁺. Exemplos: HCl, HNO₃, HF, HCN, CH₃COOH (ácido acético).\n• Diácidos: liberam 2 H⁺. Exemplos: H₂SO₄, H₂CO₃, H₂S, H₃PO₃.\n• Triácidos: liberam 3 H⁺. Exemplos: H₃PO₄, H₃AsO₄, H₃BO₃.\n• Tetrácidos: liberam 4 H⁺. Exemplos: H₄P₂O₇ (ácido pirofosfórico), H₄SiO₄ (ácido ortossilícico).'
    },
    {
      id: 'sec-regra-estrutural',
      title: 'O que torna um hidrogênio ionizável?',
      content: 'Para que a água consiga romper uma ligação covalente heteroliticamente e liberar um H⁺, o átomo de hidrogênio precisa estar ligado a um elemento químico altamente eletronegativo (como Oxigênio, Cloro, Bromo, Iodo, Flúor). Nos oxiácidos, apenas os átomos de hidrogênio ligados diretamente aos átomos de oxigênio (grupos -O-H) são ionizáveis! Hidrogênios ligados diretamente ao átomo central (como P-H ou C-H) não se ionizam porque a diferença de eletronegatividade é praticamente nula.'
    },
    {
      id: 'sec-pegadinha-fosforo',
      title: 'A Clássica Série dos Ácidos de Fósforo',
      content: 'Compare as estruturas:\n• H₃PO₄ (ácido fosfórico): possui 3 grupos P-OH → Triácido (3 H⁺ ionizáveis).\n• H₃PO₃ (ácido fosforoso): possui 2 grupos P-OH e 1 ligação direta P-H → Diácido (2 H⁺ ionizáveis).\n• H₃PO₂ (ácido hipofosforoso): possui 1 grupo P-OH e 2 ligações diretas P-H → Monoácido (1 H⁺ ionizável).'
    }
  ],
  practicalExamples: [
    {
      title: 'O Ácido Acético (CH3COOH)',
      description: 'A fórmula molecular do ácido acético é C2H4O2 (4 hidrogênios no total). No entanto, três hidrogênios estão ligados ao carbono (metila -CH3) e são inertes. Apenas o hidrogênio do grupo carboxila (-COOH) é ionizável. Portanto, é um monoácido.',
      formula: 'CH_3COOH \\rightleftharpoons CH_3COO^- + H^+'
    }
  ],
  commonPitfalls: [
    {
      title: 'Contar as letras H da fórmula',
      warning: 'Nunca deduza o número de H⁺ ionizáveis apenas contando os H da fórmula.',
      explanation: 'H₃PO₃ não é triácido (é diácido) e H₃PO₂ não é triácido (é monoácido). Esse é um dos temas mais cobrados e que mais geram erros em provas.'
    }
  ],
  didYouKnow: [
    {
      title: 'Por que o fósforo engana tanto?',
      text: 'O fósforo tem raio atômico relativamente grande e eletronegatividade 2,19, muito próxima da do hidrogênio (2,20). Assim, a ligação P-H é praticamente apolar e a água é incapaz de quebrá-la.'
    }
  ],
  oneMinuteSummary: [
    'Monoácido = 1 H⁺ (HCl, HNO₃, CH₃COOH, H₃PO₂).',
    'Diácido = 2 H⁺ (H₂SO₄, H₂S, H₂CO₃, H₃PO₃).',
    'Triácido = 3 H⁺ (H₃PO₄). Tetrácido = 4 H⁺ (H₄P₂O₇).',
    'Em oxiácidos, só ioniza o hidrogênio ligado diretamente ao oxigênio (-OH).',
    'Lembre-se sempre: H₃PO₄ = 3; H₃PO₃ = 2; H₃PO₂ = 1.'
  ],
  solvedExercises: [SOLVED_EXERCISES[5]],
  prevChapterSlug: 'classificacao',
  nextChapterSlug: 'nomenclatura'
};
