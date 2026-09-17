import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH11_POH: Chapter = {
  id: 11,
  slug: 'poh',
  title: '11. Escala de pOH e Relações',
  subtitle: 'A quantificação da basicidade, o produto iônico da água (Kw) e a relação fundamental pH + pOH = 14',
  description: 'Compreenda a escala complementar de pOH, calcule a concentração de íons hidroxila [OH⁻] e domine a interconversão entre pH e pOH a 25 °C.',
  estimatedMinutes: 16,
  learningGoals: [
    'Definir o potencial hidroxilionoberg (pOH) através do logaritmo de [OH⁻]',
    'Aplicar a relação fundamental Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C',
    'Utilizar a relação pH + pOH = 14 para converter medidas de acidez e basicidade',
    'Compreender o efeito da temperatura sobre a constante Kw da água'
  ],
  keyConcepts: [
    'Potencial Hidroxiliônico (pOH)',
    'Produto iônico da água (Kw)',
    'Relação pH + pOH = 14 a 25 °C',
    'Cálculo de [OH⁻] a partir do pOH',
    'Variação térmica do Kw'
  ],
  formulas: [
    {
      title: 'Definição de pOH',
      latex: 'pOH = -\\log_{10}[OH^-]',
      explanation: 'Mede a concentração de íons hidroxila em solução aquosa.'
    },
    {
      title: 'Relação Fundamental a 25 °C',
      latex: 'pH + pOH = 14',
      explanation: 'Derivado do produto de autoionização da água: Kw = [H⁺][OH⁻] = 10⁻¹⁴.'
    },
    {
      title: 'Concentração de Hidroxila',
      latex: '[OH^-] = 10^{-pOH} \\text{ mol/L}',
      explanation: 'Função exponencial inversa para obter a concentração de hidroxilas.'
    }
  ],
  sections: [
    {
      id: 'sec-autoionizacao',
      title: 'A Autoionização da Água e o Kw',
      content: 'Mesmo a água mais pura e bidestilada sofre uma pequeníssima ionização espontânea:\nH₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq).\nA 25 °C, experimentos de condutometria mostram que [H⁺] = 10⁻⁷ mol/L e [OH⁻] = 10⁻⁷ mol/L. A constante desse equilíbrio é chamada de produto iônico da água (Kw):\nKw = [H⁺][OH⁻] = (10⁻⁷) × (10⁻⁷) = 1,0 × 10⁻¹⁴.'
    },
    {
      id: 'sec-deducao',
      title: 'A Dedução da Relação pH + pOH = 14',
      content: 'Aplicando a função -log em ambos os lados da equação de autoionização:\n-log(Kw) = -log([H⁺] × [OH⁻])\npKw = -log[H⁺] + (-log[OH⁻])\npKw = pH + pOH.\nComo a 25 °C o valor de pKw é -log(10⁻¹⁴) = 14, temos a célebre relação:\npH + pOH = 14!'
    },
    {
      id: 'sec-exemplos-conversao',
      title: 'Exemplos Práticos de Interconversão',
      content: '• Se uma solução de HCl tem pH = 2 → seu pOH = 14 - 2 = 12.\n• Se uma solução de NaOH tem [OH⁻] = 10⁻¹ mol/L → seu pOH = 1 → seu pH = 14 - 1 = 13 (alcalina).\n• Se uma água residual tem pOH = 9 → seu pH = 14 - 9 = 5 (ácida).'
    }
  ],
  practicalExamples: [
    {
      title: 'Cálculo para Leite de Magnésia',
      description: 'Uma amostra de leite de magnésia possui pOH = 3,5. O pH da suspensão é calculado diretamente por: pH = 14 - 3,5 = 10,5. Trata-se de um antiácido alcalino moderado.',
      formula: 'pH = 14 - 3{,}5 = 10{,}5'
    }
  ],
  commonPitfalls: [
    {
      title: 'pH = 7 é neutro em qualquer temperatura?',
      warning: 'Não! pH = 7 só é o ponto de neutralidade estrito a 25 °C.',
      explanation: 'A autoionização da água é um processo endotérmico. Em água fervente a 100 °C, Kw ≈ 10⁻¹², o que faz com que a água pura neutra tenha pH = 6 e pOH = 6 (pH + pOH = 12). A água continua neutra porque [H⁺] = [OH⁻], mas o valor numérico mudou!'
    }
  ],
  didYouKnow: [
    {
      title: 'A palavra "hidroxila"',
      text: 'O radical OH⁻ foi nomeado a partir da junção das palavras "hidrogênio" e "oxigênio", simbolizando o par iônico mais abundante das soluções alcalinas.'
    }
  ],
  oneMinuteSummary: [
    'pOH = -log[OH⁻] e [OH⁻] = 10^(-pOH) mol/L.',
    'A 25 °C: pH + pOH = 14 e Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴.',
    'Se você conhece o pH, obtém o pOH imediatamente subtraindo de 14 (e vice-versa).',
    'Solução ácida: pH < 7 e pOH > 7.',
    'Solução básica: pH > 7 e pOH < 7.',
    'Solução neutra: pH = pOH = 7 a 25 °C.'
  ],
  solvedExercises: [SOLVED_EXERCISES[10]],
  prevChapterSlug: 'ph',
  nextChapterSlug: 'indicadores'
};
