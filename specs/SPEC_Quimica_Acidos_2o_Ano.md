# SPEC.md
# Projeto: Química Fácil — Ácidos | 2º Ano do Ensino Médio

## 1. Visão Geral

Criar uma plataforma web educacional para estudantes do 2º ano do Ensino Médio,
com foco em Química através de explicações didáticas, resumos, exemplos práticos,
exercícios resolvidos, exercícios propostos, gabaritos, progresso, busca e navegação
por assuntos.

O primeiro módulo será:

> ÁCIDOS — Química do 2º Ano do Ensino Médio

A arquitetura deverá permitir futuramente adicionar Bases, Sais, Óxidos,
Reações Químicas, Estequiometria, Soluções, Termoquímica, Cinética,
Equilíbrio Químico, Eletroquímica, Química Orgânica e outros conteúdos.

---

## 2. Objetivo

Criar uma plataforma de aprendizagem em que o aluno possa:

1. Escolher um assunto;
2. Ler a explicação;
3. Ver exemplos;
4. Acompanhar exercícios resolvidos passo a passo;
5. Tentar exercícios sozinho;
6. Conferir a resposta;
7. Entender os erros;
8. Marcar conteúdos como estudados;
9. Acompanhar o próprio progresso.

---

## 3. Público-Alvo

### Principal
- Estudantes do 2º ano do Ensino Médio;
- Rede pública do Distrito Federal;
- Escolas particulares;
- Estudantes preparando-se para avaliações.

### Secundário
- Professores;
- Pais;
- Tutores;
- Estudantes de outras séries em revisão.

---

## 4. Princípios Pedagógicos

Seguir a progressão:

CONCEITO
↓
EXPLICAÇÃO
↓
EXEMPLO
↓
EXERCÍCIO RESOLVIDO
↓
EXERCÍCIO GUIADO
↓
EXERCÍCIO PROPOSTO
↓
GABARITO
↓
REVISÃO

As explicações devem:
- Utilizar linguagem simples;
- Explicar termos técnicos;
- Apresentar fórmulas;
- Mostrar exemplos;
- Destacar erros comuns;
- Usar tabelas quando ajudarem;
- Renderizar equações químicas corretamente.

---

# 5. Módulo Inicial — ÁCIDOS

Criar o módulo:

## Ácidos

Descrição:

"Aprenda o conteúdo de ácidos do Ensino Médio com explicações simples,
exemplos resolvidos e exercícios para praticar."

---

# 6. Estrutura do Conteúdo

## Capítulo 1 — O que são ácidos?

Conteúdo:
- Conceito de ácido;
- Características gerais;
- Exemplos do cotidiano;
- Íons H+;
- H3O+;
- Ácidos em solução aquosa.

Exemplo:
HCl + H2O → H3O+ + Cl-

Explicar detalhadamente o que ocorre.

---

## Capítulo 2 — Teoria de Arrhenius

Conteúdo:
- Definição de ácido;
- Definição de base;
- H+;
- OH-;
- Exemplos;
- Limitações da teoria.

Exemplos:
HCl → H+ + Cl-
H2SO4 → 2H+ + SO4²-

---

## Capítulo 3 — Teoria de Brønsted-Lowry

Conteúdo:
- Ácido como doador de prótons;
- Base como receptora de prótons;
- Reações;
- Pares conjugados.

Exemplo:
HCl + H2O ⇌ H3O+ + Cl-

Identificar ácido, base, ácido conjugado e base conjugada.

---

## Capítulo 4 — Teoria de Lewis

Conteúdo:
- Ácido de Lewis;
- Base de Lewis;
- Pares de elétrons;
- Exemplos.

Exemplo:
BF3 + NH3 → BF3NH3

Explicar por que BF3 é ácido de Lewis.

---

## Capítulo 5 — Classificação dos ácidos

### Hidrácidos
Não possuem oxigênio.

Exemplos:
HCl, HBr, HI, HF, H2S.

### Oxiácidos
Possuem oxigênio.

Exemplos:
H2SO4, H2SO3, HNO3, HNO2, H3PO4, H2CO3.

---

## Capítulo 6 — Número de hidrogênios ionizáveis

Explicar:
- Monoácidos;
- Diácidos;
- Triácidos;
- Tetrácidos.

Exemplos:
HCl → monoácido
H2SO4 → diácido
H3PO4 → triácido
H4P2O7 → tetrácido

Explicar que o número de H na fórmula não deve ser automaticamente
confundido com o número de H ionizáveis.

