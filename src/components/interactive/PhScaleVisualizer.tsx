import React, { useState, useMemo } from 'react';
import { calculateFromPh, getIndicatorColors } from '../../utils/chemistryCalc';
import { KatexMath } from '../common/KatexMath';
import { Pipette, Sparkles, Beaker } from 'lucide-react';

interface EverydayItem {
  name: string;
  typicalPh: number;
  description: string;
}

const COMMON_SUBSTANCES: EverydayItem[] = [
  { name: 'Suco Gástrico (HCl)', typicalPh: 1.5, description: 'Altamente ácido, degrada proteínas no estômago' },
  { name: 'Suco de Limão / Vinagre', typicalPh: 2.3, description: 'Rico em ácido cítrico ou acético' },
  { name: 'Refrigerante Cola', typicalPh: 2.8, description: 'Contém ácido fosfórico (H3PO4)' },
  { name: 'Chuva Ácida Típica', typicalPh: 4.2, description: 'Formada por SO2 e NOx dissolvidos em água' },
  { name: 'Café Preto', typicalPh: 5.0, description: 'Levemente ácido por ácidos clorogênicos' },
  { name: 'Leite Materno / Bovino', typicalPh: 6.6, description: 'Muito próximo da neutralidade' },
  { name: 'Água Pura a 25 °C', typicalPh: 7.0, description: 'Neutra ([H+] = [OH-] = 10⁻⁷ mol/L)' },
  { name: 'Sangue Humano', typicalPh: 7.4, description: 'Ligeiramente alcalino, tamponado por bicarbonato' },
  { name: 'Bicarbonato de Sódio', typicalPh: 8.4, description: 'Solução básica suave (alivia azia)' },
  { name: 'Sabonete Comum', typicalPh: 9.5, description: 'Base fraca formada por sais de ácidos graxos' },
  { name: 'Leite de Magnésia', typicalPh: 10.5, description: 'Suspensão de Mg(OH)2, antiácido e laxante' },
  { name: 'Amônia de Limpeza', typicalPh: 11.5, description: 'Solução aquosa de NH3, odor característico' },
  { name: 'Água Sanitária (Hipoclorito)', typicalPh: 12.5, description: 'Meio fortemente básico com NaClO' },
  { name: 'Soda Cáustica (NaOH 1M)', typicalPh: 14.0, description: 'Extremamente alcalina e corrosiva' },
];

