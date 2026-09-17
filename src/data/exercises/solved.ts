import { SolvedExercise } from '../../types/chemistry';

export const SOLVED_EXERCISES: SolvedExercise[] = [
  // Capítulo 1: O que são ácidos?
  {
    id: 'res-01',
    title: 'Ionização do Gás Cloreto de Hidrogênio',
    question: 'Explique por que o cloreto de hidrogênio (HCl) em estado gasoso é um mau condutor de eletricidade, mas ao ser borbulhado em água líquida passa a conduzir corrente elétrica com alta eficiência.',
    givenData: [
      'Composto: HCl (cloreto de hidrogênio)',
      'Ligação no gás: covalente polar',
      'Solvente: H2O (molécula polar com momentos dipolares permanentes)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Análise do estado gasoso puro',
        detail: 'No estado gasoso, as moléculas de HCl estão isoladas com ligações covalentes simples. Não existem cargas livres em trânsito (íons ou elétrons livres), inviabilizando a condução elétrica.',
      },
      {
        stepNumber: 2,
        title: 'Interação com a água e ionização',
        detail: 'Ao ser dissolvido em água, os dipolos da água interagem intensamente com o polo positivo do hidrogênio e o polo negativo do cloro, quebrando a ligação covalente e originando íons hidratados.',
        mathLatex: 'HCl_{(g)} + H_2O_{(l)} \\rightarrow H_3O^+_{(aq)} + Cl^-_{(aq)}'
      },
      {
        stepNumber: 3,
        title: 'Formação de solução eletrolítica',
        detail: 'Os íons H3O+ (hidrônio) e Cl- (cloreto) dispersos na solução aquosa adquirem mobilidade livre sob a ação de um campo elétrico, tornando a solução condutora.',
      }
    ],
    finalAnswer: 'O HCl gasoso é molecular e não tem íons; em água sofre ionização, gerando cátions H3O+ e ânions Cl- livres para transportar cargas.',
    explanation: 'A condução em soluções aquosas requer espécies eletricamente carregadas com liberdade de translação (íons móveis).'
  },

  // Capítulo 2: Teoria de Arrhenius
  {
    id: 'res-02',
    title: 'Equação de Ionização segundo Arrhenius',
    question: 'Escreva a equação de ionização em água do ácido sulfúrico (H2SO4) segundo a teoria clássica de Arrhenius e identifique os íons produzidos.',
    givenData: [
      'Fórmula: H2SO4',
      'Classificação de Arrhenius: diácido forte'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação dos hidrogênios ionizáveis',
        detail: 'A molécula do ácido sulfúrico possui 2 átomos de hidrogênio ionizáveis ligados a oxigênios.',
      },
      {
        stepNumber: 2,
        title: 'Ionização total segundo Arrhenius',
        detail: 'Arrhenius representava a ionização considerando a liberação direta de íons H+ em meio aquoso.',
        mathLatex: 'H_2SO_4 \\xrightarrow{H_2O} 2\\,H^+_{(aq)} + SO_4^{2-}_{(aq)}'
      }
    ],
    finalAnswer: 'H2SO4 -> 2 H+ + SO4^2-. Os íons formados são 2 cátions hidrogênio (H+) e 1 ânion sulfato (SO4^2-).',
    explanation: 'Para Arrhenius, ácido é toda substância que em solução aquosa se ioniza liberando exclusivamente como cátion o H+.'
  },

  // Capítulo 3: Brønsted-Lowry
  {
    id: 'res-03',
    title: 'Identificação de Pares Conjugados de Brønsted-Lowry',
    question: 'Na reação entre o ácido acético e a água: CH3COOH + H2O ⇌ CH3COO- + H3O+, identifique o ácido, a base, a base conjugada e o ácido conjugado.',
    givenData: [
      'Equação: CH3COOH + H2O ⇌ CH3COO- + H3O+',
      'Definição de Brønsted: Ácido = doador de próton (H+); Base = receptora de próton'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Análise do CH3COOH',
        detail: 'O ácido acético doa um próton H+ para a molécula de água, convertendo-se em CH3COO-. Logo, CH3COOH é o ácido 1 e CH3COO- é sua base conjugada 1.',
      },
      {
        stepNumber: 2,
        title: 'Análise da água (H2O)',
        detail: 'A água recebe o próton H+, transformando-se em H3O+. Logo, H2O atua como base 2 e H3O+ é seu ácido conjugado 2.',
        mathLatex: '\\underbrace{CH_3COOH}_{\\text{Ácido 1}} + \\underbrace{H_2O}_{\\text{Base 2}} \\rightleftharpoons \\underbrace{CH_3COO^-}_{\\text{Base conjugada 1}} + \\underbrace{H_3O^+}_{\\text{Ácido conjugado 2}}'
      }
    ],
    finalAnswer: 'Ácido: CH3COOH; Base: H2O; Base conjugada: CH3COO-; Ácido conjugado: H3O+.',
    explanation: 'Um par conjugado difere unicamente pela presença ou ausência de um único próton H+.'
  },

  // Capítulo 4: Teoria de Lewis
  {
    id: 'res-04',
    title: 'Classificação de Lewis para a Reação BF3 + NH3',
    question: 'Justifique detalhadamente por que a substância trifluoreto de boro (BF3) atua como ácido de Lewis ao reagir com a amônia (NH3).',
    givenData: [
      'BF3: Boro do grupo 13, rodeado por 6 elétrons na camada de valência (octeto incompleto)',
      'NH3: Nitrogênio do grupo 15, possui 1 par de elétrons isolado (não ligante)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Estrutura eletrônica do boro no BF3',
        detail: 'O boro no BF3 faz 3 ligações covalentes simples com os átomos de flúor, totalizando 6 elétrons na valência, possuindo um orbital "p" vazio capaz de receber um par eletrônico.',
      },
      {
        stepNumber: 2,
        title: 'Estrutura eletrônica da amônia',
        detail: 'O nitrogênio do NH3 tem 8 elétrons na valência, sendo 3 pares compartilhados com H e 1 par não ligante disponível para doação.',
      },
      {
        stepNumber: 3,
        title: 'Formação da ligação coordenada (aduto)',
        detail: 'O NH3 doa seu par não ligante para o orbital vazio do boro.',
        mathLatex: 'BF_3 + :NH_3 \\rightarrow F_3B-NH_3'
      }
    ],
    finalAnswer: 'O BF3 é um ácido de Lewis porque atua como receptor de um par de elétrons proveniente do nitrogênio da amônia.',
    explanation: 'Segundo Lewis, ácido é receptor de par de elétrons e base é doadora de par de elétrons.'
  },

  // Capítulo 5: Classificação dos ácidos
  {
    id: 'res-05',
    title: 'Classificação entre Hidrácidos e Oxiácidos',
    question: 'Classifique os seguintes ácidos em hidrácidos ou oxiácidos: HCl, HNO3, H2S, H3PO4, HBr e H2CO3.',
    givenData: [
      'Critério: presença ou ausência do elemento químico Oxigênio (O)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação dos hidrácidos (sem oxigênio)',
        detail: 'HCl, HBr e H2S não contêm oxigênio em suas fórmulas moleculares.',
      },
      {
        stepNumber: 2,
        title: 'Identificação dos oxiácidos (com oxigênio)',
        detail: 'HNO3, H3PO4 e H2CO3 contêm oxigênio ligado à estrutura molecular.',
      }
    ],
    finalAnswer: 'Hidrácidos: HCl, H2S, HBr. Oxiácidos: HNO3, H3PO4, H2CO3.',
    explanation: 'A presença do elemento oxigênio define formalmente a classe dos oxiácidos na nomenclatura inorgânica.'
  },

  // Capítulo 6: Hidrogênios ionizáveis
  {
    id: 'res-06',
    title: 'Pegadinha Clássica: Número de H+ no H3PO3',
    question: 'Embora possua 3 átomos de hidrogênio em sua fórmula molecular, o ácido fosforoso (H3PO3) é classificado como diácido. Explique com base na sua estrutura molecular.',
    givenData: [
      'Composto: H3PO3 (ácido fosforoso)',
      'Condição de ionização: o H precisa estar ligado a um átomo muito eletronegativo (Oxigênio)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Análise da fórmula estrutural do H3PO3',
        detail: 'No H3PO3, o átomo central de fósforo está ligado a 1 oxigênio por ligação dupla (P=O), a 2 grupos hidroxila (P-OH) e diretamente a 1 átomo de hidrogênio (P-H).',
      },
      {
        stepNumber: 2,
        title: 'Eletronegatividade P vs O',
        detail: 'A ligação P-H tem baixíssima polaridade (eletronegatividades de P e H são quase idênticas: 2,19 e 2,20). A água não consegue romper covalentemente essa ligação heteroliticamente.',
      },
      {
        stepNumber: 3,
        title: 'Contagem dos hidrogênios ionizáveis',
        detail: 'Apenas os 2 hidrogênios ligados aos oxigênios nas hidroxilas sofrem ionização.',
        mathLatex: 'H_3PO_3 \\xrightarrow{H_2O} 2\\,H^+ + HPO_3^{2-}'
      }
    ],
    finalAnswer: 'O H3PO3 é um diácido porque possui apenas 2 hidrogênios ionizáveis (ligados a oxigênios). O terceiro H está ligado diretamente ao fósforo e não se ioniza.',
    explanation: 'Nunca deduza a acidez de Arrhenius apenas pela contagem bruta de hidrogênios na fórmula empírica.'
  },

  // Capítulo 7: Nomenclatura dos ácidos
  {
    id: 'res-07',
    title: 'Nomenclatura da Série do Cloro (Oxiácidos)',
    question: 'Dê os nomes oficiais dos oxiácidos formados pelo elemento cloro: HClO, HClO2, HClO3 e HClO4, indicando o número de oxidação (Nox) do cloro.',
    givenData: [
      'H = +1, O = -2',
      'Sufixos e prefixos: Nox +1 (hipo...oso), +3 (...oso), +5 (...ico), +7 (per...ico)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo do Nox do Cl em cada molécula',
        detail: 'HClO: +1 + Cl - 2 = 0 -> Cl = +1. HClO2: +1 + Cl - 4 = 0 -> Cl = +3. HClO3: +1 + Cl - 6 = 0 -> Cl = +5. HClO4: +1 + Cl - 8 = 0 -> Cl = +7.',
      },
      {
        stepNumber: 2,
        title: 'Aplicação das regras de nomenclatura',
        detail: 'Nox +1 -> ácido hipocloroso. Nox +3 -> ácido cloroso. Nox +5 -> ácido clórico. Nox +7 -> ácido perclórico.',
      }
    ],
    finalAnswer: 'HClO: Ácido hipocloroso (Nox +1); HClO2: Ácido cloroso (Nox +3); HClO3: Ácido clórico (Nox +5); HClO4: Ácido perclórico (Nox +7).',
    explanation: 'O prefixo e sufixo dos oxiácidos variam estritamente de acordo com o estado de oxidação do elemento central.'
  },

  // Capítulo 8: Força dos ácidos
  {
    id: 'res-08',
    title: 'Regra de Pauling para Força de Oxiácidos',
    question: 'Utilizando a regra de Pauling (m = quantidade de oxigênios - quantidade de hidrogênios ionizáveis), determine a força dos seguintes oxiácidos: HNO3, H2SO4, H3PO4 e HClO.',
    givenData: [
      'Fórmula geral: HaXOb',
      'Critério m = b - a: se m = 3 (muito forte), m = 2 (forte), m = 1 (moderado), m = 0 (fraco)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo do valor m para cada ácido',
        detail: 'HNO3: 3 - 1 = 2 (forte). H2SO4: 4 - 2 = 2 (forte). H3PO4: 4 - 3 = 1 (moderado). HClO: 1 - 1 = 0 (fraco).',
        mathLatex: 'm = \\text{nº de átomos de O} - \\text{nº de H ionizáveis}'
      },
      {
        stepNumber: 2,
        title: 'Classificação segundo o critério de Pauling',
        detail: 'Ácidos com m >= 2 são classificados como fortes; m = 1 como moderados; m = 0 como fracos.'
      }
    ],
    finalAnswer: 'HNO3: Forte (m=2); H2SO4: Forte (m=2); H3PO4: Moderado (m=1); HClO: Fraco (m=0).',
    explanation: 'Quanto mais oxigênios livres não protonados existem na molécula, maior a atração de elétrons do átomo central, enfraquecendo a ligação O-H e facilitando a liberação de H+.'
  },

  // Capítulo 9: Grau de ionização
  {
    id: 'res-09',
    title: 'Cálculo de Alfa (Grau de Ionização)',
    question: 'Em um experimento, 500 moléculas de um ácido genérico HA foram dissolvidas em água pura. Ao se atingir o equilíbrio químico a 25 °C, constatou-se que apenas 15 moléculas se encontravam ionizadas. Calcule o grau de ionização (α) em porcentagem e classifique a força do ácido.',
    givenData: [
      'Moléculas iniciais dissolvidas = 500',
      'Moléculas ionizadas = 15'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Aplicação da fórmula do grau de ionização',
        detail: 'Calcula-se a razão entre moléculas ionizadas e dissolvidas.',
        mathLatex: '\\alpha = \\frac{15}{500} = 0{,}03'
      },
      {
        stepNumber: 2,
        title: 'Conversão para porcentagem',
        detail: 'Multiplica-se por 100.',
        mathLatex: '\\alpha\\% = 0{,}03 \\times 100 = 3\\%'
      },
      {
        stepNumber: 3,
        title: 'Classificação da força',
        detail: 'Como α = 3% (menor ou igual a 5%), o ácido é classificado como fraco.',
      }
    ],
    finalAnswer: 'α = 3%. O ácido é fraco.',
    explanation: 'Ácidos com α ≤ 5% são fracos, entre 5% e 50% moderados, e ≥ 50% fortes.'
  },

  // Capítulo 10: pH
  {
    id: 'res-10',
    title: 'Cálculo de pH de Solução de HCl',
    question: 'Uma solução aquosa de ácido clorídrico (HCl), ácido monoprótico forte com 100% de ionização, possui concentração de 0,001 mol/L a 25 °C. Calcule o valor do seu pH.',
    givenData: [
      'Concentração de HCl = 0,001 mol/L = 10^-3 mol/L',
      'Ionização total: [H+] = [HCl]'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Determinação da concentração de íons H+',
        detail: 'Por se tratar de monoácido forte com 100% de ionização: [H+] = 0,001 mol/L = 10^-3 mol/L.',
      },
      {
        stepNumber: 2,
        title: 'Aplicação da definição matemática de pH',
        detail: 'Substitui-se a concentração na equação logarítmica de Sorensen.',
        mathLatex: 'pH = -\\log[H^+] = -\\log(10^{-3}) = -(-3) = 3'
      }
    ],
    finalAnswer: 'pH = 3.',
    explanation: 'Como pH < 7, a solução é francamente ácida, típica de soluções diluídas de ácidos fortes.'
  },

  // Capítulo 11: pOH
  {
    id: 'res-11',
    title: 'Relação entre pH e pOH',
    question: 'Uma amostra de água residual de lavagem industrial a 25 °C apresentou concentração de íons hidroxila [OH-] igual a 1,0 × 10^-4 mol/L. Determine o pOH e o pH dessa solução.',
    givenData: [
      '[OH-] = 1,0 × 10^-4 mol/L',
      'Condição: 25 °C (pH + pOH = 14)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo do pOH',
        detail: 'Aplica-se o logaritmo da concentração de OH-.',
        mathLatex: 'pOH = -\\log[OH^-] = -\\log(10^{-4}) = 4'
      },
      {
        stepNumber: 2,
        title: 'Cálculo do pH correspondente',
        detail: 'Utiliza-se a relação fundamental do produto iônico da água Kw.',
        mathLatex: 'pH + pOH = 14 \\implies pH = 14 - 4 = 10'
      }
    ],
    finalAnswer: 'pOH = 4 e pH = 10.',
    explanation: 'Com pH = 10, o meio é básico (alcalino), pois a concentração de OH- é maior que a de H+.'
  },

  // Capítulo 12: Indicadores ácido-base
  {
    id: 'res-12',
    title: 'Comportamento da Fenolftaleína e Azul de Bromotimol',
    question: 'Em três tubos de ensaio contendo soluções aquosas incolores X (pH = 2), Y (pH = 7) e Z (pH = 11), adicionam-se gotas de fenolftaleína. Quais cores serão observadas nos tubos? E se fosse usado azul de bromotimol?',
    givenData: [
      'Tubo X: pH = 2 (ácido)',
      'Tubo Y: pH = 7 (neutro)',
      'Tubo Z: pH = 11 (básico)',
      'Fenolftaleína: incolor em pH < 8,2; rosa em pH > 8,2',
      'Azul de bromotimol: amarelo em pH < 6; verde em pH ~7; azul em pH > 7,6'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Análise com Fenolftaleína',
        detail: 'Tubo X (pH 2) e Tubo Y (pH 7) permanecem incolores. Tubo Z (pH 11) adquire coloração rosa/carmesim intensa.',
      },
      {
        stepNumber: 2,
        title: 'Análise com Azul de Bromotimol',
        detail: 'Tubo X fica amarelo; Tubo Y fica verde; Tubo Z fica azul.',
      }
    ],
    finalAnswer: 'Com fenolftaleína: X incolor, Y incolor, Z rosa. Com azul de bromotimol: X amarelo, Y verde, Z azul.',
    explanation: 'A fenolftaleína é específica para revelar meio básico porque sua faixa de viragem situa-se acima de pH 8,2.'
  },

  // Capítulo 13: Reações dos ácidos
  {
    id: 'res-13',
    title: 'Ataque de Ácido a Metal Ativo',
    question: 'Escreva e balanceie a equação química da reação entre o ácido clorídrico (HCl) aquoso e o metal zinco (Zn) sólido, indicando o gás desprendido.',
    givenData: [
      'Reagentes: HCl(aq) e Zn(s)',
      'Regra: Ácido + Metal ativo -> Sal + H2(g)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação dos produtos',
        detail: 'O zinco é mais reativo que o hidrogênio na fila de reatividade dos metais, sofrendo oxidação para Zn2+ e formando o sal cloreto de zinco (ZnCl2). Os íons H+ são reduzidos a gás hidrogênio (H2).',
      },
      {
        stepNumber: 2,
        title: 'Balanceamento estequiométrico',
        detail: 'São necessários 2 mols de HCl para cada 1 mol de Zn.',
        mathLatex: 'Zn_{(s)} + 2\\,HCl_{(aq)} \\rightarrow ZnCl_{2(aq)} + H_{2(g)}'
      }
    ],
    finalAnswer: 'Zn(s) + 2 HCl(aq) -> ZnCl2(aq) + H2(g). O gás liberado é o gás hidrogênio (H2).',
    explanation: 'O gás hidrogênio liberado é inflamável e pode ser comprovado pelo teste do estalido na chama.'
  },

  // Capítulo 14: Neutralização
  {
    id: 'res-14',
    title: 'Titulação de Neutralização HCl com NaOH',
    question: 'Qual o volume de uma solução aquosa de hidróxido de sódio (NaOH) 0,10 mol/L necessário para neutralizar completamente 25 mL de ácido clorídrico (HCl) 0,20 mol/L?',
    givenData: [
      'M_ácido = 0,20 mol/L, V_ácido = 25 mL',
      'M_base = 0,10 mol/L',
      'Estequiometria 1:1 (HCl + NaOH -> NaCl + H2O)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da quantidade de matéria de HCl',
        detail: 'n_HCl = M_HCl * V_HCl = 0,20 mol/L * 0,025 L = 0,0050 mol de HCl.',
      },
      {
        stepNumber: 2,
        title: 'Aplicação da proporção estequiométrica 1:1',
        detail: 'Para neutralização total: n_NaOH = n_HCl = 0,0050 mol.',
        mathLatex: 'M_A \\cdot V_A = M_B \\cdot V_B'
      },
      {
        stepNumber: 3,
        title: 'Cálculo do volume de base',
        detail: 'V_B = (0,20 * 25) / 0,10 = 50 mL.',
        mathLatex: 'V_B = \\frac{0{,}20 \\times 25}{0{,}10} = 50\\text{ mL}'
      }
    ],
    finalAnswer: 'São necessários 50 mL de solução de NaOH 0,10 mol/L.',
    explanation: 'Como a concentração da base é a metade da do ácido, seu volume deve ser exatamente o dobro para atingir o ponto de equivalência.'
  },

  // Capítulo 15: Ka e pKa
  {
    id: 'res-15',
    title: 'Comparação de Força através de Ka e pKa',
    question: 'Considere dois ácidos fracos: ácido fluorídrico (HF, Ka = 6,8 × 10^-4) e ácido cianídrico (HCN, Ka = 4,9 × 10^-10). Qual deles é o mais forte? Como se comparam seus valores de pKa?',
    givenData: [
      'HF: Ka = 6,8 × 10^-4',
      'HCN: Ka = 4,9 × 10^-10',
      'Relação: pKa = -log(Ka)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Comparação das constantes Ka',
        detail: '6,8 × 10^-4 é cerca de 1 milhão de vezes maior que 4,9 × 10^-10. Logo, o HF se ioniza muito mais em água do que o HCN.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo aproximado dos valores de pKa',
        detail: 'HF: pKa = -log(6,8 × 10^-4) ≈ 3,17. HCN: pKa = -log(4,9 × 10^-10) ≈ 9,31.',
        mathLatex: 'pK_a(\\text{HF}) = 3{,}17 \\quad < \\quad pK_a(\\text{HCN}) = 9{,}31'
      }
    ],
    finalAnswer: 'O HF é o ácido mais forte porque possui maior Ka e menor pKa.',
    explanation: 'Maior Ka significa maior proporção de produtos ionizados [H+][A-]; a escala negativa pKa inverte o sentido numérico: menor pKa indica maior força ácida.'
  },

  // Capítulo 16: Ácidos polipróticos
  {
    id: 'res-16',
    title: 'Ionização em Etapas do Ácido Fosfórico',
    question: 'Escreva as equações químicas das três etapas sucessivas de ionização do ácido fosfórico (H3PO4) em água e justifique por que Ka1 > Ka2 > Ka3.',
    givenData: [
      'Ácido: H3PO4 (triácido)',
      'Ka1 ≈ 7,5 × 10^-3, Ka2 ≈ 6,2 × 10^-8, Ka3 ≈ 4,2 × 10^-13'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Etapa 1',
        detail: 'Remoção do 1º próton de uma molécula neutra.',
        mathLatex: 'H_3PO_4 + H_2O \\rightleftharpoons H_3O^+ + H_2PO_4^- \\quad (K_{a1})'
      },
      {
        stepNumber: 2,
        title: 'Etapa 2',
        detail: 'Remoção do 2º próton de uma espécie monoaniônica.',
        mathLatex: 'H_2PO_4^- + H_2O \\rightleftharpoons H_3O^+ + HPO_4^{2-} \\quad (K_{a2})'
      },
      {
        stepNumber: 3,
        title: 'Etapa 3',
        detail: 'Remoção do 3º próton de uma espécie dianiônica com forte atração eletrostática.',
        mathLatex: 'HPO_4^{2-} + H_2O \\rightleftharpoons H_3O^+ + PO_4^{3-} \\quad (K_{a3})'
      }
    ],
    finalAnswer: 'Ka1 > Ka2 > Ka3 porque é termodinamicamente muito mais difícil remover um próton positivo (H+) de um ânion já carregado negativamente devido à atração eletrostática.',
    explanation: 'A atração de Coulomb entre o cátion H+ e os ânions sucessivos H2PO4- e HPO4^2- dificulta progressivamente a ionização.'
  },

  // Capítulo 17: Ácidos no cotidiano
  {
    id: 'res-17',
    title: 'Ácido Presente no Vinagre e Porcentagem em Massa',
    question: 'O vinagre comercial contém ácido acético (CH3COOH). Se uma garrafa de 500 mL de vinagre possui densidade de 1,00 g/mL e teor em massa de 4,0% de ácido acético, qual é a massa de ácido acético presente no recipiente?',
    givenData: [
      'Volume = 500 mL',
      'Densidade do vinagre = 1,00 g/mL',
      'Título (% m/m) = 4,0%'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da massa total do vinagre',
        detail: 'm_solucao = d * V = 1,00 g/mL * 500 mL = 500 g.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da massa do soluto (ácido acético)',
        detail: 'm_acido = 4,0% de 500 g = (4 / 100) * 500 g = 20 g.',
        mathLatex: 'm_{\\text{ácido}} = 500\\text{ g} \\times 0{,}04 = 20\\text{ g}'
      }
    ],
    finalAnswer: 'Existem 20 gramas de ácido acético na garrafa de vinagre.',
    explanation: 'O ácido acético confere a pungência e conservação antimicrobiana característica dos vinagres de fermentação.'
  },

  // Capítulo 18: Chuva ácida
  {
    id: 'res-18',
    title: 'Formação de Ácido Sulfúrico na Atmosfera e Ataque a Mármore',
    question: 'Apresente as equações químicas que demonstram como o dióxido de enxofre (SO2) expelido na queima de combustíveis fósseis dá origem ao ácido sulfúrico na atmosfera, e como essa chuva ácida corrói estátuas de mármore (CaCO3).',
    givenData: [
      'Poluente primário: SO2',
      'Componente do mármore: Carbonato de cálcio (CaCO3)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Oxidação do dióxido a trióxido de enxofre',
        detail: '2 SO2(g) + O2(g) -> 2 SO3(g).',
        mathLatex: '2\\,SO_{2(g)} + O_{2(g)} \\rightarrow 2\\,SO_{3(g)}'
      },
      {
        stepNumber: 2,
        title: 'Dissolução do SO3 nas gotículas de chuva',
        detail: 'O anidrido sulfúrico reage com a água formando ácido sulfúrico concentrado nas nuvens.',
        mathLatex: 'SO_{3(g)} + H_2O_{(l)} \\rightarrow H_2SO_{4(aq)}'
      },
      {
        stepNumber: 3,
        title: 'Reação com o mármore no solo',
        detail: 'O ácido sulfúrico reage com o carbonato de cálcio, solubilizando a rocha e desprendendo CO2.',
        mathLatex: 'CaCO_{3(s)} + H_2SO_{4(aq)} \\rightarrow CaSO_{4(s)} + H_2O_{(l)} + CO_{2(g)}'
      }
    ],
    finalAnswer: 'O SO2 é oxidado a SO3, que ao reagir com a água gera H2SO4; este reage com o mármore (CaCO3) degradando monumentos com liberação de CO2 e gesso (CaSO4).',
    explanation: 'A chuva naturalmente já é levemente ácida (pH ~5,6) devido ao CO2; com óxidos de enxofre e nitrogênio o pH atinge valores abaixo de 4,0.'
  },

  // Capítulo 19: Acidificação dos oceanos
  {
    id: 'res-19',
    title: 'Equilíbrio Químico e Acidificação dos Oceanos',
    question: 'Descreva a sequência de equilíbrios químicos desencadeada pelo aumento do CO2 atmosférico dissolvido nos oceanos e explique por que esse processo compromete a sobrevivência dos recifes de corais.',
    givenData: [
      'Gás absorvido: CO2',
      'Estrutura dos corais: exoesqueleto de carbonato de cálcio (CaCO3)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Formação de ácido carbônico',
        detail: 'O CO2 reage com a água do mar formando ácido carbônico.',
        mathLatex: 'CO_{2(aq)} + H_2O_{(l)} \\rightleftharpoons H_2CO_{3(aq)}'
      },
      {
        stepNumber: 2,
        title: 'Liberação de íons H+',
        detail: 'O H2CO3 se ioniza, liberando prótons H+ e baixando o pH marinho.',
        mathLatex: 'H_2CO_{3(aq)} \\rightleftharpoons H^+_{(aq)} + HCO_{3(aq)}^-'
      },
      {
        stepNumber: 3,
        title: 'Consumo do íon carbonato pelos prótons extras',
        detail: 'O excesso de H+ reage com os íons carbonato (CO3^2-) livres na água, convertendo-os em bicarbonato (HCO3-).',
        mathLatex: 'H^+_{(aq)} + CO_{3(aq)}^{2-} \\rightleftharpoons HCO_{3(aq)}^-'
      }
    ],
    finalAnswer: 'Ao consumir íons carbonato livres (CO3^2-), o excesso de H+ diminui a taxa de calcificação dos corais e dissolve o esqueleto de CaCO3 já existente.',
    explanation: 'A queda no pH oceânico altera o equilíbrio de saturação da aragonita e calcita, ameaçando a base da cadeia trófica aquática.'
  },

  // Mais 11 exercícios resolvidos para ultrapassar 30 exercícios resolvidos na suíte
  {
    id: 'res-20',
    title: 'Reação com Carbonato de Sódio e Liberação de CO2',
    question: 'Um estudante adicionou vinagre (ácido acético, CH3COOH) sobre bicarbonato de sódio (NaHCO3) sólido. Equacione a reação e explique a efervescência.',
    givenData: ['Reagentes: CH3COOH e NaHCO3'],
    steps: [
      {
        stepNumber: 1,
        title: 'Reação de dupla troca inicial',
        detail: 'Produz acetato de sódio (CH3COONa) e ácido carbônico (H2CO3).',
        mathLatex: 'CH_3COOH + NaHCO_3 \\rightarrow CH_3COONa + H_2CO_3'
      },
      {
        stepNumber: 2,
        title: 'Decomposição imediata do ácido carbônico',
        detail: 'O ácido carbônico é instável e se decompõe instantaneamente em água e gás carbônico.',
        mathLatex: 'H_2CO_3 \\rightarrow H_2O + CO_2\\uparrow'
      }
    ],
    finalAnswer: 'CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2(g). A efervescência é o escape veloz de gás dióxido de carbono.',
    explanation: 'Sempre que um ácido reage com carbonatos ou bicarbonatos, forma-se H2CO3 que se decompõe em CO2 e H2O.'
  },
  {
    id: 'res-21',
    title: 'Neutralização Parcial com Formação de Hidrogenossal',
    question: 'Escreva a equação de neutralização parcial de 1 mol de H2SO4 com 1 mol de NaOH.',
    givenData: ['1 mol de H2SO4 (diácido)', '1 mol de NaOH (monobase)'],
    steps: [
      {
        stepNumber: 1,
        title: 'Comparação de prótons e hidroxilas',
        detail: 'O ácido tem 2 H+ disponíveis, mas a base só fornece 1 OH-. Portanto, apenas 1 H+ é neutralizado.',
        mathLatex: 'H_2SO_4 + NaOH \\rightarrow NaHSO_4 + H_2O'
      },
      {
        stepNumber: 2,
        title: 'Determinação do caráter do sal resultante',
        detail: 'Como ainda resta um hidrogênio ionizável na estrutura do ânion HSO4-, o composto formado é classificado como um hidrogenossal (sal ácido).'
      }
    ],
    finalAnswer: 'H2SO4 + NaOH -> NaHSO4 + H2O. O sal formado é o hidrogenossulfato de sódio (ou bissulfato de sódio).',
    explanation: 'Como restou um átomo de hidrogênio ionizável na estrutura do sal, ele é chamado de hidrogenossal ou sal ácido.'
  },
  {
    id: 'res-22',
    title: 'Cálculo de pH com Diluição por Fator 10',
    question: 'Uma solução aquosa de ácido nítrico (HNO3) tem pH = 2. Se 100 mL dessa solução forem diluídos com água destilada até atingir o volume final de 1000 mL, qual será o novo pH?',
    givenData: ['pH inicial = 2', 'V1 = 100 mL', 'V2 = 1000 mL (fator de diluição = 10)'],
    steps: [
      {
        stepNumber: 1,
        title: 'Determinação de [H+] inicial',
        detail: '[H+]1 = 10^-2 mol/L = 0,01 mol/L.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da diluição C1 * V1 = C2 * V2',
        detail: '[H+]2 = (10^-2 * 100) / 1000 = 10^-3 mol/L.',
        mathLatex: '[H^+]_2 = \\frac{10^{-2} \\times 100}{1000} = 10^{-3}\\text{ mol/L}'
      },
      {
        stepNumber: 3,
        title: 'Determinação do novo pH',
        detail: 'pH = -log(10^-3) = 3.',
      }
    ],
    finalAnswer: 'O novo pH é igual a 3.',
    explanation: 'Diluir um ácido por um fator de 10 reduz a concentração de H+ em 10 vezes, aumentando o pH em exatamente 1 unidade.'
  },
  {
    id: 'res-23',
    title: 'Titulação de Diácido H2SO4 com Ca(OH)2',
    question: 'Quantos mL de solução de hidróxido de cálcio [Ca(OH)2] 0,05 mol/L são necessários para neutralizar 20 mL de H2SO4 0,05 mol/L?',
    givenData: ['H2SO4: diácido (2 H+)', 'Ca(OH)2: dibase (2 OH-)', 'M_A = M_B = 0,05 mol/L', 'V_A = 20 mL'],
    steps: [
      {
        stepNumber: 1,
        title: 'Equação balanceada',
        detail: 'H2SO4 + Ca(OH)2 -> CaSO4 + 2 H2O.',
        mathLatex: 'H_2SO_4 + Ca(OH)_2 \\rightarrow CaSO_4 + 2\\,H_2O'
      },
      {
        stepNumber: 2,
        title: 'Proporção estequiométrica',
        detail: 'A proporção molar é 1:1. Como as molaridades são idênticas (0,05 mol/L), o volume de base deve ser rigorosamente idêntico ao de ácido.',
      }
    ],
    finalAnswer: 'São necessários exatamente 20 mL de Ca(OH)2.',
    explanation: 'Como tanto o ácido quanto a base fornecem 2 equivalentes por molécula e possuem a mesma molaridade, os volumes no ponto estequiométrico coincidem.'
  },
  {
    id: 'res-24',
    title: 'Identificação de Ácido Fixo vs Ácido Volátil',
    question: 'Diferencie ácido volátil de ácido fixo e classifique HCl e H2SO4 de acordo com esses conceitos.',
    givenData: ['Critério: ponto de ebulição e pressão de vapor'],
    steps: [
      {
        stepNumber: 1,
        title: 'Definição de volátil',
        detail: 'Ácidos voláteis possuem baixos pontos de ebulição e passam facilmente ao estado gasoso em temperatura ambiente. Exemplo: HCl (gás cloreto de hidrogênio dissolvido em água, PE < 100 °C).',
      },
      {
        stepNumber: 2,
        title: 'Definição de fixo',
        detail: 'Ácidos fixos possuem alto ponto de ebulição e praticamente não evaporam em temperatura ambiente. Exemplo: H2SO4 (PE ≈ 338 °C) e H3PO4.',
      }
    ],
    finalAnswer: 'HCl é um ácido volátil; H2SO4 é um ácido fixo.',
    explanation: 'Ácidos fixos como o sulfúrico não desprendem vapores corrosivos na mesma facilidade que hidrácidos gasosos.'
  },
  {
    id: 'res-25',
    title: 'Constante Ka a partir do pH e Concentração Inicial',
    question: 'Uma solução 0,10 mol/L de um monoácido fraco HA apresenta pH = 3 a 25 °C. Calcule o valor de sua constante de ionização Ka.',
    givenData: ['[HA] inicial = 0,10 mol/L', 'pH = 3 -> [H+] = 10^-3 mol/L', 'Ionização 1:1 -> [A-] = [H+] = 10^-3 mol/L'],
    steps: [
      {
        stepNumber: 1,
        title: 'Montagem do equilíbrio',
        detail: 'HA ⇌ H+ + A-. No equilíbrio: [H+] = 10^-3 mol/L, [A-] = 10^-3 mol/L, [HA] ≈ 0,10 - 0,001 ≈ 0,10 mol/L.',
      },
      {
        stepNumber: 2,
        title: 'Expressão de Ka',
        detail: 'Ka = ([H+] * [A-]) / [HA] = (10^-3 * 10^-3) / 0,10 = 10^-6 / 10^-1 = 10^-5.',
        mathLatex: 'K_a = \\frac{10^{-3} \\times 10^{-3}}{0{,}10} = 1{,}0 \\times 10^{-5}'
      }
    ],
    finalAnswer: 'Ka = 1,0 × 10^-5.',
    explanation: 'A constante Ka reflete a baixa extensão da ionização, coerente com um ácido moderadamente fraco.'
  },
  {
    id: 'res-26',
    title: 'Efeito do Íon Comum sobre a Ionização de um Ácido Fraco',
    question: 'O que ocorre com o grau de ionização do ácido acético (CH3COOH ⇌ H+ + CH3COO-) quando se adiciona acetato de sódio (CH3COONa) à solução?',
    givenData: ['CH3COOH ⇌ H+ + CH3COO-', 'Sal adicionado: CH3COONa -> Na+ + CH3COO-'],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação do íon comum',
        detail: 'O sal adiciona grande quantidade do ânion acetato (CH3COO-), que é produto da ionização do ácido.',
      },
      {
        stepNumber: 2,
        title: 'Aplicação do Princípio de Le Chatelier',
        detail: 'O aumento de concentração do produto CH3COO- desloca o equilíbrio no sentido dos reagentes (para a esquerda).',
        mathLatex: 'CH_3COOH \\xleftarrow{\\text{Deslocamento}} H^+ + CH_3COO^-'
      }
    ],
    finalAnswer: 'O grau de ionização do ácido acético diminui e o pH da solução aumenta (fica menos ácida).',
    explanation: 'Esse é o clássico efeito do íon comum em soluções tampão ácido-base.'
  },
  {
    id: 'res-27',
    title: 'Cálculo de pH Neutro em Temperatura Diferente de 25 °C',
    question: 'A 60 °C, o produto iônico da água Kw é igual a 1,0 × 10^-13. Qual é o valor do pH da água pura nessa temperatura? Ela é ácida?',
    givenData: ['T = 60 °C', 'Kw = [H+][OH-] = 1,0 × 10^-13'],
    steps: [
      {
        stepNumber: 1,
        title: 'Condição de neutralidade',
        detail: 'Em água pura, por estequiometria: [H+] = [OH-]. Logo: [H+]^2 = Kw = 10^-13.',
        mathLatex: '[H^+] = \\sqrt{10^{-13}} = 10^{-6{,}5}\\text{ mol/L}'
      },
      {
        stepNumber: 2,
        title: 'Cálculo do pH',
        detail: 'pH = -log(10^-6,5) = 6,5.',
      },
      {
        stepNumber: 3,
        title: 'Análise de acidez',
        detail: 'A água continua estritamente neutra porque [H+] = [OH-]. O ponto neutro a 60 °C é 6,5, e não 7,0.',
      }
    ],
    finalAnswer: 'pH = 6,5. A água NÃO é ácida, ela é rigorosamente neutra.',
    explanation: 'Neutralidade significa [H+] = [OH-], e o valor numérico 7,0 só corresponde ao ponto neutro a 25 °C.'
  },
  {
    id: 'res-28',
    title: 'Ácido no Refrigerante: Por que H3PO4 é Usado?',
    question: 'Qual ácido inorgânico é comumente empregado na formulação de refrigerantes de cola e qual a sua função química?',
    givenData: ['Bebida: refrigerante tipo cola', 'Ácido: H3PO4 (ácido fosfórico)'],
    steps: [
      {
        stepNumber: 1,
        title: 'Identificação da substância',
        detail: 'O ácido fosfórico (H3PO4) é o acidulante característico adicionado a refrigerantes de cola.',
      },
      {
        stepNumber: 2,
        title: 'Função tecnológica',
        detail: 'Ele reduz o pH para cerca de 2,5 a 3,0, o que confere o sabor ácido refrescante que equilibra o excesso de açúcar, além de agir como conservante inibindo a proliferação bacteriana.',
      }
    ],
    finalAnswer: 'Ácido fosfórico (H3PO4). Atua como acidulante, realçador de sabor e agente conservante.',
    explanation: 'O pH baixo do refrigerante também pode acelerar a desmineralização do esmalte dentário com o consumo frequente.'
  },
  {
    id: 'res-29',
    title: 'Reação de Ácido com Bicarbonato de Sódio como Antiácido',
    question: 'Por que pessoas que sofrem de azia tomam bicarbonato de sódio (NaHCO3)? Equacione a reação no suco gástrico.',
    givenData: ['Acidez estomacal: HCl(aq)', 'Antiácido: NaHCO3'],
    steps: [
      {
        stepNumber: 1,
        title: 'Equação de neutralização',
        detail: 'O íon bicarbonato neutraliza o excesso de ácido clorídrico no estômago.',
        mathLatex: 'HCl_{(aq)} + NaHCO_{3(s)} \\rightarrow NaCl_{(aq)} + H_2O_{(l)} + CO_{2(g)}'
      },
      {
        stepNumber: 2,
        title: 'Efeito clínico',
        detail: 'A diminuição da concentração de H+ eleva o pH estomacal, aliviando a irritação da mucosa do esôfago.',
      }
    ],
    finalAnswer: 'HCl + NaHCO3 -> NaCl + H2O + CO2. O bicarbonato neutraliza os íons H+ livres do HCl, elevando o pH gástrico.',
    explanation: 'O CO2 liberado pode provocar eructação (arroto) após a ingestão.'
  },
  {
    id: 'res-30',
    title: 'Por que HF é um Ácido Fraco apesar do Flúor ser o mais Eletronegativo?',
    question: 'O flúor é o elemento mais eletronegativo da tabela periódica, mas o ácido fluorídrico (HF) é um ácido fraco (α ≈ 8%), enquanto HCl, HBr e HI são ácidos fortes. Explique esse paradoxo.',
    givenData: ['HF: ácido fraco', 'HCl, HBr, HI: ácidos fortes', 'Eletronegatividade do flúor = 4,0'],
    steps: [
      {
        stepNumber: 1,
        title: 'Energia de ligação H-F',
        detail: 'O átomo de flúor tem raio atômico muito pequeno. A sobreposição com o hidrogênio é extremamente forte, resultando em uma energia de ligação H-F altíssima (567 kJ/mol), muito mais difícil de quebrar do que H-Cl (431 kJ/mol) ou H-I (299 kJ/mol).',
      },
      {
        stepNumber: 2,
        title: 'Entalpia de hidratação e pares iônicos',
        detail: 'Mesmo quando ioniza, os íons H3O+ e F- formam pares iônicos fortemente associados por pontes de hidrogênio ([H3O+ ... F-]), reduzindo a disponibilidade de H3O+ livres na solução.',
      }
    ],
    finalAnswer: 'O HF é fraco devido à altíssima energia de ligação H-F e à tendência do ânion F- de formar pares iônicos associados por ligação de hidrogênio com a água.',
    explanation: 'A força ácida de hidrácidos depende mais da facilidade de rompimento da ligação (energia de ligação) do que unicamente da eletronegatividade.'
  }
];