---

## Capítulo 7 — Nomenclatura dos ácidos

### Hidrácidos

Regra:
ácido + elemento + ídrico

Exemplos:
HCl → ácido clorídrico
HBr → ácido bromídrico
HI → ácido iodídrico
HF → ácido fluorídrico
H2S → ácido sulfídrico

### Oxiácidos

Explicar:
- hipo...oso
- ...oso
- ...ico
- per...ico

Série do cloro:
HClO → ácido hipocloroso
HClO2 → ácido cloroso
HClO3 → ácido clórico
HClO4 → ácido perclórico

---

## Capítulo 8 — Força dos ácidos

Explicar:
- Ácidos fortes;
- Ácidos fracos;
- Grau de ionização;
- Diferença entre força e concentração.

### Ácidos fortes
HCl, HBr, HI, HNO3, H2SO4, HClO4.

### Ácidos fracos
HF, H2CO3, H3PO4, CH3COOH, H2S.

Criar seção:
## ⚠️ Pegadinha
"Ácido forte não significa necessariamente ácido concentrado."

---

## Capítulo 9 — Grau de ionização

Apresentar:

α = quantidade ionizada / quantidade inicial

α% = α × 100

Exemplo:
100 moléculas foram colocadas em água e 80 ionizaram.

α = 80/100 = 0,80 = 80%

---

## Capítulo 10 — pH

Explicar:
- Conceito de pH;
- Escala de pH;
- Meio ácido;
- Meio neutro;
- Meio básico;
- Relação com H+.

Fórmula:
pH = -log[H+]

Exemplo:
[H+] = 10^-3
pH = 3

---

## Capítulo 11 — pOH

Explicar:

pOH = -log[OH-]

Em condições usuais a 25 °C:

pH + pOH = 14

Criar exercícios envolvendo pH e pOH.

---

## Capítulo 12 — Indicadores ácido-base

Explicar:
- Indicadores;
- Mudança de cor;
- Fenolftaleína;
- Tornassol;
- Azul de bromotimol.

Tabela:

| Indicador | Meio ácido | Meio neutro | Meio básico |
|---|---|---|---|
| Fenolftaleína | Incolor | Incolor | Rosa |
| Tornassol | Vermelho | — | Azul |
| Azul de bromotimol | Amarelo | Verde | Azul |

---

## Capítulo 13 — Reações dos ácidos

### Ácido + Base
Ácido + Base → Sal + Água

HCl + NaOH → NaCl + H2O

### Ácido + Metal
Ácido + Metal → Sal + H2

2HCl + Zn → ZnCl2 + H2

### Ácido + Carbonato
Ácido + Carbonato → Sal + Água + CO2

2HCl + CaCO3 → CaCl2 + H2O + CO2

### Ácido + Bicarbonato
HCl + NaHCO3 → NaCl + H2O + CO2

---

## Capítulo 14 — Neutralização

Explicar:
- Neutralização;
- Neutralização total;
- Neutralização parcial;
- Formação de sais;
- Balanceamento.

Exemplo:
H2SO4 + 2NaOH → Na2SO4 + 2H2O

---

## Capítulo 15 — Ka e pKa

Ka = [H+][A-] / [HA]

pKa = -log Ka

Explicar:

Ka maior → ácido mais forte
pKa menor → ácido mais forte

---

## Capítulo 16 — Ácidos polipróticos

Explicar:
- Monoácidos;
- Diácidos;
- Triácidos;
- Ionização em etapas.

Exemplo:
H3PO4 ⇌ H+ + H2PO4-
H2PO4- ⇌ H+ + HPO4²-
HPO4²- ⇌ H+ + PO4³-

---

## Capítulo 17 — Ácidos no cotidiano

Aplicações:
- Limão;
- Vinagre;
- Estômago;
- Refrigerantes;
- Bateria automotiva;
- Produtos de limpeza;
- Indústria.

Criar cards ilustrativos.

---

## Capítulo 18 — Chuva ácida

Explicar:
- SO2;
- NOx;
- Formação de ácidos na atmosfera;
- Impactos ambientais;
- Impactos em construções;
- Impactos em ecossistemas.

---

## Capítulo 19 — Acidificação dos oceanos

Explicar:

CO2 + H2O ⇌ H2CO3

Apresentar de forma introdutória o sistema:
CO2 / H2CO3 / HCO3- / CO3²-

---

# 7. Estrutura de Cada Aula

