import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH17_COTIDIANO: Chapter = {
  id: 17,
  slug: 'cotidiano',
  title: '17. Ácidos no Cotidiano',
  subtitle: 'Aplicações domésticas, biológicas e industriais dos ácidos que movem o mundo moderno',
  description: 'Explore a presença massiva dos ácidos na sua rotina: da digestão no estômago e conservação de alimentos até baterias de carros e fabricação de fertilizantes.',
  estimatedMinutes: 18,
  learningGoals: [
    'Identificar os principais ácidos presentes em alimentos e bebidas',
    'Compreender o papel do ácido clorídrico no sistema digestório humano',
    'Conhecer o papel industrial estratégico do ácido sulfúrico e nítrico',
    'Reconhecer medidas de segurança essenciais no manuseio doméstico e laboratorial de ácidos'
  ],
  keyConcepts: [
    'Ácido acético (vinagre)',
    'Ácido clorídrico (suco gástrico e muriático)',
    'Ácido cítrico e ascórbico (frutas e vitaminas)',
    'Ácido fosfórico (refrigerantes e fertilizantes)',
    'Ácido sulfúrico (baterias e indústria pesada)',
    'Regra de diluição: nunca coloque água no ácido!'
  ],
  formulas: [
    {
      title: 'Principais Fórmulas do Cotidiano',
      latex: 'HCl \\text{ (clorídrico)} \\quad | \\quad CH_3COOH \\text{ (acético)} \\quad | \\quad H_2SO_4 \\text{ (sulfúrico)} \\quad | \\quad H_3PO_4 \\text{ (fosfórico)}',
      explanation: 'Compostos que permeiam a biologia, nutrição e tecnologia energética.'
    }
  ],
  sections: [
    {
      id: 'sec-alimentos',
      title: '1. Ácidos na Alimentação e Farmácia',
      content: '• Vinagre: contém ácido acético (CH₃COOH) a 4-5%, conservante milenar.\n• Limão, Laranja e Acerola: contêm ácido cítrico (C₆H₈O₇) e ácido ascórbico (vitamina C, C₆H₈O₆), potente antioxidante.\n• Refrigerantes tipo Cola: contêm ácido fosfórico (H₃PO₄), que atua como acidulante, conferindo acidez que mascara a doçura do excesso de açúcar.\n• Maçã e Pêra: contêm ácido málico.\n• Iogurtes e Queijos: contêm ácido lático, produzido pela fermentação de bactérias lácticas a partir da lactose do leite.\n• Aspirina: ácido acetilsalicílico (AAS), analgésico e anti-inflamatório clássico.'
    },
    {
      id: 'sec-industria',
      title: '2. Ácidos na Indústria Pesada',
      content: '• Ácido Sulfúrico (H₂SO₄): o produto químico mais fabricado no mundo. Usado na síntese de fertilizantes agrícolas (superfosfatos), no refino de derivados de petróleo, na fabricação de tintas, detergentes e como eletrólito de baterias de veículos automotores.\n• Ácido Nítrico (HNO₃): matéria-prima essencial para a síntese de fertilizantes nitrogenados (como nitrato de amônio) e explosivos militares e de mineração (TNT, nitroglicerina).\n• Ácido Muriático (HCl técnico): usado na decapagem de peças de aço antes da galvanização e na limpeza pesada de pisos e resíduos de argamassa na construção civil.'
    },
    {
      id: 'sec-seguranca',
      title: '3. Regra de Ouro da Segurança em Laboratório',
      content: 'A diluição de ácidos fortes (especialmente H₂SO₄) é um processo fortemente exotérmico (libera gigantesca quantidade de calor). Se você jogar água sobre ácido sulfúrico concentrado, a primeira gota de água ferve instantaneamente ao tocar a superfície densa do ácido, provocando respingos violentos e queimaduras químicas graves.\n\nRegra mnemônica de ouro:\n"NUNCA dê água para o ácido; adicione sempre o ÁCIDO LENTAMENTE SOBRE A ÁGUA, escorrendo pelas paredes do frasco sob agitação constante!"'
    }
  ],
  practicalExamples: [
    {
      title: 'Por que o ácido queima a pele?',
      description: 'Ácidos fortes como H2SO4 destroem tecidos vivos por desidratação extrema (retiram quimicamente água das moléculas biológicas) e por hidrólise ácida das ligações peptídicas que formam as proteínas celulares.',
      category: 'Segurança'
    }
  ],
  commonPitfalls: [
    {
      title: 'Armazenar ácido fluorídrico em vidro',
      warning: 'Cuidado! O HF é o único ácido que reage diretamente com o vidro.',
      explanation: 'O ácido fluorídrico (HF) corrói recipientes de vidro atacando a sílica (SiO₂). Deve ser sempre estocado em frascos de polietileno de alta densidade ou teflon.'
    }
  ],
  didYouKnow: [
    {
      title: 'O ácido estomacal dissolve metais',
      text: 'O ácido clorídrico do estômago humano é tão forte que seria capaz de dissolver pequenos pregos de ferro ou lâminas de barbear caso chegassem ao órgão, graças à acidez de pH 1,5!'
    }
  ],
  oneMinuteSummary: [
    'Vinagre = Ácido acético (CH₃COOH).',
    'Suco gástrico e ácido muriático = Ácido clorídrico (HCl).',
    'Frutas cítricas = Ácido cítrico e vitamina C (ácido ascórbico).',
    'Refrigerantes de cola = Ácido fosfórico (H₃PO₄).',
    'Bateria de automóveis = Ácido sulfúrico (H₂SO₄).',
    'Regra de segurança vital: SEMPRE adicione ácido sobre a água, NUNCA água sobre o ácido!'
  ],
  solvedExercises: [SOLVED_EXERCISES[16]],
  prevChapterSlug: 'acidos-poliproticos',
  nextChapterSlug: 'chuva-acida'
};
