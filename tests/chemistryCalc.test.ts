import { describe, it, expect } from 'vitest';
import { 
  calculateFromH, 
  calculateFromPh, 
  classifyPh, 
  calculateIonizationDegree, 
  calculateNeutralizationRequiredBaseVolume,
  getIndicatorColors 
} from '../src/utils/chemistryCalc';

describe('Cálculos Químicos Fundamentais (Seção 49 do SPEC)', () => {
  
  describe('Cálculos de pH e pOH', () => {
    it('deve calcular corretamente para pH = 3 ([H+] = 10^-3)', () => {
      const result = calculateFromH(0.001);
      expect(result.pH).toBe(3);
      expect(result.pOH).toBe(11);
      expect(result.classification).toBe('ácido moderado');
    });

    it('deve calcular corretamente para pH = 7 ([H+] = 10^-7)', () => {
      const result = calculateFromH(0.0000001);
      expect(result.pH).toBe(7);
      expect(result.pOH).toBe(7);
      expect(result.classification).toBe('neutro');
    });

    it('deve calcular corretamente para pH = 11 ([H+] = 10^-11)', () => {
      const result = calculateFromH(1e-11);
      expect(result.pH).toBe(11);
      expect(result.pOH).toBe(3);
      expect(result.classification).toBe('básico moderado');
    });

    it('deve calcular valores a partir de pH arbitrário', () => {
      const res = calculateFromPh(2.5);
      expect(res.pH).toBe(2.5);
      expect(res.pOH).toBe(11.5);
      expect(res.classification).toBe('ácido forte');
    });
  });

  describe('Grau de Ionização (Alfa)', () => {
    it('deve calcular alfa e classificar ácido fraco (<= 5%)', () => {
      const res = calculateIonizationDegree(15, 500); // 3%
      expect(res.alpha).toBe(0.03);
      expect(res.percentage).toBe(3);
      expect(res.strength).toBe('fraco');
    });

    it('deve classificar ácido forte (>= 50%)', () => {
      const res = calculateIonizationDegree(80, 100); // 80%
      expect(res.alpha).toBe(0.8);
      expect(res.percentage).toBe(80);
      expect(res.strength).toBe('forte');
    });

    it('deve classificar ácido moderado (5% < alfa < 50%)', () => {
      const res = calculateIonizationDegree(25, 100); // 25%
      expect(res.percentage).toBe(25);
      expect(res.strength).toBe('moderado');
    });
  });

  describe('Neutralização Estequiométrica (C1V1 = C2V2 e variações polipróticas)', () => {
    it('deve calcular volume de NaOH para neutralizar monoácido HCl (1:1)', () => {
      // HCl 0.2 mol/L, 25 mL neutralizado por NaOH 0.1 mol/L -> 50 mL
      const vol = calculateNeutralizationRequiredBaseVolume(0.2, 25, 1, 0.1, 1);
      expect(vol).toBe(50);
    });

    it('deve calcular volume de NaOH para neutralizar diácido H2SO4 (2:1)', () => {
      // H2SO4 0.1 mol/L, 50 mL neutralizado por NaOH 0.2 mol/L -> 50 mL
      const vol = calculateNeutralizationRequiredBaseVolume(0.1, 50, 2, 0.2, 1);
      expect(vol).toBe(50);
    });

    it('deve calcular volume de Ca(OH)2 (dibase) para neutralizar H2SO4 (diácido)', () => {
      // H2SO4 0.05 mol/L, 20 mL neutralizado por Ca(OH)2 0.05 mol/L -> 20 mL
      const vol = calculateNeutralizationRequiredBaseVolume(0.05, 20, 2, 0.05, 2);
      expect(vol).toBe(20);
    });
  });

  describe('Indicadores Ácido-Base e Transição de Cores', () => {
    it('deve atribuir cores corretas em meio ácido (pH = 2)', () => {
      const ind = getIndicatorColors(2);
      expect(ind.phenolphthalein.colorName).toBe('Incolor');
      expect(ind.litmus.colorName).toBe('Vermelho');
      expect(ind.bromothymolBlue.colorName).toBe('Amarelo');
    });

    it('deve atribuir cores corretas em meio neutro (pH = 7)', () => {
      const ind = getIndicatorColors(7);
      expect(ind.phenolphthalein.colorName).toBe('Incolor');
      expect(ind.litmus.colorName).toBe('Azul');
      expect(ind.bromothymolBlue.colorName).toBe('Verde');
    });

    it('deve atribuir cores corretas em meio alcalino (pH = 11)', () => {
      const ind = getIndicatorColors(11);
      expect(ind.phenolphthalein.colorName).toBe('Rosa vibrante');
      expect(ind.litmus.colorName).toBe('Azul');
      expect(ind.bromothymolBlue.colorName).toBe('Azul');
    });
  });

});