Cada aula deverá seguir:

1. Título;
2. Objetivo;
3. Explicação;
4. Conceito-chave;
5. Fórmula;
6. Exemplo;
7. Exercício resolvido;
8. Erro comum;
9. Resumo;
10. Exercícios propostos;
11. Gabarito;
12. Próxima aula.

---

# 8. Exercícios Resolvidos

Cada capítulo deverá possuir exercícios resolvidos.

Estrutura:

### Questão
Enunciado completo.

### Dados
Informações necessárias.

### Resolução
Etapa 1
Etapa 2
Etapa 3

### Resposta
Resposta final destacada.

### Por que essa é a resposta?
Explicação didática.

---

# 9. Exercícios Propostos

Cada capítulo deverá possuir pelo menos:
- 5 exercícios básicos;
- 5 intermediários;
- 3 avançados.

Total mínimo: 13 exercícios por capítulo.

Tipos:
- Múltipla escolha;
- Verdadeiro ou falso;
- Associação;
- Cálculo;
- Interpretação;
- Identificação;
- Balanceamento;
- Contextualizados.

---

# 10. Sistema de Exercícios

Após responder:

[Responder]

### Correto
Mostrar feedback explicativo.

### Incorreto
Primeiro apresentar uma dica, sem revelar imediatamente a resposta.

Exemplo:
"Dica: observe quantos H+ podem ser ionizados."

Depois:
[Ver resolução]

---

# 11. Sistema de Dicas

Cada exercício poderá possuir:
- Dica 1;
- Dica 2;
- Resolução completa.

---

# 12. Banco de Questões

Estrutura sugerida:

```json
{
  "id": 1,
  "modulo": "acidos",
  "capitulo": "ph",
  "nivel": "medio",
  "tipo": "multipla_escolha",
  "enunciado": "...",
  "alternativas": ["A", "B", "C", "D", "E"],
  "resposta": "B",
  "explicacao": "...",
  "dica": "...",
  "tags": ["pH", "logaritmo", "concentracao"]
}
```

---

# 13. Níveis de dificuldade

🟢 Fácil
🟡 Médio
🔴 Difícil

Permitir filtro por dificuldade.

---

# 14. Sistema de Progresso

Registrar:
- Conteúdos estudados;
- Exercícios respondidos;
- Acertos;
- Erros;
- Percentual de aproveitamento;
- Capítulos concluídos.

Exemplo:

Meu progresso

Ácidos
████████████░░░ 80%

Teoria de Arrhenius
✓ Concluído

Nomenclatura
✓ Concluído

pH
● Em andamento

Neutralização
○ Não iniciado

---

# 15. Dashboard do Aluno

Página "Meu Estudo" com:
- Progresso geral;
- Último conteúdo;
- Questões resolvidas;
- Taxa de acertos;
- Conteúdos para revisão;
- Sequência de estudos.

---

# 16. Página Inicial

Hero:

Título:
"Aprenda Química de um jeito simples."

Subtítulo:
"Teoria, exemplos resolvidos e exercícios para você dominar o conteúdo do Ensino Médio."

CTA:
[Começar a estudar]

Cards:
- 📚 Conteúdo completo;
- 🧠 Exercícios resolvidos;
- ✏️ Pratique;
- 📈 Acompanhe seu progresso.

---

# 17. Página de Conteúdos

Cards:

### 🧪 Ácidos
19 aulas

### 🧪 Bases
Em breve

### 🧪 Sais
Em breve

### 🧪 Óxidos
Em breve

### ⚗️ Reações químicas
Em breve

Os módulos futuros devem poder ser adicionados sem alterar a arquitetura.

---

# 18. Página do Capítulo

Layout:

← Voltar

ÁCIDOS

├── 01 O que são ácidos
├── 02 Arrhenius
├── 03 Brønsted-Lowry
├── 04 Lewis
├── 05 Classificação
├── 06 Nomenclatura
├── 07 Força dos ácidos
├── 08 pH
├── 09 pOH
├── 10 Indicadores
├── 11 Reações
├── 12 Neutralização
└── ...

Conteúdo principal à direita.

---

# 19. Fórmulas Químicas

Usar MathJax ou KaTeX.

Exemplos:
H₂SO₄
H₃PO₄
SO₄²⁻
H₃O⁺
pH = −log[H⁺]

Equações devem ser legíveis e corretamente renderizadas.

---

# 20. Design

O design deve transmitir:
- Educação;
- Tecnologia;
- Clareza;
- Organização;
- Modernidade.

