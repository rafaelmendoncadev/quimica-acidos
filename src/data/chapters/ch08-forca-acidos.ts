import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH08_FORCA_ACIDOS: Chapter = {
  id: 8,
  slug: 'forca-acidos',
  title: '08. Força dos Ácidos',
  subtitle: 'Ácidos fortes, moderados e fracos, a Regra de Pauling e a diferença crucial entre força e concentração',
  description: 'Entenda os fatores eletrônicos e estruturais que determinam a facilidade de liberação de H⁺ e desfaça mitos populares sobre ácidos corrosivos.',
  estimatedMinutes: 18,
  learningGoals: [
    'Diferenciar claramente ácido forte, moderado e fraco',
    'Conhecer a força dos hidrácidos dos halogênios e a anomalia do HF',
    'Aplicar com segurança a Regra de Pauling para oxiácidos (m = O - H ionizável)',
    'Desfazer a pegadinha entre "ácido forte" e "ácido concentrado"'
  ],
  keyConcepts: [
    'Grau de ionização intrínseco',
    'Hidrácidos fortes (HCl, HBr, HI)',
    'Regra de Pauling (m = b - a)',
    'Força vs Concentração',
    'Energia de ligação vs Eletronegatividade'
  ],
  formulas: [
    {
      title: 'Regra de Pauling para HaEOb',
      latex: 'm = b - a = \\text{(nº de átomos de Oxigênio)} - \\text{(nº de H ionizáveis)}',
      explanation: 'm = 3 (muito forte), m = 2 (forte), m = 1 (moderado), m = 0 (fraco).'
    },
    {
      title: 'Força de Hidrácidos Halogenados',
      latex: 'HI > HBr > HCl \\gg HF',
      explanation: 'O raio atômico cresce para baixo, diminuindo a atração H-X e aumentando a força ácida.'
    }
  ],
  sections: [
    {
      id: 'sec-forca-hidracidos',
      title: '1. Força dos Hidrácidos',
      content: 'Apenas 3 hidrácidos comuns são fortes:\n• Fortes: HI, HBr, HCl (grau de ionização > 90%).\n• Moderado: HF (grau de ionização em torno de 8%).\n• Fracos: todos os demais hidrácidos inorgânicos (H₂S, HCN, etc., com α < 1%).\n\nAtenção: O flúor é o elemento mais eletronegativo, mas o HF é fraco porque o átomo de flúor é minúsculo e a ligação H-F é extremamente curta e de alta energia, resistindo bravamente à quebra pela água!'
    },
    {
      id: 'sec-pauling',
      title: '2. Força dos Oxiácidos (Regra de Pauling)',
      content: 'Para um oxiácido genérico HaEOb, calcula-se o parâmetro m = b - a:\n• m = 3: Ácido Muito Forte. Ex: HClO₄ (4 - 1 = 3).\n• m = 2: Ácido Forte. Ex: H₂SO₄ (4 - 2 = 2), HNO₃ (3 - 1 = 2).\n• m = 1: Ácido Moderado. Ex: H₃PO₄ (4 - 3 = 1), H₂SO₃ (3 - 2 = 1).\n• m = 0: Ácido Fraco. Ex: HClO (1 - 1 = 0), H₃BO₃ (3 - 3 = 0).\n\nExceção clássica de laboratório: O ácido carbônico (H₂CO₃) daria m = 1, mas é classificado na prática como fraco devido à sua instabilidade e decomposição imediata em CO₂ e H₂O.'
    },
    {
      id: 'sec-forca-vs-concentracao',
      title: '3. A Diferença Crucial: Força vs Concentração',
      content: 'Esta é uma das distinções conceituais mais importantes da ciência:\n\n• Força é uma propriedade intrínseca da substância: mede a porcentagem de moléculas que se ionizam espontaneamente em água (tendência química de liberar H⁺).\n• Concentração é uma medida de quantidade: mede quantos mols de soluto existem em um dado volume de solução.\n\nVocê pode ter uma solução de HCl muito diluída (ex: 0,00001 mol/L): ela continua sendo um ácido forte, porém diluído.\nVocê pode ter um frasco de ácido acético puro concentrado (17 mol/L): ela é uma solução concentrada, mas o ácido acético continua sendo fraco!'
    }
  ],
  practicalExamples: [
    {
      title: 'Vinagre no Olho vs HCl Diluído',
      description: 'O vinagre concentrado arde intensamente nos olhos pela ação do ácido acético concentrado, mas isso decorre da alta osmolaridade e desidratação tecidual, e não porque o ácido acético tenha se transformado em um ácido forte.',
      category: 'Cotidiano'
    }
  ],
  commonPitfalls: [
    {
      title: 'Ácido forte significa queimar a pele?',
      warning: 'Ácido forte não significa necessariamente ácido concentrado ou mortal.',
      explanation: 'O estômago produz HCl 0,1 mol/L (ácido forte) constantemente sem se autodestruir graças à camada mucosa protetora. A periculosidade depende conjuntamente da força, da concentração e do tempo de exposição.'
    }
  ],
  didYouKnow: [
    {
      title: 'Linus Pauling e seus dois Nobel',
      text: 'Linus Pauling formulou essa regra empírica da força dos oxiácidos em 1932. Ele é uma das quatro únicas pessoas na história a ganhar dois prêmios Nobel, e o único a ganhar ambos de forma não compartilhada (Química em 1954 e Paz em 1962).'
    }
  ],
  oneMinuteSummary: [
    'Hidrácidos fortes: HCl, HBr, HI. Moderado: HF. Fracos: todos os demais (H₂S, HCN).',
    'Oxiácidos (Regra de Pauling: m = O - H ionizável): m≥2 é forte; m=1 é moderado; m=0 é fraco.',
    'Exceção clássica de Pauling: H₂CO₃ se decompõe em CO₂ + H₂O e comporta-se como fraco.',
    'Força mede a facilidade de ionizar (grau de ionização α).',
    'Concentração mede a proporção de soluto por litro de solução.'
  ],
  solvedExercises: [SOLVED_EXERCISES[7]],
  prevChapterSlug: 'nomenclatura',
  nextChapterSlug: 'grau-ionizacao'
};
