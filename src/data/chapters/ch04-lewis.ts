import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH04_LEWIS: Chapter = {
  id: 4,
  slug: 'lewis',
  title: '04. Teoria de Lewis',
  subtitle: 'A teoria eletrônica geral: pares de elétrons, orbitais vazios e ligações coordenadas',
  description: 'Conheça a teoria mais ampla e abrangente da química moderna, que explica a acidez até mesmo em espécies que sequer possuem hidrogênio em sua fórmula.',
  estimatedMinutes: 16,
  learningGoals: [
    'Compreender a definição de ácido e base de Lewis pelo compartilhamento de elétrons',
    'Identificar orbitais vazios e pares de elétrons isolados (não ligantes)',
    'Explicar a formação de adutos e ligações covalentes coordenadas',
    'Reconhecer cátions metálicos como ácidos de Lewis em complexos inorgânicos'
  ],
  keyConcepts: [
    'Teoria eletrônica de Lewis',
    'Ácido de Lewis: receptor de par de elétrons',
    'Base de Lewis: doadora de par de elétrons',
    'Octeto incompleto (ex: BF₃, AlCl₃)',
    'Ligação covalente coordenada (aduto)'
  ],
  formulas: [
    {
      title: 'Reação Geral de Lewis',
      latex: 'A + :B \\rightarrow A-B',
      explanation: 'O ácido (A) aceita o par eletrônico disponibilizado pela base (:B), formando um aduto.'
    },
    {
      title: 'Aduto BF₃ e NH₃',
      latex: 'BF_3 + :NH_3 \\rightarrow F_3B-NH_3',
      explanation: 'O boro com octeto incompleto aceita o par do nitrogênio da amônia.'
    }
  ],
  sections: [
    {
      id: 'sec-lewis-intro',
      title: 'A Teoria Eletrônica (1923)',
      content: 'Também em 1923, o norte-americano Gilbert Newton Lewis propôs que a essência de qualquer reação química ácido-base reside no comportamento dos elétrons, e não na transferência de prótons. Ácido de Lewis é qualquer espécie química que recebe um par de elétrons livres para formar uma ligação coordenada; Base de Lewis é qualquer espécie química que doa um par de elétrons livres.'
    },
    {
      id: 'sec-octeto',
      title: 'Octeto Incompleto e Espécies Ácidas sem Hidrogênio',
      content: 'A teoria de Lewis resolveu um mistério intrigante: compostos como o trifluoreto de boro (BF₃) e o cloreto de alumínio (AlCl₃) se comportam como ácidos intensos em síntese orgânica, embora não tenham nenhum átomo de H. No BF₃, o boro central possui apenas 6 elétrons na camada de valência (três pares compartilhados), restando um orbital "p" vazio pronto para receber um par de elétrons.'
    },
    {
      id: 'sec-metais',
      title: 'Cátions Metálicos como Ácidos de Lewis',
      content: 'Íons metálicos de transição com alta densidade de carga (como Fe³⁺, Cu²⁺, Ag⁺) atuam como vigorosos ácidos de Lewis ao atrair ligantes neutros ricos em elétrons (como H₂O ou NH₃), formando os chamados complexos de coordenação.'
    }
  ],
  practicalExamples: [
    {
      title: 'Complexação de Cobre por Amônia',
      description: 'Cu2+ + 4 NH3 -> [Cu(NH3)4]2+. Cátion cobre(II) atua como ácido de Lewis aceitando 4 pares de elétrons de 4 moléculas de amônia, gerando uma solução azul-escura deslumbrante.',
      formula: 'Cu^{2+} + 4\\,:NH_3 \\rightarrow [Cu(NH_3)_4]^{2+}'
    },
    {
      title: 'Hidratação de Cátions de Ferro',
      description: 'Fe3+ + 6 H2O -> [Fe(H2O)6]3+. Cada molécula de água doa um par de elétrons do oxigênio para os orbitais vazios do Fe3+.',
      formula: 'Fe^{3+} + 6\\,H_2O \\rightarrow [Fe(H_2O)_6]^{3+}'
    }
  ],
  commonPitfalls: [
    {
      title: 'Ácido precisa ter H na fórmula?',
      warning: 'Cuidado! Para Lewis, um composto NÃO precisa conter hidrogênio para ser ácido.',
      explanation: 'Basta que a espécie possua um orbital vazio de baixa energia disponível para receber um par de elétrons.'
    }
  ],
  didYouKnow: [
    {
      title: 'Indicado 41 vezes ao Nobel',
      text: 'Gilbert N. Lewis foi um dos químicos mais influentes da história (criador da regra do octeto, das estruturas de pontos de Lewis e da teoria de ácidos), mas faleceu sem nunca receber o Prêmio Nobel, em grande parte por desavenças com a Academia Sueca.'
    }
  ],
  oneMinuteSummary: [
    'Ácido de Lewis: receptor de par de elétrons (possui orbital vazio).',
    'Base de Lewis: doadora de par de elétrons (possui par de elétrons não ligante).',
    'A reação entre eles forma uma ligação covalente coordenada (aduto).',
    'É a teoria mais geral de todas: engloba Brønsted-Lowry e Arrhenius.',
    'Explica a acidez de óxidos ácidos e cátions metálicos em complexos.'
  ],
  solvedExercises: [SOLVED_EXERCISES[3]],
  prevChapterSlug: 'bronsted-lowry',
  nextChapterSlug: 'classificacao'
};
