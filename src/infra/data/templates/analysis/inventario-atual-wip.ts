import { Template, CommunicationChannel } from '@/core/domain/types';

export const inventario_atual_wip: Template = {
  id: 'inventario-atual-wip',
  title: "Inventário Atual de WIP",
  category: 'analysis',
  channel: CommunicationChannel.PROMPT,
  description: "Análise de métricas Lean/Kanban para identificar gargalos de WIP, eficiência de fluxo e estruturação de CFD.",
  content: `Assuma o papel de um Staff Delivery Engineer e Especialista em Métricas de Fluxo (Lean/Kanban). Seu objetivo é analisar a telemetria do nosso repositório Git (commits, Pull Requests, branches ativas) para diagnosticar a saúde do nosso pipeline de entrega, identificar gargalos de WIP (Work in Progress) e implementar automações que reforcem a cultura de "parar de começar e começar a terminar".

Por favor, conduza sua análise técnica dividida nos quatro pilares abaixo:

1. Auditoria de Inventário e WIP (Work in Progress)

Sobrecarga de Branches: Quantifique as branches de feature/bugfix ativas não integradas à main. Avalie o risco de context switching e a iminência de conflitos complexos de merge (Integration Penalty).

Fila de PRs (Gargalos de Revisão): Mapeie os Pull Requests abertos. Diferencie o que é trabalho ativo (Draft) do que é fila de espera (aguardando Code Review, validação de QA ou aprovação de deploy).

Envelhecimento do WIP (Stale Work): Identifique as branches e PRs mais antigos. Calcule o risco de obsolescência do código atual.

2. Eficiência de Fluxo (Flow Efficiency) e Teoria das Restrições

Lead Time vs. Cycle Time: Analise a proporção entre o "Coding Time" (tempo digitando código) e o "Wait Time" (tempo parado em filas de PR, pipelines de CI ou validação de QA). Estime nossa Eficiência de Fluxo (Tempo de Valor Agregado / Lead Time Total).

Identificação da Restrição: Onde o fluxo está travando? Aponte se o nosso maior ofensor atual é a revisão por pares, a execução de testes automatizados/build, a esteira de QA ou o gargalo de deploy.

3. Engenharia de Dados: Script para Cumulative Flow Diagram (CFD)

Escreva um script otimizado (em Node.js ou Python) que se conecte à API do provedor Git (ou mineração de log local) para extrair o ciclo de vida das demandas.

Output Esperado: O script deve gerar um arquivo CSV com timestamps precisos das transições de estado (Ex: Branch Created ➔ PR Opened ➔ In Review ➔ In QA ➔ Merged/Deployed). Este CSV servirá de base para a plotagem de um Gráfico de Fluxo Cumulativo (CFD).

4. Governança e Automação de Limites de WIP

CI/CD WIP Limits: Proponha um fluxo (ex: GitHub Actions) que alerte a equipe ou bloqueie a criação de novos PRs se o limite de WIP da equipe (ex: mais de N PRs aguardando revisão) for atingido.

Developer Experience (DevEx) & Git Hooks: Crie exemplos de pre-commit ou pre-push hooks que alertem o desenvolvedor localmente caso ele esteja iniciando uma nova branch enquanto possui PRs travados sob sua responsabilidade.

Instrução de Inicialização
Inicie fazendo uma varredura rápida na telemetria atual do repositório (branches locais/remotas e PRs recentes). Retorne um resumo executivo com a "fotografia atual" do nosso WIP (total de branches, PRs abertos e o PR mais antigo). Após este resumo, aguarde minha confirmação para gerar os scripts e o diagnóstico aprofundado.`,
};
