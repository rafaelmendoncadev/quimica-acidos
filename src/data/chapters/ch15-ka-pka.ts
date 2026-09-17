import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH15_KA_PKA: Chapter = {
  id: 15,
  slug: 'ka-pka',
  title: '15. Constantes Ka e pKa',
  subtitle: 'A constante de acidez, equilíbrios termodinâmicos e a escala de pKa',
  description: 'Entenda como os químicos medem com precisão rigorosa a tendência termodinâmica de um ácido em doar prótons, independentemente da sua concentração.',
  estimatedMinutes: 18,
  learningGoals: [
    'Escrever a expressão da constante de ionização Ka para qualquer ácido',
    'Relacionar o valor numérico de Ka à extensão do equilíbrio químico',
    'Compreender o cálculo e a interpretação do pKa = -log(Ka)',
    'Comparar a força relativa de ácidos usando Ka e pKa'
  ],
  keyConcepts: [
    'Constante de ionização ácida (Ka)',
    'Constante de acidez pKa',
    'Relação inversa entre Ka e pKa',
    'Equilíbrio químico homogêneo',
    'Força termodinâmica de ácidos fracos'
  ],
  formulas: [
    {
      title: 'Expressão de Ka para HA',
      latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
      explanation: 'Razão entre o produto dos íons e a concentração do ácido intacto no equilíbrio.'
    },
    {
      title: 'Definição de pKa',
      latex: 'pK_a = -\\log_{10}(K_a)',
      explanation: 'Quanto menor for o valor de pKa, maior é a força do ácido.'
    }
  ],
  sections: [
    {
      id: 'sec-ka-intro',
      title: 'O que é a Constante Ka?',
      content: 'Quando um ácido fraco HA é dissolvido em água, estabelece-se um equilíbrio químico reversível:\nHA(aq) ⇌ H⁺(aq) + A⁻(aq).\nA constante de equilíbrio desse sistema é a constante de ionização ácida (Ka):\nKa = ([H⁺] × [A⁻]) / [HA].\nComo o solvente água está em excesso colossal, sua atividade é considerada 1 e ela não entra no denominador. Quanto mais o equilíbrio pender para o lado dos produtos ionizados [H⁺][A⁻], maior será o valor de Ka e mais forte será o ácido!'
    },
    {
      id: 'sec-pka-conceito',
      title: 'A Escala de pKa',
      content: 'Os valores de Ka para ácidos fracos são expressos em potências minúsculas (ex: ácido acético = 1,8 × 10⁻⁵; ácido cianídrico = 4,9 × 10⁻¹⁰). Para simplificar comparações, define-se o pKa como o cologaritmo de Ka:\npKa = -log(Ka).\n\nAssim como no pH:\n• Ka MAIOR → pKa MENOR → Ácido MAIS FORTE.\n• Ka MENOR → pKa MAIOR → Ácido MAIS FRACO.\n\nPor exemplo:\n• Ácido fluorídrico (HF): Ka = 6,8 × 10⁻⁴ → pKa = 3,17\n• Ácido acético (CH₃COOH): Ka = 1,8 × 10⁻⁵ → pKa = 4,75\n• Ácido carbônico (H₂CO₃): Ka = 4,3 × 10⁻⁷ → pKa = 6,37\n• Ácido cianídrico (HCN): Ka = 4,9 × 10⁻¹⁰ → pKa = 9,31\nConclusão imediata: HF > CH₃COOH > H₂CO₃ > HCN em ordem decrescente de força.'
    }
  ],
  practicalExamples: [
    {
      title: 'Comparando Ácido Acético com HCN',
      description: 'O pKa do vinagre (ácido acético) é 4,75 e o do HCN é 9,31. A diferença de cerca de 4,5 unidades de pKa significa que o ácido acético se ioniza quase 35.000 vezes mais do que o HCN em soluções molares comparáveis!',
      formula: 'pK_a(\\text{acético}) = 4{,}75 \\ll pK_a(\\text{HCN}) = 9{,}31'
    }
  ],
  commonPitfalls: [
    {
      title: 'Pensar que pKa alto é ácido forte',
      warning: 'Cuidado! A escala do pKa tem sinal invertido pelo logaritmo negativo.',
      explanation: 'Menor pKa significa maior Ka e maior acidez. Um ácido com pKa = 1 é muito mais forte que um ácido com pKa = 10.'
    }
  ],
  didYouKnow: [
    {
      title: 'Superácidos têm pKa negativo',
      text: 'Ácidos fortes como o HCl têm pKa em torno de -7, e o ácido fluoroantimônico (o mais forte do mundo) tem pKa estimado em -28! Ele é 20 quintilhões de vezes mais forte que o ácido sulfúrico puro.'
    }
  ],
  oneMinuteSummary: [
    'Ka = [H⁺][A⁻] / [HA] no equilíbrio químico.',
    'pKa = -log(Ka).',
    'Maior Ka → Menor pKa → Ácido mais forte.',
    'Menor Ka → Maior pKa → Ácido mais fraco.',
    'Diferente do grau de ionização α, a constante Ka independe da diluição inicial a uma dada temperatura.'
  ],
  solvedExercises: [SOLVED_EXERCISES[14]],
  prevChapterSlug: 'neutralizacao',
  nextChapterSlug: 'acidos-poliproticos'
};
