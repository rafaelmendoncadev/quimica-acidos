import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH18_CHUVA_ACIDA: Chapter = {
  id: 18,
  slug: 'chuva-acida',
  title: '18. Fenômeno da Chuva Ácida',
  subtitle: 'Poluição atmosférica, dióxido de enxofre (SO₂), óxidos de nitrogênio (NOx) e impactos ecológicos e patrimoniais',
  description: 'Descubra como emissões industriais e veiculares transformam a umidade das nuvens em soluções diluídas de ácidos fortes, destruindo florestas, acidificando lagos e corroendo monumentos.',
  estimatedMinutes: 18,
  learningGoals: [
    'Diferenciar a acidez natural da chuva (pH ~5,6) da chuva ácida poluente (pH < 4,5)',
    'Escrever as reações de formação dos ácidos sulfúrico e nítrico na atmosfera',
    'Explicar os danos causados a construções de mármore e monumentos históricos',
    'Compreender o impacto da lixiviação do íon alumínio (Al³⁺) sobre a fauna aquática',
    'Discutir medidas tecnológicas de mitigação (dessulfurização de gases e calagem do solo)'
  ],
  keyConcepts: [
    'Chuva ácida (pH < 5,6)',
    'Dióxido de enxofre (SO₂) e trióxido (SO₃)',
    'Óxidos de nitrogênio (NO, NO₂)',
    'Ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃)',
    'Corrosão de carbonatos (CaCO₃)',
    'Lixiviação de metais pesados'
  ],
  formulas: [
    {
      title: 'Formação Atmosférica de H₂SO₄',
      latex: '2\\,SO_2 + O_2 \\rightarrow 2\\,SO_3 \\quad \\text{e} \\quad SO_3 + H_2O \\rightarrow H_2SO_4',
      explanation: 'O enxofre presente em combustíveis fósseis queima gerando SO₂, oxidado a SO₃ nas nuvens.'
    },
    {
      title: 'Ataque ao Mármore e Calcário',
      latex: 'CaCO_{3(s)} + H_2SO_{4(aq)} \\rightarrow CaSO_{4(s)} + H_2O_{(l)} + CO_{2(g)}',
      explanation: 'O carbonato de cálcio transforma-se em sulfato de cálcio hidratado (gesso friável), desintegrando a rocha.'
    }
  ],
  sections: [
    {
      id: 'sec-por-que-acida',
      title: '1. Toda Chuva é Ácida?',
      content: 'Sim, a chuva natural sem poluição já possui pH em torno de 5,6 devido à dissolução natural do gás carbônico da respiração e vulcões:\nCO₂ + H₂O ⇌ H₂CO₃.\nNo entanto, os cientistas denominam estritamente de CHUVA ÁCIDA as precipitações com pH abaixo de 5,0 (frequentemente entre 3,0 e 4,5 em regiões industriais), provocadas pela presença de ácidos fortes (H₂SO₄ e HNO₃).'
    },
    {
      id: 'sec-origem-poluentes',
      title: '2. As Fontes dos Poluentes',
      content: '• Óxidos de Enxofre (SOx): Carvão mineral e óleo diesel contêm impurezas de enxofre elementar (S). Durante a queima em termelétricas e indústrias, formam-se toneladas de SO₂ gasoso. Nas nuvens, gotículas de água catalisam a oxidação de SO₂ a SO₃, que ao se hidratar vira ácido sulfúrico (H₂SO₄).\n\n• Óxidos de Nitrogênio (NOx): No interior dos cilindros quentes de motores de combustão veicular, o N₂ do ar atmosférico reage com o O₂ gerando óxido nítrico (NO), oxidado na atmosfera a dióxido de nitrogênio (NO₂). Reagindo com a água das nuvens, forma ácido nítrico (HNO₃) e ácido nitroso (HNO₂).'
    },
    {
      id: 'sec-impactos',
      title: '3. Consequências Ecológicas e Econômicas',
      content: '• Florestas: queima das folhas e desfolhamento em massa, destruindo a cutícula cerosa protetora das plantas.\n• Solos e Lagos: lixiviação de cátions benéficos (Ca²⁺, Mg²⁺) e liberação de cátions tóxicos de alumínio (Al³⁺), que causam o sufocamento de peixes ao bloquear suas brânquias.\n• Cidades: corrosão acelerada de estruturas metálicas de pontes, viadutos, fiações e destruição de estátuas históricas esculpidas em mármore (CaCO₃).'
    }
  ],
  practicalExamples: [
    {
      title: 'A "Peste da Pedra" nas Estátuas de Aleijadinho',
      description: 'As famosas esculturas em pedra-sabão (ricas em carbonatos) feitas pelo mestre Aleijadinho em Congonhas (MG) sofrem erosão contínua acelerada pelos gases emitidos pelo tráfego de caminhões pesados de minério na região.',
      category: 'Patrimônio Histórico'
    }
  ],
  commonPitfalls: [
    {
      title: 'Achar que a chuva ácida queima a pele ao cair',
      warning: 'A chuva ácida não dissolve a pele humana instantaneamente como em filmes de ficção.',
      explanation: 'A diluição na água das nuvens resulta em pH entre 3 e 4 (semelhante ao vinagre diluído ou suco de laranja). O dano é cumulativo, ecológico e estrutural ao longo de meses e anos de exposição contínua.'
    }
  ],
  didYouKnow: [
    {
      title: 'Chuva ácida mais intensa registrada',
      text: 'Em 1982, em Kane, na Pensilvânia (EUA), foi registrada uma chuva com pH de 1,87 — mais ácida do que vinagre puro e quase comparável ao ácido de bateria!'
    }
  ],
  oneMinuteSummary: [
    'Chuva limpa natural tem pH ~5,6 (devido ao CO₂ atmosférico).',
    'Chuva ácida poluente tem pH < 5,0 (chegando a 3,0-4,0).',
    'Principais vilões: SO₂ (queima de carvão/diesel) e NOx (motores veiculares).',
    'Gera ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃) nas nuvens.',
    'Destrói florestas, acidifica lagos (liberando Al³⁺ tóxico) e corrói monumentos de mármore (CaCO₃).'
  ],
  solvedExercises: [SOLVED_EXERCISES[17]],
  prevChapterSlug: 'cotidiano',
  nextChapterSlug: 'acidificacao-oceanos'
};
