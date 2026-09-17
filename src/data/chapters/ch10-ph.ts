import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH10_PH: Chapter = {
  id: 10,
  slug: 'ph',
  title: '10. Conceito e Escala de pH',
  subtitle: 'A escala logarítmica de Sørensen, cálculos com [H⁺] e a interpretação biológica e ambiental da acidez',
  description: 'Domine a escala que rege desde a acidez dos oceanos até o equilíbrio sanguíneo humano, aprendendo a calcular o pH através de logaritmos decimais.',
  estimatedMinutes: 20,
  learningGoals: [
    'Compreender o conceito matemático e prático de pH',
    'Calcular o pH a partir da concentração de íons hidrogênio [H⁺]',
    'Calcular a concentração de [H⁺] a partir do valor de pH conhecido',
    'Interpretar a escala de 0 a 14 a 25 °C e os critérios de meio ácido, neutro e básico',
    'Reconhecer que cada unidade de pH representa uma variação de 10 vezes na acidez'
  ],
  keyConcepts: [
    'Potencial Hidrogeniônico (pH)',
    'Escala logarítmica decimal',
    'Condições padrão a 25 °C',
    'Meio ácido (pH < 7)',
    'Meio neutro (pH = 7)',
    'Meio básico (pH > 7)'
  ],
  formulas: [
    {
      title: 'Definição Matemática de pH',
      latex: 'pH = -\\log_{10}[H^+] = -\\log_{10}[H_3O^+]',
      explanation: 'O pH é o cologaritmo da concentração molar de íons hidrogênio.'
    },
    {
      title: 'Concentração a partir do pH',
      latex: '[H^+] = 10^{-pH} \\text{ mol/L}',
      explanation: 'Função exponencial inversa para obter a concentração em quantidade de matéria.'
    }
  ],
  sections: [
    {
      id: 'sec-sorensen',
      title: 'A Criação da Escala de Sørensen (1909)',
      content: 'Trabalhar com números extremamente pequenos como 0,0000001 mol/L (10⁻⁷ mol/L) ou 0,00000000001 mol/L (10⁻¹¹ mol/L) era propenso a frequentes erros de cálculo em laboratórios e indústrias. Em 1909, o químico dinamarquês Søren Sørensen propôs utilizar a função matemática logarítmica com sinal invertido, transformando esses expoentes incômodos em uma escala positiva e intuitiva de números simples: nasceu o pH (potencial hidrogeniônico).'
    },
    {
      id: 'sec-calculos-basicos',
      title: 'Como Calcular o pH Passo a Passo',
      content: 'Quando a concentração de íons [H⁺] é uma potência exata de base 10, o cálculo é imediato:\n• Se [H⁺] = 10⁻¹ mol/L (0,1 mol/L) → pH = 1\n• Se [H⁺] = 10⁻³ mol/L (0,001 mol/L) → pH = 3\n• Se [H⁺] = 10⁻⁷ mol/L → pH = 7 (neutro a 25 °C)\n• Se [H⁺] = 10⁻¹² mol/L → pH = 12 (básico)\n\nQuando a concentração possui um coeficiente (ex: 2 × 10⁻³ mol/L), aplicamos as propriedades dos logaritmos:\npH = -log(2 × 10⁻³) = -(log 2 + log 10⁻³) = -(0,30 - 3) = -(-2,70) = 2,70.'
    },
    {
      id: 'sec-escala-log',
      title: 'A Natureza Logarítmica: O Poder do Fator 10',
      content: 'Muita atenção: a escala de pH NÃO é linear! Uma solução com pH = 3 não é "um pouco mais ácida" que uma com pH = 4: ela é DEZ VEZES mais ácida! Comparada a uma solução com pH = 5, ela é 100 vezes mais ácida. E comparada a uma com pH = 6, ela é 1.000 vezes mais ácida! Pequenas variações de pH no sangue humano (que deve ficar rigorosamente entre 7,35 e 7,45) podem ser fatais.'
    }
  ],
  practicalExamples: [
    {
      title: 'pH de Substâncias do Cotidiano',
      description: 'Ácido de bateria: pH ~ 0,5 | Suco gástrico: pH ~ 1,5 | Suco de limão: pH ~ 2,2 | Café: pH ~ 5,0 | Leite: pH ~ 6,6 | Água pura: pH = 7,0 | Sangue humano: pH ~ 7,4 | Bicarbonato: pH ~ 8,4 | Soda cáustica 1 M: pH = 14,0.',
      category: 'Cotidiano'
    }
  ],
  commonPitfalls: [
    {
      title: 'pH pode ser menor que zero ou maior que 14?',
      warning: 'Sim! A escala de 0 a 14 é apenas uma faixa de conveniência para soluções diluídas.',
      explanation: 'Uma solução concentrada de HCl 2 mol/L possui pH = -log(2) ≈ -0,30 (pH negativo!). E uma solução concentrada de NaOH 2 mol/L possui pH = 14,30.'
    }
  ],
  didYouKnow: [
    {
      title: 'Controle de cerveja',
      text: 'Sørensen inventou o pH enquanto pesquisava formas de padronizar a fermentação enzimática de leveduras na fábrica de cerveja Carlsberg em Copenhague. A cerveja ideal requer pH estritamente em torno de 4,2 a 4,4.'
    }
  ],
  oneMinuteSummary: [
    'pH = -log[H⁺] e [H⁺] = 10^(-pH) mol/L.',
    'A 25 °C: pH < 7 é ácido; pH = 7 é neutro; pH > 7 é básico.',
    'Quanto menor o valor de pH, maior é a concentração de íons H⁺ e mais ácida é a solução.',
    'A escala é logarítmica: a diferença de 1 unidade no pH equivale a multiplicar ou dividir a acidez por 10.',
    'Soluções muito concentradas de ácidos fortes podem ter pH negativo.'
  ],
  solvedExercises: [SOLVED_EXERCISES[9]],
  prevChapterSlug: 'grau-ionizacao',
  nextChapterSlug: 'poh'
};