Evitar aparência infantil.

---

# 21. Responsividade

Funcionar perfeitamente em:
- Desktop;
- Notebook;
- Tablet;
- Smartphone.

Adotar Mobile First.

---

# 22. Navegação Mobile

Header compacto.

Menu:
☰ Conteúdos

Menu inferior opcional:
🏠 Início
📚 Conteúdos
✏️ Exercícios
📊 Progresso

---

# 23. Busca

Criar busca global.

Exemplo:
"ácido sulfúrico"

Resultados:
- Ácido sulfúrico;
- Nomenclatura;
- Ácidos fortes;
- Neutralização;
- Exercícios relacionados.

---

# 24. Glossário

Criar glossário com pelo menos:
- Ácido;
- Base;
- Arrhenius;
- Brønsted-Lowry;
- Lewis;
- Ionização;
- Dissociação;
- H+;
- OH-;
- pH;
- pOH;
- Ka;
- pKa;
- Neutralização;
- Oxiácido;
- Hidrácido;
- Eletrólito.

---

# 25. "Você Sabia?"

Cards contextualizados.

Exemplos:
- "Você sabia que o ácido presente no vinagre é o ácido acético?"
- "Você sabia que o estômago produz ácido clorídrico?"
- "Você sabia que o CO2 dissolvido na água participa do equilíbrio do ácido carbônico?"

---

# 26. Erros Comuns

Cada conteúdo deverá apresentar:

## ⚠️ Cuidado com estas pegadinhas

Exemplos:
- "Ácido forte não significa ácido concentrado."
- "Nem todo hidrogênio presente em um ácido necessariamente é ionizável nas mesmas condições."

---

# 27. Revisão Rápida

Ao final de cada capítulo:

## 🧠 Resumo em 1 minuto

Mostrar de 5 a 10 pontos principais.

---

# 28. Quiz do Capítulo

Ao finalizar cada capítulo:

## Teste seus conhecimentos

10 questões.

Resultado:

Seu resultado

Acertos: 8/10
Aproveitamento: 80%

Conteúdo recomendado para revisão:
- Nomenclatura;
- Ionização.

Não utilizar ranking entre alunos.

---

# 29. Modo Revisão

Criar modo "Revisão rápida".

Priorizar conteúdos:
- Com erros recentes;
- Com baixo aproveitamento;
- Não revisados há algum tempo.

Gerar sequência personalizada de exercícios.

---

# 30. Gamificação Moderada

Utilizar:
- XP;
- Conquistas;
- Sequência de estudos;
- Percentual de progresso.

Exemplos:
🏆 Primeiro capítulo concluído
🧪 Mestre dos Ácidos
📚 50 questões respondidas

Evitar ranking público.

---

# 31. Acessibilidade

Implementar:
- Contraste adequado;
- Navegação por teclado;
- Labels;
- Texto alternativo;
- Tamanho de fonte ajustável;
- Foco visual;
- Não depender exclusivamente de cores.

---

# 32. SEO

Cada capítulo deverá possuir:
- Title;
- Meta description;
- URL amigável;
- Hierarquia de headings;
- Schema.org quando apropriado;
- Breadcrumb;
- Open Graph.

Exemplos:
"Como calcular pH?"
"O que são ácidos?"
"Ácido forte e ácido fraco"
"Como funciona a nomenclatura dos ácidos?"
"Exercícios sobre ácidos"
"Exercícios de pH resolvidos"

---

# 33. Estrutura de URLs

/
├── /conteudos
├── /quimica
├── /quimica/acidos
├── /quimica/acidos/o-que-sao-acidos
├── /quimica/acidos/arrhenius
├── /quimica/acidos/bronsted-lowry
├── /quimica/acidos/lewis
├── /quimica/acidos/classificacao
├── /quimica/acidos/nomenclatura
├── /quimica/acidos/forca
├── /quimica/acidos/ph
├── /quimica/acidos/poh
├── /quimica/acidos/indicadores
├── /quimica/acidos/reacoes
├── /quimica/acidos/neutralizacao
├── /exercicios
├── /glossario
└── /progresso

---

# 34. Arquitetura de Conteúdo

Separar conteúdo dos componentes.

Exemplo:

/content
  /quimica
    /acidos
      index
      arrhenius
      bronsted-lowry
      lewis
      classificacao
      nomenclatura
      forca
      ph
      poh
      indicadores
      reacoes
      neutralizacao
      ka
      acidos-poliproticos
      cotidiano
      chuva-acida
      acidificacao-oceanos

