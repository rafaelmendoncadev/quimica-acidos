import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH14_NEUTRALIZACAO: Chapter = {
  id: 14,
  slug: 'neutralizacao',
  title: '14. Neutralização Total e Parcial',
  subtitle: 'Estequiometria ácido-base, cálculos de titulação C₁V₁ = C₂V₂ e a gênese de sais normais e hidrogenossais',
  description: 'Aprofunde-se no balanço estequiométrico entre prótons e hidroxilas, aprenda a calcular concentrações desconhecidas em titulações e entenda a neutralização incompleta.',
  estimatedMinutes: 20,
  learningGoals: [
    'Diferenciar neutralização total de neutralização parcial',
    'Realizar cálculos estequiométricos de titulação ácido-base',
    'Dominar a equação geral n_A · M_A · V_A = n_B · M_B · V_B',
    'Identificar a formação de hidrogenossais (sais ácidos) e hidroxissais (sais básicos)'
  ],
  keyConcepts: [
    'Neutralização total (estequiométrica)',
    'Neutralização parcial',
    'Titulação ácido-base',
    'Ponto de equivalência',
    'Hidrogenossal (ex: NaHCO₃, NaHSO₄)'
  ],
  formulas: [
    {
      title: 'Equação Geral da Neutralização Total',
      latex: 'n_A \\cdot M_A \\cdot V_A = n_B \\cdot M_B \\cdot V_B',
      explanation: 'n_A = número de H⁺ ionizáveis do ácido; n_B = número de OH⁻ da base; M = molaridade; V = volume.'
    },
    {
      title: 'Neutralização Parcial com Formação de Hidrogenossal',
      latex: 'H_2SO_4 + NaOH \\rightarrow NaHSO_4 + H_2O',
      explanation: 'Como a base só fornece 1 OH⁻, apenas um dos dois H⁺ do diácido é neutralizado.'
    }
  ],
  sections: [
    {
      id: 'sec-total',
      title: '1. Neutralização Total',
      content: 'A neutralização total ocorre quando TODOS os hidrogênios ionizáveis do ácido são rigorosamente neutralizados por um número idêntico de grupos hidroxila fornecidos pela base:\nnº de H⁺ = nº de OH⁻.\nO sal resultante é chamado de SAL NORMAL (ou neutro), não contendo H⁺ nem OH⁻ residuais em sua estrutura cristalina.\nExemplos:\n• HCl + NaOH → NaCl + H₂O (proporção 1:1)\n• H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O (proporção 1:2)\n• H₃PO₄ + 3 KOH → K₃PO₄ + 3 H₂O (proporção 1:3)'
    },
    {
      id: 'sec-parcial',
      title: '2. Neutralização Parcial e Hidrogenossais',
      content: 'Quando a quantidade de base adicionada é insuficiente para consumir todos os H⁺ de um ácido poliprótico, ocorre neutralização parcial:\n• H₂SO₄ (diácido) + 1 NaOH → NaHSO₄ (hidrogenossulfato de sódio) + H₂O.\n• H₃PO₄ (triácido) + 1 NaOH → NaH₂PO₄ (di-hidrogenofosfato de sódio) + H₂O.\n• H₃PO₄ (triácido) + 2 NaOH → Na₂HPO₄ (mono-hidrogenofosfato de sódio) + 2 H₂O.\nO bicarbonato de sódio (NaHCO₃), indispensável no dia a dia, é o hidrogenossal proveniente da neutralização parcial do ácido carbônico com hidróxido de sódio!'
    },
    {
      id: 'sec-calculos-titulacao',
      title: '3. Titulação Ácido-Base no Laboratório',
      content: 'A titulação é uma técnica analítica clássica na qual um volume rigorosamente medido de uma solução de concentração conhecida (solução padrão) é gotejado a partir de uma bureta sobre uma solução de concentração desconhecida até que o indicador químico vire de cor (ponto de viragem). No ponto de equivalência, podemos calcular a concentração desconhecida com precisão absoluta através da fórmula:\nn_A · M_A · V_A = n_B · M_B · V_B.'
    }
  ],
  practicalExamples: [
    {
      title: 'Titulação de 25 mL de HCl com NaOH 0,1 M',
      description: 'Se foram gastos 50 mL de NaOH 0,1 mol/L para neutralizar 25 mL de HCl: 1 * M_A * 25 mL = 1 * 0,1 mol/L * 50 mL -> M_A = 5 / 25 = 0,20 mol/L de HCl.',
      formula: 'M_A = \\frac{0{,}1 \\times 50}{25} = 0{,}20\\text{ mol/L}'
    }
  ],
  commonPitfalls: [
    {
      title: 'Esquecer o número de hidrogênios no cálculo',
      warning: 'Cuidado! A fórmula simplificada MA · VA = MB · VB só vale se n_A = n_B = 1.',
      explanation: 'Para o H₂SO₄ (diácido), cada mol do ácido neutraliza 2 mols de NaOH. Se você esquecer o fator n_A = 2, seu cálculo de volume ou molaridade errará por um fator de 2!'
    }
  ],
  didYouKnow: [
    {
      title: 'Bicarbonato não tem dois carbonatos',
      text: 'O prefixo "bi-" no nome histórico "bicarbonato de sódio" não significa dois carbonos, mas sim que, para a mesma quantidade de sódio, havia o dobro de proporção de carbonato em comparação ao carbonato normal (Na₂CO₃)!'
    }
  ],
  oneMinuteSummary: [
    'Neutralização total: nº de H⁺ = nº de OH⁻ → forma sal normal + água.',
    'Neutralização parcial: forma hidrogenossais (com H⁺ residual) ou hidroxissais (com OH⁻ residual).',
    'Exemplo clássico de hidrogenossal: NaHCO₃ (bicarbonato de sódio).',
    'Equação fundamental da titulação: n_A · M_A · V_A = n_B · M_B · V_B.',
    'Sempre considere o número de prótons liberados pelo ácido no balanceamento.'
  ],
  solvedExercises: [SOLVED_EXERCISES[13]],
  prevChapterSlug: 'reacoes',
  nextChapterSlug: 'ka-pka'
};