export const PhScaleVisualizer: React.FC = () => {
  const [pH, setPh] = useState<number>(3.0);
  const [activeIndicator, setActiveIndicator] = useState<'phenolphthalein' | 'litmus' | 'bromothymolBlue'>('bromothymolBlue');

  const phData = useMemo(() => calculateFromPh(pH), [pH]);
  const indicatorData = useMemo(() => getIndicatorColors(pH), [pH]);

  // Encontrar substância mais próxima
  const closestItem = useMemo(() => {
    return COMMON_SUBSTANCES.reduce((prev, curr) => 
      Math.abs(curr.typicalPh - pH) < Math.abs(prev.typicalPh - pH) ? curr : prev
    );
  }, [pH]);

  const activeColor = indicatorData[activeIndicator];

  return (
    <div className="my-8 rounded-2xl border border-science-200 dark:border-science-900/60 bg-gradient-to-b from-white to-science-50/40 dark:from-slate-900 dark:to-slate-950 p-6 md:p-8 shadow-md">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-science-100 dark:bg-science-900/60 text-science-800 dark:text-science-300">
            <Sparkles className="w-3.5 h-3.5" /> Laboratório Interativo
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1">
            Simulador da Escala de pH, pOH e Indicadores
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
            Arraste o cursor para alterar a acidez da solução e veja a viragem de cor dos indicadores em tempo real.
          </p>
        </div>

        {/* Indicador Badge */}
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
          <div 
            className="w-5 h-5 rounded-full border border-slate-300 shadow-inner transition-colors duration-300"
            style={{ backgroundColor: activeColor.hex }}
          />
          <div className="text-xs">
            <div className="text-slate-500 dark:text-slate-400">Cor aparente:</div>
            <div className="font-bold text-slate-800 dark:text-slate-100">{activeColor.colorName}</div>
          </div>
        </div>
      </div>

      {/* Grid Principal: Beaker + Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 items-center">
        
        {/* Visual do Beaker / Tubo de Ensaio */}
        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="relative w-28 h-36 border-4 border-slate-300 dark:border-slate-600 rounded-b-3xl flex flex-col justify-end p-2 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
            {/* Linhas de graduação do béquer */}
            <div className="absolute top-4 left-1 w-3 h-0.5 bg-slate-400"></div>
            <div className="absolute top-10 left-1 w-4 h-0.5 bg-slate-400"></div>
            <div className="absolute top-16 left-1 w-3 h-0.5 bg-slate-400"></div>
            <div className="absolute top-22 left-1 w-4 h-0.5 bg-slate-400"></div>
            {/* Líquido com cor de indicador */}
            <div 
              className="w-full rounded-b-2xl transition-all duration-300 opacity-90 flex items-center justify-center text-[10px] font-bold text-slate-800"
              style={{ 
                height: '75%', 
                backgroundColor: activeColor.hex,
                boxShadow: `inset 0 -10px 20px rgba(0,0,0,0.1)`
              }}
            >
              <Beaker className="w-6 h-6 opacity-30" />
            </div>
          </div>
          <span className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Meio: <span className="text-slate-900 dark:text-white capitalize">{phData.classification}</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Exemplo: <strong className="text-slate-700 dark:text-slate-300">{closestItem.name}</strong>
          </span>
        </div>

        {/* Controles e Indicadores de Equação */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="ph-range-slider" className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Pipette className="w-4 h-4 text-science-600" />
                Valor de pH selecionado:
              </label>
              <span className="text-2xl font-black text-science-600 dark:text-science-400 font-mono">
                {pH.toFixed(1)}
              </span>
            </div>

            {/* Visual gradient bar */}
            <div className="h-4 rounded-full w-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-cyan-400 to-indigo-700 shadow-inner relative">
              <input
                id="ph-range-slider"
                type="range"
                min="0"
                max="14"
                step="0.1"
                value={pH}
                onChange={(e) => setPh(parseFloat(e.target.value))}
                className="w-full h-4 opacity-0 cursor-pointer absolute inset-0 z-10"
                aria-label="Escala de pH de 0 a 14"
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 px-1">
              <span>0 (Muito ácido)</span>
              <span>7 (Neutro)</span>
              <span>14 (Muito básico)</span>
            </div>
          </div>

          {/* Dados calculados com KaTeX */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">pH</div>
              <div className="text-lg font-black text-science-600 dark:text-science-400 font-mono">{phData.pH}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">pOH (14 - pH)</div>
              <div className="text-lg font-black text-indigo-600 dark:text-indigo-400 font-mono">{phData.pOH}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl col-span-1">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">[H⁺] mol/L</div>
              <div className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 truncate mt-1">
                10⁻^{phData.pH}
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl col-span-1">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">[OH⁻] mol/L</div>
              <div className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 truncate mt-1">
                10⁻^{phData.pOH}
              </div>
            </div>
          </div>

          {/* Seletores de Indicador */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Escolha o indicador para testar a solução:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActiveIndicator('bromothymolBlue')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                  activeIndicator === 'bromothymolBlue'
                    ? 'border-science-500 bg-science-50 text-science-800 dark:bg-science-950 dark:text-science-200 ring-2 ring-science-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Azul de Bromotimol</span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: indicatorData.bromothymolBlue.hex }} />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndicator('phenolphthalein')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                  activeIndicator === 'phenolphthalein'
                    ? 'border-science-500 bg-science-50 text-science-800 dark:bg-science-950 dark:text-science-200 ring-2 ring-science-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Fenolftaleína</span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: indicatorData.phenolphthalein.hex }} />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndicator('litmus')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                  activeIndicator === 'litmus'
                    ? 'border-science-500 bg-science-50 text-science-800 dark:bg-science-950 dark:text-science-200 ring-2 ring-science-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Tornassol</span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: indicatorData.litmus.hex }} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Relação matemática resumida */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <KatexMath math="pH = -\log[H^+]" />
          <span>•</span>
          <KatexMath math="pH + pOH = 14" />
        </div>
        <span className="italic">Condições padrão a 25 °C (Kw = 1,0 × 10⁻¹⁴)</span>
      </div>

    </div>
  );
};
