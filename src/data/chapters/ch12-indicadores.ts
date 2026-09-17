import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH12_INDICADORES: Chapter = {
  id: 12,
  slug: 'indicadores',
  title: '12. Indicadores Ácido-Base',
  subtitle: 'Mudança de cor, faixa de viragem, fenolftaleína, tornassol, azul de bromotimol e indicadores naturais',
  description: 'Aprenda como substâncias químicas funcionam como "sensores ópticos de pH", mudando de cor através de equilíbrios químicos de ionização.',
  estimatedMinutes: 18,
  learningGoals: [
    'Compreender o princípio físico-químico do funcionamento de um indicador ácido-base',
    'Memorizar as cores da fenolftaleína, papel de tornassol e azul de bromotimol',
    'Interpretar a faixa de viragem e a escolha do indicador adequado para titulações',
    'Reconhecer indicadores naturais do cotidiano como o repolho roxo e chá-preto'
  ],
  keyConcepts: [
    'Indicador ácido-base',
    'Faixa de viragem de pH',
    'Fenolftaleína (incolor / rosa)',
    'Tornassol (vermelho / azul)',
    'Azul de bromotimol (amarelo / verde / azul)',
    'Equilíbrio HInd ⇌ H⁺ + Ind⁻'
  ],
  formulas: [
    {
      title: 'Equilíbrio Geral do Indicador',
      latex: 'HInd \\rightleftharpoons H^+ + Ind^-',
      explanation: 'HInd apresenta a Cor 1 (ácida) e a espécie desprotonada Ind⁻ apresenta a Cor 2 (básica).'
    }
  ],
  sections: [
    {
      id: 'sec-mecanismo',
      title: 'Como Funcionam os Indicadores?',
      content: 'Um indicador ácido-base é geralmente um ácido fraco ou base fraca orgânica cuja molécula possui uma estrutura eletrônica com ligações duplas conjugadas. Quando a molécula está protonada (com H⁺, forma HInd), ela absorve certos comprimentos de onda da luz visível e reflete uma cor (ex: amarelo). Ao doar o H⁺ em meio alcalino, a nuvem de elétrons pi se reorganiza na forma Ind⁻, passando a absorver outra faixa de luz e refletindo outra cor totalmente distinta (ex: azul).'
    },
    {
      id: 'sec-tabela-principais',
      title: 'Tabela dos Indicadores Clássicos de Laboratório',
      content: 'Três indicadores dominam o ensino médio e os laboratórios de química:\n\n1. Fenolftaleína: Incolor em pH < 8,2; Rosa vibrante/carmesim em pH > 8,2 a 10,0. É perfeita para sinalizar a presença de bases.\n\n2. Papel de Tornassol: Vermelho em meio ácido (pH < 5,0); Roxo/cinza na neutralidade; Azul em meio básico (pH > 8,0).\n\n3. Azul de Bromotimol: Amarelo em meio ácido (pH < 6,0); Verde na faixa neutra (6,0 a 7,6); Azul em meio básico (pH > 7,6).'
    },
    {
      id: 'sec-viragem',
      title: 'A Faixa de Viragem',
      content: 'Nenhum indicador muda de cor instantaneamente em um valor único e exato de pH. A transição cromática ocorre gradualmente ao longo de um intervalo de cerca de 1,5 a 2 unidades de pH, conhecido como "Faixa de Viragem". Por exemplo, o azul de bromotimol começa a mudar de amarelo para verde em pH 6,0 e só atinge o azul completo em pH 7,6.'
    }
  ],
  practicalExamples: [
    {
      title: 'Extrato de Repolho Roxo em Casa',
      description: 'Ao ferver folhas de repolho roxo, extrai-se uma solução roxa rica em antocianinas. Adicionando vinagre (ácido), ela fica vermelha intensa; com bicarbonato (base fraca), fica azul-petróleo; com água sanitária (base forte), fica verde-amarelada.',
      category: 'Experimento Doméstico'
    }
  ],
  commonPitfalls: [
    {
      title: 'A fenolftaleína serve para medir qualquer ácido?',
      warning: 'Cuidado! A fenolftaleína não diferencia água pura (pH 7) de ácido forte (pH 1).',
      explanation: 'Como a fenolftaleína só fica rosa a partir de pH 8,2, tanto em pH 1 (ácido clorídrico) quanto em pH 7 (água neutra) a solução continuará rigorosamente incolor!'
    }
  ],
  didYouKnow: [
    {
      title: 'Tornassol vem de líquens',
      text: 'O tornassol é um dos corantes químicos mais antigos da humanidade, extraído originalmente de certas espécies de líquens marinhos (como Roccella tinctoria) desde o século XIII.'
    }
  ],
  oneMinuteSummary: [
    'Indicadores são ácidos ou bases fracas que mudam de cor conforme o pH do meio.',
    'Fenolftaleína: incolor em meio ácido/neutro (pH < 8,2); rosa/carmesim em meio básico.',
    'Tornassol: vermelho em meio ácido (pH < 7); azul em meio básico (pH > 7).',
    'Azul de bromotimol: amarelo em meio ácido (pH < 6); verde em meio neutro; azul em básico.',
    'A transição gradual entre as duas cores é denominada faixa de viragem.'
  ],
  solvedExercises: [SOLVED_EXERCISES[11]],
  prevChapterSlug: 'poh',
  nextChapterSlug: 'reacoes'
};
