import { GlossaryTerm } from '../types/chemistry';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'acido',
    term: 'Ácido',
    definition: 'Substância que, em solução aquosa, sofre ionização liberando como únicos cátions íons hidrogênio (H⁺ ou H₃O⁺), de acordo com a definição de Arrhenius.',
    category: 'Teoria',
    formula: 'HA + H_2O \\rightarrow H_3O^+ + A^-',
    example: 'Ácido clorídrico (HCl) no suco gástrico.',
    relatedChapterSlug: 'o-que-sao-acidos'
  },
  {
    id: 'base',
    term: 'Base',
    definition: 'Substância que, em solução aquosa, sofre dissociação iônica liberando como únicos ânions o grupo hidroxila (OH⁻).',
    category: 'Teoria',
    formula: 'BOH \\xrightarrow{H_2O} B^+ + OH^-',
    example: 'Hidróxido de sódio (NaOH), soda cáustica.',
    relatedChapterSlug: 'arrhenius'
  },
  {
    id: 'arrhenius',
    term: 'Teoria de Arrhenius',
    definition: 'Primeira teoria moderna de ácidos e bases formulada em 1884 pelo químico Svante Arrhenius, restrita ao meio aquoso.',
    category: 'Teoria',
    example: 'HCl em água libera H⁺; NaOH em água libera OH⁻.',
    relatedChapterSlug: 'arrhenius'
  },
  {
    id: 'bronsted-lowry',
    term: 'Teoria de Brønsted-Lowry',
    definition: 'Teoria protônica em que um ácido é qualquer espécie química doadora de prótons (H⁺) e uma base é qualquer receptora de prótons.',
    category: 'Teoria',
    formula: 'Ácido_1 + Base_2 \\rightleftharpoons Base_1 + Ácido_2',
    example: 'HCl + NH3 -> NH4+ + Cl- (ocorre mesmo em fase gasosa).',
    relatedChapterSlug: 'bronsted-lowry'
  },
  {
    id: 'lewis',
    term: 'Teoria de Lewis',
    definition: 'Teoria eletrônica mais abrangente onde um ácido é um receptor de par de elétrons e uma base é uma doadora de par de elétrons.',
    category: 'Teoria',
    formula: 'BF_3 + :NH_3 \\rightarrow F_3B-NH_3',
    example: 'BF3 atua como ácido de Lewis por ter octeto incompleto.',
    relatedChapterSlug: 'lewis'
  },
  {
    id: 'ionizacao',
    term: 'Ionização',
    definition: 'Fenômeno químico no qual compostos moleculares covalentes reagem com a água e dão origem a íons que antes não existiam.',
    category: 'Propriedades',
    formula: 'HCl_{(g)} + H_2O_{(l)} \\rightarrow H_3O^+_{(aq)} + Cl^-_{(aq)}',
    example: 'O gás cloreto de hidrogênio sofre ionização em água.',
    relatedChapterSlug: 'o-que-sao-acidos'
  },
  {
    id: 'dissociacao',
    term: 'Dissociação Iônica',
    definition: 'Separação de íons pré-existentes de um retículo cristalino iônico quando colocado em solvente polar, como a água.',
    category: 'Propriedades',
    formula: 'NaCl_{(s)} \\xrightarrow{H_2O} Na^+_{(aq)} + Cl^-_{(aq)}',
    example: 'Dissolução de sais e bases metálicas.',
    relatedChapterSlug: 'arrhenius'
  },
  {
    id: 'hidracido',
    term: 'Hidrácido',
    definition: 'Ácido inorgânico cuja fórmula molecular NÃO contém o elemento oxigênio.',
    category: 'Classificação',
    example: 'HCl (ácido clorídrico), HBr, HI, HF, H2S.',
    relatedChapterSlug: 'classificacao'
  },
  {
    id: 'oxiacido',
    term: 'Oxiácido',
    definition: 'Ácido inorgânico que POSSUI átomos de oxigênio em sua molécula.',
    category: 'Classificação',
    example: 'H2SO4 (ácido sulfúrico), HNO3 (ácido nítrico), H3PO4.',
    relatedChapterSlug: 'classificacao'
  },
  {
    id: 'hidronio',
    term: 'Íon Hidrônio (ou Hidroxônio)',
    definition: 'Cátion formado quando um próton livre (H⁺) se liga covalentemente a uma molécula de água.',
    category: 'Propriedades',
    formula: 'H^+ + H_2O \\rightarrow H_3O^+',
    example: 'Espécie real que confere acidez à água.',
    relatedChapterSlug: 'o-que-sao-acidos'
  },
  {
    id: 'hidrogenio-ionizavel',
    term: 'Hidrogênio Ionizável',
    definition: 'Átomo de hidrogênio ligado a um elemento de alta eletronegatividade (como oxigênio ou halogênios) capaz de ser liberado como H⁺.',
    category: 'Propriedades',
    example: 'No H3PO3, apenas 2 dos 3 hidrogênios são ionizáveis.',
    relatedChapterSlug: 'hidrogenios-ionizaveis'
  },
  {
    id: 'monoacido',
    term: 'Monoácido',
    definition: 'Ácido que libera exatamente 1 íon H⁺ por molécula durante o processo de ionização.',
    category: 'Classificação',
    example: 'HCl, HNO3, CH3COOH (ácido acético).',
    relatedChapterSlug: 'hidrogenios-ionizaveis'
  },
  {
    id: 'diacido',
    term: 'Diácido',
    definition: 'Ácido que libera 2 íons H⁺ por molécula ao sofrer ionização completa.',
    category: 'Classificação',
    example: 'H2SO4, H2CO3, H2S.',
    relatedChapterSlug: 'hidrogenios-ionizaveis'
  },
  {
    id: 'triacido',
    term: 'Triácido',
    definition: 'Ácido capaz de liberar 3 íons H⁺ por molécula.',
    category: 'Classificação',
    example: 'H3PO4 (ácido fosfórico).',
    relatedChapterSlug: 'hidrogenios-ionizaveis'
  },
  {
    id: 'grau-de-ionizacao',
    term: 'Grau de Ionização (α)',
    definition: 'Razão entre o número de moléculas ionizadas e o número total de moléculas dissolvidas inicialmente.',
    category: 'Propriedades',
    formula: '\\alpha = \\frac{\\text{moléculas ionizadas}}{\\text{moléculas dissolvidas}}',
    example: 'Se 92 de 100 moléculas ionizam, α = 0,92 (92%).',
    relatedChapterSlug: 'grau-ionizacao'
  },
  {
    id: 'acido-forte',
    term: 'Ácido Forte',
    definition: 'Ácido que possui alto grau de ionização (geralmente α ≥ 50%), liberando grande quantidade de H⁺ em solução aquosa.',
    category: 'Propriedades',
    example: 'HCl, HBr, HI, HNO3, H2SO4, HClO4.',
    relatedChapterSlug: 'forca-acidos'
  },
  {
    id: 'acido-fraco',
    term: 'Ácido Fraco',
    definition: 'Ácido que ioniza em pequena extensão (geralmente α ≤ 5%), estabelecendo equilíbrio dinâmico.',
    category: 'Propriedades',
    example: 'HF, H2CO3, H3PO4, CH3COOH.',
    relatedChapterSlug: 'forca-acidos'
  },
  {
    id: 'ph',
    term: 'Potencial Hidrogeniônico (pH)',
    definition: 'Medida logarítmica da concentração de íons hidrogênio (H⁺ ou H₃O⁺) em solução, variando de 0 a 14 a 25 °C.',
    category: 'Propriedades',
    formula: 'pH = -\\log[H^+]',
    example: 'Solução neutra tem pH = 7; ácida pH < 7.',
    relatedChapterSlug: 'ph'
  },
  {
    id: 'poh',
    term: 'Potencial Hidroxilionoberg (pOH)',
    definition: 'Medida logarítmica da concentração de íons hidroxila (OH⁻) em solução.',
    category: 'Propriedades',
    formula: 'pOH = -\\log[OH^-] \\quad \\text{e} \\quad pH + pOH = 14',
    example: 'Solução com pH = 3 possui pOH = 11.',
    relatedChapterSlug: 'poh'
  },
  {
    id: 'indicador-acido-base',
    term: 'Indicador Ácido-Base',
    definition: 'Substância química (ácido ou base fraca) que muda de cor conforme o pH do meio.',
    category: 'Propriedades',
    example: 'Fenolftaleína, Tornassol, Azul de Bromotimol.',
    relatedChapterSlug: 'indicadores'
  },
  {
    id: 'neutralizacao',
    term: 'Reação de Neutralização',
    definition: 'Reação estequiométrica entre um ácido e uma base produzindo sal e água.',
    category: 'Reações',
    formula: '\\text{Ácido} + \\text{Base} \\rightarrow \\text{Sal} + \\text{Água}',
    example: 'HCl + NaOH -> NaCl + H2O.',
    relatedChapterSlug: 'neutralizacao'
  },
  {
    id: 'neutralizacao-parcial',
    term: 'Neutralização Parcial',
    definition: 'Ocorre quando a quantidade de H⁺ não é igual à de OH⁻, originando hidrogenossais ou hidroxissais.',
    category: 'Reações',
    formula: 'H_2SO_4 + NaOH \\rightarrow NaHSO_4 + H_2O',
    example: 'Formação de bicarbonato de sódio (NaHCO3).',
    relatedChapterSlug: 'neutralizacao'
  },
  {
    id: 'ka',
    term: 'Constante de Ionização Ácida (Ka)',
    definition: 'Constante de equilíbrio termodinâmico para a ionização de um ácido em água. Quanto maior o Ka, mais forte o ácido.',
    category: 'Propriedades',
    formula: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
    example: 'O ácido acético possui Ka = 1,8 x 10⁻⁵ a 25 °C.',
    relatedChapterSlug: 'ka-pka'
  },
  {
    id: 'pka',
    term: 'pKa',
    definition: 'Cologaritmo da constante de acidez. Quanto menor o valor de pKa, mais forte é o ácido.',
    category: 'Propriedades',
    formula: 'pK_a = -\\log(K_a)',
    example: 'Ka = 10⁻³ -> pKa = 3; Ka = 10⁻⁵ -> pKa = 5.',
    relatedChapterSlug: 'ka-pka'
  },
  {
    id: 'acido-poliprotico',
    term: 'Ácido Poliprótico',
    definition: 'Ácido com dois ou mais hidrogênios ionizáveis que são liberados em etapas sucessivas, com Ka1 >> Ka2 >> Ka3.',
    category: 'Classificação',
    example: 'H3PO4 ioniza em 3 etapas sucessivas.',
    relatedChapterSlug: 'acidos-poliproticos'
  },
  {
    id: 'acido-cloridrico',
    term: 'Ácido Clorídrico (Muriático)',
    definition: 'Solução aquosa de HCl. Presente no estômago e amplamente usado na limpeza pesada de pisos e decapagem de metais.',
    category: 'Propriedades',
    formula: 'HCl',
    example: 'pH estomacal entre 1 e 2.',
    relatedChapterSlug: 'cotidiano'
  },
  {
    id: 'acido-sulfurico',
    term: 'Ácido Sulfúrico',
    definition: 'Ácido inorgânico forte, denso e oxidante, de fórmula H2SO4. É o composto químico mais produzido no mundo industrial.',
    category: 'Propriedades',
    formula: 'H_2SO_4',
    example: 'Eletrólito em baterias automotivas de chumbo-ácido.',
    relatedChapterSlug: 'cotidiano'
  },
  {
    id: 'acido-acetico',
    term: 'Ácido Acético',
    definition: 'Ácido orgânico carboxílico fraco, componente principal do vinagre de uso culinário (cerca de 4% a 5% em volume).',
    category: 'Propriedades',
    formula: 'CH_3COOH',
    example: 'Concede aroma e sabor azedo característico ao vinagre.',
    relatedChapterSlug: 'cotidiano'
  },
  {
    id: 'chuva-acida',
    term: 'Chuva Ácida',
    definition: 'Precipitação atmosférica com pH inferior a 5,6 causada pelo acúmulo de dióxido de enxofre (SO2) e óxidos de nitrogênio (NOx).',
    category: 'Ambiente',
    formula: 'SO_3 + H_2O \\rightarrow H_2SO_4',
    example: 'Corrosão de monumentos históricos de mármore (CaCO3).',
    relatedChapterSlug: 'chuva-acida'
  },
  {
    id: 'acidificacao-oceanica',
    term: 'Acidificação dos Oceanos',
    definition: 'Redução do pH marinho provocada pela absorção continuada de excesso de CO2 atmosférico gerado por combustíveis fósseis.',
    category: 'Ambiente',
    formula: 'CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-',
    example: 'Dificulta a calcificação de corais e moluscos marinhos.',
    relatedChapterSlug: 'acidificacao-oceanos'
  },
  {
    id: 'eletrolito',
    term: 'Eletrólito',
    definition: 'Substância que, quando dissolvida em água ou fundida, produz íons livres capazes de conduzir corrente elétrica.',
    category: 'Propriedades',
    example: 'Ácidos fortes em solução aquosa são excelentes condutores.',
    relatedChapterSlug: 'o-que-sao-acidos'
  },
  {
    id: 'par-conjugado',
    term: 'Par Conjugado Ácido-Base',
    definition: 'Duas espécies químicas que diferem entre si pela presença ou ausência de exatamente um próton (H⁺).',
    category: 'Teoria',
    formula: 'HCl \\; (\\text{ácido}) \\quad \\text{e} \\quad Cl^- \\; (\\text{base conjugada})',
    example: 'NH3 (base) e NH4+ (ácido conjugado).',
    relatedChapterSlug: 'bronsted-lowry'
  }
];