---

# 35. Componentes Reutilizáveis

Criar:
- Header;
- Footer;
- Sidebar;
- Breadcrumb;
- ContentCard;
- LessonCard;
- FormulaBox;
- ExampleBox;
- ExerciseCard;
- AnswerOption;
- HintBox;
- SolutionBox;
- WarningBox;
- SummaryBox;
- ProgressBar;
- QuizResult;
- GlossaryCard;
- SearchBox;
- DifficultyBadge.

---

# 36. Exemplo de Exercício

Questão:

"Qual é o pH de uma solução cuja concentração de H+ é 10⁻³ mol/L?"

Alternativas:
A) 2
B) 3
C) 4
D) 10
E) 11

Resolução:

pH = -log[H+]
pH = -log(10⁻³)
pH = 3

Resposta: B

---

# 37. Conteúdo e Revisão Pedagógica

Todo conteúdo deverá ser validado antes da publicação.

Verificar:
- Fórmulas;
- Nomenclatura;
- Equações;
- Balanceamento;
- Cálculos;
- Gabaritos;
- Explicações;
- Consistência entre teoria e exercícios.

Nenhuma questão poderá possuir gabarito incompatível com a resolução.

---

# 38. Segurança e Qualidade

Não permitir publicação automática de conteúdo gerado dinamicamente
sem validação.

Separar:
CONTENT
de
APPLICATION LOGIC.

---

# 39. Performance

O site deverá:
- Carregar rapidamente;
- Utilizar lazy loading;
- Otimizar imagens;
- Minimizar JavaScript desnecessário;
- Utilizar cache;
- Buscar bons Core Web Vitals.

---

# 40. PWA

Preparar para PWA.

Permitir futuramente:
- Instalação no celular;
- Ícone na tela inicial;
- Cache de conteúdos;
- Acesso offline a conteúdos previamente carregados.

---

# 41. Futuro Sistema de Usuários

Preparar arquitetura para:
- Cadastro;
- Login;
- Perfil;
- Progresso sincronizado;
- Histórico de exercícios;
- Favoritos.

Autenticação não é obrigatória no MVP.

---

# 42. Painel Administrativo Futuro

/admin

Dashboard

Conteúdos
├── Criar
├── Editar
├── Excluir
└── Publicar

Exercícios
├── Criar
├── Editar
├── Categorizar
└── Revisar

Usuários

Estatísticas

---

# 43. Analytics

Preparar eventos:
- Aula iniciada;
- Aula concluída;
- Exercício iniciado;
- Exercício respondido;
- Exercício acertado;
- Exercício errado;
- Quiz concluído;
- Busca realizada.

Não coletar dados pessoais desnecessários.

---

# 44. Stack Sugerida

Frontend:
- React;
- TypeScript;
- Vite ou framework equivalente;
- Tailwind CSS.

Fórmulas:
- KaTeX ou MathJax.

Backend:
Pode ser implementado posteriormente.

Banco:
PostgreSQL.

Na primeira versão, o conteúdo poderá ser Markdown, JSON ou CMS headless.

A arquitetura deve permitir futura migração para banco de dados.

---

# 45. Estrutura Sugerida do Projeto

src/
├── components/
│   ├── Header
│   ├── Footer
│   ├── Sidebar
│   ├── LessonCard
│   ├── ExerciseCard
│   ├── FormulaBox
│   ├── SolutionBox
│   ├── HintBox
│   └── ProgressBar
│
├── pages/
│   ├── Home
│   ├── Contents
│   ├── Lesson
│   ├── Exercises
│   ├── Glossary
│   └── Progress
│
├── content/
│   └── chemistry/
│       └── acids/
│
├── data/
│   ├── lessons
│   ├── exercises
│   └── glossary
│
├── services/
├── hooks/
├── utils/
└── styles/

---

# 46. MVP

O MVP deverá conter:

## Homepage
- Hero;
- Apresentação;
- Conteúdos;
- CTA.

## Módulo Ácidos
Todos os capítulos fundamentais.

## Exercícios
No mínimo 100 questões:
- 30 fáceis;
- 50 médias;
- 20 difíceis.

## Exercícios resolvidos
No mínimo 30 completamente resolvidos.

## Glossário
No mínimo 30 termos.

## Quiz
Quiz por capítulo.

## Progresso
Implementação local inicialmente com LocalStorage.

---

