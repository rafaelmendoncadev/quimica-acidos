import { Chapter } from '../../types/chemistry';
import { CH01_O_QUE_SAO_ACIDOS } from './ch01-o-que-sao-acidos';
import { CH02_ARRHENIUS } from './ch02-arrhenius';
import { CH03_BRONSTED_LOWRY } from './ch03-bronsted-lowry';
import { CH04_LEWIS } from './ch04-lewis';
import { CH05_CLASSIFICACAO } from './ch05-classificacao';
import { CH06_HIDROGENIOS_IONIZAVEIS } from './ch06-hidrogenios-ionizaveis';
import { CH07_NOMENCLATURA } from './ch07-nomenclatura';
import { CH08_FORCA_ACIDOS } from './ch08-forca-acidos';
import { CH09_GRAU_IONIZACAO } from './ch09-grau-ionizacao';
import { CH10_PH } from './ch10-ph';
import { CH11_POH } from './ch11-poh';
import { CH12_INDICADORES } from './ch12-indicadores';
import { CH13_REACOES } from './ch13-reacoes';
import { CH14_NEUTRALIZACAO } from './ch14-neutralizacao';
import { CH15_KA_PKA } from './ch15-ka-pka';
import { CH16_ACIDOS_POLIPROTICOS } from './ch16-acidos-poliproticos';
import { CH17_COTIDIANO } from './ch17-cotidiano';
import { CH18_CHUVA_ACIDA } from './ch18-chuva-acida';
import { CH19_ACIDIFICACAO_OCEANOS } from './ch19-acidificacao-oceanos';

export const ALL_CHAPTERS: Chapter[] = [
  CH01_O_QUE_SAO_ACIDOS,
  CH02_ARRHENIUS,
  CH03_BRONSTED_LOWRY,
  CH04_LEWIS,
  CH05_CLASSIFICACAO,
  CH06_HIDROGENIOS_IONIZAVEIS,
  CH07_NOMENCLATURA,
  CH08_FORCA_ACIDOS,
  CH09_GRAU_IONIZACAO,
  CH10_PH,
  CH11_POH,
  CH12_INDICADORES,
  CH13_REACOES,
  CH14_NEUTRALIZACAO,
  CH15_KA_PKA,
  CH16_ACIDOS_POLIPROTICOS,
  CH17_COTIDIANO,
  CH18_CHUVA_ACIDA,
  CH19_ACIDIFICACAO_OCEANOS,
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return ALL_CHAPTERS.find(c => c.slug === slug);
}

export function getChapterById(id: number): Chapter | undefined {
  return ALL_CHAPTERS.find(c => c.id === id);
}
