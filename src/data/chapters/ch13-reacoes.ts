import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH13_REACOES: Chapter = {
  id: 13,
  slug: 'reacoes',
  title: '13. Reações dos Ácidos',
  subtitle: 'Reações com bases, ataque a metais ativos com liberação de H₂ e efervescência com carbonatos',
  description: 'Conheça os quatro grandes padrões de reatividade química dos ácidos inorgânicos e aprenda a prever os produtos e gases formados em cada reação.',
  estimatedMinutes: 18,
  learningGoals: [
    'Equacionar e prever produtos da reação Ácido + Base (Sal e Água)',
    'Prever o desprendimento de gás hidrogênio na reação Ácido + Metal Ativo',
    'Explicar a efervescência de CO₂ na reação Ácido + Carbonato/Bicarbonato',
    'Utilizar a fila de reatividade dos metais para determinar a espontaneidade do ataque'
  ],
  keyConcepts: [
    'Reação de neutralização',
    'Reação de simples troca (deslocamento de H⁺ por metais)',
    'Gás hidrogênio (H₂)',
    'Reação com carbonatos e bicarbonatos',
    'Liberação de dióxido de carbono (CO₂)'
  ],
  formulas: [
    {
      title: '1. Ácido + Base',
      latex: '\\text{Ácido} + \\text{Base} \\rightarrow \\text{Sal} + \\text{Água}',
      explanation: 'Exemplo: HCl + NaOH -> NaCl + H₂O.'
    },
    {
      title: '2. Ácido + Metal Ativo',
      latex: '2\\,HCl + Zn \\rightarrow ZnCl_2 + H_2\\uparrow',
      explanation: 'O metal oxida-se e o cátion H⁺ reduz-se a gás hidrogênio H₂.'
    },
    {
      title: '3. Ácido + Carbonato',
      latex: '2\\,HCl + CaCO_3 \\rightarrow CaCl_2 + H_2O + CO_2\\uparrow',
      explanation: 'Forma sal, água e efervescência vigorosa de gás carbônico.'
    }
  ],
  sections: [
    {
      id: 'sec-reacao-base',
      title: '1. Ácido + Base (Neutralização Clássica)',
      content: 'É a reação inorgânica mais estudada da história da química. Os prótons H⁺ fornecidos pelo ácido encontram as hidroxilas OH⁻ fornecidas pela base, unindo-se para formar moléculas de água neutra (H₂O). Os íons espectadores restantes combinam-se para originar um sal iônico:\nHCl + NaOH → NaCl + H₂O\nH₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O'
    },
    {
      id: 'sec-reacao-metal',
      title: '2. Ácido + Metal Ativo (Liberação de Gás H₂)',
      content: 'Metais com potencial de oxidação maior que o do hidrogênio (situados antes do H na fila de reatividade, como K, Ca, Na, Mg, Al, Zn, Fe) doam elétrons espontaneamente para os prótons H⁺ do ácido, liberando gás hidrogênio:\nZn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)↑\nMg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g)↑\nMetais nobres situados depois do H (Cu, Ag, Au, Pt) NÃO reagem com HCl puro para liberar H₂.'
    },
    {
      id: 'sec-reacao-carbonato',
      title: '3. Ácido + Carbonatos e Bicarbonatos (Efervescência de CO₂)',
      content: 'Quando qualquer ácido entra em contato com um sal de carbonato (CO₃²⁻) ou bicarbonato (HCO₃⁻), ocorre uma reação de dupla troca gerando ácido carbônico (H₂CO₃). Como o ácido carbônico é altamente instável em solução aquosa, ele se decompõe instantaneamente em água líquida e gás carbônico:\nHCl + NaHCO₃ → NaCl + H₂O + CO₂↑\nEssa reação é o princípio ativo dos antiácidos efervescentes e dos fermentos de bolo!'
    }
  ],
  practicalExamples: [
    {
      title: 'O Vulcão de Bicarbonato e Vinagre',
      description: 'O clássico experimento escolar de misturar vinagre (ácido acético) com bicarbonato de sódio produz borbulhamento imediato de milhares de bolhas de CO₂, formando a espuma do vulcão.',
      formula: 'CH_3COOH + NaHCO_3 \\rightarrow CH_3COONa + H_2O + CO_2\\uparrow'
    }
  ],
  commonPitfalls: [
    {
      title: 'Ouro derrete em ácido clorídrico?',
      warning: 'Não! Ouro e platina não reagem com HCl nem com HNO₃ isolados.',
      explanation: 'Para dissolver ouro, é necessária a famosa "Água Régia", uma mistura altamente oxidante e complexante de 3 partes de HCl concentrado para 1 parte de HNO₃ concentrado.'
    }
  ],
  didYouKnow: [
    {
      title: 'O teste do estalido do H₂',
      text: 'O gás hidrogênio liberado na reação com zinco pode ser comprovado aproximando-se um palito de fósforo aceso da boca do tubo de ensaio: ouve-se um característico estalido agudo ("pop"), gerado pela microcombustão imediata: 2 H₂ + O₂ → 2 H₂O.'
    }
  ],
  oneMinuteSummary: [
    'Ácido + Base → Sal + Água (reação de neutralização).',
    'Ácido + Metal ativo → Sal + H₂↑ (reação de deslocamento com liberação de gás hidrogênio).',
    'Metais nobres (Cu, Ag, Au) não liberam H₂ com ácidos comuns.',
    'Ácido + Carbonato/Bicarbonato → Sal + H₂O + CO₂↑ (efervescência de gás carbônico).',
    'O ácido carbônico formado se decompõe instantaneamente.'
  ],
  solvedExercises: [SOLVED_EXERCISES[12]],
  prevChapterSlug: 'indicadores',
  nextChapterSlug: 'neutralizacao'
};