# 47. Conteúdo Mínimo Obrigatório do MVP

- Conceito de ácido;
- Arrhenius;
- Brønsted-Lowry;
- Lewis;
- Ionização;
- Dissociação;
- Hidrácidos;
- Oxiácidos;
- Classificação;
- Nomenclatura;
- Hidrogênios ionizáveis;
- Ácidos fortes;
- Ácidos fracos;
- Grau de ionização;
- pH;
- pOH;
- Indicadores;
- Ka;
- pKa;
- Neutralização;
- Reações com metais;
- Reações com carbonatos;
- Ácidos polipróticos;
- Ácidos no cotidiano;
- Chuva ácida;
- Acidificação dos oceanos.

---

# 48. Critérios de Aceitação

## Conteúdo
[ ] Todos os capítulos foram criados.
[ ] Explicações adequadas ao Ensino Médio.
[ ] Fórmulas corretamente renderizadas.
[ ] Equações químicas corretas.
[ ] Exercícios possuem gabarito.
[ ] Exercícios resolvidos possuem passo a passo.
[ ] Não existem respostas contraditórias.

## Interface
[ ] Responsivo.
[ ] Funciona em celular.
[ ] Funciona em tablet.
[ ] Funciona em desktop.
[ ] Navegação intuitiva.
[ ] Boa legibilidade.
[ ] Acessibilidade básica.

## Exercícios
[ ] 100 questões no MVP.
[ ] Níveis de dificuldade.
[ ] Feedback imediato.
[ ] Sistema de dicas.
[ ] Resolução detalhada.
[ ] Resultado do quiz.

## Progresso
[ ] Registro das aulas estudadas.
[ ] Registro das questões.
[ ] Percentual de acertos.
[ ] Progresso por capítulo.
[ ] Persistência local.

---

# 49. Testes

Implementar testes para:
- Cálculos de pH;
- Cálculos de pOH;
- Questões;
- Gabaritos;
- Progresso;
- Navegação;
- Responsividade;
- Renderização das fórmulas.

Testar especialmente:

pH = 3
pH = 7
pH = 11

C1V1 = C2V2

Neutralização

Balanceamento

---

# 50. Teste Pedagógico

Antes de considerar o módulo concluído:

1. Selecionar aleatoriamente exercícios;
2. Conferir cálculo;
3. Conferir gabarito;
4. Conferir explicação;
5. Conferir dificuldade;
6. Conferir se o conteúdo necessário foi apresentado anteriormente.

---

# 51. Regra de Implementação

O desenvolvimento deverá ocorrer em fases.

## Fase 1
Arquitetura + layout + homepage.

## Fase 2
Módulo Ácidos + conteúdo.

## Fase 3
Sistema de exercícios.

## Fase 4
Quiz.

## Fase 5
Progresso.

## Fase 6
SEO + acessibilidade + performance.

## Fase 7
Testes completos.

---

# 52. Regra Fundamental de Cada Fase

Após implementar cada fase:

1. Executar testes;
2. Identificar erros;
3. Encontrar a causa raiz;
4. Corrigir a causa;
5. Executar os testes novamente;
6. Somente então avançar.

Não considerar uma fase concluída apenas porque o código foi escrito.

---

# 53. Definition of Done

O projeto somente será considerado concluído quando:

- [ ] Aplicação inicia sem erros;
- [ ] Todas as páginas principais funcionam;
- [ ] Conteúdo de Ácidos está completo;
- [ ] Exercícios funcionam;
- [ ] Gabaritos validados;
- [ ] Resoluções validadas;
- [ ] Quiz funciona;
- [ ] Progresso funciona;
- [ ] Fórmulas renderizam corretamente;
- [ ] Responsividade testada;
- [ ] Acessibilidade básica validada;
- [ ] SEO técnico implementado;
- [ ] Testes passaram;
- [ ] Não existem erros críticos no console;
- [ ] Não existem links quebrados;
- [ ] Não existem exercícios sem gabarito;
- [ ] Não existem fórmulas químicas quebradas.

---

# 54. Resultado Esperado

Ao final, o estudante deverá conseguir:

QUÍMICA
→ ÁCIDOS
→ escolher um capítulo
→ estudar a teoria
→ acompanhar exemplos
→ resolver exercícios
→ receber dicas
→ consultar a resolução
→ realizar o quiz
→ acompanhar seu progresso.

A arquitetura deve permitir transformar futuramente o projeto em uma
plataforma completa de estudos de Química para o Ensino Médio.
