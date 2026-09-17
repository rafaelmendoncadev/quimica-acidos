import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH05_CLASSIFICACAO: Chapter = {
  id: 5,
  slug: 'classificacao',
  title: '05. Classificação dos Ácidos',
  subtitle: 'Hidrácidos, oxiácidos, número de elementos e critérios de volatilidade',
  description: 'Aprenda a classificar qualquer ácido inorgânico com base na presença de oxigênio, na quantidade de elementos químicos distintos e no seu ponto de ebulição.',
  estimatedMinutes: 15,
  learningGoals: [
    'Distinguir com precisão hidrácidos de oxiácidos',
    'Classificar ácidos em binários, ternários e quaternários',
    'Diferenciar ácidos voláteis de ácidos fixos',
    'Conhecer os principais representantes industriais e biológicos de cada classe'
  ],
  keyConcepts: [
    'Hidrácidos (sem oxigênio)',
    'Oxiácidos (com oxigênio)',
    'Número de elementos (binário, ternário, quaternário)',
    'Volatilidade e ponto de ebulição (ácido volátil vs fixo)'
  ],
  formulas: [
    {
      title: 'Estrutura Geral de Hidrácido',
      latex: 'H_nE \\quad (\\text{ex: } HCl, H_2S, HBr)',
      explanation: 'União de hidrogênio a um não-metal sem oxigênio.'
    },
    {
      title: 'Estrutura Geral de Oxiácido',
      latex: 'H_aE_bO_c \\quad (\\text{ex: } H_2SO_4, HNO_3, H_3PO_4)',
      explanation: 'Composto contendo hidrogênio, elemento central e átomos de oxigênio.'
    }
  ],
  sections: [
    {
      id: 'sec-oxigenio',
      title: '1. Quanto à Presença de Oxigênio',
      content: 'Este é o critério mais marcante da química inorgânica:\n\n• HIDRÁCIDOS: não possuem átomos de oxigênio na sua fórmula molecular. Exemplos: HCl (ácido clorídrico), HBr (bromídrico), HI (iodídrico), HF (fluorídrico), H₂S (sulfídrico), HCN (cianídrico).\n\n• OXIÁCIDOS: possuem um ou mais átomos de oxigênio na molécula. Exemplos: H₂SO₄ (ácido sulfúrico), HNO₃ (nítrico), H₃PO₄ (fosfórico), H₂CO₃ (carbônico), HClO₄ (perclórico).'
    },
    {
      id: 'sec-elementos',
      title: '2. Quanto ao Número de Elementos Químicos',
      content: '• Binários: formados por exatamente 2 elementos químicos diferentes. Ex: HCl (H e Cl), H₂S (H e S), HF (H e F).\n• Ternários: formados por 3 elementos químicos distintos. Ex: HNO₃ (H, N, O), H₂SO₄ (H, S, O), HCN (H, C, N).\n• Quaternários: formados por 4 elementos diferentes. Ex: HSCN (H, S, C, N — ácido sulfocianídrico), H₄Fe(CN)₆ (ácido ferrocianídrico).'
    },
    {
      id: 'sec-volatilidade',
      title: '3. Quanto à Volatilidade e Ponto de Ebulição',
      content: '• Ácidos Voláteis: possuem baixos pontos de ebulição e evaporam com extrema facilidade à temperatura ambiente. Todos os hidrácidos são voláteis (muitos são gases dissolvidos em água), além de alguns oxiácidos como HNO₃.\n• Ácidos Fixos: possuem pontos de ebulição elevados e praticamente não desprendem vapores em condições ambientes. Os grandes exemplos são o H₂SO₄ (PE ≈ 338 °C), H₃PO₄ e H₃BO₃.'
    }
  ],
  practicalExamples: [
    {
      title: 'Por que o HCl fumaça e o H2SO4 não?',
      description: 'Ao abrir um frasco de ácido clorídrico concentrado comercial, formam-se vapores brancos no ar (volátil). Já o ácido sulfúrico é um óleo pesado inodoro e denso que não evapora espontaneamente (fixo).',
      formula: 'HCl \\text{ (volátil)} \\quad \\text{vs} \\quad H_2SO_4 \\text{ (fixo)}'
    },
    {
      title: 'HCN: O Hidrácido Ternário',
      description: 'O ácido cianídrico (HCN) é ternário porque possui três elementos (H, C, N), mas continua sendo um hidrácido legítimo porque não contém oxigênio.',
      formula: 'HCN'
    }
  ],
  commonPitfalls: [
    {
      title: 'Ternário significa ter oxigênio?',
      warning: 'Cuidado! Nem todo ácido ternário é oxiácido.',
      explanation: 'O ácido cianídrico (HCN) possui 3 elementos químicos, mas é um hidrácido porque não possui oxigênio!'
    }
  ],
  didYouKnow: [
    {
      title: 'O Rei dos Químicos',
      text: 'O ácido sulfúrico (H₂SO₄) é tão onipresente na produção de baterias, fertilizantes, tintas, polímeros e refino de petróleo que a economia e a força industrial de um país já foram mensuradas historicamente pela tonelagem de H₂SO₄ consumida anualmente.'
    }
  ],
  oneMinuteSummary: [
    'Hidrácidos: NÃO possuem oxigênio (HCl, H₂S, HBr, HI, HF, HCN).',
    'Oxiácidos: POSSUEM oxigênio (H₂SO₄, HNO₃, H₃PO₄, H₂CO₃).',
    'Binários = 2 elementos; Ternários = 3 elementos; Quaternários = 4 elementos.',
    'Ácidos voláteis: fervem a baixas temperaturas e evaporam facilmente (HCl, H₂S, HNO₃).',
    'Ácidos fixos: fervem a temperaturas elevadas e são persistentes (H₂SO₄, H₃PO₄).'
  ],
  solvedExercises: [SOLVED_EXERCISES[4]],
  prevChapterSlug: 'lewis',
  nextChapterSlug: 'hidrogenios-ionizaveis'
};
