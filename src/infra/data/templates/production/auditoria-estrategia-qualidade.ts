import { Template, CommunicationChannel } from '@/core/domain/types';

export const auditoria_estrategia_qualidade: Template = {
  id: 'auditoria-estrategia-qualidade',
  title: 'Auditoria de Estratégia de Qualidade e Automação de Testes (SDET & Pirâmide de Testes)',
  category: 'production',
  channel: CommunicationChannel.PROMPT,
  description: 'Auditoria e roadmap para arquitetura de QA (E2E, Performance, Unit, CI/CD) baseada em Shift-Left Testing.',
  content: `Assuma o papel de um Principal SDET (Software Development Engineer in Test) e Arquiteto de QA/DevOps. Seu objetivo é realizar uma auditoria completa no nosso repositório para mapear a maturidade da nossa Pirâmide de Testes, identificar riscos de regressão e propor uma arquitetura robusta de automação contínua (CI/CD) baseada na cultura de Shift-Left Testing.

Por favor, conduza seu diagnóstico e estruture seu plano de ação nos cinco pilares abaixo:

1. Cobertura de Código e Gestão de Regressão

Auditoria de Ferramentas: Mapeie os frameworks atuais de cobertura (ex: Jest, Vitest, Istanbul, JaCoCo).

Pontos Cegos e Caminhos Críticos: Identifique arquivos centrais do domínio (regras de negócio) que carecem de cobertura. Avalie se os testes atuais cobrem cenários de falha, dados inválidos e exceções, ou se estão viciados apenas no "caminho feliz".

Risco de Mutação: Proponha estratégias para garantir que os testes realmente validem o comportamento do código, e não apenas passem por linhas (evitando "falsos positivos").

2. Qualidade Interna (Testes de Unidade e Integração)

Ciclo de Feedback (Fast Feedback): Avalie a velocidade de execução da suíte de testes. Eles são rápidos o suficiente para rodar localmente a cada save ou pre-commit?

Isolamento e Flaky Tests: Analise o acoplamento dos testes. Verifique se bancos de dados, APIs de terceiros e sistemas de arquivos estão sendo corretamente isolados através de Mocks, Stubs ou Spies, prevenindo testes instáveis (flaky).

3. Qualidade Externa e Regras de Negócio (E2E & Aceitação)

Testes Ponta a Ponta (E2E): Avalie a estrutura (ou proponha a adoção) de frameworks modernos de E2E (como Playwright ou Cypress) para simular o comportamento real do usuário no navegador.

Jornadas Críticas: Mapeie fluxos de alto valor para o negócio (ex: autenticação, checkout, conversão) que devem ser cobertos por testes visuais e funcionais automatizados para garantir os Critérios de Aceite.

4. Requisitos Não Funcionais (Performance, Carga e Resiliência)

Engenharia de Performance: Desenvolva um script base (utilizando K6 em JavaScript ou ferramenta similar) para testar a escalabilidade das APIs ou páginas principais.

Métricas de Saturação: O script deve simular picos de concorrência (ex: 100, 500, 1000 VUs) para coletar métricas reais: Taxa de Erro (HTTP 5xx), Throughput (RPS) e Latência (percentis P90, P95 e P99).

5. Orquestração de Quality Gates no Pipeline de CI/CD

Proponha um fluxo prático de Quality Gates para nossa esteira (GitHub Actions, GitLab CI, etc.):

Commit/PR: Bloqueio de merge caso a cobertura de unidade falhe ou caia.

Deploy (Homologação): Disparo automático da suíte E2E em ambiente isolado (Smoke Tests).

Agendamento (Nightly): Testes de estresse e carga rodando fora do horário comercial para não travar o desenvolvimento diário.

Instrução de Inicialização
Antes de aprofundar, navegue pelo repositório e localize os arquivos de configuração de testes (jest.config, vitest.config, cypress.json, playwright.config, etc.) e os pipelines CI/CD. Apresente um resumo executivo com as tecnologias de QA que você encontrou ativas e aguarde minha confirmação para gerar o relatório detalhado e os scripts de automação.`,
};
