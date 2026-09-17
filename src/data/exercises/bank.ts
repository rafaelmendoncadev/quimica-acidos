import { Exercise } from '../../types/chemistry';

export const EXERCISE_BANK: Exercise[] = [
  // ==========================================
  // CAPÍTULO 1: O QUE SÃO ÁCIDOS? (6 questões)
  // ==========================================
  {
    id: 'ex-001',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é o cátion característico liberado em solução aquosa quando uma substância ácida sofre o processo de ionização?',
    options: [
      'Ânion hidroxila (OH⁻)',
      'Cátion hidrogênio (H⁺ ou íon hidrônio H₃O⁺)',
      'Cátion sódio (Na⁺)',
      'Gás oxigênio (O₂)',
      'Ânion cloreto (Cl⁻)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Em solução aquosa, os ácidos reagem com a água liberando prótons H⁺, que se ligam às moléculas de água formando o íon hidrônio (H₃O⁺).',
    hint1: 'Lembre-se da definição fundamental de ácidos em meio aquoso.',
    hint2: 'O íon hidrogênio H⁺ se liga a uma molécula de H₂O formando H₃O⁺.',
    tags: ['conceito', 'ionizacao', 'hidronio']
  },
  {
    id: 'ex-002',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual das seguintes propriedades organolépticas e comportamentais é típica da maioria dos ácidos presentes no cotidiano (como vinagre e limão)?',
    options: [
      'Sabor adstringente ("amarra a boca") e toque escorregadio',
      'Sabor azedo e capacidade de conduzir corrente elétrica em solução aquosa',
      'pH sempre superior a 7,0 a 25 °C',
      'Incapacidade de reagir com metais',
      'Formação exclusiva de precipitados insolúveis em água'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ácidos possuem sabor azedo característico e geram íons livres em água, tornando a solução eletrolítica e condutora de eletricidade.',
    hint1: 'Pense no sabor do suco de limão ou do vinagre culinário.',
    hint2: 'A presença de íons livres na água confere condutibilidade elétrica.',
    tags: ['propriedades', 'cotidiano', 'condutibilidade']
  },
  {
    id: 'ex-003',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'medio',
    type: 'interpretacao',
    question: 'Considere o cloreto de hidrogênio (HCl) gasoso e a solução de ácido clorídrico aquoso. Sobre a condução de eletricidade nessas duas situações, assinale a afirmativa correta:',
    options: [
      'Ambos conduzem eletricidade com igual facilidade.',
      'O gás conduz eletricidade, mas a solução aquosa não conduz.',
      'A solução aquosa conduz eletricidade devido à formação de íons pela ionização, enquanto o gás puro é molecular e isolante.',
      'Nenhum dos dois conduz eletricidade em hipótese alguma.',
      'A solução aquosa só conduz eletricidade se aquecida até a ebulição completa.'
    ],
    correctAnswerIndex: 2,
    explanation: 'O HCl(g) é uma substância molecular covalente que não possui cargas livres. Em contato com a água, reage formando H₃O⁺ e Cl⁻, permitindo a passagem de corrente elétrica.',
    hint1: 'A condução elétrica em líquidos exige a presença de íons livres.',
    hint2: 'No estado gasoso, as moléculas covalentes não estão dissociadas em íons.',
    tags: ['eletrolito', 'ionizacao', 'conducao']
  },
  {
    id: 'ex-004',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'A reação química que melhor descreve a formação do íon hidrônio a partir da ionização do ácido nítrico em água é:',
    options: [
      'HNO₃ + H₂O → H₃O⁺ + NO₃⁻',
      'HNO₃ → H⁺ + NO₂ + O₂',
      'HNO₃ + OH⁻ → NO₃⁻ + H₂O',
      'HNO₃ + H₂O → NH₄⁺ + O₂',
      'HNO₃ + H₂O → H₂ + NO₃'
    ],
    correctAnswerIndex: 0,
    explanation: 'O HNO₃ transfere seu próton H⁺ para a molécula de água polar, originando o cátion H₃O⁺ e o ânion nitrato NO₃⁻.',
    hint1: 'O produto com água deve conter H₃O⁺.',
    hint2: 'O ânion restante após a perda de H⁺ do HNO₃ é o nitrato (NO₃⁻).',
    tags: ['equacao', 'ionizacao', 'hidronio']
  },
  {
    id: 'ex-005',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Em nível submicroscópico, por que o próton livre isolado (H⁺) praticamente não existe em solução aquosa líquida?',
    options: [
      'Porque o próton é expelido da água em direção à fase gasosa instantaneamente.',
      'Devido ao seu tamanho extremamente diminuto (~10⁻¹⁵ m) e densidade de carga altíssima, o que provoca forte atração eletrostática e ligação com pares isolados de elétrons da água.',
      'Porque o próton se converte espontaneamente em nêutron por decaimento radioativo.',
      'Porque a água é um solvente apolar que repele qualquer carga elétrica.',
      'Porque o hidrogênio só existe em solução sob a forma gasosa molecular de H₂.'
    ],
    correctAnswerIndex: 1,
    explanation: 'O próton H⁺ é apenas um núcleo atômico nu (sem elétrons em volta). Sua enorme densidade de carga polariza os pares não ligantes do oxigênio da água, formando H₃O⁺ ou agregados H₅O₂⁺ e H₉O₄⁺.',
    hint1: 'Pense no raio minúsculo de um único núcleo atômico comparado a um átomo completo.',
    hint2: 'A altíssima densidade de carga atrai os elétrons livres do oxigênio da molécula vizinha de água.',
    tags: ['quimica-avancada', 'hidronio', 'mecanismo']
  },
  {
    id: 'ex-006',
    module: 'acidos',
    chapterId: 1,
    chapterSlug: 'o-que-sao-acidos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual dos seguintes produtos de uso comum NÃO é predominantemente ácido?',
    options: [
      'Suco de laranja',
      'Vinagre',
      'Suco gástrico',
      'Água sanitária (contendo hipoclorito e soda)',
      'Refrigerante gaseificado'
    ],
    correctAnswerIndex: 3,
    explanation: 'A água sanitária é uma solução alcalina (básica) com pH tipicamente entre 11 e 13, ao contrário de sucos cítricos, vinagre e refrigerantes.',
    hint1: 'A água sanitária costuma conter hidróxido de sódio para estabilização química.',
    hint2: 'Bases possuem toque escorregadio e pH alcalino superior a 7.',
    tags: ['cotidiano', 'identificacao']
  },

  // ==========================================
  // CAPÍTULO 2: TEORIA DE ARRHENIUS (6 questões)
  // ==========================================
  {
    id: 'ex-007',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Segundo a definição clássica formulada por Svante Arrhenius em 1884, ácido é toda substância que:',
    options: [
      'Recebe um par de elétrons livres em qualquer meio.',
      'Em solução aquosa, sofre ionização e libera como únicos cátions íons H⁺.',
      'Em solução alcoólica, reage produzindo ésteres e água.',
      'Libera íons hidroxila (OH⁻) quando dissolvida em água.',
      'Possui ponto de fusão inferior a 0 °C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Arrhenius definiu ácidos e bases estritamente em função da sua dissociação ou ionização em solvente aquoso, liberando H⁺ (ácidos) ou OH⁻ (bases).',
    hint1: 'Arrhenius restringiu sua teoria ao meio aquoso.',
    hint2: 'O cátion gerado por ácidos é o H⁺.',
    tags: ['arrhenius', 'teoria', 'conceito']
  },
  {
    id: 'ex-008',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é a principal limitação conceitual da teoria ácido-base de Arrhenius?',
    options: [
      'Não conseguir explicar reações nucleares de fissão.',
      'Estar restrita exclusivamente ao meio aquoso como solvente.',
      'Afirmar que a água é um ácido forte em qualquer condição.',
      'Negar a existência de ligações químicas covalentes.',
      'Não admitir que ácidos possam conduzir corrente elétrica.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A teoria de Arrhenius só se aplica quando o solvente é a água; não explica reações em solventes não aquosos ou em fase gasosa pura.',
    hint1: 'O que acontece quando duas substâncias reagem em fase gasosa, como HCl(g) + NH₃(g)?',
    hint2: 'A presença de água líquida é pré-requisito mandatório no modelo de Arrhenius.',
    tags: ['arrhenius', 'limitacoes', 'teoria']
  },
  {
    id: 'ex-009',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual das equações a seguir representa a ionização completa do ácido fosfórico (H₃PO₄) segundo o modelo simplificado de Arrhenius?',
    options: [
      'H₃PO₄ → 3 H⁺ + PO₄³⁻',
      'H₃PO₄ → H⁺ + H₂PO₄⁻',
      'H₃PO₄ → 3 H₂ + P + 2 O₂',
      'H₃PO₄ → H₃⁺ + PO₄³⁻',
      'H₃PO₄ → 2 H⁺ + HPO₄²⁻'
    ],
    correctAnswerIndex: 0,
    explanation: 'A ionização total de H₃PO₄ libera 3 cátions H⁺ e 1 ânion fosfato (PO₄³⁻), equilibrando a estequiometria de cargas.',
    hint1: 'Conte a quantidade de cargas positivas e negativas para que a soma seja zero.',
    hint2: 'Três cátions H⁺ demandam um ânion com carga 3-.',
    tags: ['arrhenius', 'ionizacao', 'equacao']
  },
  {
    id: 'ex-010',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Diferencie o processo de "ionização" ocorrido nos ácidos de Arrhenius da "dissociação iônica" ocorrida nas bases metálicas:',
    options: [
      'Ionização ocorre em compostos que já tinham íons antes; dissociação cria íons novos.',
      'Ionização é a criação de íons por reação de um composto molecular covalente com a água; dissociação iônica é a mera separação de íons que já existiam no retículo cristalino.',
      'Não há diferença química; ambos os termos são estritamente sinônimos.',
      'Dissociação ocorre exclusivamente em gases nobres a baixíssimas temperaturas.',
      'Ionização é um fenômeno puramente físico, enquanto a dissociação destrói os átomos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ácidos como HCl são moleculares (ligações covalentes); ao reagir com água sofrem ionização (íons são criados). Bases como NaOH são compostos iônicos; a água apenas separa os íons já existentes (dissociação).',
    hint1: 'Compostos moleculares não têm íons prontos na estrutura sólida ou gasosa.',
    hint2: 'A dissociação apenas desfaz o retículo cristalino iônico.',
    tags: ['ionizacao', 'dissociacao', 'mecanismo']
  },
  {
    id: 'ex-011',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'A reação gasosa HCl(g) + NH₃(g) → NH₄Cl(s) forma uma fumaça branca de cloreto de amônio mesmo na ausência de qualquer traço de água líquida. De acordo com os preceitos originais de Arrhenius:',
    options: [
      'Essa reação é formalmente classificada como ácido-base de Arrhenius.',
      'Essa reação NÃO pode ser descrita como reação ácido-base de Arrhenius, pois não ocorre em meio aquoso e não há liberação de íons H⁺ e OH⁻ livres na solução.',
      'O HCl atua como base e o NH₃ como ácido no modelo de Arrhenius.',
      'O cloreto de amônio é considerado um ácido forte pela teoria de Arrhenius.',
      'A reação viola a lei da conservação das massas de Lavoisier.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A teoria de Arrhenius exige meio aquoso. Esse processo gasoso só foi satisfatoriamente explicado pelas teorias posteriores de Brønsted-Lowry e Lewis.',
    hint1: 'Lembre-se da premissa obrigatória de solvente aquoso em Arrhenius.',
    hint2: 'Sem água, não há formação de soluções com H⁺(aq) ou OH⁻(aq).',
    tags: ['arrhenius', 'limitacoes', 'historia']
  },
  {
    id: 'ex-012',
    module: 'acidos',
    chapterId: 2,
    chapterSlug: 'arrhenius',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Ao dissolver o gás brometo de hidrogênio (HBr) em água pura, os íons formados segundo Arrhenius são:',
    options: [
      'H⁺(aq) e Br⁻(aq)',
      'H⁻(aq) e Br⁺(aq)',
      'H₂(g) e Br₂(l)',
      'H₃O⁺(aq) e Br₂²⁻(aq)',
      'OH⁻(aq) e HBr⁺(aq)'
    ],
    correctAnswerIndex: 0,
    explanation: 'HBr é um hidrácido forte que em água se ioniza em cátions H⁺ e ânions brometo Br⁻.',
    hint1: 'O hidrogênio perde seu único elétron para o bromo, muito mais eletronegativo.',
    hint2: 'O cátion é H⁺ e o ânion haleto é Br⁻.',
    tags: ['arrhenius', 'hidracido', 'equacao']
  },

  // ==========================================
  // CAPÍTULO 3: BRØNSTED-LOWRY (6 questões)
  // ==========================================
  {
    id: 'ex-013',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Na teoria protônica proposta independentemente por Johannes Brønsted e Thomas Lowry em 1923, ácido e base são definidos respectivamente como:',
    options: [
      'Doador de elétrons e receptor de elétrons',
      'Doador de prótons (H⁺) e receptor de prótons (H⁺)',
      'Substância com oxigênio e substância sem oxigênio',
      'Composto solúvel e composto insolúvel',
      'Espécie com pH < 7 e espécie com pH > 7'
    ],
    correctAnswerIndex: 1,
    explanation: 'A teoria de Brønsted-Lowry é fundamentada na transferência de prótons: ácido doa H⁺; base aceita H⁺.',
    hint1: 'A teoria de Brønsted é conhecida como "teoria protônica".',
    hint2: 'Próton é o cátion H⁺.',
    tags: ['bronsted-lowry', 'protons', 'definicao']
  },
  {
    id: 'ex-014',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é a base conjugada do ácido sulfúrico (H₂SO₄) após a doação do seu primeiro próton H⁺?',
    options: [
      'SO₄²⁻',
      'HSO₄⁻',
      'H₃SO₄⁺',
      'SO₃',
      'H₂S'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ao perder exatamente um próton H⁺, o H₂SO₄ se transforma no ânion hidrogenossulfato (HSO₄⁻).',
    hint1: 'Subtraia 1 átomo de hidrogênio e aumente a carga negativa em 1 unidade.',
    hint2: 'H₂SO₄ - H⁺ = HSO₄⁻.',
    tags: ['bronsted-lowry', 'pares-conjugados', 'formula']
  },
  {
    id: 'ex-015',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Na reação reversível NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, quais espécies constituem um par conjugado ácido-base?',
    options: [
      'NH₃ e OH⁻',
      'H₂O e NH₄⁺',
      'NH₃ (base) e NH₄⁺ (ácido conjugado)',
      'NH₄⁺ e OH⁻',
      'H₂O e NH₃'
    ],
    correctAnswerIndex: 2,
    explanation: 'NH₃ e NH₄⁺ diferem exatamente pela presença de um próton H⁺. Como NH₃ recebe H⁺, é a base; NH₄⁺ é o seu ácido conjugado correspondente.',
    hint1: 'Um par conjugado difere unicamente por 1 H⁺.',
    hint2: 'NH₃ + H⁺ forma NH₄⁺.',
    tags: ['bronsted-lowry', 'pares-conjugados', 'equilibrio']
  },
  {
    id: 'ex-016',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'medio',
    type: 'interpretacao',
    question: 'Diz-se que a água (H₂O) é uma substância anfótera (ou anfifrótica) segundo Brønsted-Lowry porque:',
    options: [
      'Pode atuar tanto como ácido (doando H⁺) quanto como base (recebendo H⁺), dependendo da substância com a qual reage.',
      'Sua molécula é perfeitamente simétrica e incapaz de realizar ligações de hidrogênio.',
      'Possui ponto de ebulição constante de 100 °C sob qualquer pressão.',
      'Reage apenas com metais alcalinos terrosos.',
      'Não é capaz de dissolver nenhum ácido inorgânico.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Ao reagir com HCl, a água recebe H⁺ e age como base; ao reagir com NH₃, a água doa H⁺ e age como ácido.',
    hint1: 'O prefixo "anfi-" remete a duplo comportamento.',
    hint2: 'A água ora doa próton, ora recebe próton.',
    tags: ['anfotera', 'agua', 'bronsted-lowry']
  },
  {
    id: 'ex-017',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Considere a seguinte regra termodinâmica: "Quanto mais forte for um ácido, mais fraca será a sua base conjugada correspondente". A partir disso, sabendo que o HCl é um ácido extremamente forte em água, como se classifica o ânion cloreto (Cl⁻) em relação à sua capacidade de atuar como base de Brønsted?',
    options: [
      'O íon Cl⁻ é uma base de Brønsted de força moderada com grande afinidade por prótons.',
      'O íon Cl⁻ é uma base conjugada extremamente fraca (praticamente inerte em atrair H⁺ em meio aquoso).',
      'O íon Cl⁻ deixa de ser base e passa a atuar como ácido de Lewis forte.',
      'O íon Cl⁻ é a base mais forte conhecida na química inorgânica.',
      'O íon Cl⁻ precipita instantaneamente com qualquer cátion.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Como o HCl doa prótons com enorme avidez e praticamente não existe na forma molecular não ionizada em água, sua base conjugada (Cl⁻) não tem tendência apreciável de recapturar o H⁺.',
    hint1: 'Se a reação direta é praticamente 100% no sentido dos produtos, o sentido inverso é insignificante.',
    hint2: 'Ácido muito forte implica base conjugada com pouquíssima afinidade por H⁺.',
    tags: ['forca-acida', 'pares-conjugados', 'termodinamica']
  },
  {
    id: 'ex-018',
    module: 'acidos',
    chapterId: 3,
    chapterSlug: 'bronsted-lowry',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual é o ácido conjugado do ânion carbonato (CO₃²⁻)?',
    options: [
      'H₂CO₃',
      'HCO₃⁻',
      'CO₂',
      'H₃CO₃⁺',
      'OH⁻'
    ],
    correctAnswerIndex: 1,
    explanation: 'O ácido conjugado resulta da ADIÇÃO de exatamente um próton H⁺. CO₃²⁻ + H⁺ → HCO₃⁻ (bicarbonato).',
    hint1: 'Adicione apenas um H⁺ à fórmula e compense a carga.',
    hint2: 'A carga passa de 2- para 1-.',
    tags: ['bronsted-lowry', 'pares-conjugados', 'carbonato']
  },

  // ==========================================
  // CAPÍTULO 4: TEORIA DE LEWIS (5 questões)
  // ==========================================
  {
    id: 'ex-019',
    module: 'acidos',
    chapterId: 4,
    chapterSlug: 'lewis',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'A teoria de Gilbert N. Lewis (1923) é baseada no compartilhamento de pares eletrônicos. Nela, um ácido de Lewis é:',
    options: [
      'Qualquer espécie receptora de um par de elétrons.',
      'Qualquer substância que libera gás hidrogênio ao contato com o ar.',
      'Qualquer espécie doadora de um par de elétrons.',
      'Qualquer elemento localizado no grupo 1 da tabela periódica.',
      'Qualquer composto que muda de cor com fenolftaleína.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Ácido de Lewis recebe par de elétrons; Base de Lewis doa par de elétrons.',
    hint1: 'Lembre-se: quem tem orbital vazio recebe elétrons.',
    hint2: 'A base é rica em elétrons e o ácido é receptor.',
    tags: ['lewis', 'eletrons', 'conceito']
  },
  {
    id: 'ex-020',
    module: 'acidos',
    chapterId: 4,
    chapterSlug: 'lewis',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual das espécies químicas a seguir atua tipicamente como um ÁCIDO de Lewis devido à presença de um orbital vazio na sua camada de valência?',
    options: [
      'NH₃ (amônia)',
      'H₂O (água)',
      'BF₃ (trifluoreto de boro)',
      'CH₄ (metano)',
      'Cl⁻ (ânion cloreto)'
    ],
    correctAnswerIndex: 2,
    explanation: 'O átomo de boro no BF₃ possui apenas 6 elétrons na camada de valência (octeto incompleto) e dispõe de um orbital "p" vazio pronto para receber um par eletrônico.',
    hint1: 'Procure uma espécie com octeto incompleto ou carga positiva.',
    hint2: 'O boro do grupo 13 estabiliza frequentemente com 6 elétrons na valência.',
    tags: ['lewis', 'octeto-incompleto', 'bf3']
  },
  {
    id: 'ex-021',
    module: 'acidos',
    chapterId: 4,
    chapterSlug: 'lewis',
    difficulty: 'dificil',
    type: 'multipla_escolha',
    question: 'Quando ocorre a formação do complexo estável [Fe(H₂O)₆]³⁺ em água, a espécie Fe³⁺ e as moléculas de H₂O atuam respectivamente como:',
    options: [
      'Base de Lewis e Ácido de Lewis',
      'Ácido de Lewis e Base de Lewis',
      'Ácido de Arrhenius e Base de Arrhenius',
      'Sal neutro e Solvente apolar',
      'Catalisador e Inibidor'
    ],
    correctAnswerIndex: 1,
    explanation: 'O cátion metálico Fe³⁺ aceita pares eletrônicos nos seus orbitais d vazios (ácido de Lewis), enquanto as moléculas de água doam pares de elétrons isolados do oxigênio (base de Lewis).',
    hint1: 'O cátion metálico com carga positiva recebe os elétrons.',
    hint2: 'O oxigênio da água tem pares de elétrons não ligantes disponíveis.',
    tags: ['complexos', 'lewis', 'quimica-inorganica']
  },
  {
    id: 'ex-022',
    module: 'acidos',
    chapterId: 4,
    chapterSlug: 'lewis',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Qual é a relação de abrangência correta entre as três teorias ácido-base (Arrhenius, Brønsted-Lowry e Lewis)?',
    options: [
      'Toda base de Lewis é uma base de Arrhenius, mas nem todo ácido de Arrhenius é de Lewis.',
      'A teoria de Lewis é a mais abrangente: todo ácido de Arrhenius é também de Brønsted-Lowry, e todo ácido de Brønsted-Lowry é também de Lewis.',
      'As três teorias são completamente mutuamente excludentes e nenhuma espécie pode ser explicada por duas delas simultaneamente.',
      'Arrhenius é a teoria mais abrangente de todas, cobrindo sólidos, gases e solventes orgânicos.',
      'A teoria de Brønsted-Lowry só funciona em soluções sólidas metálicas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Lewis engloba Brønsted-Lowry, que por sua vez engloba Arrhenius. Qualquer H⁺ doado (Brønsted) é um receptor de par de elétrons (Lewis).',
    hint1: 'Visualize diagramas de conjuntos concêntricos: Arrhenius ⊂ Brønsted-Lowry ⊂ Lewis.',
    hint2: 'Lewis formulou sua teoria para ser a mais geral de todas.',
    tags: ['abrangencia', 'historia', 'comparacao']
  },
  {
    id: 'ex-023',
    module: 'acidos',
    chapterId: 4,
    chapterSlug: 'lewis',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'A ligação química coordenada formada entre um ácido de Lewis e uma base de Lewis também é frequentemente chamada de:',
    options: [
      'Ligação metálica deslocalizada',
      'Ligação covalente dativa (ou coordenada)',
      'Ligação iônica eletrostática pura',
      'Ponte dissulfeto',
      'Força de dispersão de London'
    ],
    correctAnswerIndex: 1,
    explanation: 'Na ligação coordenada (antigamente chamada dativa), ambos os elétrons do par compartilhado provêm exclusivamente de um dos átomos envolvidos (a base de Lewis).',
    hint1: 'É uma ligação onde um átomo "doa" o par para ambos compartilharem.',
    hint2: 'O termo formal na IUPAC é ligação covalente coordenada.',
    tags: ['lewis', 'ligacao-coordenada', 'conceito']
  },

  // ==========================================
  // CAPÍTULO 5: CLASSIFICAÇÃO DOS ÁCIDOS (6 questões)
  // ==========================================
  {
    id: 'ex-024',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual dos seguintes grupos contém exclusivamente HIDRÁCIDOS (ácidos que não possuem oxigênio na fórmula)?',
    options: [
      'HCl, HNO₃, H₂SO₄',
      'H₂S, HCl, HCN, HBr',
      'H₃PO₄, H₂CO₃, HClO₄',
      'HF, H₂SO₃, HNO₂',
      'CH₃COOH, HBr, H₂SO₄'
    ],
    correctAnswerIndex: 1,
    explanation: 'H₂S, HCl, HCN e HBr não contêm o elemento oxigênio, sendo portanto todos hidrácidos.',
    hint1: 'Verifique se há a letra "O" na fórmula molecular de cada composto.',
    hint2: 'Se não tiver oxigênio, é hidrácido.',
    tags: ['classificacao', 'hidracidos', 'oxigenio']
  },
  {
    id: 'ex-025',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual dos seguintes ácidos inorgânicos é classificado como um OXIÁCIDO?',
    options: [
      'HCl (ácido clorídrico)',
      'HI (ácido iodídrico)',
      'H₂S (ácido sulfídrico)',
      'H₂SO₄ (ácido sulfúrico)',
      'HCN (ácido cianídrico)'
    ],
    correctAnswerIndex: 3,
    explanation: 'H₂SO₄ contém quatro átomos de oxigênio em sua molécula, sendo um oxiácido.',
    hint1: 'Procure o composto que apresenta átomos de oxigênio na fórmula.',
    hint2: 'O ácido sulfúrico tem fórmula H₂SO₄.',
    tags: ['classificacao', 'oxiacidos']
  },
  {
    id: 'ex-026',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Quanto ao número de elementos químicos diferentes na molécula, como é classificado o ácido sulfocianídrico (HSCN)?',
    options: [
      'Binário (2 elementos)',
      'Ternário (3 elementos)',
      'Quaternário (4 elementos)',
      'Mononuclear',
      'Polimérico'
    ],
    correctAnswerIndex: 2,
    explanation: 'HSCN possui 4 elementos distintos: Hidrogênio (H), Enxofre (S), Carbono (C) e Nitrogênio (N), sendo quaternário.',
    hint1: 'Conte quantos símbolos atômicos diferentes aparecem na fórmula.',
    hint2: 'H, S, C, N totalizam quatro elementos.',
    tags: ['classificacao', 'elementos', 'quaternario']
  },
  {
    id: 'ex-027',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Em relação à volatilidade e ponto de ebulição, como se classificam respectivamente o ácido clorídrico (HCl) e o ácido sulfúrico (H₂SO₄)?',
    options: [
      'Ambos são fixos e não evaporam.',
      'Ambos são voláteis e fervem abaixo de 50 °C.',
      'O HCl é um ácido volátil (baixo PE), enquanto o H₂SO₄ é um ácido fixo (alto PE ≈ 338 °C).',
      'O HCl é fixo e o H₂SO₄ é volátil.',
      'A volatilidade não pode ser avaliada para ácidos inorgânicos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'O HCl é um gás dissolvido em água que se desprende com facilidade (volátil). O H₂SO₄ possui fortes ligações intermoleculares e alto PE, sendo fixo.',
    hint1: 'O ácido clorídrico comercial desprende vapores sufocantes ao abrir o frasco.',
    hint2: 'O ácido sulfúrico é viscoso, denso e tem ponto de ebulição superior a 300 °C.',
    tags: ['volatilidade', 'propriedades-fisicas']
  },
  {
    id: 'ex-028',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'O ácido cianídrico (HCN) é um composto molecular binário ou ternário? Ele é oxiácido ou hidrácido?',
    options: [
      'Binário e oxiácido',
      'Ternário e hidrácido',
      'Ternário e oxiácido',
      'Quaternário e hidrácido',
      'Binário e hidrácido'
    ],
    correctAnswerIndex: 1,
    explanation: 'O HCN possui 3 elementos químicos (H, C, N), sendo portanto ternário. Não possui oxigênio, logo é classificado como hidrácido.',
    hint1: 'Ele tem oxigênio? Não. Portanto é hidrácido.',
    hint2: 'Contém H, C e N (três elementos = ternário).',
    tags: ['classificacao', 'hcn', 'ternario']
  },
  {
    id: 'ex-029',
    module: 'acidos',
    chapterId: 5,
    chapterSlug: 'classificacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Assinale o par constituído exclusivamente por ácidos binários:',
    options: [
      'HCl e H₂S',
      'H₂SO₄ e HNO₃',
      'H₃PO₄ e HClO',
      'HCN e H₂CO₃',
      'H₄P₂O₇ e HMnO₄'
    ],
    correctAnswerIndex: 0,
    explanation: 'HCl (H e Cl) e H₂S (H e S) são formados por apenas 2 elementos químicos diferentes (binários).',
    hint1: 'Binário significa formado por apenas dois tipos de elementos.',
    hint2: 'HCl e H₂S não têm outros elementos além de H e do não-metal.',
    tags: ['binarios', 'classificacao']
  },

  // ==========================================
  // CAPÍTULO 6: HIDROGÊNIOS IONIZÁVEIS (5 questões)
  // ==========================================
  {
    id: 'ex-030',
    module: 'acidos',
    chapterId: 6,
    chapterSlug: 'hidrogenios-ionizaveis',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Quantos hidrogênios ionizáveis possui a molécula do ácido sulfúrico (H₂SO₄)?',
    options: [
      '1 (monoácido)',
      '2 (diácido)',
      '3 (triácido)',
      '4 (tetrácido)',
      'Nenhum'
    ],
    correctAnswerIndex: 1,
    explanation: 'O H₂SO₄ é um diácido, pois possui dois átomos de hidrogênio ligados a oxigênios capazes de se ionizarem em solução aquosa.',
    hint1: 'Verifique a quantidade de hidrogênios liberados na ionização total do H₂SO₄.',
    hint2: 'Libera 2 cátions H⁺ por molécula.',
    tags: ['hidrogenios-ionizaveis', 'diacido']
  },
  {
    id: 'ex-031',
    module: 'acidos',
    chapterId: 6,
    chapterSlug: 'hidrogenios-ionizaveis',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O ácido hipofosforoso (H₃PO₂) possui 3 átomos de hidrogênio em sua fórmula empírica, mas reage com hidróxido de sódio na proporção molar estrita de 1:1. Quantos hidrogênios ionizáveis ele realmente possui?',
    options: [
      '3 hidrogênios ionizáveis (triácido)',
      '2 hidrogênios ionizáveis (diácido)',
      '1 hidrogênio ionizável (monoácido)',
      '4 hidrogênios ionizáveis (tetrácido)',
      'Não se ioniza'
    ],
    correctAnswerIndex: 2,
    explanation: 'No H₃PO₂, apenas 1 hidrogênio está ligado ao oxigênio (P-OH). Os outros dois hidrogênios estão ligados diretamente ao fósforo (P-H) e não sofrem ionização, sendo portanto um monoácido.',
    hint1: 'Se a proporção estequiométrica com NaOH é 1:1, apenas um H⁺ reage.',
    hint2: 'Apenas os hidrogênios das hidroxilas P-OH são ionizáveis.',
    tags: ['pegadinha', 'h3po2', 'monoacido']
  },
  {
    id: 'ex-032',
    module: 'acidos',
    chapterId: 6,
    chapterSlug: 'hidrogenios-ionizaveis',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O ácido pirofosfórico possui a fórmula molecular H₄P₂O₇. Ao sofrer ionização completa, quantos íons H⁺ são liberados por molécula?',
    options: [
      '1',
      '2',
      '3',
      '4',
      '7'
    ],
    correctAnswerIndex: 3,
    explanation: 'O H₄P₂O₇ é um tetrácido: todos os seus 4 hidrogênios fazem parte de grupos P-OH e são ionizáveis.',
    hint1: 'Ele é classificado como tetrácido.',
    hint2: 'A carga do ânion pirofosfato é P₂O₇⁴⁻.',
    tags: ['tetracido', 'h4p2o7']
  },
  {
    id: 'ex-033',
    module: 'acidos',
    chapterId: 6,
    chapterSlug: 'hidrogenios-ionizaveis',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Assinale a alternativa que correlaciona CORRETAMENTE o oxiácido à sua respectiva classificação quanto ao número de hidrogênios ionizáveis:',
    options: [
      'H₃PO₄ (monoácido), H₃PO₃ (diácido), H₃PO₂ (triácido)',
      'H₃PO₄ (triácido), H₃PO₃ (diácido), H₃PO₂ (monoácido)',
      'H₃PO₄ (triácido), H₃PO₃ (triácido), H₃PO₂ (triácido)',
      'H₃PO₄ (diácido), H₃PO₃ (monoácido), H₃PO₂ (não ácido)',
      'H₃PO₄ (monoácido), H₃PO₃ (monoácido), H₃PO₂ (monoácido)'
    ],
    correctAnswerIndex: 1,
    explanation: 'A série do fósforo é a maior pegadinha dos vestibulares: H₃PO₄ tem 3 P-OH (triácido); H₃PO₃ tem 2 P-OH (diácido); H₃PO₂ tem 1 P-OH (monoácido).',
    hint1: 'A quantidade de H ionizável diminui de H₃PO₄ para H₃PO₂.',
    hint2: 'H₃PO₄ = 3, H₃PO₃ = 2, H₃PO₂ = 1.',
    tags: ['fosforados', 'pegadinha', 'classificacao']
  },
  {
    id: 'ex-034',
    module: 'acidos',
    chapterId: 6,
    chapterSlug: 'hidrogenios-ionizaveis',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O ácido acético (vinagre) tem fórmula molecular C₂H₄O₂ (ou CH₃COOH). Quantos dos seus 4 hidrogênios são ionizáveis?',
    options: [
      'Apenas 1 (o hidrogênio ligado ao oxigênio da carboxila)',
      'Todos os 4 hidrogênios',
      'Apenas 3 hidrogênios do grupo metila',
      'Nenhum hidrogênio',
      '2 hidrogênios'
    ],
    correctAnswerIndex: 0,
    explanation: 'Os três hidrogênios ligados ao carbono (C-H) não se ionizam por baixa polaridade. Somente o H ligado ao oxigênio da carboxila (-COOH) é ionizável.',
    hint1: 'Observe a fórmula estrutural do grupo carboxila -COOH.',
    hint2: 'Ácido acético é um monoácido.',
    tags: ['acido-acetico', 'organico', 'carboxila']
  },

  // ==========================================
  // CAPÍTULO 7: NOMENCLATURA DOS ÁCIDOS (6 questões)
  // ==========================================
  {
    id: 'ex-035',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é o sufixo oficial utilizado na nomenclatura de todos os HIDRÁCIDOS inorgânicos segundo as normas da IUPAC?',
    options: [
      '-oso',
      '-ico',
      '-ídrico',
      '-ato',
      '-eto'
    ],
    correctAnswerIndex: 2,
    explanation: 'Hidrácidos seguem rigorosamente a regra: Ácido + elemento + ídrico (ex: clorídrico, fluorídrico, sulfídrico).',
    hint1: 'Pense no nome do HCl em água: ácido clor...',
    hint2: 'O sufixo termina com "-ídrico".',
    tags: ['nomenclatura', 'hidracidos', 'regras']
  },
  {
    id: 'ex-036',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'O nome oficial do ácido de fórmula H₂S quando dissolvido em água líquida é:',
    options: [
      'Ácido sulfúrico',
      'Ácido sulfuroso',
      'Ácido sulfídrico',
      'Ácido persulfúrico',
      'Ácido hipossulfuroso'
    ],
    correctAnswerIndex: 2,
    explanation: 'H₂S não possui oxigênio (hidrácido). Nome: ácido + sulf(ur) + ídrico = ácido sulfídrico.',
    hint1: 'H₂S não tem oxigênio, portanto deve terminar em "-ídrico".',
    hint2: 'A raiz do enxofre em latim é "sulfur-".',
    tags: ['nomenclatura', 'h2s', 'hidracido']
  },
  {
    id: 'ex-037',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Dadas as fórmulas HClO, HClO₂, HClO₃ e HClO₄, qual delas corresponde respectivamente ao ÁCIDO PERCLÓRICO?',
    options: [
      'HClO',
      'HClO₂',
      'HClO₃',
      'HClO₄',
      'Nenhum dos anteriores'
    ],
    correctAnswerIndex: 3,
    explanation: 'O prefixo "per-" e o sufixo "-ico" indicam o maior estado de oxidação do cloro (+7), correspondente ao HClO₄.',
    hint1: 'O cloro tem Nox +7 no ácido perclórico.',
    hint2: 'É o oxiácido de cloro com o maior número de oxigênios (4).',
    tags: ['nomenclatura', 'cloro', 'oxiacidos']
  },
  {
    id: 'ex-038',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O ácido nítrico e o ácido nitroso possuem respectivamente as fórmulas moleculares:',
    options: [
      'HNO₂ e HNO₃',
      'HNO₃ e HNO₂',
      'HNO₄ e HNO',
      'H₃N e H₂NO₂',
      'H₂NO₃ e HNO₃'
    ],
    correctAnswerIndex: 1,
    explanation: 'O sufixo "-ico" indica o maior Nox do nitrogênio (+5, HNO₃), enquanto "-oso" indica o menor Nox (+3, HNO₂).',
    hint1: 'O sufixo -ico refere-se ao Nox mais alto (mais oxigênios).',
    hint2: 'Ácido nítrico = HNO₃; ácido nitroso = HNO₂.',
    tags: ['nomenclatura', 'nitrogenio', 'oxiacidos']
  },
  {
    id: 'ex-039',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'dificil',
    type: 'multipla_escolha',
    question: 'Assinale a associação INCORRETA entre a fórmula molecular e o nome do ácido:',
    options: [
      'H₂CO₃ — Ácido carbônico',
      'HCN — Ácido cianídrico',
      'H₃PO₃ — Ácido fosfórico',
      'HMnO₄ — Ácido permangânico',
      'H₃BO₃ — Ácido bórico'
    ],
    correctAnswerIndex: 2,
    explanation: 'H₃PO₃ é o ácido FOSFOROSO. O ácido fosfórico possui fórmula H₃PO₄.',
    hint1: 'Verifique com atenção a família do fósforo (H₃PO₄ vs H₃PO₃).',
    hint2: 'O fósforo tem 4 oxigênios no ácido fosfórico.',
    tags: ['nomenclatura', 'erros-comuns', 'fosforoso']
  },
  {
    id: 'ex-040',
    module: 'acidos',
    chapterId: 7,
    chapterSlug: 'nomenclatura',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O gás venenoso presente em sementes de maçã e folhas de mandioca-brava que dá origem ao ácido cianídrico tem fórmula molecular:',
    options: [
      'HCl',
      'HCN',
      'H₂S',
      'HF',
      'HBr'
    ],
    correctAnswerIndex: 1,
    explanation: 'HCN é o cianeto de hidrogênio ou ácido cianídrico em solução aquosa.',
    hint1: 'Contém carbono e nitrogênio.',
    hint2: 'Sua sigla é H-C-N.',
    tags: ['hcn', 'nomenclatura', 'cotidiano']
  },

  // ==========================================
  // CAPÍTULO 8: FORÇA DOS ÁCIDOS (6 questões)
  // ==========================================
  {
    id: 'ex-041',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Entre os hidrácidos dos halogênios (família 17), quais são considerados ÁCIDOS FORTES em solução aquosa?',
    options: [
      'Apenas o HF',
      'HCl, HBr e HI',
      'Todos os quatro (HF, HCl, HBr, HI)',
      'Nenhum deles é forte',
      'Apenas o HAt'
    ],
    correctAnswerIndex: 1,
    explanation: 'HCl, HBr e HI são ácidos muito fortes (ionização superior a 90%). O HF é uma exceção da família, sendo um ácido fraco/moderado (α ~ 8%).',
    hint1: 'Lembre-se da exceção do ácido fluorídrico (HF).',
    hint2: 'Os halogênios de maior raio atômico (Cl, Br, I) formam hidrácidos fortes.',
    tags: ['forca-acida', 'halogenios', 'hidracidos']
  },
  {
    id: 'ex-042',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'medio',
    type: 'interpretacao',
    question: 'Um aluno afirma: "Uma solução de ácido acético 10 mol/L é um ácido forte porque está muito concentrada". Essa afirmação está cientificamente correta?',
    options: [
      'Sim, concentração molar alta é sinônimo direto de força ácida.',
      'Não, a afirmação confunde os conceitos: "concentração" refere-se à quantidade de soluto dissolvido por volume de solvente, enquanto "força" mede a tendência e grau de ionização molecular (α). O ácido acético continua sendo fraco.',
      'Sim, qualquer substância com concentração acima de 1 mol/L passa a ser forte por indução estequiométrica.',
      'Não, porque o vinagre nunca atinge 10 mol/L sob nenhuma hipótese física.',
      'Sim, porque todo ácido carboxílico com mais de 2 carbonos é forte.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Esta é a pegadinha número 1 da química: força depende do grau de ionização intrínseco (α); concentração depende da proporção de soluto/solvente.',
    hint1: 'Lembre-se da caixa de aviso: "Ácido concentrado não significa ácido forte".',
    hint2: 'O ácido acético ioniza apenas cerca de 1% das suas moléculas, mesmo em soluções concentradas.',
    tags: ['pegadinha', 'forca-vs-concentracao', 'conceito']
  },
  {
    id: 'ex-043',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Aplicando a regra de Linus Pauling para oxiácidos (m = número de oxigênios - número de hidrogênios ionizáveis), qual dos seguintes oxiácidos é classificado como MUITO FORTE (m = 3)?',
    options: [
      'H₂SO₄',
      'HNO₃',
      'HClO₄ (ácido perclórico)',
      'H₃PO₄',
      'H₂CO₃'
    ],
    correctAnswerIndex: 2,
    explanation: 'No HClO₄: m = 4 oxigênios - 1 hidrogênio = 3. Um valor m = 3 caracteriza um ácido superforte.',
    hint1: 'Calcule m = 4 - 1.',
    hint2: 'HClO₄ tem 4 oxigênios e apenas 1 hidrogênio.',
    tags: ['pauling', 'oxiacidos', 'forca']
  },
  {
    id: 'ex-044',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Pela regra de Pauling, o ácido carbônico (H₂CO₃) possui m = 3 - 2 = 1, o que teoricamente o colocaria como moderado. Contudo, em bancadas de laboratório ele é considerado um ácido EXTREMAMENTE FRACO. Qual é a razão físico-química dessa anomalia?',
    options: [
      'Porque o carbono é um metal pesado que neutraliza a acidez.',
      'Porque o H₂CO₃ em solução aquosa é instável e se encontra quase totalmente decomposto em CO₂(aq) e H₂O(l); a concentração real de moléculas intactas de H₂CO₃ na solução é diminuta.',
      'Porque suas ligações químicas são iônicas e insolúveis.',
      'Porque ele se polimeriza espontaneamente formando grafite.',
      'Porque o oxigênio do ácido carbônico não possui elétrons de valência.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A maior parte do CO₂ borbulhado em água permanece como gás dissolvido CO₂(aq). Apenas cerca de 0,2% das moléculas formam H₂CO₃ verdadeiro, tornando a solução real muito fracamente ionizada.',
    hint1: 'O ácido carbônico decompõe-se espontaneamente em água e gás carbônico.',
    hint2: 'A fração de moléculas intactas de H₂CO₃ é menor que 1%.',
    tags: ['h2co3', 'anomalia', 'equilibrio']
  },
  {
    id: 'ex-045',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Assinale o ácido inorgânico que é classificado como FRACO:',
    options: [
      'HCl',
      'HNO₃',
      'H₂SO₄',
      'HCN',
      'HBr'
    ],
    correctAnswerIndex: 3,
    explanation: 'O ácido cianídrico (HCN) tem grau de ionização inferior a 0,01% (α = 0,008%), sendo um ácido muito fraco.',
    hint1: 'HCl, HNO₃ e H₂SO₄ são os três grandes ácidos fortes da indústria.',
    hint2: 'HCN tem Ka diminuto da ordem de 10⁻¹⁰.',
    tags: ['acido-fraco', 'hcn', 'forca']
  },
  {
    id: 'ex-046',
    module: 'acidos',
    chapterId: 8,
    chapterSlug: 'forca-acidos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual dos seguintes fatores explica por que o HI é um ácido mais forte que o HCl?',
    options: [
      'O iodo tem maior eletronegatividade que o cloro.',
      'O raio atômico do iodo é muito maior que o do cloro, tornando o comprimento da ligação H-I maior e sua energia de ligação muito menor, facilitando a quebra e liberação de H⁺.',
      'O HI possui átomos de oxigênio em sua estrutura.',
      'O HCl não é solúvel em água.',
      'O iodo possui menos elétrons que o cloro.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Na família dos halogênios, o raio atômico cresce para baixo. Ligação mais longa = ligação mais fraca = maior facilidade de ionização.',
    hint1: 'Pense no tamanho do átomo de iodo comparado ao de cloro.',
    hint2: 'Quanto maior o átomo, mais fraca é a atração sobre o hidrogênio.',
    tags: ['raio-atomico', 'energia-de-ligacao', 'forca']
  },

  // ==========================================
  // CAPÍTULO 9: GRAU DE IONIZAÇÃO (5 questões)
  // ==========================================
  {
    id: 'ex-047',
    module: 'acidos',
    chapterId: 9,
    chapterSlug: 'grau-ionizacao',
    difficulty: 'facil',
    type: 'calculo',
    question: 'Ao dissolver 1.000 moléculas de um ácido em água a 25 °C, verificou-se que 850 moléculas sofreram ionização. Qual é o grau de ionização (α) desse ácido em porcentagem?',
    options: [
      '8,5%',
      '85%',
      '0,85%',
      '15%',
      '95%'
    ],
    correctAnswerIndex: 1,
    explanation: 'α = 850 / 1000 = 0,85. Em porcentagem: 0,85 × 100 = 85%.',
    hint1: 'Divida o número de moléculas ionizadas pelo total dissolvido.',
    hint2: '850 / 1000 = 0,85.',
    tags: ['calculo', 'grau-ionizacao', 'alfa']
  },
  {
    id: 'ex-048',
    module: 'acidos',
    chapterId: 9,
    chapterSlug: 'grau-ionizacao',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Um ácido cujo grau de ionização é α = 2,5% é classificado classicamente como:',
    options: [
      'Ácido forte',
      'Ácido moderado',
      'Ácido fraco',
      'Base fraca',
      'Sal neutro'
    ],
    correctAnswerIndex: 2,
    explanation: 'Pela convenção pedagógica: α ≤ 5% = fraco; 5% < α < 50% = moderado; α ≥ 50% = forte.',
    hint1: '2,5% é menor do que o limite de 5%.',
    hint2: 'Valores até 5% correspondem a ácidos fracos.',
    tags: ['classificacao', 'alfa', 'criterio']
  },
  {
    id: 'ex-049',
    module: 'acidos',
    chapterId: 9,
    chapterSlug: 'grau-ionizacao',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Em uma solução com 2,0 mol de ácido fluorídrico (HF), sabe-se que o grau de ionização é de 8%. Quantos mols de moléculas de HF sofreram ionização efetiva?',
    options: [
      '0,08 mol',
      '0,16 mol',
      '0,80 mol',
      '1,84 mol',
      '0,016 mol'
    ],
    correctAnswerIndex: 1,
    explanation: 'n_ionizado = α × n_inicial = 0,08 × 2,0 mol = 0,16 mol.',
    hint1: 'Calcule 8% de 2,0.',
    hint2: '0,08 multiplicado por 2 é igual a 0,16.',
    tags: ['calculo', 'mols', 'alfa']
  },
  {
    id: 'ex-050',
    module: 'acidos',
    chapterId: 9,
    chapterSlug: 'grau-ionizacao',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Pela Lei da Diluição de Ostwald para um eletrólito fraco genérico, o que ocorre com o grau de ionização (α) quando a solução do ácido é continuamente diluída com água destilada?',
    options: [
      'O valor de α permanece rigorosamente inalterado em qualquer volume.',
      'O grau de ionização (α) aumenta, tendendo a 1 (ou 100%) em diluição infinita.',
      'O grau de ionização diminui até zerar completamente.',
      'A solução se transforma espontaneamente em uma base forte.',
      'As moléculas de água se decompõem em gases hidrogênio e oxigênio.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A diluição afasta os íons hidratados, dificultando a sua recombinação no equilíbrio HA ⇌ H⁺ + A⁻. Pela Lei de Ostwald: α ≈ √(Ka / Molaridade), ou seja, diminuir a molaridade aumenta α.',
    hint1: 'Mais moléculas de água disponíveis favorecem o deslocamento do equilíbrio para o lado ionizado.',
    hint2: 'Em diluição infinita, todas as moléculas encontram água suficiente para se ionizarem.',
    tags: ['diluicao-ostwald', 'equilibrio', 'avancado']
  },
  {
    id: 'ex-051',
    module: 'acidos',
    chapterId: 9,
    chapterSlug: 'grau-ionizacao',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Se 0,004 mol de um ácido ionizou a partir de um total de 0,20 mol dissolvido, o valor de α% é igual a:',
    options: [
      '0,02%',
      '0,2%',
      '2,0%',
      '20%',
      '4,0%'
    ],
    correctAnswerIndex: 2,
    explanation: 'α = 0,004 / 0,20 = 0,02. Multiplicando por 100, temos exatamente 2,0%.',
    hint1: '0,004 / 0,20 = 4 / 200 = 2 / 100.',
    hint2: '2 centésimos equivalem a 2%.',
    tags: ['calculo', 'porcentagem']
  },

  // ==========================================
  // CAPÍTULO 10: pH (6 questões)
  // ==========================================
  {
    id: 'ex-052',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'facil',
    type: 'calculo',
    question: 'Qual é o valor do pH de uma solução aquosa cuja concentração de íons H⁺ é exatamente 10⁻³ mol/L a 25 °C?',
    options: [
      'pH = 2',
      'pH = 3',
      'pH = 4',
      'pH = 11',
      'pH = 7'
    ],
    correctAnswerIndex: 1,
    explanation: 'pH = -log[H⁺] = -log(10⁻³) = 3.',
    hint1: 'O expoente de 10⁻³ determina o pH direto.',
    hint2: '-(-3) = 3.',
    tags: ['ph', 'calculo', 'logaritmo']
  },
  {
    id: 'ex-053',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Na escala convencional de pH a 25 °C, uma solução é considerada ÁCIDA quando seu valor de pH é:',
    options: [
      'Exatamente igual a 7,0',
      'Maior que 7,0',
      'Menor que 7,0',
      'Sempre negativo',
      'Maior que 14,0'
    ],
    correctAnswerIndex: 2,
    explanation: 'A 25 °C: pH < 7 é ácido, pH = 7 é neutro, e pH > 7 é básico.',
    hint1: 'O ponto de neutralidade da água pura é 7.',
    hint2: 'Valores menores que 7 representam soluções ácidas.',
    tags: ['escala-ph', 'conceito']
  },
  {
    id: 'ex-054',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Uma solução A possui pH = 2 e uma solução B possui pH = 5. Quantas vezes a solução A é mais ácida (maior concentração de H⁺) do que a solução B?',
    options: [
      '3 vezes',
      '30 vezes',
      '300 vezes',
      '1.000 vezes',
      '10.000 vezes'
    ],
    correctAnswerIndex: 3,
    explanation: 'A escala de pH é logarítmica (base 10). Uma diferença de 3 unidades no pH significa uma variação de 10³ = 1.000 vezes na concentração de H⁺.',
    hint1: 'A escala de pH é logarítmica decimal.',
    hint2: '10^(5 - 2) = 10³ = 1.000.',
    tags: ['escala-logaritmica', 'comparacao', 'calculo']
  },
  {
    id: 'ex-055',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'medio',
    type: 'calculo',
    question: 'O suco de tomate tem pH = 4. Qual é a concentração de íons hidrônio [H⁺] presente nesse alimento?',
    options: [
      '4 mol/L',
      '0,4 mol/L',
      '10⁻⁴ mol/L (ou 0,0001 mol/L)',
      '10⁴ mol/L',
      '10⁻¹⁰ mol/L'
    ],
    correctAnswerIndex: 2,
    explanation: '[H⁺] = 10^(-pH) = 10⁻⁴ mol/L.',
    hint1: 'A relação inversa do logaritmo é a potência na base 10.',
    hint2: '10 elevado a menos o valor do pH.',
    tags: ['calculo', 'concentracao', 'ph']
  },
  {
    id: 'ex-056',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'dificil',
    type: 'calculo',
    question: 'Uma solução aquosa de ácido clorídrico (HCl, monoácido 100% ionizado) tem concentração de 0,05 mol/L. Dado log 5 = 0,7, qual é o pH dessa solução?',
    options: [
      'pH = 1,3',
      'pH = 0,7',
      'pH = 2,3',
      'pH = 5,0',
      'pH = 1,7'
    ],
    correctAnswerIndex: 0,
    explanation: '[H⁺] = 0,05 = 5 × 10⁻² mol/L. pH = -log(5 × 10⁻²) = -[log 5 + log 10⁻²] = -[0,7 - 2] = -[-1,3] = 1,3.',
    hint1: 'Reescreva 0,05 em notação científica: 5 × 10⁻².',
    hint2: '-log(5 × 10⁻²) = 2 - log 5 = 2 - 0,7 = 1,3.',
    tags: ['calculo-avancado', 'logaritmo', 'ph']
  },
  {
    id: 'ex-057',
    module: 'acidos',
    chapterId: 10,
    chapterSlug: 'ph',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Quem foi o químico dinamarquês que introduziu formalmente o conceito e a escala de pH em 1909 enquanto trabalhava nos Laboratórios Carlsberg?',
    options: [
      'Søren Sørensen',
      'Antoine Lavoisier',
      'Dmitri Mendeleev',
      'John Dalton',
      'Robert Boyle'
    ],
    correctAnswerIndex: 0,
    explanation: 'Søren Peder Lauritz Sørensen criou a escala de pH para simplificar o controle de acidez na produção de cerveja e bioquímica celular.',
    hint1: 'Seu primeiro e último nome são quase iguais.',
    hint2: 'Søren Sørensen.',
    tags: ['historia', 'sorensen']
  },

  // ==========================================
  // CAPÍTULO 11: pOH (5 questões)
  // ==========================================
  {
    id: 'ex-058',
    module: 'acidos',
    chapterId: 11,
    chapterSlug: 'poh',
    difficulty: 'facil',
    type: 'calculo',
    question: 'Sabendo que a 25 °C a relação fundamental entre as escalas é pH + pOH = 14, qual é o pOH de uma solução cujo pH é 3?',
    options: [
      'pOH = 3',
      'pOH = 7',
      'pOH = 11',
      'pOH = 14',
      'pOH = 17'
    ],
    correctAnswerIndex: 2,
    explanation: 'pOH = 14 - pH = 14 - 3 = 11.',
    hint1: 'Subtraia o pH de 14.',
    hint2: '14 - 3 = 11.',
    tags: ['poh', 'calculo', 'relacao']
  },
  {
    id: 'ex-059',
    module: 'acidos',
    chapterId: 11,
    chapterSlug: 'poh',
    difficulty: 'facil',
    type: 'calculo',
    question: 'Uma solução aquosa de hidróxido de sódio (NaOH) possui concentração de íons OH⁻ igual a 10⁻² mol/L. O seu pOH e pH são respectivamente:',
    options: [
      'pOH = 2 e pH = 12',
      'pOH = 12 e pH = 2',
      'pOH = 7 e pH = 7',
      'pOH = 14 e pH = 0',
      'pOH = 2 e pH = 2'
    ],
    correctAnswerIndex: 0,
    explanation: 'pOH = -log[OH⁻] = -log(10⁻²) = 2. Logo: pH = 14 - 2 = 12.',
    hint1: 'Calcule o pOH direto pelo expoente da concentração de hidroxilas.',
    hint2: 'pOH = 2; então o pH é 14 - 2 = 12.',
    tags: ['poh', 'ph', 'base']
  },
  {
    id: 'ex-060',
    module: 'acidos',
    chapterId: 11,
    chapterSlug: 'poh',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Em uma solução com pOH = 12 a 25 °C, o meio é classificado como:',
    options: [
      'Neutro',
      'Fortemente ácido (pH = 2)',
      'Básico fraco',
      'Alcalino forte (pH = 12)',
      'Impossível de determinar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Se pOH = 12, então pH = 14 - 12 = 2. Um pH igual a 2 indica um meio marcadamente ácido.',
    hint1: 'Descubra primeiro o pH correspondente (14 - 12).',
    hint2: 'pH = 2 significa alta concentração de H⁺, logo o meio é fortemente ácido.',
    tags: ['poh', 'classificacao', 'acidez']
  },
  {
    id: 'ex-061',
    module: 'acidos',
    chapterId: 11,
    chapterSlug: 'poh',
    difficulty: 'dificil',
    type: 'calculo',
    question: 'O produto iônico da água pura a 25 °C é Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴. Se uma solução ácida tem [H⁺] = 2,0 × 10⁻³ mol/L, qual é a concentração de íons [OH⁻] nessa solução?',
    options: [
      '5,0 × 10⁻¹² mol/L',
      '2,0 × 10⁻¹¹ mol/L',
      '1,0 × 10⁻¹⁴ mol/L',
      '5,0 × 10⁻¹¹ mol/L',
      '0,5 × 10⁻³ mol/L'
    ],
    correctAnswerIndex: 0,
    explanation: '[OH⁻] = Kw / [H⁺] = (1,0 × 10⁻¹⁴) / (2,0 × 10⁻³) = 0,5 × 10⁻¹¹ = 5,0 × 10⁻¹² mol/L.',
    hint1: 'Divida 10⁻¹⁴ por [H⁺].',
    hint2: '1 / 2 = 0,5 e 10⁻¹⁴ / 10⁻³ = 10⁻¹¹.',
    tags: ['kw', 'produto-ionico', 'calculo']
  },
  {
    id: 'ex-062',
    module: 'acidos',
    chapterId: 11,
    chapterSlug: 'poh',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Em uma solução rigorosamente neutra a 25 °C, quais são os valores numéricos de pH e pOH?',
    options: [
      'pH = 0 e pOH = 14',
      'pH = 7 e pOH = 7',
      'pH = 14 e pOH = 0',
      'pH = 10 e pOH = 4',
      'pH = 1 e pOH = 1'
    ],
    correctAnswerIndex: 1,
    explanation: 'No ponto de neutralidade da água pura a 25 °C, [H⁺] = [OH⁻] = 10⁻⁷ mol/L, portanto pH = 7 e pOH = 7.',
    hint1: 'Neutralidade significa que [H⁺] = [OH⁻].',
    hint2: 'A metade de 14 é 7.',
    tags: ['neutro', 'escala']
  },

  // ==========================================
  // CAPÍTULO 12: INDICADORES ÁCIDO-BASE (5 questões)
  // ==========================================
  {
    id: 'ex-063',
    module: 'acidos',
    chapterId: 12,
    chapterSlug: 'indicadores',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é a coloração assumida pelo indicador fenolftaleína quando adicionado a uma solução aquosa ácida (ex: suco gástrico, pH = 2)?',
    options: [
      'Rosa choque intenso',
      'Azul escuro',
      'Incolor',
      'Amarelo brilhante',
      'Verde musgo'
    ],
    correctAnswerIndex: 2,
    explanation: 'A fenolftaleína permanece incolor em meio ácido e neutro (pH < 8,2), tornando-se rosa/carmesim apenas em meio alcalino.',
    hint1: 'A fenolftaleína só ganha cor em meio básico.',
    hint2: 'Em meio ácido ela fica sem cor (incolor).',
    tags: ['indicadores', 'fenolftaleina', 'cores']
  },
  {
    id: 'ex-064',
    module: 'acidos',
    chapterId: 12,
    chapterSlug: 'indicadores',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O papel de tornassol azul, quando imerso em uma solução aquosa de ácido clorídrico, adquire a coloração:',
    options: [
      'Verde',
      'Vermelha',
      'Permanece azul',
      'Preta',
      'Amarela'
    ],
    correctAnswerIndex: 1,
    explanation: 'O tornassol fica vermelho em contato com substâncias ácidas e azul em contato com substâncias básicas.',
    hint1: 'Tornassol em ácido fica avermelhado.',
    hint2: 'A cor de alerta de acidez é vermelha.',
    tags: ['tornassol', 'indicadores']
  },
  {
    id: 'ex-065',
    module: 'acidos',
    chapterId: 12,
    chapterSlug: 'indicadores',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O azul de bromotimol apresenta cor amarela em meio ácido (pH < 6,0), verde em torno da neutralidade (6,0 a 7,6) e azul em meio básico (pH > 7,6). Ao adicionar esse indicador em uma garrafa de água mineral gaseificada (pH ≈ 4,5), qual cor será observada?',
    options: [
      'Azul',
      'Verde',
      'Amarela',
      'Incolor',
      'Rosa'
    ],
    correctAnswerIndex: 2,
    explanation: 'Como o pH é 4,5 (abaixo de 6,0), o meio é ácido e o azul de bromotimol exibe a sua coloração amarela.',
    hint1: 'pH 4,5 está na faixa inferior a 6,0.',
    hint2: 'Na faixa ácida, o azul de bromotimol é amarelo.',
    tags: ['bromotimol', 'indicadores', 'cores']
  },
  {
    id: 'ex-066',
    module: 'acidos',
    chapterId: 12,
    chapterSlug: 'indicadores',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Em nível molecular, como funciona quimicamente um indicador ácido-base orgânico genérico (HInd)?',
    options: [
      'Ele atua como um ácido ou base fraca cuja forma protonada (HInd) possui estrutura eletrônica e absorção de luz (cor) diferente da sua forma desprotonada (Ind⁻).',
      'Ele reage destruindo completamente o solvente através de combustão catalítica.',
      'Ele precipita na forma de partículas metálicas radioativas que emitem luz fluorescente.',
      'Ele altera mecanicamente a gravidade do líquido no frasco.',
      'Ele fixa o pH em exatamente zero em qualquer circunstância.'
    ],
    correctAnswerIndex: 0,
    explanation: 'HInd(cor 1) ⇌ H⁺ + Ind⁻(cor 2). A adição de H⁺ desloca o equilíbrio para a forma HInd (cor 1); a retirada de H⁺ desloca para Ind⁻ (cor 2).',
    hint1: 'O indicador é ele próprio um ácido ou base fraca em equilíbrio químico.',
    hint2: 'A presença ou ausência do H⁺ altera o sistema de ligações conjugadas da molécula.',
    tags: ['mecanismo', 'indicadores', 'equilibrio']
  },
  {
    id: 'ex-067',
    module: 'acidos',
    chapterId: 12,
    chapterSlug: 'indicadores',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O extrato de repolho roxo é um clássico indicador natural de pH devido à presença de quais pigmentos vegetais flavonoides?',
    options: [
      'Clorofila',
      'Caroteno',
      'Antocianinas',
      'Hemoglobina',
      'Melanina'
    ],
    correctAnswerIndex: 2,
    explanation: 'As antocianinas são pigmentos solúveis em água cuja estrutura química e espectro de absorção visível mudam dramaticamente em função do pH.',
    hint1: 'Começa com "anto-".',
    hint2: 'Antocianinas são responsáveis pelas cores vermelhas, roxas e azuis em flores e frutos.',
    tags: ['repolho-roxo', 'antocianinas', 'natural']
  },

  // ==========================================
  // CAPÍTULO 13: REAÇÕES DOS ÁCIDOS (6 questões)
  // ==========================================
  {
    id: 'ex-068',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual gás é desprendido na reação química entre o ácido clorídrico (HCl) e raspas de metal zinco (Zn)?',
    options: [
      'Gás oxigênio (O₂)',
      'Gás hidrogênio (H₂)',
      'Gás carbônico (CO₂)',
      'Gás cloro (Cl₂)',
      'Gás metano (CH₄)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ácido + Metal ativo → Sal + Gás Hidrogênio (H₂). Reação: 2 HCl + Zn → ZnCl₂ + H₂↑.',
    hint1: 'O zinco desloca o hidrogênio do ácido.',
    hint2: 'O gás inflamável liberado é o H₂.',
    tags: ['reacoes', 'metais', 'hidrogenio']
  },
  {
    id: 'ex-069',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é o gás liberado quando se joga vinagre sobre fermento químico ou mármore (carbonatos)?',
    options: [
      'Gás hélio (He)',
      'Gás carbônico (CO₂ ou dióxido de carbono)',
      'Gás nitrogênio (N₂)',
      'Ozônio (O₃)',
      'Monóxido de carbono (CO)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ácidos reagem com carbonatos e bicarbonatos gerando ácido carbônico, que se decompõe instantaneamente em água e gás carbônico (CO₂).',
    hint1: 'É o mesmo gás presente na respiração humana e refrigerantes.',
    hint2: 'Dióxido de carbono (CO₂).',
    tags: ['carbonatos', 'efervescencia', 'co2']
  },
  {
    id: 'ex-070',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'medio',
    type: 'balanceamento',
    question: 'Ao balancear a equação da reação de neutralização entre o ácido fosfórico e o hidróxido de sódio: a H₃PO₄ + b NaOH → c Na₃PO₄ + d H₂O, quais são os menores coeficientes inteiros (a, b, c, d)?',
    options: [
      '1, 1, 1, 1',
      '1, 3, 1, 3',
      '3, 1, 3, 1',
      '2, 3, 1, 6',
      '1, 2, 1, 2'
    ],
    correctAnswerIndex: 1,
    explanation: 'Como o H₃PO₄ libera 3 H⁺, ele necessita de 3 OH⁻ provenientes de 3 NaOH. Portanto: 1 H₃PO₄ + 3 NaOH → 1 Na₃PO₄ + 3 H₂O.',
    hint1: 'O ácido tem 3 H ionizáveis; você precisa de 3 bases NaOH.',
    hint2: 'Os coeficientes são 1, 3, 1, 3.',
    tags: ['balanceamento', 'estequiometria', 'reacoes']
  },
  {
    id: 'ex-071',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Por que o ouro (Au) e a platina (Pt) NÃO reagem com ácido clorídrico puro para liberar gás hidrogênio, enquanto o ferro e o magnésio reagem intensamente?',
    options: [
      'Porque ouro e platina são não-metais gasosos.',
      'Porque na fila de reatividade dos metais, o ouro e a platina são metais nobres com potencial padrão de redução maior que o do hidrogênio (E° > 0 V), não tendo tendência termodinâmica de doar elétrons para o H⁺.',
      'Porque o ouro destrói a água antes de encontrar o ácido.',
      'Porque o cloro é incapaz de se aproximar de átomos amarelos.',
      'Porque o HCl só reage com elementos radioativos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Metais menos reativos que o hidrogênio (Cu, Ag, Hg, Pt, Au) não deslocam o H⁺ de ácidos não oxidantes como o HCl.',
    hint1: 'Consulte a fila de reatividade dos metais e o potencial padrão de redução.',
    hint2: 'Metais nobres situam-se depois do hidrogênio na fila de reatividade.',
    tags: ['reatividade', 'metais-nobres', 'eletroquimica']
  },
  {
    id: 'ex-072',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual sal é formado na reação química completa entre ácido sulfúrico (H₂SO₄) e hidróxido de potássio (KOH)?',
    options: [
      'Cloreto de potássio (KCl)',
      'Sulfato de potássio (K₂SO₄)',
      'Nitrato de potássio (KNO₃)',
      'Fosfato de potássio (K₃PO₄)',
      'Sulfeto de potássio (K₂S)'
    ],
    correctAnswerIndex: 1,
    explanation: 'H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O. O ânion sulfato une-se aos cátions potássio.',
    hint1: 'O ânion vem do ácido sulfúrico (sulfato).',
    hint2: 'O sal é o sulfato de potássio (K₂SO₄).',
    tags: ['sal', 'neutralizacao', 'nomenclatura']
  },
  {
    id: 'ex-073',
    module: 'acidos',
    chapterId: 13,
    chapterSlug: 'reacoes',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'A reação genérica Ácido + Base → Sal + Água recebe tradicionalmente o nome de:',
    options: [
      'Combustão completa',
      'Reação de neutralização (ou salificação)',
      'Eletrólise ígnea',
      'Fissão nuclear',
      'Polimerização por adição'
    ],
    correctAnswerIndex: 1,
    explanation: 'A neutralização é o encontro dos íons H⁺ do ácido com os íons OH⁻ da base formando água (H₂O) e um sal.',
    hint1: 'Os efeitos do ácido e da base anulam-se mutuamente.',
    hint2: 'Neutralização ou salificação.',
    tags: ['neutralizacao', 'conceito']
  },

  // ==========================================
  // CAPÍTULO 14: NEUTRALIZAÇÃO (6 questões)
  // ==========================================
  {
    id: 'ex-074',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'facil',
    type: 'calculo',
    question: 'Em uma titulação no laboratório, quantos mL de NaOH 0,10 mol/L são necessários para neutralizar exatamente 10 mL de HCl 0,10 mol/L?',
    options: [
      '5 mL',
      '10 mL',
      '20 mL',
      '50 mL',
      '100 mL'
    ],
    correctAnswerIndex: 1,
    explanation: 'Como a estequiometria HCl + NaOH é 1:1 e as molaridades são idênticas (0,10 mol/L), o volume de base deve ser rigorosamente igual ao volume de ácido: 10 mL.',
    hint1: 'As concentrações são idênticas e a proporção é de 1 para 1.',
    hint2: 'V_base = V_ácido = 10 mL.',
    tags: ['titulacao', 'calculo', 'neutralizacao']
  },
  {
    id: 'ex-075',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Qual o volume de NaOH 0,20 mol/L necessário para neutralizar completamente 50 mL de ácido sulfúrico (H₂SO₄) 0,10 mol/L?',
    options: [
      '25 mL',
      '50 mL',
      '100 mL',
      '10 mL',
      '75 mL'
    ],
    correctAnswerIndex: 1,
    explanation: 'H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O. n_H⁺ = 2 × 0,10 mol/L × 0,050 L = 0,010 mol de H⁺. O volume de NaOH necessário é V = 0,010 mol / 0,20 mol/L = 0,050 L = 50 mL.',
    hint1: 'Lembre-se de que cada molécula de H₂SO₄ fornece 2 íons H⁺.',
    hint2: '2 × (0,10 × 50) = 1 × (0,20 × V_base) → V_base = 50 mL.',
    tags: ['titulacao', 'diacido', 'calculo']
  },
  {
    id: 'ex-076',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Quando 1 mol de ácido fosfórico (H₃PO₄) reage com apenas 1 mol de hidróxido de sódio (NaOH), ocorre neutralização parcial. Qual é a fórmula do hidrogenossal formado?',
    options: [
      'Na₃PO₄',
      'Na₂HPO₄',
      'NaH₂PO₄',
      'Na₃P',
      'NaPO₃'
    ],
    correctAnswerIndex: 2,
    explanation: '1 H₃PO₄ + 1 NaOH → NaH₂PO₄ + 1 H₂O. O sal formado é o di-hidrogenofosfato de sódio.',
    hint1: 'Substitua apenas um H⁺ do ácido por um Na⁺ da base.',
    hint2: 'Restam dois átomos de hidrogênio no ânion: NaH₂PO₄.',
    tags: ['neutralizacao-parcial', 'hidrogenossal']
  },
  {
    id: 'ex-077',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'dificil',
    type: 'calculo',
    question: 'Misturou-se 100 mL de HCl 0,20 mol/L com 100 mL de NaOH 0,10 mol/L. Após a reação, qual é o caráter da solução resultante e a concentração molar do excesso de soluto?',
    options: [
      'Solução perfeitamente neutra com pH = 7',
      'Solução ácida com [H⁺] = 0,05 mol/L',
      'Solução básica com [OH⁻] = 0,10 mol/L',
      'Solução ácida com [H⁺] = 0,10 mol/L',
      'Precipitação total de cloreto de sódio'
    ],
    correctAnswerIndex: 1,
    explanation: 'n_HCl = 0,100 L × 0,20 mol/L = 0,020 mol. n_NaOH = 0,100 L × 0,10 mol/L = 0,010 mol. Reagem 0,010 mol de cada. Resta excesso de 0,010 mol de HCl em um volume total de 200 mL (0,200 L). Concentração final = 0,010 mol / 0,200 L = 0,05 mol/L de H⁺.',
    hint1: 'Calcule os mols de ácido e de base antes da mistura.',
    hint2: 'Subtraia os mols e divida pelo volume final de 200 mL (0,2 L).',
    tags: ['estequiometria-misturas', 'excesso', 'calculo']
  },
  {
    id: 'ex-078',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Em uma titulação ácido-base, o momento em que a quantidade estequiométrica exata de base foi adicionada para consumir todo o ácido presente é chamado tecnicamente de:',
    options: [
      'Ponto de ebulição',
      'Ponto de equivalência (ou estequiométrico)',
      'Ponto triplo da água',
      'Ponto de condensação',
      'Ponto de fusão'
    ],
    correctAnswerIndex: 1,
    explanation: 'O ponto de equivalência é o momento teórico em que o número de equivalentes de ácido iguala o de base.',
    hint1: 'Refere-se ao equilíbrio estequiométrico exato entre H⁺ e OH⁻.',
    hint2: 'Ponto de equivalência.',
    tags: ['ponto-de-equivalencia', 'titulacao']
  },
  {
    id: 'ex-079',
    module: 'acidos',
    chapterId: 14,
    chapterSlug: 'neutralizacao',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Ao ingerir leite de magnésia [Mg(OH)₂] para tratar queimação estomacal (excesso de HCl), qual sal inorgânico é sintetizado no estômago?',
    options: [
      'Sulfato de magnésio (MgSO₄)',
      'Cloreto de magnésio (MgCl₂)',
      'Carbonato de magnésio (MgCO₃)',
      'Nitrato de magnésio [Mg(NO₃)₂]',
      'Magnésio metálico puro (Mg)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O. O sal formado é o cloreto de magnésio.',
    hint1: 'A reação ocorre entre Mg(OH)₂ e HCl.',
    hint2: 'Cátion Mg²⁺ com ânion Cl⁻ forma MgCl₂.',
    tags: ['cotidiano', 'antiacido', 'sal']
  },

  // ==========================================
  // CAPÍTULO 15: Ka E pKa (5 questões)
  // ==========================================
  {
    id: 'ex-080',
    module: 'acidos',
    chapterId: 15,
    chapterSlug: 'ka-pka',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Em relação à constante de ionização ácida (Ka) e ao pKa, assinale a correlação correta a uma dada temperatura:',
    options: [
      'Quanto maior for o valor de Ka, mais fraco é o ácido.',
      'Quanto maior for o valor de Ka e menor for o valor de pKa, mais forte é o ácido.',
      'Ka e pKa são grandezas diretamente proporcionais que variam no mesmo sentido.',
      'O valor de Ka de um ácido forte é sempre zero.',
      'O pKa independe da constante Ka.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Como pKa = -log(Ka), um valor de Ka muito alto gera um pKa baixo. Quanto maior o Ka (e menor o pKa), mais ionizado e forte é o ácido.',
    hint1: 'Lembre-se da função cologaritmo (-log).',
    hint2: 'Menor pKa indica maior acidez, assim como menor pH indica maior acidez.',
    tags: ['ka', 'pka', 'forca']
  },
  {
    id: 'ex-081',
    module: 'acidos',
    chapterId: 15,
    chapterSlug: 'ka-pka',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Um ácido fraco monoprótico HA possui constante de acidez Ka = 1,0 × 10⁻⁵ a 25 °C. Qual é o valor do seu pKa?',
    options: [
      'pKa = 2',
      'pKa = 5',
      'pKa = 9',
      'pKa = 10',
      'pKa = -5'
    ],
    correctAnswerIndex: 1,
    explanation: 'pKa = -log(Ka) = -log(10⁻⁵) = 5.',
    hint1: 'Aplique a definição pKa = -log(Ka).',
    hint2: '-(-5) = 5.',
    tags: ['pka', 'calculo', 'logaritmo']
  },
  {
    id: 'ex-082',
    module: 'acidos',
    chapterId: 15,
    chapterSlug: 'ka-pka',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Considere quatro ácidos com os seguintes valores de pKa: Ácido I (pKa = 1,2), Ácido II (pKa = 3,8), Ácido III (pKa = 4,7) e Ácido IV (pKa = 9,2). Qual deles é o ácido mais FORTE?',
    options: [
      'Ácido IV',
      'Ácido III',
      'Ácido II',
      'Ácido I',
      'Todos têm exatamente a mesma força'
    ],
    correctAnswerIndex: 3,
    explanation: 'O ácido mais forte é aquele que possui o MENOR valor de pKa. Portanto, o Ácido I (pKa = 1,2) é o mais forte da lista.',
    hint1: 'Procure o menor valor numérico de pKa.',
    hint2: '1,2 é o menor valor entre os quatro.',
    tags: ['comparacao', 'pka', 'forca']
  },
  {
    id: 'ex-083',
    module: 'acidos',
    chapterId: 15,
    chapterSlug: 'ka-pka',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'A expressão termodinâmica da constante Ka para a ionização do ácido nitroso (HNO₂ + H₂O ⇌ H₃O⁺ + NO₂⁻) é representada por:',
    options: [
      'Ka = [H₃O⁺][NO₂⁻] / [HNO₂]',
      'Ka = [HNO₂] / ([H₃O⁺][NO₂⁻])',
      'Ka = [H₃O⁺][NO₂⁻][H₂O] / [HNO₂]',
      'Ka = [HNO₂][H₂O] / [NO₂⁻]',
      'Ka = [H₃O⁺] + [NO₂⁻] - [HNO₂]'
    ],
    correctAnswerIndex: 0,
    explanation: 'Em soluções diluídas, a água é o solvente em enorme excesso e sua concentração é incorporada à constante (atividade = 1). Ka = produtos / reagentes.',
    hint1: 'A água não entra explicitamente na expressão da constante Ka.',
    hint2: 'Produtos no numerador, reagente ácido no denominador.',
    tags: ['ka', 'expressao', 'equilibrio']
  },
  {
    id: 'ex-084',
    module: 'acidos',
    chapterId: 15,
    chapterSlug: 'ka-pka',
    difficulty: 'medio',
    type: 'calculo',
    question: 'Se um ácido hipotético tem Ka = 10⁻², qual é a sua constante pKa?',
    options: [
      'pKa = 12',
      'pKa = 2',
      'pKa = 7',
      'pKa = 0,02',
      'pKa = -2'
    ],
    correctAnswerIndex: 1,
    explanation: 'pKa = -log(10⁻²) = 2.',
    hint1: '-log(10⁻²) = 2.',
    hint2: 'O valor de pKa é 2.',
    tags: ['pka', 'calculo']
  },

  // ==========================================
  // CAPÍTULO 16: ÁCIDOS POLIPRÓTICOS (5 questões)
  // ==========================================
  {
    id: 'ex-085',
    module: 'acidos',
    chapterId: 16,
    chapterSlug: 'acidos-poliproticos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Em um ácido poliprótico como o H₂SO₃ (ácido sulfuroso), qual é a relação de grandeza entre as constantes de ionização da primeira e da segunda etapa (Ka₁ e Ka₂)?',
    options: [
      'Ka₁ é muito menor que Ka₂',
      'Ka₁ é sempre muito maior que Ka₂ (Ka₁ >> Ka₂)',
      'Ka₁ é rigorosamente igual a Ka₂',
      'Ka₂ é sempre negativo',
      'Ka₁ só existe se houver aquecimento a 100 °C'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ka₁ é sempre centenas ou milhares de vezes maior que Ka₂. Remover um H⁺ de uma molécula neutra é muito mais fácil do que remover de um ânion negativo.',
    hint1: 'É mais fácil tirar carga positiva de uma espécie neutra ou de um ânion já carregado negativamente?',
    hint2: 'A primeira etapa ocorre com muito maior facilidade: Ka₁ >> Ka₂.',
    tags: ['poliproticos', 'ka1', 'ka2']
  },
  {
    id: 'ex-086',
    module: 'acidos',
    chapterId: 16,
    chapterSlug: 'acidos-poliproticos',
    difficulty: 'medio',
    type: 'interpretacao',
    question: 'Na ionização do ácido sulfúrico (H₂SO₄) em água, o que ocorre nas duas etapas sucessivas?',
    options: [
      'Ambas as etapas são fracas e reversíveis.',
      'A 1ª etapa é praticamente 100% ionizada (ácido forte), enquanto a 2ª etapa (HSO₄⁻ ⇌ H⁺ + SO₄²⁻) é moderada com Ka₂ ≈ 1,2 × 10⁻².',
      'Nenhuma etapa se ioniza.',
      'A 1ª etapa forma gás SO₂ e a 2ª forma gás H₂.',
      'O H₂SO₄ não é um ácido poliprótico.'
    ],
    correctAnswerIndex: 1,
    explanation: 'O H₂SO₄ é um caso único: a 1ª desprotonação é completa (Ka₁ >> 1). A 2ª desprotonação atinge um equilíbrio com Ka₂ ≈ 1,2 × 10⁻².',
    hint1: 'A primeira perda de próton do H₂SO₄ é total.',
    hint2: 'O ânion HSO₄⁻ comporta-se como ácido moderado na segunda etapa.',
    tags: ['h2so4', 'etapas', 'avancado']
  },
  {
    id: 'ex-087',
    module: 'acidos',
    chapterId: 16,
    chapterSlug: 'acidos-poliproticos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual é a espécie química intermediária formada na primeira etapa de ionização do ácido carbônico (H₂CO₃)?',
    options: [
      'CO₃²⁻ (ânion carbonato)',
      'HCO₃⁻ (ânion bicarbonato ou hidrogenocarbonato)',
      'CO₂ (gás carbônico)',
      'CH₄ (metano)',
      'H₃O⁺'
    ],
    correctAnswerIndex: 1,
    explanation: 'H₂CO₃ + H₂O ⇌ H₃O⁺ + HCO₃⁻. A espécie intermediária é o íon bicarbonato.',
    hint1: 'Tire apenas um próton da fórmula H₂CO₃.',
    hint2: 'Resta HCO₃⁻.',
    tags: ['bicarbonato', 'intermediario', 'h2co3']
  },
  {
    id: 'ex-088',
    module: 'acidos',
    chapterId: 16,
    chapterSlug: 'acidos-poliproticos',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Em uma solução aquosa de ácido fosfórico 0,1 mol/L em equilíbrio, qual é a espécie fosforada predominante em concentração?',
    options: [
      'PO₄³⁻',
      'HPO₄²⁻',
      'H₂PO₄⁻',
      'H₃PO₄ intacto (molecular)',
      'Fósforo elementar sólido'
    ],
    correctAnswerIndex: 3,
    explanation: 'Como o H₃PO₄ é um ácido moderado/fraco (Ka₁ ≈ 7,5 × 10⁻³), apenas uma fração minoritária das moléculas ioniza. A espécie mais abundante em solução continua sendo o H₃PO₄ não ionizado.',
    hint1: 'Ácidos moderados têm grau de ionização relativamente baixo.',
    hint2: 'A maioria das moléculas permanece na forma neutra não ionizada.',
    tags: ['especies-predominantes', 'equilibrio', 'h3po4']
  },
  {
    id: 'ex-089',
    module: 'acidos',
    chapterId: 16,
    chapterSlug: 'acidos-poliproticos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Quantas etapas de ionização sucessivas possui um triácido?',
    options: [
      '1 etapa',
      '2 etapas',
      '3 etapas',
      '4 etapas',
      'Nenhuma'
    ],
    correctAnswerIndex: 2,
    explanation: 'Triácidos possuem 3 hidrogênios ionizáveis liberados em 3 etapas sucessivas em equilíbrio.',
    hint1: 'O prefixo "tri-" indica 3.',
    hint2: 'Três etapas sucessivas.',
    tags: ['triacido', 'etapas']
  },

  // ==========================================
  // CAPÍTULO 17: ÁCIDOS NO COTIDIANO (6 questões)
  // ==========================================
  {
    id: 'ex-090',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'O ácido orgânico presente no vinagre de uso culinário que lhe confere o sabor azedo e aroma característico é o:',
    options: [
      'Ácido clorídrico',
      'Ácido sulfúrico',
      'Ácido acético (ou etanoico)',
      'Ácido fosfórico',
      'Ácido bórico'
    ],
    correctAnswerIndex: 2,
    explanation: 'O vinagre é uma solução aquosa contendo tipicamente entre 4% e 5% de ácido acético (CH₃COOH).',
    hint1: 'Seu nome IUPAC oficial é ácido etanoico.',
    hint2: 'Ácido acético.',
    tags: ['vinagre', 'acido-acetico', 'cotidiano']
  },
  {
    id: 'ex-091',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual ácido inorgânico forte é produzido pelas células parietais do estômago humano para auxiliar a digestão e ativar a pepsina?',
    options: [
      'Ácido sulfúrico (H₂SO₄)',
      'Ácido fluorídrico (HF)',
      'Ácido clorídrico (HCl)',
      'Ácido cianídrico (HCN)',
      'Ácido nítrico (HNO₃)'
    ],
    correctAnswerIndex: 2,
    explanation: 'O estômago produz suco gástrico rico em ácido clorídrico (HCl), gerando um pH entre 1,5 e 2,0.',
    hint1: 'Conhecido comercialmente em soluções impuras como ácido muriático.',
    hint2: 'HCl (ácido clorídrico).',
    tags: ['estomago', 'suco-gastrico', 'hcl']
  },
  {
    id: 'ex-092',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual ácido inorgânico forte é utilizado como solução eletrolítica condutora nas baterias de chumbo-ácido dos automóveis convencionais?',
    options: [
      'Ácido sulfúrico (H₂SO₄)',
      'Ácido carbônico (H₂CO₃)',
      'Ácido acético (CH₃COOH)',
      'Ácido clorídrico (HCl)',
      'Ácido fosfórico (H₃PO₄)'
    ],
    correctAnswerIndex: 0,
    explanation: 'A solução de bateria automotiva é uma solução concentrada de ácido sulfúrico (cerca de 35% a 38% em massa).',
    hint1: 'É o ácido mais produzido e consumido pela indústria mundial.',
    hint2: 'Fórmula H₂SO₄.',
    tags: ['bateria', 'h2so4', 'cotidiano']
  },
  {
    id: 'ex-093',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O ácido muriático, amplamente vendido em lojas de materiais de construção para limpeza pesada de pisos pós-obra e remoção de resíduos de cimento, é na realidade uma solução impura de:',
    options: [
      'Ácido nítrico',
      'Ácido clorídrico',
      'Ácido fluorídrico',
      'Ácido acético',
      'Ácido cianídrico'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ácido muriático é o nome comercial histórico do ácido clorídrico (HCl) de grau industrial.',
    hint1: 'Reage vigorosamente com cimento liberando efervescência.',
    hint2: 'HCl em solução técnica.',
    tags: ['acido-muriatico', 'hcl', 'limpeza']
  },
  {
    id: 'ex-094',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'O ácido fluorídrico (HF) possui a rara e perigosa propriedade de corroer e gravar o vidro (sílica, SiO₂). Por essa razão, em que tipo de frasco o HF deve ser estocado no laboratório?',
    options: [
      'Frascos de vidro pirex temperado',
      'Frascos de polietileno ou teflon (plásticos adequados)',
      'Latas de ferro galvanizado',
      'Frascos de cristal transparente',
      'Tubos de mármore esculpido'
    ],
    correctAnswerIndex: 1,
    explanation: 'O HF reage com o silicato do vidro: 4 HF + SiO₂ → SiF₄ + 2 H₂O. Portanto, deve ser rigorosamente armazenado em recipientes de polietileno, teflon ou plástico inerte.',
    hint1: 'Se o ácido corrói o vidro, ele não pode ser guardado em frasco de vidro.',
    hint2: 'Polietileno ou teflon são polímeros orgânicos que resistem ao ataque do HF.',
    tags: ['hf', 'vidro', 'seguranca']
  },
  {
    id: 'ex-095',
    module: 'acidos',
    chapterId: 17,
    chapterSlug: 'cotidiano',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Frutas como limão, laranja e acerola são conhecidas pela presença de quais ácidos característicos?',
    options: [
      'Ácido sulfúrico e ácido nítrico',
      'Ácido cítrico e ácido ascórbico (vitamina C)',
      'Ácido cianídrico e ácido fluorídrico',
      'Ácido muriático e ácido sulfídrico',
      'Ácido bórico e ácido fosfórico'
    ],
    correctAnswerIndex: 1,
    explanation: 'Frutas cítricas são ricas em ácido cítrico (acidulante natural) e ácido ascórbico (vitamina C, potente antioxidante).',
    hint1: 'Pense na vitamina C e no nome das frutas "cítricas".',
    hint2: 'Ácido cítrico e ascórbico.',
    tags: ['frutas', 'vitamina-c', 'acido-citrico']
  },

  // ==========================================
  // CAPÍTULO 18: CHUVA ÁCIDA (6 questões)
  // ==========================================
  {
    id: 'ex-096',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Mesmo em ambientes naturais intocados e livres de qualquer poluição industrial, a água da chuva já é ligeiramente ácida (pH em torno de 5,6). Qual substância naturalmente presente na atmosfera causa essa acidez basal?',
    options: [
      'Monóxido de carbono (CO)',
      'Dióxido de carbono (CO₂)',
      'Gás ozônio (O₃)',
      'Gás metano (CH₄)',
      'Argônio (Ar)'
    ],
    correctAnswerIndex: 1,
    explanation: 'O CO₂ atmosférico natural dissolve-se nas gotas de chuva gerando ácido carbônico (H₂CO₃), que reduz o pH da água pura de 7,0 para cerca de 5,6.',
    hint1: 'Gás eliminado na respiração de todos os seres vivos aeróbios.',
    hint2: 'Dióxido de carbono (CO₂).',
    tags: ['chuva-acida', 'co2', 'basal']
  },
  {
    id: 'ex-097',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Quais são os dois principais óxidos poluentes antrópicos responsáveis pela intensificação severa da CHUVA ÁCIDA (pH < 4,5)?',
    options: [
      'Dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOx)',
      'Gás hélio e gás néon',
      'Cloreto de sódio e carbonato de cálcio',
      'Vapor de água pura e gás nitrogênio N₂',
      'Metano e oxigênio molecular'
    ],
    correctAnswerIndex: 0,
    explanation: 'A queima de combustíveis fósseis contendo impurezas de enxofre em usinas termelétricas e indústrias emite SO₂; motores veiculares emitem óxidos de nitrogênio (NO e NO₂).',
    hint1: 'Gases derivados de enxofre e de nitrogênio.',
    hint2: 'SO₂ e NOx.',
    tags: ['poluicao', 'chuva-acida', 'so2-nox']
  },
  {
    id: 'ex-098',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Monumentos históricos, fachadas de edifícios antigos e estátuas de mármore e calcário sofrem rápida corrosão pela chuva ácida. O principal composto químico do mármore atacado pelos ácidos é o:',
    options: [
      'Cloreto de potássio (KCl)',
      'Carbonato de cálcio (CaCO₃)',
      'Sulfato de bário (BaSO₄)',
      'Nitrato de prata (AgNO₃)',
      'Óxido de ferro (Fe₂O₃)'
    ],
    correctAnswerIndex: 1,
    explanation: 'O mármore é constituído essencialmente de carbonato de cálcio (CaCO₃), que reage com H₂SO₄ formando sulfato de cálcio, água e CO₂.',
    hint1: 'É um sal de carbonato de um metal alcalinoterroso.',
    hint2: 'CaCO₃ (carbonato de cálcio).',
    tags: ['marmore', 'chuva-acida', 'caco3']
  },
  {
    id: 'ex-099',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Em ecossistemas aquáticos como lagos de regiões temperadas, a chuva ácida causa mortalidade em massa de peixes não apenas pela acidez direta, mas principalmente pela lixiviação de qual íon metálico tóxico do solo?',
    options: [
      'Íon sódio (Na⁺)',
      'Íon alumínio (Al³⁺)',
      'Íon magnésio (Mg²⁺)',
      'Íon cálcio (Ca²⁺)',
      'Íon potássio (K⁺)'
    ],
    correctAnswerIndex: 1,
    explanation: 'A água acidificada solubiliza compostos de alumínio antes insolúveis no solo. O Al³⁺ dissolvido afeta as brânquias dos peixes, impedindo a oxigenação e provocando asfixia.',
    hint1: 'Metal do grupo 13 que em meio ácido torna-se um cátion trivalente móvel.',
    hint2: 'Alumínio (Al³⁺).',
    tags: ['ecologia', 'aluminio', 'toxicidade']
  },
  {
    id: 'ex-100',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'Qual prática agropecuária é comumente empregada para corrigir a acidez excessiva provocada pela chuva ácida em solos agrícolas?',
    options: [
      'Adição de ácido sulfúrico concentrado',
      'Calagem (aplicação de calcário agrícola moído contendo CaCO₃ e MgCO₃)',
      'Irrigação constante com água destilada gelada',
      'Queima superficial da vegetação nativa',
      'Adição de sal de cozinha (NaCl)'
    ],
    correctAnswerIndex: 1,
    explanation: 'A calagem neutraliza o excesso de íons H⁺ e repõe cátions essenciais de cálcio e magnésio no solo.',
    hint1: 'Técnica de aplicação de calcário moído.',
    hint2: 'Calagem.',
    tags: ['calagem', 'solo', 'agricultura']
  },
  {
    id: 'ex-101',
    module: 'acidos',
    chapterId: 18,
    chapterSlug: 'chuva-acida',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual ácido forte é gerado diretamente pela dissolução de trióxido de enxofre (SO₃) nas gotículas das nuvens?',
    options: [
      'Ácido sulfídrico (H₂S)',
      'Ácido sulfúrico (H₂SO₄)',
      'Ácido clorídrico (HCl)',
      'Ácido fosfórico (H₃PO₄)',
      'Ácido fluorídrico (HF)'
    ],
    correctAnswerIndex: 1,
    explanation: 'SO₃ + H₂O → H₂SO₄. A reação do anidrido sulfúrico com água produz ácido sulfúrico.',
    hint1: 'SO₃ reage com H₂O.',
    hint2: 'Origina o ácido H₂SO₄.',
    tags: ['so3', 'h2so4', 'quimica-atmosferica']
  },

  // ==========================================
  // CAPÍTULO 19: ACIDIFICAÇÃO DOS OCEANOS (6 questões)
  // ==========================================
  {
    id: 'ex-102',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Qual é o gás do efeito estufa cuja emissão descontrolada pelas atividades humanas é o principal causador da ACIDIFICAÇÃO DOS OCEANOS?',
    options: [
      'Dióxido de carbono (CO₂)',
      'Metano (CH₄)',
      'Oxigênio molecular (O₂)',
      'Argônio (Ar)',
      'Clorofluorcarboneto (CFC)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Cerca de 25% a 30% de todo o CO₂ fóssil emitido na atmosfera é absorvido pelas águas superficiais dos oceanos, formando ácido carbônico.',
    hint1: 'Principal produto da queima de carvão, derivados de petróleo e gás fóssil.',
    hint2: 'Dióxido de carbono (CO₂).',
    tags: ['acidificacao-oceanica', 'co2', 'impacto-ambiental']
  },
  {
    id: 'ex-103',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'medio',
    type: 'interpretacao',
    question: 'A absorção de CO₂ pelos oceanos desencadeia o equilíbrio: CO₂(aq) + H₂O(l) ⇌ H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq). Como o aumento resultante de íons H⁺ afeta os íons carbonato (CO₃²⁻) essenciais aos corais?',
    options: [
      'O excesso de H⁺ reage com os íons CO₃²⁻ formando HCO₃⁻, reduzindo a concentração de carbonato livre disponível para os corais construírem seus esqueletos de CaCO₃.',
      'O H⁺ transforma todos os corais em diamantes puros.',
      'O H⁺ estimula o crescimento acelerado dos corais por fotossíntese reversa.',
      'O íon carbonato não sofre nenhuma interação com prótons H⁺.',
      'Aumenta instantaneamente o pH da água do mar para 14.'
    ],
    correctAnswerIndex: 0,
    explanation: 'A reação H⁺ + CO₃²⁻ ⇌ HCO₃⁻ consome o carbonato livre, dificultando a biomineralização de esqueletos de aragonita e calcita em corais e moluscos.',
    hint1: 'Os prótons H⁺ extras sequestram o íon carbonato.',
    hint2: 'Menos CO₃²⁻ livre significa menor formação de carbonato de cálcio nos esqueletos.',
    tags: ['equilibrio-marinho', 'corais', 'carbonato']
  },
  {
    id: 'ex-104',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'dificil',
    type: 'interpretacao',
    question: 'Embora o termo utilizado seja "acidificação dos oceanos", o pH da água do mar na superfície (que era cerca de 8,2 na era pré-industrial e hoje é cerca de 8,1) continua sendo superior a 7,0. Por que, então, os cientistas utilizam o termo "acidificação"?',
    options: [
      'Porque os cientistas desconhecem que valores acima de 7 são alcalinos.',
      'Porque o termo "acidificação" indica o PROCESSO de diminuição do pH em direção ao lado mais ácido da escala, e não que a água do mar tenha se tornado um meio ácido no sentido absoluto.',
      'Porque a água do mar abaixo de 10 metros de profundidade tem pH estritamente negativo.',
      'Porque o cloreto de sódio marinho se transforma em ácido clorídrico concentrado.',
      'Trata-se de um erro de tradução linguística do inglês.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Acidificar significa tornar mais ácido (reduzir o pH). Uma queda de 0,1 unidade na escala logarítmica representa um aumento de cerca de 26% a 30% na concentração de íons H⁺ nos oceanos.',
    hint1: 'Pense na diferença entre "estado" (estar básico) e "processo" (estar em queda de pH).',
    hint2: 'A redução do valor do pH representa o processo de acidificação.',
    tags: ['escala-logaritmica', 'conceito', 'oceanografia']
  },
  {
    id: 'ex-105',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'facil',
    type: 'multipla_escolha',
    question: 'Quais organismos marinhos sofrem impacto direto e severo pela redução dos íons carbonato na água?',
    options: [
      'Corais, mariscos, ostras e pterópodes (caramujos marinhos)',
      'Apenas algas microscópicas anaeróbias',
      'Tubarões e golfinhos, que possuem ossos de sílica',
      'Águas-vivas e anêmonas sem esqueleto mineral',
      'Nenhum organismo é afetado'
    ],
    correctAnswerIndex: 0,
    explanation: 'Organismos calcificadores utilizam CaCO₃ para suas carapaças, conchas e estruturas de sustentação, sendo as primeiras vítimas da acidificação.',
    hint1: 'Organismos com conchas ou esqueletos calcários.',
    hint2: 'Corais e moluscos conchíferos.',
    tags: ['biodiversidade', 'conchas', 'calcificacao']
  },
  {
    id: 'ex-106',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'O sistema tampão natural mais importante que ameniza as variações abruptas de pH nos oceanos é o sistema:',
    options: [
      'Tampão dióxido de silício / quartzo',
      'Tampão carbonato / bicarbonato (CO₂ / H₂CO₃ / HCO₃⁻ / CO₃²⁻)',
      'Tampão ácido clorídrico / cloreto',
      'Tampão amônia / amônio',
      'Tampão fosfato orgânico'
    ],
    correctAnswerIndex: 1,
    explanation: 'O equilíbrio de carbonatos e bicarbonatos atua como um tampão químico de escala global, embora a sobrecarga de CO₂ atual esteja esgotando essa capacidade de tamponamento.',
    hint1: 'Baseado no ácido carbônico e seus sais de bicarbonato e carbonato.',
    hint2: 'Sistema tampão carbonato / bicarbonato.',
    tags: ['sistema-tampao', 'oceanos', 'equilibrio']
  },
  {
    id: 'ex-107',
    module: 'acidos',
    chapterId: 19,
    chapterSlug: 'acidificacao-oceanos',
    difficulty: 'medio',
    type: 'multipla_escolha',
    question: 'A dissolução de carbonato de cálcio sólido em meio aquoso ácido pode ser representada por:',
    options: [
      'CaCO₃(s) + 2 H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)',
      'CaCO₃(s) → Ca(s) + C(s) + O₂(g)',
      'CaCO₃(s) + OH⁻(aq) → Ca(OH)₂(s) + CO₃²⁻(aq)',
      'CaCO₃(s) + H₂O(l) → CaH₂(s) + CO₃(aq)',
      'CaCO₃(s) + H⁺(aq) → CaO(s) + H₂O(l)'
    ],
    correctAnswerIndex: 0,
    explanation: 'O carbonato de cálcio reage com os prótons H⁺, solubilizando os cátions Ca²⁺ e liberando água e gás carbônico.',
    hint1: 'Carbonato com ácido libera Ca²⁺, água e CO₂.',
    hint2: 'CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂.',
    tags: ['caco3', 'dissolucao', 'equacao']
  }
];
