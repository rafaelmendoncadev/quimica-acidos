import React, { useState, useMemo } from 'react';
import { calculateNeutralizationRequiredBaseVolume } from '../../utils/chemistryCalc';
import { KatexMath } from '../common/KatexMath';
import { Calculator, CheckCircle2 } from 'lucide-react';

interface AcidOption {
  id: string;
  name: string;
  formula: string;
  protons: number;
}

interface BaseOption {
  id: string;
  name: string;
  formula: string;
  hydroxides: number;
}

const ACIDS: AcidOption[] = [
  { id: 'hcl', name: 'Ácido Clorídrico', formula: 'HCl', protons: 1 },
  { id: 'h2so4', name: 'Ácido Sulfúrico', formula: 'H_2SO_4', protons: 2 },
  { id: 'h3po4', name: 'Ácido Fosfórico', formula: 'H_3PO_4', protons: 3 },
  { id: 'hno3', name: 'Ácido Nítrico', formula: 'HNO_3', protons: 1 },
];

const BASES: BaseOption[] = [
  { id: 'naoh', name: 'Hidróxido de Sódio', formula: 'NaOH', hydroxides: 1 },
  { id: 'caoh2', name: 'Hidróxido de Cálcio', formula: 'Ca(OH)_2', hydroxides: 2 },
  { id: 'aloh3', name: 'Hidróxido de Alumínio', formula: 'Al(OH)_3', hydroxides: 3 },
];

export const NeutralizationCalc: React.FC = () => {
  const [selectedAcidId, setSelectedAcidId] = useState<string>('h2so4');
  const [selectedBaseId, setSelectedBaseId] = useState<string>('naoh');
  const [acidMolarity, setAcidMolarity] = useState<number>(0.1);
  const [acidVolumeMl, setAcidVolumeMl] = useState<number>(50);
  const [baseMolarity, setBaseMolarity] = useState<number>(0.2);

  const selectedAcid = useMemo(() => ACIDS.find(a => a.id === selectedAcidId) || ACIDS[0], [selectedAcidId]);
  const selectedBase = useMemo(() => BASES.find(b => b.id === selectedBaseId) || BASES[0], [selectedBaseId]);

  const requiredBaseVolume = useMemo(() => {
    try {
      return calculateNeutralizationRequiredBaseVolume(
        acidMolarity,
        acidVolumeMl,
        selectedAcid.protons,
        baseMolarity,
        selectedBase.hydroxides
      );
    } catch {
      return 0;
    }
  }, [acidMolarity, acidVolumeMl, selectedAcid.protons, baseMolarity, selectedBase.hydroxides]);

  // Equação química balanceada
  const balancedEquationLatex = useMemo(() => {
    // Exemplo: H2SO4 + 2NaOH -> Na2SO4 + 2H2O
    if (selectedAcid.id === 'hcl' && selectedBase.id === 'naoh') {
      return 'HCl + NaOH \\rightarrow NaCl + H_2O';
    }
    if (selectedAcid.id === 'h2so4' && selectedBase.id === 'naoh') {
      return 'H_2SO_4 + 2\\,NaOH \\rightarrow Na_2SO_4 + 2\\,H_2O';
    }
    if (selectedAcid.id === 'h3po4' && selectedBase.id === 'naoh') {
      return 'H_3PO_4 + 3\\,NaOH \\rightarrow Na_3PO_4 + 3\\,H_2O';
    }
    if (selectedAcid.id === 'hcl' && selectedBase.id === 'caoh2') {
      return '2\\,HCl + Ca(OH)_2 \\rightarrow CaCl_2 + 2\\,H_2O';
    }
    if (selectedAcid.id === 'h2so4' && selectedBase.id === 'caoh2') {
      return 'H_2SO_4 + Ca(OH)_2 \\rightarrow CaSO_4 + 2\\,H_2O';
    }
    if (selectedAcid.id === 'hno3' && selectedBase.id === 'naoh') {
      return 'HNO_3 + NaOH \\rightarrow NaNO_3 + H_2O';
    }
    // Genérico
    return `${selectedBase.hydroxides}\\,${selectedAcid.formula} + ${selectedAcid.protons}\\,${selectedBase.formula} \\rightarrow \\text{Sal} + ${selectedAcid.protons * selectedBase.hydroxides}\\,H_2O`;
  }, [selectedAcid, selectedBase]);

  return (
    <div className="my-8 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-b from-white to-indigo-50/40 dark:from-slate-900 dark:to-slate-950 p-6 md:p-8 shadow-md">
      
      <div className="flex items-center gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Calculadora Interativa de Neutralização Total
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
            Ajuste a concentração e volume dos reagentes e veja o volume estequiométrico exato para a neutralização completa.
          </p>
        </div>
      </div>

      {/* Seletor de Reagentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Ácido */}
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-rose-200 dark:border-rose-900/50">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            1. Escolha o Ácido (Doador de H⁺)
          </span>
          <div className="mt-2 space-y-3">
            <select
              value={selectedAcidId}
              onChange={(e) => setSelectedAcidId(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 font-medium"
            >
              {ACIDS.map(acid => (
                <option key={acid.id} value={acid.id}>
                  {acid.name} ({acid.formula}) — {acid.protons} H⁺
                </option>
              ))}
            </select>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                  Concentração M_A (mol/L)
                </label>
                <input
                  type="number"
                  step="0.05"
                  min="0.01"
                  max="10"
                  value={acidMolarity}
                  onChange={(e) => setAcidMolarity(parseFloat(e.target.value) || 0.1)}
                  className="w-full px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                  Volume V_A (mL)
                </label>
                <input
                  type="number"
                  step="5"
                  min="1"
                  max="1000"
                  value={acidVolumeMl}
                  onChange={(e) => setAcidVolumeMl(parseFloat(e.target.value) || 10)}
                  className="w-full px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-sky-200 dark:border-sky-900/50">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            2. Escolha a Base Titulante (Receptora de H⁺)
          </span>
          <div className="mt-2 space-y-3">
            <select
              value={selectedBaseId}
              onChange={(e) => setSelectedBaseId(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 font-medium"
            >
              {BASES.map(base => (
                <option key={base.id} value={base.id}>
                  {base.name} ({base.formula}) — {base.hydroxides} OH⁻
                </option>
              ))}
            </select>

            <div>
              <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                Concentração M_B (mol/L)
              </label>
              <input
                type="number"
                step="0.05"
                min="0.01"
                max="10"
                value={baseMolarity}
                onChange={(e) => setBaseMolarity(parseFloat(e.target.value) || 0.1)}
                className="w-full px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-mono"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resultado Calculado */}
      <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Volume Necessário da Base para Neutralização Completa (Ponto de Equivalência)
        </div>
        
        <div className="text-3xl md:text-4xl font-black text-emerald-700 dark:text-emerald-300 font-mono">
          {requiredBaseVolume} mL
        </div>

        {/* Equação Quimica Renderizada */}
        <div className="pt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Equação balanceada da reação:</span>
          <KatexMath math={balancedEquationLatex} block={true} />
        </div>

        <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">
          Relação: {selectedAcid.protons} × ({acidMolarity} mol/L × {acidVolumeMl} mL) = {selectedBase.hydroxides} × ({baseMolarity} mol/L × {requiredBaseVolume} mL)
        </div>
      </div>

    </div>
  );
};
