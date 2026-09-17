import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH01_O_QUE_SAO_ACIDOS: Chapter = {
  id: 1,
  slug: 'o-que-sao-acidos',
  title: '01. O que são ácidos?',
  subtitle: 'Conceito inicial, propriedades gerais e a formação dos íons H⁺ e H₃O⁺',
  description: 'Descubra a natureza dos ácidos, como eles interagem com a água e por que estão tão presentes na nossa alimentação, no nosso corpo e na indústria.',
  estimatedMinutes: 15,
  learningGoals: [
    'Compreender o conceito fundamental de ácido em meio aquoso',
    'Diferenciar substâncias moleculares de compostos iônicos',
    'Entender a formação do cátion hidrônio (H₃O⁺)',
    'Reconhecer as propriedades organolépticas e condutibilidade de soluções ácidas'
  ],
  keyConcepts: [
    'Substância molecular',
    'Ionização em água',
    'Íon Hidrogênio (H⁺)',
    'Íon Hidrônio (H₃O⁺)',
    'Eletrólito e condutibilidade elétrica'
  ],
  formulas: [
    {
      title: 'Ionização simplificada',
      latex: 'HA \\xrightarrow{H_2O} H^+_{(aq)} + A^-_{(aq)}',
      explanation: 'Representação clássica em que a molécula de ácido se rompe gerando íons livres.'
    },
    {
      title: 'Formação real do íon hidrônio',
      latex: 'HCl_{(g)} + H_2O_{(l)} \\rightarrow H_3O^+_{(aq)} + Cl^-_{(aq)}',
      explanation: 'O próton H⁺ une-se a um par de elétrons do oxigênio da água por ligação coordenada.'
    }
  ],
  sections: [
    {
      id: 'sec-intro',
      title: 'Ácidos no Nosso Dia a Dia',
      content: 'Quando você chupa um limão, tempera uma salada com vinagre ou sente a efervescência de um refrigerante, você está interagindo diretamente com compostos químicos da função Ácido. Historicamente, os ácidos foram identificados pelo seu característico sabor azedo, capacidade de mudar a cor de extratos vegetais e habilidade de reagir vigorosamente com metais como o zinco e o ferro.'
    },
    {
      id: 'sec-natureza',
      title: 'A Natureza Molecular dos Ácidos',
      content: 'Ao contrário de sais como o cloreto de sódio (NaCl), que já são formados por íons unidos em um retículo cristalino antes mesmo de tocar na água, os ácidos puros são formados por ligações covalentes (compartilhamento de elétrons). No estado gasoso ou líquido puro, o cloreto de hidrogênio (HCl) não conduz eletricidade porque não possui cargas elétricas livres. É a interação com as moléculas polares de água que promove a quebra heterolítica da ligação, gerando íons que antes não existiam.'
    },
    {
      id: 'sec-hidronio',
      title: 'O Íon Hidrogênio (H⁺) e o Íon Hidrônio (H₃O⁺)',
      content: 'Um átomo de hidrogênio comum é constituído por apenas 1 próton e 1 elétron. Ao perder seu elétron na ionização, resta apenas um núcleo desprovido de nuvem eletrônica (o próton H⁺). Por possuir um raio infinitamente minúsculo (~10⁻¹⁵ m), sua densidade de carga positiva é gigantesca. Por isso, um próton livre não consegue vagar isolado pela água líquida: ele é imediatamente capturado por um par de elétrons não ligantes do oxigênio da água vizinha, originando o íon hidrônio (H₃O⁺).'
    }
  ],
  practicalExamples: [
    {
      title: 'Ácido Clorídrico no Estômago',
      description: 'Nosso suco gástrico possui ácido clorídrico (HCl) a uma concentração próxima de 0,1 mol/L (pH ~ 1,5 a 2,0), criando o ambiente ácido ideal para a enzima pepsina digerir proteínas e matar microrganismos invasores.',
      formula: 'HCl',
      category: 'Fisiologia Humana'
    },
    {
      title: 'Ácido Acético no Vinagre',
      description: 'O vinagre tradicional contém cerca de 4% a 5% em volume de ácido acético (CH₃COOH), obtido através da fermentação bacteriana do etanol.',
      formula: 'CH_3COOH',
      category: 'Alimentação'
    }
  ],
  commonPitfalls: [
    {
      title: 'H⁺ existe livre na água?',
      warning: 'Não existem prótons H⁺ isolados "nadando" sozinhos na água.',
      explanation: 'Escrevemos frequentemente H⁺ apenas como simplificação didática e abreviação conveniente, mas em meio aquoso a espécie real solvatada é o hidrônio H₃O⁺ (e complexos maiores como H₅O₂⁺).'
    }
  ],
  didYouKnow: [
    {
      title: 'Origem da palavra "Ácido"',
      text: 'O termo vem do latim "acidus", que significa azedo ou cortante. Foi formalmente associado à química pelos alquimistas medievais.'
    }
  ],
  oneMinuteSummary: [
    'Ácidos puros são substâncias moleculares covalentes.',
    'Em contato com a água, sofrem ionização (criação de íons onde antes havia ligações covalentes).',
    'Liberam o cátion hidrogênio H⁺, que se liga à água formando o íon hidrônio H₃O⁺.',
    'Soluções aquosas de ácidos conduzem eletricidade (são eletrólitos).',
    'Apresentam sabor azedo característico e mudam a coloração de indicadores químicos.'
  ],
  solvedExercises: [SOLVED_EXERCISES[0]],
  nextChapterSlug: 'arrhenius'
};
