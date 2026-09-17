import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH03_BRONSTED_LOWRY: Chapter = {
  id: 3,
  slug: 'bronsted-lowry',
  title: '03. Teoria de Brønsted-Lowry',
  subtitle: 'A teoria protônica, doadores e receptores de H⁺ e o conceito de pares conjugados',
  description: 'Descubra como a teoria de Brønsted e Lowry libertou a química da dependência exclusiva da água e revolucionou o equilíbrio químico.',
  estimatedMinutes: 18,
  learningGoals: [
    'Definir ácido e base segundo o modelo protônico de Brønsted-Lowry',
    'Identificar com precisão os pares conjugados ácido-base',
    'Compreender o comportamento de espécies anfóteras como a água',
    'Relacionar a força de um ácido à estabilidade da sua base conjugada'
  ],
  keyConcepts: [
    'Transferência de prótons (H⁺)',
    'Ácido: doador de prótons',
    'Base: receptora de prótons',
    'Pares conjugados ácido-base',
    'Substâncias anfóteras / anfifróticas'
  ],
  formulas: [
    {
      title: 'Equação Fundamental de Brønsted-Lowry',
      latex: '\\text{Ácido}_1 + \\text{Base}_2 \\rightleftharpoons \\text{Base conjugada}_1 + \\text{Ácido conjugado}_2',
      explanation: 'Toda transferência de prótons gera um par conjugado com diferença estrita de um H⁺.'
    },
    {
      title: 'Exemplo com Ácido Clorídrico e Água',
      latex: 'HCl + H_2O \\rightleftharpoons Cl^- + H_3O^+',
      explanation: 'HCl é o ácido 1; Cl⁻ é sua base conjugada 1. H₂O é a base 2; H₃O⁺ é seu ácido conjugado 2.'
    }
  ],
  sections: [
    {
      id: 'sec-protons',
      title: 'A Teoria Protônica (1923)',
      content: 'Proposta simultaneamente pelo químico dinamarquês Johannes Brønsted e pelo inglês Thomas Lowry em 1923, esta teoria não exige meio aquoso. O critério central é a mecânica de transferência do próton (H⁺): Ácido é qualquer espécie (molecular ou iônica) capaz de doar um próton; Base é qualquer espécie capaz de aceitar um próton.'
    },
    {
      id: 'sec-pares',
      title: 'Pares Conjugados Ácido-Base',
      content: 'Quando um ácido doa seu próton H⁺, o que sobra da sua estrutura tem potencial para receber o próton de volta no sentido inverso da reação. Essa espécie residual é chamada de BASE CONJUGADA. Da mesma forma, quando uma base aceita um próton, transforma-se em seu ÁCIDO CONJUGADO. Um par conjugado difere unicamente pela fórmula de exatamente um próton H⁺!'
    },
    {
      id: 'sec-anfoterismo',
      title: 'Anfoterismo: O Papel Camaleônico da Água',
      content: 'A água é o melhor exemplo de espécie anfótera (ou anfifrótica): reagindo com um ácido forte como o HCl, ela atua como base (recebe H⁺ formando H₃O⁺). Porém, reagindo com uma base como a amônia (NH₃), a água atua como ácido (doa H⁺ formando OH⁻).'
    }
  ],
  practicalExamples: [
    {
      title: 'Reação com Amônia em Fase Gasosa',
      description: 'HCl(g) + NH3(g) -> NH4+(s) + Cl-(s). O HCl doa o próton diretamente para o par de elétrons do nitrogênio da amônia, ocorrendo sem nenhuma molécula de água.',
      formula: 'HCl + NH_3 \\rightarrow NH_4^+ + Cl^-'
    },
    {
      title: 'Autoionização da Água',
      description: 'H2O + H2O ⇌ H3O+ + OH-. Uma molécula de água age como ácido doando H+ para outra molécula de água idêntica que age como base.',
      formula: '2\\,H_2O \\rightleftharpoons H_3O^+ + OH^-'
    }
  ],
  commonPitfalls: [
    {
      title: 'Confundir ácido conjugado com base',
      warning: 'Cuidado ao identificar pares conjugados em equilíbrios químicos.',
      explanation: 'Lembre-se sempre da regra de ouro: Ácido Conjugado = Espécie com +1 H⁺. Base Conjugada = Espécie com -1 H⁺.'
    }
  ],
  didYouKnow: [
    {
      title: 'Simultaneidade científica',
      text: 'Brønsted em Copenhague e Lowry em Cambridge publicaram suas teorias no mesmo ano (1923), sem nunca terem conversado antes sobre o assunto!'
    }
  ],
  oneMinuteSummary: [
    'Ácido de Brønsted: doador de próton (H⁺).',
    'Base de Brønsted: receptora de próton (H⁺).',
    'Não requer meio aquoso: funciona em fase gasosa e solventes orgânicos.',
    'Par conjugado: duas espécies químicas que diferem entre si por exatamente 1 H⁺.',
    'Quanto mais forte for um ácido, mais fraca e inerte é a sua base conjugada.'
  ],
  solvedExercises: [SOLVED_EXERCISES[2]],
  prevChapterSlug: 'arrhenius',
  nextChapterSlug: 'lewis'
};
