import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH19_ACIDIFICACAO_OCEANOS: Chapter = {
  id: 19,
  slug: 'acidificacao-oceanos',
  title: '19. Acidificação dos Oceanos',
  subtitle: 'O equilíbrio do CO₂ marinho, a destruição de recifes de coral e o impacto na base da cadeia trófica',
  description: 'Entenda como o aumento desenfreado das emissões de dióxido de carbono ameaça a química dos mares, reduzindo o pH oceânico e dissolvendo conchas e esqueletos calcários.',
  estimatedMinutes: 18,
  learningGoals: [
    'Compreender o equilíbrio químico do sistema CO₂ / H₂CO₃ / HCO₃⁻ / CO₃²⁻ nos oceanos',
    'Explicar por que a absorção de CO₂ atmosférico reduz a concentração de íons carbonato livres',
    'Avaliar o impacto biológico sobre corais, moluscos e plâncton calcificante',
    'Interpretar a queda do pH marinho como um fenômeno logarítmico em escala planetária'
  ],
  keyConcepts: [
    'Acidificação dos oceanos',
    'Absorção de CO₂ marinho',
    'Equilíbrio de carbonatos e bicarbonatos',
    'Biomineralização de calcita e aragonita (CaCO₃)',
    'Colapso de recifes de coral'
  ],
  formulas: [
    {
      title: 'Sistema em Equilíbrio Químico dos Oceanos',
      latex: 'CO_{2(aq)} + H_2O_{(l)} \\rightleftharpoons H_2CO_{3(aq)} \\rightleftharpoons H^+_{(aq)} + HCO_{3(aq)}^-',
      explanation: 'O CO₂ dissolvido gera prótons H⁺ adicionais nas águas superficiais.'
    },
    {
      title: 'Consumo do Íon Carbonato pelos Prótons Livres',
      latex: 'H^+_{(aq)} + CO_{3(aq)}^{2-} \\rightleftharpoons HCO_{3(aq)}^-',
      explanation: 'O excesso de H⁺ rouba os íons carbonato que os corais usariam para produzir CaCO₃.'
    }
  ],
  sections: [
    {
      id: 'sec-sumidouro',
      title: '1. O Oceano como Sumidouro de Carbono',
      content: 'Os oceanos cobrem mais de 70% da superfície da Terra e atuam como um gigantesco moderador climático. Estima-se que as águas oceânicas absorvam entre 25% e 30% de todo o CO₂ fóssil lançado na atmosfera pela humanidade desde a Revolução Industrial (mais de 500 bilhões de toneladas de CO₂ absorvidas).'
    },
    {
      id: 'sec-mecanismo-quimico',
      title: '2. A Química da Acidificação',
      content: 'A entrada contínua de CO₂ desloca os equilíbrios em cascata:\n1. O CO₂ gasoso dissolve-se formando ácido carbônico: CO₂ + H₂O ⇌ H₂CO₃.\n2. O ácido carbônico sofre ionização liberando prótons: H₂CO₃ ⇌ H⁺ + HCO₃⁻.\n3. O aumento de cátions H⁺ na água do mar reage com o ânion carbonato livre (CO₃²⁻), transformando-o em bicarbonato (HCO₃⁻): H⁺ + CO₃²⁻ ⇌ HCO₃⁻.\n\nResultado desastroso: a concentração de íons CO₃²⁻ disponíveis na água diminui vertiginosamente. Sem carbonato livre em quantidade suficiente, organismos marinhos calcificadores não conseguem sintetizar o mineral carbonato de cálcio (CaCO₃) necessário para construir e manter suas conchas e exoesqueletos!'
    },
    {
      id: 'sec-queda-ph',
      title: '3. A Variação do pH em Escala Planetária',
      content: 'Antes da Revolução Industrial, o pH médio das águas superficiais dos oceanos era de aproximadamente 8,25. Hoje, caiu para cerca de 8,14 — uma queda de 0,11 unidades. Lembre-se: como a escala de pH é logarítmica, essa redução aparentemente pequena de 0,11 representa um aumento de cerca de 30% na concentração de íons H⁺ nos oceanos em apenas 200 anos! Se as emissões continuarem no ritmo atual, projeta-se um pH de 7,8 até o ano 2100, nível no qual a água do mar se tornará corrosiva para conchas de aragonita.'
    }
  ],
  practicalExamples: [
    {
      title: 'O "Caracol Borboleta" (Pterópode)',
      description: 'Pterópodes marinhos são pequenos caramujos nadadores que formam a base alimentar de salmões, arenques, aves e baleias no Ártico e Antártica. Em águas com pH reduzido, suas conchas transparentes começam a se dissolver em menos de 45 dias de exposição.',
      category: 'Vida Marinha'
    }
  ],
  commonPitfalls: [
    {
      title: 'Oceano virou ácido sulfúrico?',
      warning: 'Cuidado! A água do mar ainda é ligeiramente básica (pH ~8,1).',
      explanation: 'O termo "acidificação" refere-se ao deslocamento do pH para valores menores (mais perto do lado ácido), e não que o mar tenha se tornado uma poça de ácido com pH < 7.'
    }
  ],
  didYouKnow: [
    {
      title: 'A Grande Barreira de Corais',
      text: 'Os recifes de coral abrigam mais de 25% de toda a biodiversidade marinha do planeta, mesmo ocupando menos de 0,1% do fundo dos oceanos. A acidificação, somada ao aquecimento global, ameaça extinguir boa parte dessas formações até o final deste século.'
    }
  ],
  oneMinuteSummary: [
    'Os oceanos absorvem cerca de 30% de todo o CO₂ gerado pela queima de combustíveis fósseis.',
    'CO₂ + H₂O gera ácido carbônico (H₂CO₃), liberando íons H⁺.',
    'Os prótons H⁺ consomem os íons carbonato (CO₃²⁻), formando bicarbonato (HCO₃⁻).',
    'A falta de carbonato livre impede que corais e moluscos construam suas conchas de CaCO₃.',
    'O pH marinho já caiu de 8,25 para 8,14 (um aumento de 30% na acidez em 200 anos).'
  ],
  solvedExercises: [SOLVED_EXERCISES[18]],
  prevChapterSlug: 'chuva-acida'
};
