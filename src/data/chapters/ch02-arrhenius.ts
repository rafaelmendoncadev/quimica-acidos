import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH02_ARRHENIUS: Chapter = {
  id: 2,
  slug: 'arrhenius',
  title: '02. Teoria de Arrhenius',
  subtitle: 'A primeira teoria científica moderna sobre ácidos, bases e ionização em meio aquoso',
  description: 'Compreenda a definição clássica de Arrhenius de 1884, o papel exclusivo da água como solvente e as limitações históricas que levaram a teorias mais amplas.',
  estimatedMinutes: 15,
  learningGoals: [
    'Dominar a definição formal de ácido e base de Arrhenius',
    'Escrever equações de ionização em água balanceadas',
    'Diferenciar dissociação iônica de ionização',
    'Identificar as limitações da teoria de Arrhenius'
  ],
  keyConcepts: [
    'Teoria de Arrhenius',
    'Solvente aquoso obrigatório',
    'Liberação de cátions H⁺',
    'Dissociação iônica vs Ionização',
    'Limitações em solventes não aquosos'
  ],
  formulas: [
    {
      title: 'Definição de Ácido de Arrhenius',
      latex: 'HA_{(aq)} \\xrightarrow{H_2O} H^+_{(aq)} + A^-_{(aq)}',
      explanation: 'Ácido libera exclusivamente o cátion H⁺ em meio aquoso.'
    },
    {
      title: 'Definição de Base de Arrhenius',
      latex: 'BOH_{(aq)} \\xrightarrow{H_2O} B^+_{(aq)} + OH^-_{(aq)}',
      explanation: 'Base libera exclusivamente o ânion hidroxila (OH⁻) em meio aquoso.'
    }
  ],
  sections: [
    {
      id: 'sec-historia',
      title: 'A Revolução Eletrolítica de Svante Arrhenius',
      content: 'Em 1884, em sua tese de doutorado na Universidade de Uppsala (Suécia), o jovem Svante Arrhenius propôs que certos compostos químicos se partiam em partículas eletricamente carregadas (íons) ao serem dissolvidos em água pura. Inicialmente ridicularizada pela banca avaliadora, sua teoria eletrolítica rendeu-lhe o Prêmio Nobel de Química em 1903.'
    },
    {
      id: 'sec-conceito',
      title: 'Definição de Ácido e Base de Arrhenius',
      content: 'Ácido de Arrhenius é toda substância molecular que, em solução aquosa, sofre ionização, liberando como único cátion o íon hidrogênio (H⁺). Em contrapartida, Base de Arrhenius é toda substância que, em solução aquosa, sofre dissociação iônica, liberando como único ânion o íon hidroxila (OH⁻).'
    },
    {
      id: 'sec-limitacoes',
      title: 'As Limitações da Teoria de Arrhenius',
      content: 'Embora tenha sido fundamental para o desenvolvimento da físico-química, a teoria de Arrhenius apresenta duas limitações severas: 1) Dependência absoluta da água: não explica o comportamento ácido-base em solventes como benzeno, amônia líquida ou álcool; 2) Não explica reações em fase gasosa: a clássica reação HCl(g) + NH₃(g) → NH₄Cl(s) forma sal instantaneamente no ar sem nenhuma gota de água presente.'
    }
  ],
  practicalExamples: [
    {
      title: 'Ionização do Ácido Clorídrico',
      description: 'HCl(aq) -> H+(aq) + Cl-(aq). Exemplo clássico de monoácido forte de Arrhenius.',
      formula: 'HCl \\rightarrow H^+ + Cl^-'
    },
    {
      title: 'Ionização do Ácido Sulfúrico',
      description: 'H2SO4(aq) -> 2 H+(aq) + SO4^2-(aq). Libera dois prótons H+ por molécula.',
      formula: 'H_2SO_4 \\rightarrow 2\\,H^+ + SO_4^{2-}'
    }
  ],
  commonPitfalls: [
    {
      title: 'Ácido fora da água é de Arrhenius?',
      warning: 'Cuidado! Fora da água líquida, não existe ácido nem base de Arrhenius.',
      explanation: 'Para a definição de Arrhenius, a presença de solvente aquoso é condição mandatória e inegociável.'
    }
  ],
  didYouKnow: [
    {
      title: 'Nota mínima para o Nobel',
      text: 'A banca de doutorado de Arrhenius concedeu-lhe a nota mínima (quarta classe) por considerar absurda a ideia de que moléculas estáveis pudessem se romper espontaneamente em íons na água. Dezenove anos depois, a mesma teoria rendeu-lhe o Nobel!'
    }
  ],
  oneMinuteSummary: [
    'Ácido de Arrhenius: em água, sofre ionização e libera como único cátion o H⁺.',
    'Base de Arrhenius: em água, dissocia e libera como único ânion o OH⁻.',
    'A teoria exige obrigatoriamente a presença de água líquida como solvente.',
    'Ácidos sofrem ionização (criação de íons); bases metálicas sofrem dissociação (separação de íons).',
    'Limitação: não explica reações em solventes não aquosos ou em fase gasosa.'
  ],
  solvedExercises: [SOLVED_EXERCISES[1]],
  prevChapterSlug: 'o-que-sao-acidos',
  nextChapterSlug: 'bronsted-lowry'
};
