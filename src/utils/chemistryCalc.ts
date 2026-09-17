/**
 * Funções utilitárias de cálculos químicos para Ácidos do 2º Ano do Ensino Médio.
 */

export interface PhResult {
  pH: number;
  pOH: number;
  hConcentration: number;
  ohConcentration: number;
  classification: 'ácido forte' | 'ácido moderado' | 'ácido fraco' | 'neutro' | 'básico fraco' | 'básico moderado' | 'básico forte';
}

export function calculateFromH(hConc: number): PhResult {
  if (hConc <= 0) {
    throw new Error('A concentração de [H+] deve ser estritamente positiva (> 0).');
  }
  const pH = Number((-Math.log10(hConc)).toFixed(2));
  const pOH = Number((14 - pH).toFixed(2));
  const ohConc = Math.pow(10, -pOH);

  return {
    pH,
    pOH,
    hConcentration: hConc,
    ohConcentration: ohConc,
    classification: classifyPh(pH),
  };
}

export function calculateFromPh(pH: number): PhResult {
  const cleanPh = Number(pH.toFixed(2));
  const pOH = Number((14 - cleanPh).toFixed(2));
  const hConc = Math.pow(10, -cleanPh);
  const ohConc = Math.pow(10, -pOH);

  return {
    pH: cleanPh,
    pOH,
    hConcentration: hConc,
    ohConcentration: ohConc,
    classification: classifyPh(cleanPh),
  };
}

export function classifyPh(pH: number): PhResult['classification'] {
  if (pH < 3) return 'ácido forte';
  if (pH < 6) return 'ácido moderado';
  if (pH < 7) return 'ácido fraco';
  if (pH === 7) return 'neutro';
  if (pH <= 8) return 'básico fraco';
  if (pH <= 11) return 'básico moderado';
  return 'básico forte';
}

export function calculateIonizationDegree(ionizedMoles: number, initialMoles: number): { alpha: number; percentage: number; strength: 'fraco' | 'moderado' | 'forte' } {
  if (initialMoles <= 0) {
    throw new Error('Quantidade inicial de moléculas deve ser maior que zero.');
  }
  const alpha = Number((ionizedMoles / initialMoles).toFixed(4));
  const percentage = Number((alpha * 100).toFixed(2));

  // Classificação usual:
  // alfa <= 5% -> fraco
  // 5% < alfa < 50% -> moderado
  // alfa >= 50% -> forte
  let strength: 'fraco' | 'moderado' | 'forte' = 'fraco';
  if (percentage >= 50) {
    strength = 'forte';
  } else if (percentage > 5) {
    strength = 'moderado';
  }

  return { alpha, percentage, strength };
}

export interface NeutralizationInput {
  acidMolarity: number;    // mol/L
  acidVolumeMl: number;    // mL
  acidProtons: number;     // 1 para HCl, 2 para H2SO4, 3 para H3PO4
  baseMolarity: number;    // mol/L
  baseVolumeMl?: number;   // se desejado calcular
  baseHydroxides: number;  // 1 para NaOH, 2 para Ca(OH)2, 3 para Al(OH)3
}

/**
 * Neutralização estequiométrica: n_A * M_A * V_A = n_B * M_B * V_B
 */
export function calculateNeutralizationRequiredBaseVolume(
  acidMolarity: number,
  acidVolumeMl: number,
  acidProtons: number,
  baseMolarity: number,
  baseHydroxides: number = 1
): number {
  if (baseMolarity <= 0 || baseHydroxides <= 0) {
    throw new Error('Molaridade da base e quantidade de hidroxilas devem ser maiores que zero.');
  }
  // (acidProtons * acidMolarity * acidVolumeMl) = (baseHydroxides * baseMolarity * requiredBaseVolume)
  const reqVol = (acidProtons * acidMolarity * acidVolumeMl) / (baseHydroxides * baseMolarity);
  return Number(reqVol.toFixed(2));
}

export interface IndicatorColor {
  name: string;
  colorName: string;
  hex: string;
}

export function getIndicatorColors(pH: number): {
  phenolphthalein: IndicatorColor;
  litmus: IndicatorColor;
  bromothymolBlue: IndicatorColor;
} {
  // Fenolftaleína: incolor em pH < 8.2, rosa/carmesim em pH >= 8.2
  const phenolphthalein: IndicatorColor = pH < 8.2
    ? { name: 'Fenolftaleína', colorName: 'Incolor', hex: '#f1f5f9' }
    : { name: 'Fenolftaleína', colorName: 'Rosa vibrante', hex: '#ec4899' };

  // Tornassol: vermelho em pH < 7, azul em pH >= 7
  const litmus: IndicatorColor = pH < 7
    ? { name: 'Tornassol', colorName: 'Vermelho', hex: '#ef4444' }
    : { name: 'Tornassol', colorName: 'Azul', hex: '#3b82f6' };

  // Azul de bromotimol: amarelo em pH < 6.0, verde entre 6.0 e 7.6, azul em pH > 7.6
  let bromothymolBlue: IndicatorColor;
  if (pH < 6.0) {
    bromothymolBlue = { name: 'Azul de Bromotimol', colorName: 'Amarelo', hex: '#eab308' };
  } else if (pH <= 7.6) {
    bromothymolBlue = { name: 'Azul de Bromotimol', colorName: 'Verde', hex: '#22c55e' };
  } else {
    bromothymolBlue = { name: 'Azul de Bromotimol', colorName: 'Azul', hex: '#2563eb' };
  }

  return { phenolphthalein, litmus, bromothymolBlue };
}
