import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH09_GRAU_IONIZACAO: Chapter = {
  id: 9,
  slug: 'grau-ionizacao',
  title: '09. Grau de Ionização (α)',
  subtitle: 'A quantificação matemática da força ácida, porcentagens e a Lei de Diluição de Ostwald',
  description: 'Aprenda a calcular com exatidão a fração e o percentual de moléculas de ácido que efetivamente se rompem em íons ao serem colocadas em água.',
  estimatedMinutes: 16,
  learningGoals: [
    'Dominar a fórmula do grau de ionização (α)',
    'Converter entre frações decimais e porcentagens de ionização',
    'Classificar a força ácida através dos valores de corte (5% e 50%)',
    'Compreender como a adição de água (diluição) afeta o equilíbrio químico'
  ],
  keyConcepts: [
    'Grau de ionização (α)',
    'Fração molar ionizada',
    'Classificação quantitativa de força',
    'Lei da Diluição de Ostwald'
  ],
  formulas: [
    {
      title: 'Fórmula Geral do Grau de Ionização',
      latex: '\\alpha = \\frac{\\text{número de moléculas ionizadas}}{\\text{número total de moléculas dissolvidas}}',
      explanation: 'Razão adimensional que varia entre 0 (nenhuma ionização) e 1 (ionização total).'
    },
    {
      title: 'Grau de Ionização em Porcentagem',
      latex: '\\alpha\\% = \\alpha \\times 100\\%',
      explanation: 'Expressão em porcentagem para facilitar a leitura pedagógica.'
    }
  ],
  sections: [
    {
      id: 'sec-calculo-alfa',
      title: 'A Definição Matemática de Alfa (α)',
      content: 'O grau de ionização (representado pela letra grega alfa, α) é a fração matemática que indica o rendimento da reação de ionização de um ácido com a água. Se você coloca 100 moléculas de HCl em água, cerca de 92 a 95 delas sofrem ionização imediata. Logo: α = 92 / 100 = 0,92 (ou 92%). Já para o ácido cianídrico (HCN), de cada 10.000 moléculas dissolvidas, apenas 1 ou 2 se ionizam: α = 2 / 10.000 = 0,0002 (ou 0,02%).'
    },
    {
      id: 'sec-faixas-alfa',
      title: 'Faixas Padronizadas de Classificação',
      content: 'Com base no valor numérico de α a 25 °C em soluções usuais (0,1 mol/L):\n\n• Ácido Fraco: α ≤ 5% (ou 0,05). A imensa maioria das moléculas permanece na forma molecular intacta. Exemplos: HCN (0,008%), H₂S (0,07%), CH₃COOH (~1,3%), HF (~8% em altas concentrações).\n• Ácido Moderado: 5% < α < 50%. Existe um equilíbrio dinâmico considerável entre moléculas e íons. Exemplos: H₃PO₄ (~27%), H₂SO₃ (~30%), HF diluído.\n• Ácido Forte: α ≥ 50% (ou 0,50). Praticamente todas as moléculas se rompem em íons livres. Exemplos: HCl (~92%), H₂SO₄ (~61% na 1ª etapa), HNO₃ (~92%), HI (~95%).'
    },
    {
      id: 'sec-ostwald',
      title: 'A Lei da Diluição de Wilhelm Ostwald',
      content: 'Um aspecto fascinante da físico-química é que o valor de α NÃO é estático: ele aumenta quando adicionamos mais água! Segundo a Lei da Diluição de Ostwald, para ácidos fracos: α ≈ √(Ka / Molaridade). Conforme a solução se torna mais diluída (menor molaridade), a porcentagem de moléculas que se ionizam (α) aumenta, tendendo a 100% no limite da diluição infinita.'
    }
  ],
  practicalExamples: [
    {
      title: 'Exemplo Numérico de Bancada',
      description: 'Em um béquer com 500 moléculas dissolvidas de um ácido genérico HA, constatou-se a presença de 40 íons H+. Como cada molécula gera 1 H+, 40 moléculas foram ionizadas. alfa = 40 / 500 = 0,08 = 8%. Ácido moderado.',
      formula: '\\alpha = \\frac{40}{500} = 0{,}08 = 8\\%'
    }
  ],
  commonPitfalls: [
    {
      title: 'Confundir alfa com Ka',
      warning: 'Alfa varia com a concentração; Ka é uma constante verdadeira para cada temperatura.',
      explanation: 'O grau de ionização α muda quando você dilui a solução, mas a constante de equilíbrio Ka depende unicamente da temperatura do sistema.'
    }
  ],
  didYouKnow: [
    {
      title: 'Ostwald e a Catálise',
      text: 'Wilhelm Ostwald, um dos pais da físico-química junto com Arrhenius e van \'t Hoff, recebeu o Prêmio Nobel de 1909 pelos seus estudos pioneiros sobre catálise, velocidades de reação e equilíbrio químico de eletrólitos fracos.'
    }
  ],
  oneMinuteSummary: [
    'α = (moléculas ionizadas) / (moléculas dissolvidas inicialmente).',
    'α% = α × 100.',
    'α ≤ 5%: Ácido Fraco.',
    '5% < α < 50%: Ácido Moderado.',
    'α ≥ 50%: Ácido Forte.',
    'Ao diluir uma solução com água pura, o grau de ionização (α) aumenta.'
  ],
  solvedExercises: [SOLVED_EXERCISES[8]],
  prevChapterSlug: 'forca-acidos',
  nextChapterSlug: 'ph'
};
