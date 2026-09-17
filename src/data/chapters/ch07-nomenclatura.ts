import { Chapter } from '../../types/chemistry';
import { SOLVED_EXERCISES } from '../exercises/solved';

export const CH07_NOMENCLATURA: Chapter = {
  id: 7,
  slug: 'nomenclatura',
  title: '07. Nomenclatura dos Ácidos',
  subtitle: 'Regras oficiais IUPAC para hidrácidos (-ídrico) e oxiácidos (hipo...oso, oso, ico, per...ico)',
  description: 'Aprenda o sistema lógico de dar nomes a qualquer ácido a partir da fórmula molecular e do número de oxidação do elemento central.',
  estimatedMinutes: 20,
  learningGoals: [
    'Aplicar a regra de terminação -ídrico para todos os hidrácidos',
    'Calcular o Nox do elemento central para nomear oxiácidos',
    'Dominar os prefixos e sufixos: hipo...oso, oso, ico e per...ico',
    'Memorizar a série clássica de oxiácidos padrão (famílias do Cloro, Enxofre, Nitrogênio e Carbono)'
  ],
  keyConcepts: [
    'Sufixo -ídrico (hidrácidos)',
    'Nox (Número de Oxidação)',
    'Série do Nox (+1, +3, +5, +7)',
    'Ácidos de referência com sufixo -ico',
    'Série dos oxiácidos de halogênios'
  ],
  formulas: [
    {
      title: 'Regra dos Hidrácidos',
      latex: '\\text{Ácido } + \\text{nome do elemento} + \\text{ídrico}',
      explanation: 'Exemplo: HCl -> Ácido clorídrico; H₂S -> Ácido sulfídrico.'
    },
    {
      title: 'Série de Prefixos e Sufixos de Oxiácidos',
      latex: '\\text{Nox } +1/+2 \\rightarrow \\text{hipo...oso} \\quad | \\quad +3/+4 \\rightarrow \\text{...oso} \\quad | \\quad +5/+6 \\rightarrow \\text{...ico} \\quad | \\quad +7 \\rightarrow \\text{per...ico}',
      explanation: 'Variação sistemática conforme o estado de oxidação do átomo central.'
    }
  ],
  sections: [
    {
      id: 'sec-nom-hidracidos',
      title: '1. Nomenclatura dos Hidrácidos (Sem Oxigênio)',
      content: 'A regra é direta e uniforme:\nÁcido + [nome do elemento] + ídrico\n\n• HCl: Ácido clorídrico\n• HBr: Ácido bromídrico\n• HI: Ácido iodídrico\n• HF: Ácido fluorídrico\n• H₂S: Ácido sulfídrico (usa o radical latino sulfur)\n• HCN: Ácido cianídrico'
    },
    {
      id: 'sec-nom-oxiacidos',
      title: '2. Nomenclatura dos Oxiácidos (Com Oxigênio)',
      content: 'A nomenclatura dos oxiácidos depende do Número de Oxidação (Nox) do elemento central:\n\n• Nox +1 ou +2: prefixo HIPO- e terminação -OSO (ex: HClO = ácido hipocloroso)\n• Nox +3 ou +4: terminação -OSO (ex: HClO₂ = ácido cloroso; HNO₂ = ácido nitroso)\n• Nox +5 ou +6: terminação -ICO (ex: HClO₃ = ácido clórico; HNO₃ = ácido nítrico; H₂SO₄ = ácido sulfúrico)\n• Nox +7: prefixo PER- e terminação -ICO (ex: HClO₄ = ácido perclórico; HMnO₄ = ácido permangânico)'
    },
    {
      id: 'sec-oxiacidos-padrao',
      title: '3. Os Oxiácidos Padrão Mais Importantes',
      content: 'Uma técnica didática muito eficiente é memorizar os ácidos padrão que terminam em -ICO:\n• HClO₃: Ácido clórico (Cl = +5)\n• H₂SO₄: Ácido sulfúrico (S = +6)\n• HNO₃: Ácido nítrico (N = +5)\n• H₃PO₄: Ácido fosfórico (P = +5)\n• H₂CO₃: Ácido carbônico (C = +4)\n\nSe o ácido tiver 1 oxigênio a menos que o padrão: vira -OSO (H₂SO₃ = sulfuroso, HNO₂ = nitroso).\nSe tiver 2 oxigênios a menos: vira HIPO-...-OSO (HClO = hipocloroso).\nSe tiver 1 oxigênio a mais: vira PER-...-ICO (HClO₄ = perclórico).'
    }
  ],
  practicalExamples: [
    {
      title: 'A Série Completa do Cloro',
      description: 'HClO (ácido hipocloroso) -> HClO2 (ácido cloroso) -> HClO3 (ácido clórico) -> HClO4 (ácido perclórico). Uma das progressões mais elegantes da química.',
      formula: 'HClO \\rightarrow HClO_2 \\rightarrow HClO_3 \\rightarrow HClO_4'
    }
  ],
  commonPitfalls: [
    {
      title: 'Confundir ídrico com ico',
      warning: 'Cuidado! Ácido clorídrico é HCl; ácido clórico é HClO₃.',
      explanation: 'O sufixo "-ídrico" é exclusivo de hidrácidos (sem oxigênio); o sufixo "-ico" indica oxiácido com oxigênio.'
    }
  ],
  didYouKnow: [
    {
      title: 'Origem da palavra "Água Sanitária"',
      text: 'O agente ativo da água sanitária é o sal hipoclorito de sódio (NaClO), que em contato com a água e o ar forma pequenas quantidades de ácido hipocloroso (HClO), um poderoso antimicrobiano que destrói bactérias e vírus por oxidação.'
    }
  ],
  oneMinuteSummary: [
    'Hidrácidos terminam SEMPRE em "-ídrico" (HCl = clorídrico; H₂S = sulfídrico).',
    'Oxiácidos usam a escala de Nox: Hipo...oso (+1/+2) < Oso (+3/+4) < Ico (+5/+6) < Per...ico (+7).',
    'Ácidos de referência "-ico": HNO₃, H₂SO₄, H₃PO₄, H₂CO₃, HClO₃.',
    'Menos 1 oxigênio que o padrão: sufixo -oso (ex: H₂SO₃ = sulfuroso).',
    'Mais 1 oxigênio que o padrão: prefixo per- e sufixo -ico (ex: HClO₄ = perclórico).'
  ],
  solvedExercises: [SOLVED_EXERCISES[6]],
  prevChapterSlug: 'hidrogenios-ionizaveis',
  nextChapterSlug: 'forca-acidos'
};
