import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH16_ACIDOS_POLIPROTICOS: Chapter = {
  id: 16,
  slug: 'acidos-poliproticos',
  title: '16. Ácidos Polipróticos',
  subtitle: 'Ionização em etapas sucessivas, constantes Ka₁ >> Ka₂ >> Ka₃ e equilíbrios simultâneos',
  description: 'Compreenda como ácidos com mais de um hidrogênio ionizável liberam seus prótons de forma sequencial e por que cada etapa sucessiva é muito mais difícil que a anterior.',
  estimatedMinutes: 16,
  learningGoals: [
    'Compreender o mecanismo de ionização em etapas de ácidos polipróticos',
    'Escrever as equações e expressões de Ka para cada etapa',
    'Explicar termodinamicamente por que Ka₁ >> Ka₂ >> Ka₃',
    'Identificar as espécies químicas presentes no equilíbrio de H₃PO₄ e H₂CO₃'
  ],
  keyConcepts: [
    'Ácidos polipróticos (dipróticos, tripróticos)',
    'Etapas sucessivas de desprotonação',
    'Constantes sucessivas (Ka₁, Ka₂, Ka₃)',
    'Atração eletrostática de Coulomb',
    'Espécies anfipróticas intermediárias'
  ],
  formulas: [
    {
      title: 'Etapas de Ionização do H₃PO₄',
      latex: 'H_3PO_4 \\rightleftharpoons H^+ + H_2PO_4^- \\quad (K_{a1} = 7{,}5 \\times 10^{-3})',
      explanation: '1ª etapa: desprotonação da molécula neutra.'
    },
    {
      title: '2ª e 3ª Etapas',
      latex: 'H_2PO_4^- \\rightleftharpoons H^+ + HPO_4^{2-} \\; (K_{a2} = 6{,}2 \\times 10^{-8}) \\quad | \\quad HPO_4^{2-} \\rightleftharpoons H^+ + PO_4^{3-} \\; (K_{a3} = 4{,}2 \\times 10^{-13})',
      explanation: 'Ka₁ é cem mil vezes maior que Ka₂, que é cem mil vezes maior que Ka₃.'
    }
  ],
  sections: [
    {
      id: 'sec-etapas-intro',
      title: 'A Ionização Ocorre aos Poucos',
      content: 'Uma molécula de ácido poliprótico não ejeta todos os seus prótons H⁺ simultaneamente de uma só vez. A perda de prótons ocorre em etapas sequenciais e sucessivas, cada uma regida pela sua própria constante de equilíbrio independente (Ka₁, Ka₂, Ka₃...).'
    },
    {
      id: 'sec-coulomb',
      title: 'Por que Ka₁ é Sempre Muito Maior que Ka₂?',
      content: 'A explicação reside na física eletrostática fundamental (Lei de Coulomb):\n1. Na primeira etapa, o próton H⁺ (positivo) está se desprendendo de uma molécula globalmente neutra (ex: H₃PO₄).\n2. Na segunda etapa, o segundo próton H⁺ precisa ser arrancado de um ânion que já possui carga negativa (H₂PO₄⁻). A atração eletrostática oposta segura o próton com muito mais força!\n3. Na terceira etapa, retirar uma carga positiva de uma espécie com carga 2- (HPO₄²⁻) exige uma energia ainda maior.\nPor isso, Ka₁ >> Ka₂ >> Ka₃ é uma lei universal e inquebrável.'
    },
    {
      id: 'sec-especies-intermediarias',
      title: 'Espécies Anfipróticas Intermediárias',
      content: 'Os ânions intermediários gerados em ácidos polipróticos (como H₂PO₄⁻, HPO₄²⁻, HCO₃⁻ e HSO₄⁻) são espécies anfipróticas: podem doar um próton atuando como ácido na etapa seguinte, ou receber um próton atuando como base na reação inversa.'
    }
  ],
  practicalExamples: [
    {
      title: 'O Sistema Fosfato nas Células',
      description: 'O par H2PO4- e HPO4^2- é o principal sistema tampão intracelular dos mamíferos, mantendo o pH citoplasmático estável em torno de 7,2 para o funcionamento das enzimas celulares.',
      category: 'Bioquímica'
    }
  ],
  commonPitfalls: [
    {
      title: 'Somar as constantes Ka',
      warning: 'Para a reação global de desprotonação completa, as constantes Ka se multiplicam, não se somam!',
      explanation: 'Ka_global = Ka₁ × Ka₂ × Ka₃. Lembre-se das regras de multiplicação de constantes de equilíbrio quando somamos reações químicas.'
    }
  ],
  didYouKnow: [
    {
      title: 'O caso especial do ácido sulfúrico',
      text: 'O H₂SO₄ é o único ácido comum onde a primeira etapa é forte (Ka₁ >> 1), mas a segunda etapa é fraca/moderada (Ka₂ = 1,2 × 10⁻²). Em soluções 0,1 M, o sulfato SO₄²⁻ coexiste com grande quantidade de HSO₄⁻.'
    }
  ],
  oneMinuteSummary: [
    'Ácidos polipróticos liberam prótons H⁺ em etapas sucessivas.',
    'Sempre se verifica Ka₁ >> Ka₂ >> Ka₃ devido à atração eletrostática crescente.',
    'É muito mais difícil retirar um cátion H⁺ de uma espécie já carregada negativamente.',
    'Os ânions intermediários (como HCO₃⁻ e H₂PO₄⁻) são anfipróticos.',
    'A constante global é o produto das etapas: Ka_global = Ka₁ × Ka₂ (× Ka₃).'
  ],
  solvedExercises: [SOLVED_EXERCISES[15]],
  prevChapterSlug: 'ka-pka',
  nextChapterSlug: 'cotidiano'
};
