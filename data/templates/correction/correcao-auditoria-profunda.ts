import { Template, CommunicationChannel } from '../../../types';

export const correcao_auditoria_profunda: Template = {
  id: 'correcao-auditoria-profunda',
  title: "Auditoria e Code Review (DevSecOps)",
  category: 'correction',
  channel: CommunicationChannel.PROMPT,
  description: "Auditoria estática profunda focada em Clean Code, Segurança (XSS, IDOR, Secrets) e Arquitetura 12-Factor.",
  content: `Aja como um Principal Software Engineer e Especialista em DevSecOps. Sua missão é realizar uma auditoria estática profunda e um Code Review abrangente em toda a codebase deste workspace.

Atue em modo de "Somente Leitura" (Read-Only) durante a fase inicial. Seu objetivo final é gerar um plano de implementação (\`implementation_plan.md\`) e um relatório de auditoria detalhado (\`walkthrough.md\`). 

Siga rigorosamente as diretrizes e categorias de análise abaixo para inspecionar o projeto de forma metódica:

### <diretrizes_de_analise>

#### 1. ERROS DE LÓGICA E CLEAN CODE
- **Código Morto e Resíduos:** Identifique funções, variáveis, tipagens, componentes de UI e hooks não utilizados, além de logs de depuração redundantes (ex: \`console.log\`).
- **Redundância:** Localize blocos de código ou lógicas de iteração quase idênticos que devem ser refatorados para funções ou componentes reutilizáveis.
- **Tratamento de Erros:** Mapeie falhas no fluxo de controle que silenciam exceções (blocos \`try-catch\` vazios ou genéricos) e tratamentos superficiais que não endereçam a causa raiz.
- **Concorrência e Estado:** Identifique condições de corrida (race conditions), vazamentos de memória (memory leaks em hooks/listeners), e uso inseguro de estados globais ou instâncias compartilhadas.

#### 2. VULNERABILIDADES DE SEGURANÇA E AUTORIZAÇÃO
- **Hardcoded Secrets:** Localize chaves de API (ex: OpenAI, Stripe, AWS, Neon, Vercel), chaves privadas, ou credenciais de banco de dados expostas no código, especialmente aquelas que podem ser vazadas para o client-side.
- **Autorização Insegura no Client-Side:** Procure regras de controle de acesso (ex: flags \`isAdmin\`, permissões de rotas) validadas exclusivamente no frontend, permitindo bypass via manipulação de estado local.
- **IDOR / BOLA:** Mapeie rotas de API ou Server Actions que aceitem parâmetros diretos (ex: \`/api/users/123\`) sem validar no backend se a entidade pertence ao usuário autenticado.
- **Segurança de Banco de Dados e RLS:** Se aplicável (Supabase, Firebase, PostgreSQL), verifique se as políticas de Row Level Security (RLS) estão ativas e bem configuradas, prevenindo consultas diretas não autenticadas.
- **Sanitização e Injections:** Identifique entradas de usuários expostas a injeções de SQL/NoSQL, ou vulnerabilidades de XSS (Cross-Site Scripting) onde o input não sanitizado é renderizado no DOM (ex: \`dangerouslySetInnerHTML\`).

#### 3. ARQUITETURA E INFRAESTRUTURA
- **Gerenciamento de Dependências:** Identifique pacotes importados sem fixação de versão (usando \`^\`, \`>=\`, ou \`*\` de forma arriscada) que possam quebrar builds de produção por atualizações inesperadas.
- **Desconformidade 12-Factor:** Verifique se o projeto persiste estados ou uploads localmente no sistema de arquivos do servidor em vez de utilizar serviços de storage externos e arquiteturas stateless preparadas para conteinerização (Docker).
- **Hardcoding de Infraestrutura:** Mapeie URLs e portas engessadas no código que deveriam ser extraídas para variáveis de ambiente (\`.env\`).

### </diretrizes_de_analise>

### <processo_de_execucao>

1. **Mapeamento (Reconhecimento):** Utilize suas ferramentas de leitura para indexar a árvore de diretórios, entender a stack principal e mapear as dependências críticas do projeto.
2. **Planejamento:** Crie o arquivo \`implementation_plan.md\` descrevendo a estratégia da auditoria, os escopos de pastas que serão inspecionados e a ordem de execução. **Aguarde minha aprovação antes de prosseguir.**
3. **Inspeção (Chain-of-Thought):** Após a aprovação, execute a análise linha por linha de forma determinística, raciocinando passo a passo sobre o fluxo de dados.
4. **Relatório de Auditoria:** Documente as descobertas no arquivo \`walkthrough.md\`, estruturando cada vulnerabilidade estritamente no formato de Task List abaixo:

- [ ] **[Severidade: CRÍTICA | ALTA | MÉDIA | BAIXA] - Título Curto do Problema**
  - **Localização:** \`caminho/do/arquivo.ext:linha\`
  - **Categoria:** [Ex: Segurança / Clean Code / Arquitetura]
  - **Descrição:** Explicação técnica direta sobre a falha e seu impacto.
  - **Solução Proposta:** Forneça o snippet de código corrigido ou a recomendação de arquitetura exata para mitigação.

**IMPORTANTE:** NÃO altere nenhum arquivo de código-fonte de produção durante esta fase. Sua função atual é exclusivamente de auditoria e reporte.

Confirme que compreendeu as regras e inicie a Etapa 1 (Mapeamento) para elaborar o seu plano de tarefas.`,
};
