import { Category, CommunicationChannel, Template } from './types';

export const CATEGORIES: Category[] = [
  { id: 'analysis', name: 'Análise', icon: 'Search' },
  { id: 'architecture', name: 'Arquitetura', icon: 'Layers' },
  { id: 'correction', name: 'Correção de Código', icon: 'Wrench' },
  { id: 'production', name: 'Produção', icon: 'Rocket' },
  { id: 'utility', name: 'Utilitário', icon: 'Terminal' },
  { id: 'design', name: 'Design', icon: 'Layout' },
  { id: 'texts', name: 'Textos & Políticas', icon: 'FileText' },
];

export const INITIAL_TEMPLATES: Template[] = [
  // --- MÓDULO: ANÁLISE ---
  {
    id: 'analise-holistica-produto-seo',
    title: 'Auditoria Holística (Produto & SEO)',
    category: 'analysis',
    channel: CommunicationChannel.PROMPT,
    description: 'Avaliação técnica e de negócio para mapear alertas críticos e melhorias de conversão.',
    content: `Atue como um Engenheiro de Produto Sênior e Especialista em SEO Técnico. Sua tarefa é realizar uma auditoria holística e profunda neste repositório ANTES de sugerir ou executar qualquer alteração de código.
Preciso que você analise o projeto cruzando duas perspectivas: a visão de negócio (utilitarista) e o rigor técnico.
1. Visão Utilitarista e de Produto (Contexto)
- Identifique o objetivo principal do site e o público-alvo presumido com base no conteúdo e layout atuais.
- Avalie a fluidez da jornada do usuário (Header, Footer, clareza dos CTAs, usabilidade no mobile, links de WhatsApp/Redes Sociais e FAQ).
- Aponte falhas de contexto, mensagens confusas ou seções que não agregam valor real à conversão ou ao visitante.
2. Visão Técnica e SEO
- Arquitetura e Código: Avalie o framework, a estrutura de pastas e a componentização sob a ótica de Clean Code (KISS, DRY, SOLID).
- Acessibilidade e Performance: Verifique o rigor no cumprimento de diretrizes WCAG 2.1, otimização da pasta \`public/\` (imagens, assets) e possíveis gargalos de renderização.
- SEO e Indexação: Analise a qualidade do HTML semântico, hierarquia de headings, metadata, sitemap, robots.txt, dados estruturados e otimização para AEO (Answer Engine Optimization).
- Integrações: Mapeie a saúde dos links internos/externos e identifique todos os pontos estratégicos onde scripts de tracking poderão ser implementados no futuro.
⚠️ TRAVA DE SEGURANÇA OBRIGATÓRIA (DIAGNÓSTICO):
NÃO modifique nenhum arquivo ainda. É terminantemente proibido inventar dados sobre o negócio. Primeiro, entregue um relatório estruturado exatamente com os tópicos abaixo:
1. O Produto: Resumo do contexto do site, público presumido e o que falta para a página ser mais útil/conversiva.
2. Alertas Críticos: Erros que quebram a aplicação, falhas graves de SEO, acessibilidade ou arquitetura ruim.
3. Plano de Alto Impacto: Sugestões práticas de correção no contexto e no código que trarão resultado rápido.
4. Melhorias Secundárias: Débitos técnicos menores para o futuro.
5. Arquivos Afetados: A lista exata de arquivos que precisarão ser modificados para resolver os Alertas Críticos e o Plano de Alto Impacto.
Caso falte algum dado essencial para você entender o domínio do negócio ou o escopo técnico, liste a dúvida explicitamente usando a tag \`[INFORMAÇÃO NECESSÁRIA]\`.
Aguarde minha leitura e o comando de aprovação para iniciarmos a refatoração.
`
  },

  {
    id: 'analise-melhoria-tridimensional',
    title: 'Sugestões de Melhoria (CTO, UX, Prod)',
    category: 'analysis',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria tridimensional com foco em Arquitetura, UX/UI e Produto.',
    content: `[Instrução de Sistema]
Atue como um Agente Autônomo de IA com acesso de leitura à raiz deste projeto React. Incorpore um Conselho Especializado composto por três pilares: CTO/Arquiteto de Software, Lead UX Engineer e Product Strategist.
[Diretriz Primária - MODO DE DIAGNÓSTICO E TRAVA DE SEGURANÇA (DRY-RUN)]
• Proibição de Ação Direta: Você NÃO deve modificar, excluir ou criar nenhum arquivo neste momento. É EXPRESSAMENTE PROIBIDO aplicar correções sem a minha aprovação prévia.
• Foco Analítico: Sua missão é realizar uma auditoria tridimensional (Arquitetura, UX/UI e Produto), mapear os débitos técnicos e gerar um relatório de diagnóstico acionável.
[Protocolo de Auditoria Tridimensional]
Execute análises estruturais e estáticas mapeando problemas nas seguintes camadas:
1. ⚙️ Dimensão de Engenharia e Arquitetura (Visão CTO)
• Refatoração Limpa: Mapeie módulos com alto acoplamento que violam os princípios SOLID, DRY e KISS. Identifique lógicas complexas que devem ser extraídas para custom hooks ou funções utilitárias.
• Alta Performance: Aponte lógicas ineficientes (notação Big-O ruim), excesso de complexidade ciclomática (falta de Guard Clauses) e gargalos de renderização/estado no ecossistema React.
• Segurança (Security-First): Identifique vulnerabilidades ao OWASP Top 10, ausência de sanitização de inputs, falhas tratadas silenciosamente e risco de exposição de chaves de API no client-side.
2. 🎨 Dimensão de Experiência e Design (Visão Lead UX Engineer)
• Acessibilidade Universal: Mapeie desvios das diretrizes WCAG 2.1/2.2 (tags semânticas, atributos ARIA, contraste) e falhas nas Heurísticas de Nielsen.
• Interface Mobile-First: Identifique inconsistências em tokens de design (Tailwind/CSS) e verifique se a marcação atual prejudica métricas modernas de Core Web Vitals (LCP, CLS, INP).
• Usabilidade: Aponte pontos de fricção no fluxo do usuário (ex: formulários complexos, feedbacks de erro genéricos).
3. 🚀 Dimensão de Estratégia de Produto (Visão Product Strategist)
• Conversão e AEO/SEO: Avalie microcopies, meta-tags e textos estáticos. Eles comunicam a Proposta de Valor com clareza para usuários e motores de resposta baseados em IA?
• Lean & YAGNI: Liste "código morto", dependências órfãs e features subutilizadas que geram débito técnico sem agregar valor de negócio (You aren’t gonna need it).
• Rastreamento Escalável: Verifique a estrutura de injeção de scripts de analytics e eventos. Aponte se eles estão bloqueando a thread principal e prejudicando a performance da aplicação.
[Gatilho de Execução e Formato de Saída]
Inicie a auditoria tridimensional agora. Ao finalizar, retorne APENAS o relatório estruturado abaixo:
📋 RELATÓRIO DE AUDITORIA TRIDIMENSIONAL
🚨 Alertas Críticos (Segurança e Performance): [Lista de arquivos e vulnerabilidades graves]
⚙️ Débitos de Engenharia (CTO): [Lista de componentes/hooks para refatoração]
🎨 Oportunidades de UX/UI: [Lista de ajustes visuais, Core Web Vitals e Acessibilidade]
🚀 Melhorias de Produto/Conversão: [Lista de otimizações de copy, AEO/SEO e peso morto]

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Auditoria Tridimensional concluída.
---

Aguarde o meu comando explícito ("Pode executar as correções") para iniciar as edições nos arquivos e aplicar as refatorações propostas.`
  },

  {
    id: 'analise-base-lgpd',
    title: 'Analise Base LGPD',
    category: 'analysis',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria técnica LGPD e redação de cláusulas de blindagem jurídica.',
    content: `[Instrução de Sistema]
Atue como um Engenheiro de DevSecOps, DPO (Data Protection Officer) e Especialista em Contratos de Software (SaaS). Sua missão é auditar a conformidade técnica com a LGPD e redigir cláusulas de blindagem jurídica para os termos de uso da aplicação.

[Diretriz Primária - MODO DE DIAGNÓSTICO E PREPARAÇÃO (DRY-RUN)]
• Proibição de Ação Direta: NÃO modifique nenhum arquivo neste momento. É EXPRESSAMENTE PROIBIDO aplicar alterações de código ou texto sem a minha aprovação prévia.
• Foco Pragmático: O objetivo é proteger a plataforma tecnicamente contra multas da LGPD e juridicamente contra processos por indisponibilidade, vazamentos ou disputas de propriedade intelectual.

[Protocolo de Auditoria e Implementação]

1. Correção Técnica (LGPD nos Componentes React)
• Arquivos Alvo: Inspecione rigorosamente a comunicação entre \`layout.tsx\`, \`CookieBanner.tsx\` e \`LegalModal.tsx\`.
• O Problema: Identifique a falha comum onde scripts de terceiros (Analytics, Pixels, trackers) são injetados e executados ANTES do aceite explícito do usuário.
• A Solução: Elabore a lógica necessária para criar um "Consent Gate" estrito. Scripts de terceiros só devem ser renderizados ou ativados no \`layout.tsx\` se o estado do \`CookieBanner\` confirmar o consentimento ativo.

2. Blindagem Jurídica (Textos para o LegalModal / Termos de Uso)
Elabore o texto em linguagem jurídica clara (Legal Design), protegendo o desenvolvedor/plataforma. Crie as seguintes cláusulas para serem inseridas nos documentos legais da interface:
• Cláusula de SLA e Força Maior: Estabeleça um tempo aceitável de indisponibilidade (downtime) de até 72 horas em casos de ataques DDoS, instabilidades no provedor de hospedagem ou falhas de infraestrutura de terceiros, isentando a plataforma de multas ou quebras contratuais neste período.
• Cláusula de Mitigação de Vazamento de Dados: Crie uma proteção legal isentando a plataforma de responsabilidade civil ou solidária por vazamentos de dados causados por ataques cibernéticos sofisticados e imprevisíveis contra a infraestrutura de hospedagem ou vulnerabilidades zero-day, desde que a plataforma prove ter adotado as melhores práticas de segurança do mercado.
• Cláusula de Propriedade Intelectual (Custom Features): Especifique que, caso o cliente solicite o desenvolvimento de uma funcionalidade "sob medida", o código-fonte e a Propriedade Intelectual pertencem à plataforma/desenvolvedor. O cliente recebe apenas uma licença de uso intransferível, permitindo que o desenvolvedor reaproveite a lógica em outros projetos.

[Gatilho de Execução e Formato de Saída]
Realize a leitura dos arquivos e elabore as cláusulas. Retorne APENAS o relatório estruturado abaixo:

🛡️ PLANO DE CONFORMIDADE E BLINDAGEM JURÍDICA

⚙️ 1. Diagnóstico Técnico (LGPD):
- [Descreva como está o vazamento de scripts atual nos arquivos lidos e como a nova lógica do CookieBanner irá travar isso no layout.tsx]

📜 2. Textos Jurídicos Propostos (Para o LegalModal):
- [Apresente a redação exata da Cláusula de SLA (72h)]
- [Apresente a redação exata da Cláusula de Vazamento de Dados]
- [Apresente a redação exata da Cláusula de Propriedade Intelectual de Features Customizadas]

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Auditoria técnica da LGPD e elaboração de contratos concluídas.
---

Aguarde o meu comando explícito ("Pode aplicar a lógica e os textos") para modificar os arquivos \`.tsx\` com as soluções propostas.`
  },
  {
    id: 'analise-vulnerabilidades-devsecops',
    title: 'Análise de Vulnerabilidades (AppSec)',
    category: 'analysis',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria de segurança profunda focada em vetores de ataque críticos e DevSecOps.',
    content: `[Instrução de Sistema]
Atue como um Engenheiro Principal de DevSecOps e Especialista Sênior em Segurança de Aplicações (AppSec). Sua missão é realizar uma auditoria de segurança profunda, contextualizada e implacável neste repositório.

[Diretriz Primária - MODO DE DIAGNÓSTICO (DRY-RUN)]
• Proibição de Ação Direta: Você NÃO deve modificar, excluir ou criar arquivos neste momento. É EXPRESSAMENTE PROIBIDO aplicar patches sem a minha aprovação prévia.
• Tolerância Zero: Assuma que o código é vulnerável. Não confie em validações superficiais.

[Protocolo de Auditoria Contextualizada]

1. Profiling da Aplicação (Entendimento de Contexto)
Antes de mapear falhas, analise a stack e a arquitetura para definir a natureza do projeto (ex: Landing Page estática, SaaS complexo, e-commerce, Headless CMS ou ambiente WordPress). A abordagem de mitigação deve ser perfeitamente adaptada a esse contexto.

2. Caçada Direcionada (Vetores de Ataque Críticos)
Faça uma varredura agressiva focada obrigatoriamente nestes pontos:
• Abuso de Formulários e Spam (Bot Protection): Avalie a suscetibilidade de formulários (contato, login, comentários, newsletter) a submissões automatizadas. Verifique a presença de proteções anti-spam como reCAPTCHA/hCaptcha/Turnstile, técnicas de Honeypot ocultas, validação de tokens CSRF e limitação de taxa (Rate Limiting) específica para rotas de mutação.
• IDOR (Insecure Direct Object Reference): Dê atenção redobrada a esta falha. Verifique se endpoints de API ou rotas de páginas permitem acesso a objetos diretos (ex: \`id=123\`) sem validar a autorização (seja via sessão, JWT ou validação nativa de CMS como \`current_user_can()\`).
• XSS e CSP: Mapeie entradas de dados suscetíveis a Cross-Site Scripting. Verifique a presença e eficácia do cabeçalho Content Security Policy (CSP).
• SQL Injection: Inspecione rigorosamente campos de busca, filtros e mutações no banco. O projeto usa prepared statements, ORMs seguros ou concatena strings perigosamente?
• Validação Híbrida: Identifique fluxos onde a validação de formulários ocorre apenas no frontend, permitindo *bypass* direto no servidor.
• Gestão de Arquivos: Inspecione rotas de upload. A validação é feita apenas por extensão ou o backend verifica o MIME type real e os magic numbers?
• Proteção de Infraestrutura e API: Mapeie a ausência de redirecionamento forçado para HTTPS (HSTS), chaves/secrets expostas diretamente no código (hardcoded) e ausência de Rate Limiting global nas APIs públicas.
• Resiliência de Dados: Verifique se existem scripts ou arquivos de configuração que estruturem rotinas de backup automatizado (caso seja aplicável à stack do projeto).

[Gatilho de Execução e Formato de Saída]
Inicie a varredura e retorne APENAS o relatório abaixo:

🛡️ RELATÓRIO DE INTELIGÊNCIA DE SEGURANÇA E DEVSECOPS

🔍 1. Perfil da Aplicação:
[Descreva em 1 ou 2 frases a stack do projeto (ex: SaaS em Next.js e Node, CMS WordPress, etc.) e o nível de risco inerente ao negócio.]

🚨 2. Vulnerabilidades Mapeadas (Classificadas por Severidade):
[Para cada falha encontrada (Spam/Bots, IDOR, XSS, Upload inseguro, etc.), liste:]
- Severidade: [CRÍTICA/ALTA/MÉDIA/BAIXA]
- Localização: [Arquivo e linha]
- Risco Contextual: [Como essa falha específica afeta ESTE tipo de projeto]
- Plano de Mitigação Exato: [O código/biblioteca/configuração exata para resolver o problema de acordo com o framework atual do projeto]

⚠️ 3. Alertas de Infraestrutura:
[Liste observações sobre Backups, HTTPS e Rate Limiting, indicando se devem ser resolvidos no código ou no provedor de nuvem/hospedagem.]

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Auditoria de segurança e profiling da stack concluídos.
---

Aguarde o meu comando explícito ("Pode aplicar os patches de segurança") para iniciar as correções definitivas no código com base no seu plano de mitigação.`
  },
  {
    id: 'resumo-atual-projeto',
    title: 'Resumo Atual do Projeto',
    category: 'analysis',
    channel: CommunicationChannel.PROMPT,
    description: 'Elabora um resumo executivo técnico e elegante para inclusão em portfólio.',
    content: `[Instrução de Sistema]
Atue como um Arquiteto Frontend Sênior e Copywriter Técnico. Sua missão é analisar o repositório atual e elaborar um resumo executivo do projeto no formato de um "Case Study" para o meu portfólio. 

O texto deve ter uma pegada sofisticada, focada em resolver problemas de negócio através de alta performance, UX/UI e código limpo.

[Protocolo de Análise]
1. Leia o \`package.json\` para mapear a Stack Tecnológica (frameworks, bibliotecas de animação como GSAP/Lenis, estilização, tipagem).
2. Analise a arquitetura (ex: SSR, SPA, roteamento, separação de responsabilidades).
3. Identifique o domínio da aplicação (qual o problema o site resolve e para quem).

[Formato de Saída Exigido]
Gere o resumo estritamente no formato Markdown abaixo, preenchendo as informações com base no que você descobriu no repositório. Mantenha o tom profissional e elegante.

# [NOME DO PROJETO EM MAIÚSCULAS]

*"[Escreva uma citação de impacto em itálico com 1 a 2 frases. A citação deve focar em como a interface resolve a dor do público-alvo, destacando fluidez, redução de fricção, acessibilidade ou impacto visual]"*

[Escreva um parágrafo técnico de 3 a 4 linhas. Destaque o paradigma arquitetural (ex: Server-Side Rendering, Vite SPA), os padrões de Clean Code aplicados (ex: Separation of Concerns, SOLID), o impacto no SEO Técnico e o uso de interações/animações que valorizam o site.]

---

**YEAR**
2026

**ROLE**
Frontend Developer - [Descreva as responsabilidades chave aplicadas aqui, ex: Desenvolvimento da interface, otimização de performance, implementação de acessibilidade e animações fluidas.]

**TECH STACK**
[Liste as tecnologias encontradas em formato de tags separadas por vírgula, ex: React, TypeScript, Vite, Tailwind CSS, GSAP, Lenis]

⚠️ DIRETRIZ DE EXECUÇÃO: Não altere nenhum arquivo do projeto. Apenas gere este texto no chat para que eu possa copiar para o meu bloco de notas.`
  },

  // --- MÓDULO: ARQUITETURA ---
  {
    id: 'arquitetura-refatoracao-estrutural',
    title: 'Refatoração e Reorganização Estrutural',
    category: 'architecture',
    channel: CommunicationChannel.PROMPT,
    description: 'Promove uma reorganização limpa do projeto e propõe um commit semântico.',
    content: `[Instrução de Sistema]
Atue como um Engenheiro de Software Sênior. Sua missão agora é realizar uma refatoração estrutural neste projeto para torná-lo altamente profissional, legível e de fácil manutenção para qualquer pessoa que vá ler ou modificar o código no futuro.

**1. Diretrizes de Organização e Nomenclatura:**
- Analise todos os arquivos soltos e pastas atuais.
- Proponha uma separação lógica por contexto ou domínio (ex: agrupando componentes, lógicas/hooks, estilos, utilitários, assets e páginas).
- Renomeie arquivos e pastas para que tenham nomes 100% intuitivos, claros e que sigam um padrão de nomenclatura consistente (ex: PascalCase para componentes React/UI, kebab-case ou camelCase para funções/utilitários).

⚠️ **TRAVA DE SEGURANÇA (DRY-RUN):**
NÃO mova, exclua ou renomeie nenhum arquivo ainda. Primeiro, me apresente a árvore de diretórios (folder tree) de como o projeto ficará após a sua organização e uma breve lista de quais arquivos mudarão de nome.

**2. Regras de Commit e Checkpoint (APÓS A MINHA APROVAÇÃO):**
Quando eu responder "Pode executar", você aplicará as mudanças propostas e, imediatamente após finalizar, elaborará a mensagem para o meu \`git commit\`. 

O texto do commit DEVE soar 100% humano, pragmático e direto. É EXPRESSAMENTE PROIBIDO o uso de introduções robóticas ou jargões de IA (como "Este commit introduz", "O objetivo destas mudanças", "Foram realizadas melhorias").

Siga rigorosamente esta estrutura para o commit:
- **Título:** Use o padrão Conventional Commits (ex: \`refactor: reorganiza estrutura de pastas e padroniza nomenclaturas\`). Tudo em minúsculas.
- **Corpo:** Em bullet points usando apenas o hífen (-).
- **Ponto de vista:** Use SEMPRE a primeira pessoa do singular e verbos de ação informais (ex: "agrupei", "renomeei", "ajustei", "criei a pasta", "joguei os arquivos de X pra Y"). 

**GERAÇÃO DO MARCO DE ATUALIZAÇÃO:**
Logo abaixo da mensagem de commit, adicione uma quebra de linha e escreva o seguinte bloco exatamente como está abaixo, preenchendo com a data e hora atuais:

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Arquivos, diffs e estrutura analisados até este ponto foram marcados na memória. 
---

Lembre-se: após registrar este marco, suas próximas análises para futuros commits devem considerar APENAS o que for alterado depois dele.`
  },
  {
    id: 'arquitetura-auditoria-profunda',
    title: 'Auditoria Profunda e Debloat',
    category: 'architecture',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria detalhada para clean code, erradicação de peso morto e performance.',
    content: `[Instrução de Sistema] 
Atue como um Agente Autônomo de IA, Arquiteto de Software Sênior e Especialista em Clean Code (SOLID, DRY, KISS), React e Segurança. Você possui acesso de leitura à raiz do projeto para esta fase inicial de diagnóstico.
[Missão] 
Realizar uma auditoria profunda e implacável no repositório para planejar a erradicação de peso morto, resolução de duplicidades estruturais, correção de falhas de segurança e refatoração de lógicas ineficientes. O objetivo final é elevar o projeto a um padrão rigoroso de Production-Grade.
[Diretriz Primária - MODO DE DIAGNÓSTICO E TRAVA DE SEGURANÇA (DRY-RUN)]
• Proibição de Ação Direta: Você NÃO deve modificar, excluir ou criar nenhum arquivo neste momento. É EXPRESSAMENTE PROIBIDO aplicar alterações de código sem a minha aprovação prévia.
• Foco Analítico: Sua função agora é varrer o código, mapear os problemas técnicos e gerar um relatório de diagnóstico acionável.
• Tolerância Zero com Legado e Inchaço: Avalie o código com rigor máximo, listando para exclusão ou refatoração tudo o que afastar o projeto da excelência e da leveza.
[Protocolo de Auditoria - O Que Mapear e Avaliar]
1. Erradicação de Peso Morto e Duplicidades (Deep Audit & Debloat)
• Varredura de Arquivos Órfãos: Liste arquivos não referenciados, componentes React que não são importados e assets (imagens, ícones, fontes) sem uso ativo.
• Caça a Duplicidades: Identifique funções ou arquivos com lógica altamente similar que precisem ser consolidados em componentes reutilizáveis ou custom hooks.
• Limpeza de Dependências: Aponte pacotes no \`package.json\` que não possuem importação ativa no código.
2. Saneamento de Código (Clean Code)
• Limpeza Interna: Mapeie funções mortas, imports não utilizados, variáveis não declaradas, \`console.log\` esquecidos e trechos de código comentados.
• Nomenclatura Semântica: Liste variáveis, funções ou componentes que exigem renomeação para revelar sua intenção exata (ex: substituir \`var x\` por \`const userData\`).
3. Otimização Lógica, Estrutural e Performance
• Princípio da Responsabilidade Única (SRP): Aponte componentes ou funções que executam múltiplas tarefas e precisam ser fragmentados.
• Cláusulas de Guarda (Guard Clauses): Identifique "Arrow Code" (alinhamentos profundos de if/else) que devem ser otimizados com retornos antecipados.
• Imutabilidade e Alta Ordem: Liste laços \`for/while\` ineficientes que devem ser substituídos por \`.map()\`, \`.filter()\`, \`.reduce()\`, e alocações \`let\` que deveriam ser \`const\`.
4. Blindagem e Acessibilidade (Security First)
• Validação de Contratos: Identifique fronteiras de métodos sem verificações rigorosas de nulidade e tipagem.
• Fail-Fast e Tratamento de Erros: Aponte operações de I/O e requisições de API sem blocos \`try/catch\` robustos ou que falham silenciosamente.
• Anti-Injection e WCAG 2.1: Mapeie possíveis vulnerabilidades a XSS em inputs do React, queries não sanitizadas e elementos interativos de UI que violam acessibilidade básica.
[Gatilho de Execução e Formato de Saída]
Inicie a auditoria profunda agora. Ao finalizar, retorne APENAS o relatório estruturado abaixo:
📋 RELATÓRIO DE AUDITORIA E PLANO DE AÇÃO
🗑️ Arquivos/Assets e Dependências para Exclusão (Peso Morto): [Lista detalhada]
♻️ Duplicidades para Consolidação: [Lista de componentes/hooks a serem unificados]
🛠️ Arquivos para Refatoração (Clean Code/Performance/Segurança): [Lista de arquivos e o motivo da alteração]
Aguarde o meu comando explícito ("Pode executar o plano") para realizar as edições nos arquivos e registrar o marco de atualização no repositório.`
  },

  // --- MÓDULO: PRODUÇÃO ---
  {
    id: 'producao-sitemap-robots',
    title: 'Sitemap & Robots.txt',
    category: 'production',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria de rotas para geração automatizada de sitemap.xml e robots.txt otimizados.',
    content: `[Instrução de Sistema]
Atue como um Engenheiro de SEO Técnico Sênior e Especialista em Crawlability. Sua missão é realizar uma varredura profunda na arquitetura de rotas deste projeto e gerar arquivos \`sitemap.xml\` e \`robots.txt\` de altíssima precisão, otimizados para ranqueamento em motores de busca (Google, Bing) e plataformas de AEO (Motores de Resposta por IA).

[Diretriz Primária - MODO DE MAPEAMENTO E TRAVA DE SEGURANÇA (DRY-RUN)]
• Proibição de Ação Direta: NÃO crie os arquivos na pasta \`public/\` (ou raiz) ainda. É EXPRESSAMENTE PROIBIDO salvar qualquer código sem a minha aprovação prévia.
• Foco Analítico: O sitemap não pode ser genérico. Você deve ler a estrutura real de diretórios (ex: \`src/pages\`, \`app/\`, ou roteadores do React/Vite) para descobrir exatamente quais páginas existem no projeto atualmente.

[Protocolo de Mapeamento e Criação]

1. Discovery de Rotas (Auditoria de Estrutura):
• Analise o repositório e mapeie todas as rotas públicas acessíveis.
• Exclua ativamente rotas dinâmicas incompletas (ex: \`/post/[id]\`), rotas de API, áreas de dashboard (\`/admin\`) ou páginas de erro (\`/404\`).

2. Arquitetura do \`sitemap.xml\`:
• Utilize o namespace padrão XML 1.0 (\`http://www.sitemaps.org/schemas/sitemap/0.9\`).
• Para as rotas descobertas, defina a URL base como um placeholder \`https://[SEU_DOMINIO_AQUI.com.br]\`.
• Aplique uma hierarquia de SEO inteligente: \`<priority> 1.0\` para a Home, \`0.8\` para serviços/produtos principais, e \`0.5\` para contatos ou políticas.
• Defina a tag \`<changefreq>\` de forma lógica (ex: \`weekly\` para o index, \`monthly\` para páginas estáticas) e \`<lastmod>\` com a data atual.

3. Arquitetura do \`robots.txt\`:
• Permita o rastreamento geral (\`User-agent: *\`, \`Allow: /\`).
• Bloqueie diretórios de sistema, APIs ou áreas sensíveis descobertas no projeto (\`Disallow: /api/\`, \`Disallow: /admin/\`).
• Adicione diretivas explícitas para crawlers de IA (ex: \`Google-Extended\`, \`GPTBot\`, \`ClaudeBot\`), permitindo o rastreamento para garantir que o site seja indexado como fonte de conhecimento em LLMs.
• Feche o arquivo declarando a URL absoluta do sitemap: \`Sitemap: https://[SEU_DOMINIO_AQUI.com.br]/sitemap.xml\`.

[Gatilho de Execução e Formato de Saída]
Inicie a varredura da estrutura do projeto agora. Ao finalizar, retorne APENAS o relatório estruturado abaixo:

🗺️ MAPEAMENTO DE SEO E CRAWLABILITY

🔍 1. Rotas Descobertas:
- [Liste as URLs reais que você encontrou na estrutura do código e que entrarão no sitemap]
- [Liste as rotas que você decidiu ignorar/bloquear e o motivo]

📄 2. Preview do robots.txt:
\`\`\`text
[Insira o código gerado aqui]
\`\`\`

📄 3. Preview do sitemap.xml:
\`\`\`xml
[Insira o código gerado aqui]
\`\`\`

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Mapeamento de rotas e SEO concluído.
---

Aguarde o meu comando explícito ("Pode gerar os arquivos") para salvar o \`sitemap.xml\` e \`robots.txt\` na pasta correspondente.`
  },

  {
    id: 'producao-metadata-opengraph',
    title: 'Metadata & Open Graph',
    category: 'production',
    channel: CommunicationChannel.PROMPT,
    description: 'Elabora e injeta tags otimizadas de SEO e Open Graph.',
    content: `[Instrução de Sistema]
Atue como um Engenheiro Frontend Sênior e Especialista em SEO Técnico. Sua missão é analisar o contexto da página atual e elaborar um ecossistema completo de Metadata e Open Graph (OG) estruturado, otimizando o projeto para compartilhamento em redes sociais e indexação avançada.

[Diretriz Primária - MODO DE DIAGNÓSTICO E TRAVA DE SEGURANÇA (DRY-RUN)]
• Proibição de Ação Direta: NÃO insira as tags de meta ou modifique os arquivos (como \`index.html\` ou \`layout.tsx\`) neste momento.
• Escopo Dinâmico: Antes de gerar os dados, identifique o framework do projeto (ex: Vite/React puro via \`index.html\` ou Next.js App Router via API de \`Metadata\`). A implementação deve ser cirúrgica para a tecnologia utilizada.

[Protocolo de Mapeamento e Criação de OG/SEO]

1. Análise Semântica da Página:
• Leia o conteúdo principal do componente/página para extrair a Proposta de Valor.
• Elabore um \`<title>\` otimizado (50-60 caracteres) focado na intenção de busca.
• Crie uma \`<meta name="description">\` persuasiva (150-160 caracteres) que estimule o CTR (Click-Through Rate).

2. Protocolo Open Graph (Facebook, LinkedIn, WhatsApp):
• Estruture as tags obrigatórias: \`og:title\`, \`og:description\`, \`og:url\` (use um placeholder se o domínio final não estiver definido) e \`og:site_name\`.
• Defina o \`og:type\` correto (ex: \`website\`, \`article\`, \`profile\`).
• Mapeie ou sugira o caminho exato para a \`og:image\`. Verifique na pasta \`public/\` ou \`src/assets/\` se existe um banner em proporção 1200x630px. Se não houver, alerte.

3. Protocolo Twitter Cards (X):
• Configure a tag \`twitter:card\` (preferencialmente \`summary_large_image\`).
• Sincronize as tags \`twitter:title\`, \`twitter:description\` e \`twitter:image\` para garantir renderização perfeita no feed.

[Gatilho de Execução e Formato de Saída]
Inicie a leitura da página atual para entender o contexto. Ao finalizar, retorne APENAS o relatório estruturado abaixo:

🚀 PLANO DE METADATA E OPEN GRAPH

🔍 1. Contexto e Framework Detectado:
- [Indique se a implementação será via tag <meta> estática (ex: Vite) ou exportação de objeto (ex: Next.js)]

📝 2. Payload de SEO Básico:
- Title: [Sugestão]
- Description: [Sugestão]

🔗 3. Payload Open Graph e Twitter:
- [Liste de forma limpa as tags ou propriedades OG e Twitter geradas]
- Status da Imagem: [Confirme se encontrou o asset para o og:image ou se eu preciso providenciar o arquivo]

💻 4. Preview da Implementação:
- [Apresente o bloco de código exato que será injetado no arquivo correspondente assim que eu aprovar]

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Análise de semântica e criação de Metadata concluídas.
---

Aguarde o meu comando explícito ("Pode injetar as meta tags") para aplicar o código no arquivo raiz/layout do projeto.`
  },

  {
    id: 'analise-integracao-dependencias',
    title: 'Analise de Integração de Depedencias',
    category: 'production',
    channel: CommunicationChannel.PROMPT,
    description: 'Auditoria de integrações e varredura de ecossistema do repositório.',
    content: `[Instrução de Sistema]
Atue como um Arquiteto de Soluções Sênior e Especialista em Estratégia de Produtos Digitais. Sua missão é realizar uma varredura completa e profunda neste repositório para mapear o contexto do negócio e sugerir um ecossistema de integrações (Third-Party APIs e SaaS) altamente estratégico.

[Diretriz Primária - MODO DE DIAGNÓSTICO (DRY-RUN)]
• Proibição de Ação Direta: NÃO instale novos pacotes (npm/yarn), não crie e não altere nenhum arquivo de código neste momento.
• Foco Analítico: Sua função é ler o código, entender a dor que o software resolve e elaborar um mapa de integrações recomendadas que elevem o nível profissional do projeto.

[Protocolo de Análise Contextual]
1. Profiling do Projeto: Faça uma leitura profunda do \`package.json\`, da estrutura de rotas e dos componentes principais para definir a natureza do projeto (ex: Landing Page de alta conversão, SaaS B2B, E-commerce, ou Plataforma de Gestão).
2. Análise de Lacunas (Gap Analysis): Identifique o que está faltando na arquitetura atual. O projeto captura leads de forma eficiente? Tem monitoramento de erros no front/back? Possui analytics de produto avançado ou apenas tracking básico?
3. Recomendações Direcionadas: Baseado no profiling, sugira as integrações mais adequadas, separadas pelas seguintes camadas (sugira APENAS o que fizer sentido para este escopo específico):
   - Análise de Tráfego e Comportamento (ex: GA4, Vercel Web Analytics, Hotjar).
   - Captura de Leads e Automação (ex: WhatsApp API, Typeform, RD Station).
   - Produto, Retenção e Pagamentos (ex: PostHog, Stripe, Clerk/Auth0).
   - Engenharia e Observabilidade (ex: Sentry, Datadog).

[Gatilho de Execução e Formato de Saída]
Inicie a varredura arquivo por arquivo agora. Ao finalizar, retorne APENAS o relatório estruturado abaixo:

🔌 MAPA ESTRATÉGICO DE INTEGRAÇÕES

🔍 1. Diagnóstico do Domínio:
[Descreva em 1 ou 2 frases a conclusão sobre o tipo de projeto e seu modelo de negócio presumido com base no código lido].

💡 2. Integrações Recomendadas (Priorizadas):
[Para cada integração sugerida, liste:]
- Categoria: [ex: Engenharia / Observabilidade]
- Ferramenta: [ex: Sentry]
- Por que integrar: [Justificativa técnica baseada estritamente no código atual. Ex: "Notei formulários complexos de intake; é vital monitorar exceções silenciosas no runtime."]
- Esforço de Implementação: [Baixo / Médio / Alto]

🛠️ 3. Integrações Já Detectadas:
[Liste ferramentas de terceiros que você já encontrou configuradas no código, se houver].

---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Profiling arquitetural e mapeamento de integrações concluídos.
---

Aguarde o meu comando explícito ("Pode instalar as integrações selecionadas") para começarmos a configurar os pacotes no projeto.`
  },
  {
    id: 'analise-seo',
    title: 'Analise SEO',
    category: 'production',
    channel: CommunicationChannel.PROMPT,
    description: 'Plano de execução para SEO técnico, semântico e estrutural.',
    content: `Atue como um Engenheiro de SEO Técnico e Desenvolvedor Front-end Sênior. Com base na auditoria estrutural realizada anteriormente, desenvolva o plano de execução para a estratégia de SEO técnico, semântico e local deste projeto.
O objetivo central é garantir que os motores de busca tradicionais e os motores de IA (AEO) compreendam de forma inequívoca o contexto da aplicação e mapeiem corretamente a entidade principal.
1. Mapeamento da Entidade (Contexto de Negócio)
Ajuste a estrutura e os metadados para responder nativamente: QUEM é a entidade -> QUAL serviço/produto oferece -> ONDE atua -> PARA QUEM -> COMO entrar em contato.
- 👤 Entidade Principal: [NOME DO PROFISSIONAL OU EMPRESA]
- 📍 Área de Atuação (Local SEO): [BAIRRO 1, BAIRRO 2, CIDADE - ESTADO]
2. Diretrizes Técnicas e Semânticas
- HTML5 Strict: Priorize o uso de tags semânticas e estruturais (\`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<aside>\`, \`<footer>\`). Elimine \`<div>\` genéricas sempre que existir uma alternativa semântica aplicável.
- On-Page & Metadados: Estruture e otimize: \`title\`, \`meta description\`, \`canonical tags\`, Open Graph (OG) e Twitter Cards. Valide a hierarquia lógica de headings (H1 ao H6).
- Conteúdo & Acessibilidade: Otimize atributos \`alt\` de todas as imagens, estruture a lincagem interna e revise áreas de navegação chave (Header, Footer, FAQ, CTAs e links de WhatsApp/Sociais).
- Arquivos Core: Crie, valide ou ajuste os seguintes arquivos na raiz: \`sitemap.xml\`, \`robots.txt\`, web app \`manifest\`, e \`llms.txt\` (otimização para LLMs).
3. Restrições de Qualidade (Compliance)
- É EXPRESSAMENTE PROIBIDO inventar informações comerciais, serviços ou dados de contato. Utilize APENAS o que já existe no projeto.
- O texto e as tags devem ser orgânicos. Práticas de keyword stuffing são inaceitáveis.
- As alterações arquiteturais não devem gerar impactos visuais indesejados no design atual.
⚠️ TRAVA DE SEGURANÇA E FLUXO DE EXECUÇÃO:
NÃO aplique nenhuma alteração no código agora. Primeiro, entregue o seu Plano de SEO. 
Apresente um resumo claro de quais arquivos serão modificados, quais meta tags serão inseridas e como você pretende aplicar a lincagem semântica para destacar a Entidade e as Localidades.
Aguarde o meu comando explícito ("Pode implementar") para iniciar as alterações no código.`
  },


  // --- MÓDULO: UTILITÁRIO ---
  {
    id: 'utilitario-commit',
    title: 'Commit',
    category: 'utility',
    channel: CommunicationChannel.PROMPT,
    description: 'Gera uma mensagem semântica, profissional e humana para o Git Commit.',
    content: `Analise as alterações mais recentes do projeto (arquivos modificados, criados ou deletados) e elabore a mensagem para o meu próximo \`git commit\`, essa mensagem deve ser conjugando verbo em primeira pessoa.
Atue como um Engenheiro de Software Sênior. Sua tarefa é criar uma mensagem profissional, didática e clara, explicando o contexto das alterações. O texto DEVE soar 100% humano e natural. É EXPRESSAMENTE PROIBIDO o uso de introduções robóticas ou jargões típicos de IA (como "Este commit introduz", "O objetivo destas mudanças", "Foram realizadas melhorias" ou "Em resumo").
Siga rigorosamente esta estrutura:
1. Título do commit: Utilize o padrão Conventional Commits (ex: \`feat:\`, \`fix:\`, \`refactor:\`, \`chore:\` ou \`style:\`), seguido de uma descrição curta e direta no tempo verbal imperativo (ex: "refactor: reorganiza estrutura da pasta src").
2. Corpo do commit: Pule uma linha após o título. Explique de forma didática e direta "O que mudou?" e "Por que mudou?".
3. Detalhamento: Se houver várias mudanças, use bullet points simples com hífen (-) para listar os impactos técnicos ou visuais. Vá direto ao ponto.
GERAÇÃO DO MARCO DE ATUALIZAÇÃO (CHECKPOINT):
Após gerar a mensagem de commit, adicione uma quebra de linha e escreva o seguinte bloco exatamente como está abaixo, preenchendo com a data e hora atuais:
---
📍 MARCO DE ATUALIZAÇÃO REGISTRADO: [DD/MM/AAAA às HH:MM]
Arquivos, diffs e linhas analisados até este ponto foram marcados na memória. 
---
A partir de agora, sempre que eu pedir um novo commit, você DEVE usar esse marco como ponto de corte. Analise APENAS os novos diffs e edições realizados DEPOIS deste marco, ignorando completamente qualquer alteração que já tenha entrado neste commit atual para não misturarmos escopos no histórico do git.`
  },
  // --- MÓDULO: CORREÇÃO ---
  {
    id: 'correcao-codigo-direta',
    title: 'Correção Direta (Solução Exata)',
    category: 'correction',
    channel: CommunicationChannel.PROMPT,
    description: 'Analisa um erro ou trecho de código e retorna a correção exata, pronta para uso.',
    content: `[Contexto] Atue como um Desenvolvedor Sênior.
[Tarefa] Analise o código abaixo que está apresentando o seguinte problema/erro: "[Descreva o Erro]".

[Código Atual]:
[Cole o código aqui]

[Objetivo e Regra Crítica] NÃO me dê explicações genéricas ou conselhos vagos sobre o que fazer. Analise o problema e forneça IMEDIATAMENTE a versão final do código corrigido, utilizando as melhores práticas.
[Output] Apenas o bloco de código refatorado e corrigido, acompanhado de uma lista curta com as principais alterações feitas.`
  },
  {
    id: 'correcao-performance',
    title: 'Refatoração para Performance',
    category: 'correction',
    channel: CommunicationChannel.PROMPT,
    description: 'Otimiza o código para resolver gargalos de desempenho.',
    content: `[Contexto] Atue como um Especialista em Performance Web/Software.
[Tarefa] O trecho de código a seguir possui gargalos de desempenho (ex: renderizações desnecessárias, loops ineficientes).

[Código Atual]:
[Cole o código aqui]

[Objetivo] Refatore o código para otimizar sua execução ao máximo.
[Output] Forneça a solução exata e corrigida em um bloco de código. Adicione um breve comentário explicando a complexidade de tempo (Big O) ou o ganho de performance obtido.`
  },


  // --- MÓDULO: DESIGN ---
  {
    id: 'design-layout-ultrawide',
    title: 'Otimização de Layout Ultrawide',
    category: 'design',
    channel: CommunicationChannel.PROMPT,
    description: 'Refatoração para layout fluido em telas 2K/4K (Cinema-style).',
    content: `[Instrução de Sistema] Atue como um Agente Autônomo de IA especialista em Frontend Sênior, UI/UX, React e Tailwind CSS. Você tem permissão e acesso direto ao sistema de arquivos da raiz do projeto. Diretiva de Ação: Você NÃO deve gerar ou retornar blocos de código no chat. Sua função é aplicar as edições arquiteturais e de código DIRETAMENTE nos arquivos do projeto. Ao terminar, responda apenas informando quais arquivos foram alterados e confirmando o sucesso da operação.
[Contexto e Problema] O layout atual está utilizando restrições de container muito estreitas (max-w em 1280px/1440px), criando margens laterais desproporcionais ("espaços em branco") e a aparência de um site em caixas em monitores Full HD (1920px), 2K e 4K. O objetivo é migrar para um layout fluido, criando uma experiência imersiva ('Cinema-style'), mas mantendo o design legível e funcional.
[Tarefas de Execução]
1. Configuração de Breakpoints (tailwind.config.js):
•	Acesse e modifique o arquivo de configuração do Tailwind.
•	Estenda o objeto screens para mirar precisamente em monitores de grande porte:
o	Garanta que 2xl seja 1536px.
o	Crie o breakpoint 3xl para 1920px.
o	Crie o breakpoint 4xl para 2560px.
•	Configure as extensões da classe .container (se estiver em uso) para suportar essas larguras máximas e ajuste o padding lateral (px) para que o respiro horizontal cresça de maneira proporcional à tela.
2. Refatoração de Wrappers e Layouts (Arquivos React - .jsx/.tsx):
•	Identifique e edite os componentes estruturais principais (Header, Hero, Footer, Seções de Conteúdo).
•	Substitua restrições estreitas (max-w-5xl, max-w-7xl) dos wrappers externos por classes expansivas (como max-w-screen-2xl, max-w-screen-3xl ou max-w-[1920px]).
•	Limite de Segurança: Aplique um max-w global prudente (ex: 2000px ou 2560px) com mx-auto nas cascas principais, pois deixar o design sem nenhum teto máximo pode tornar o layout bizarro em telas hiper-gigantes.
•	Diretriz de Legibilidade: O texto e o conteúdo central importam mais do que a área expandida. Para blocos compostos apenas por leitura de textos longos (parágrafos), mantenha restrições rígidas (ex: max-w-3xl ou max-w-prose) centralizadas, para não destruir a escaneabilidade visual. Permita que apenas os fundos, grids, barras e imagens vazem e preencham a largura "Cinema-style".
3. Balanceamento de Proporção Visual (Margens e Espaçamentos):
•	O segredo de layouts fluidos eficientes é manter as proporções entre os elementos e o espaço vazio. Portanto, nas resoluções maiores (2xl, 3xl, 4xl), aumente o espaçamento vertical.
•	Refatore os padding-y das seções (ex: alterando de py-16 para 2xl:py-24 ou 3xl:py-32) para que a altura compense a nova largura premium do site.
[Critério de Aceite] Modifique os arquivos diretamente. Teste a integridade sintática dos arquivos React e valide se nenhuma tag quebra a estrutura original. Aplique as modificações agora.
`
  },

  {
    id: 'design-footer-premium',
    title: 'Footer Premium',
    category: 'design',
    channel: CommunicationChannel.PROMPT,
    description: 'Componente de Footer escuro, sofisticado com noise texture.',
    content: `Atue como um Especialista em Front-end (React/Tailwind) e UI Design.

Objetivo: Crie um componente de Footer sofisticado, escuro e minimalista, replicando uma estética "premium" específica.

Stack Tecnológica:
- React (TypeScript)
- Tailwind CSS
- Lucide React (para ícones)

Requisitos Visuais e de Design:

1. Fundo e Textura:
- Use uma cor de fundo muito escura (quase preta), mas com tom quente (ex: stone-950 do Tailwind).
- CRUCIAL: Adicione uma camada absoluta (absolute inset-0) com uma textura de ruído (noise) usando um SVG inline (feTurbulence) e mix-blend-overlay com opacidade baixa (ex: 0.05 ou 0.07). Isso é essencial para o visual "orgânico".

2. Tipografia de Fundo (Background Typography):
- Adicione um texto decorativo gigante no fundo, alinhado na parte inferior.
- Deve usar uma fonte Serif elegante.
- Tamanho massivo (ex: text-[12vw] a text-[18vw]).
- Opacidade muito baixa e cor escura para se fundir ao fundo.
- pointer-events-none e select-none.

3. Layout (Grid):
- Container principal centralizado (max-w-screen-2xl).
- Grid responsivo: 1 coluna no mobile, 2 no tablet, 4 no desktop.
- Bordas sutis separando as colunas (cor escura, ex: stone-800).

4. Conteúdo das Colunas:
- Col 1 (Identidade): Título grande Serif ("Brand Name") + Subtítulo ou slogan itálico.
- Col 2 (Local/CTA): Texto descritivo e um botão/link com ícone (ex: seta) para contato.
- Col 3 (Social): Links com ícones (Instagram, WhatsApp, etc.) e hover que muda a cor para branco.
- Col 4 (Menu/Créditos): Links de navegação verticais com efeito de hover (translate-x) e créditos do desenvolvedor no final.

5. Tipografia:
- Use uma fonte Serif (como Playfair Display) para títulos e destaques.
- Use uma fonte Sans (como Inter) para textos de apoio e links.
- Use uppercase, tracking-widest e tamanhos pequenos (text-xs) para rótulos (labels).

Entregáveis:
- O código completo do componente Footer.tsx.
- Instruções de importação das fontes (Google Fonts) e instalação de ícones (npm install lucide-react).
- O trecho necessário do tailwind.config.js para estender as cores (palette stone) se necessário.
`
  },

  {
    id: 'design-interacao-cards',
    title: 'Interação de Cards',
    category: 'design',
    channel: CommunicationChannel.PROMPT,
    description: 'Componente Master-Detail com Framer Motion e Lenis integrado.',
    content: `Contexto: Estou desenvolvendo um portfólio React de alta fidelidade e preciso replicar uma interação específica de "Master-Detail" que já existe na seção de Projetos. Objetivo: Criar um novo componente de Lista/Grid (ex: para Artigos, Serviços ou Galeria) onde o clique em um item expande um Modal de tela cheia com transição contínua.

Requisitos Técnicos Estritos:

Tecnologias:

React 18+
Framer Motion (para layoutId, AnimatePresence, useScroll, useSpring).
Lenis (para scroll suave isolado dentro do modal).
Tailwind CSS.
Comportamento do Card (Lista):

Deve usar useScroll relativo ao container do card para animar propriedades conforme o item entra na viewport.
Animação de Scroll: Aplicar useSpring no progresso do scroll.
Transformações:
clipPath: De inset(15% 10% 15% 10% round 4px) para inset(0% ...) (efeito de expansão).
scale: De 0.95 para 1.05.
y (Parallax da imagem interna): De -30% para 30%.
Interação: Hover deve revelar um botão (seta) com scale e opacity.
Shared Element: A imagem deve ter layoutId="image-{id}" e o título layoutId="title-{id}".
Comportamento do Modal (Container):

Deve usar createPortal para renderizar no document.body.
Entrada: Animação tipo spring (damping: 30, stiffness: 300) vindo de baixo (y: 100% -> 0% ou 2%).
Saída: Animação tipo tween (ease: "easeInOut", duration: 0.4) para evitar "travamentos" no final.
Scroll: Deve instanciar um novo Lenis apenas para o container do modal (wrapper e content), travando o scroll da página principal.
Mobile: Deve suportar gesto de arrastar para fechar (drag="y").
Conteúdo do Modal (Detail):

Hero Section deve conter a imagem com o mesmo layoutId="image-{id}" para fechar a transição mágica.
Título com o mesmo layoutId="title-{id}".
Conteúdo subsequente deve usar animação de entrada escalonada (Reveal).
Por favor, implemente seguindo EXATAMENTE os padrões de código abaixo:

Trechos de Código Fonte (Source of Truth)
1. O Card (Com Física de Scroll e ClipPath)
// Padrão para o Card da Lista
const CardItem = ({ item, onClick }) => {
  const containerRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  
  // 1. Detectar Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"]
  });

  // 2. Suavizar Física
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20, stiffness: 100, mass: 0.5
  });
  
  // 3. Transformações Visuais
  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(15% 10% 15% 10% round 4px)", "inset(0% 0% 0% 0% round 0px)"]
  );
  const scale = useTransform(smoothProgress, [0, 1], [0.95, 1.05]);
  const yParallax = useTransform(smoothProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-30%", "30%"]);

  return (
    <div ref={containerRef} onClick={onClick} className="group cursor-pointer py-12">
      {/* Wrapper com ClipPath Animado */}
      <motion.div style={{ clipPath: isMobile ? undefined : clipPath }} className="relative aspect-video overflow-hidden">
        
        {/* Imagem com Parallax e LayoutId */}
        <motion.div className="w-full h-full relative overflow-hidden">
           <motion.img 
              layoutId={\\\`image-\\\${item.id}\\\`}
              src={item.image} 
              style={{ scale: 1.35, y: yParallax }} 
              className="w-full h-full object-cover"
           />
        </motion.div>

        {/* Botão Hover */}
        <div className="absolute center-absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
           <ArrowUpRight />
        </div>
      </motion.div>

      {/* Título com LayoutId */}
      <motion.h3 layoutId={\\\`title-\\\${item.id}\\\`} className="text-4xl font-serif mt-6">
         {item.title}
      </motion.h3>
    </div>
  );
};
2. O Modal (Com Lenis Isolado e Portal)
// Padrão para o Modal Wrapper
const ContentModal = ({ isOpen, onClose, children, layoutId }) => {
  const modalContainerRef = useRef(null);
  const modalContentRef = useRef(null);
  const scopedLenisRef = useRef(null);

  // Lógica de Scroll Isolado (Lenis)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Trava body
      
      // Inicia Lenis apenas no Modal após mount
      setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
                orientation: 'vertical',
                touchMultiplier: 2,
            });
            scopedLenisRef.current = scopedLenis;
            
            function raf(time) {
                scopedLenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
      }, 300); // Delay para permitir animação de entrada
    } else {
      document.body.style.overflow = '';
      scopedLenisRef.current?.destroy();
    }
    return () => {
       document.body.style.overflow = '';
       scopedLenisRef.current?.destroy();
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div onClick={onClose} className="fixed inset-0 bg-black/90 z-[9998]" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          
          <motion.div
            layoutId={layoutId ? \\\`modal-container-\\\${layoutId}\\\` : undefined}
            initial={{ y: "100%" }}
            animate={{ y: "2%", transition: { type: "spring", damping: 30, stiffness: 300 } }}
            exit={{ y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }} // Tween na saída
            className="fixed inset-0 z-[9999] bg-[#F2F4F6] rounded-t-[2rem] h-[98vh]"
          >
            {/* Container de Scroll para o Lenis */}
            <div ref={modalContainerRef} className="h-full w-full overflow-y-auto">
               <div ref={modalContentRef}>
                  {children}
               </div>
            </div>
            
            {/* Botão Fechar Flutuante */}
            <button onClick={onClose} className="absolute top-8 right-8 z-50">
               <X />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
`
  },

  {
    id: 'design-secao-duvidas',
    title: 'Seção Duvidas',
    category: 'design',
    channel: CommunicationChannel.PROMPT,
    description: 'Cria uma seção FAQ Premium com layout assimétrico e GSAP.',
    content: `# Prompt Detalhado: Seção de FAQ Premium com Layout Assimétrico e Animações

Este prompt foi elaborado para replicar a seção de "Dúvidas Frequentes" com qualidade de design editorial, comportamento responsivo refinado e animações de alta fidelidade.

---

Role: Atue como um Creative Developer Sênior especializado em React, Tailwind CSS e Motion Design (GSAP).

Objetivo: Desenvolver um componente de FAQ (Perguntas Frequentes) com layout assimétrico, tipografia sofisticada e micro-interações fluidas. O componente deve transmitir uma sensação de "luxo" e organização.

### 1. Especificações de Layout (Grid & Responsividade)

   Mobile (< 1024px): Layout de coluna única. O cabeçalho (título) fica no topo, seguido pela lista de perguntas logo abaixo.
   Desktop (≥ 1024px): Utilize um Grid de 12 colunas.
       Coluna Esquerda (Sticky): Ocupa as colunas 1 a 4. Deve conter o título, subtítulo e botão de contato. Use \`position: sticky\` (\`top-32\`) para que este conteúdo acompanhe o usuário enquanto ele rola a lista de perguntas.
       Espaço Negativo (Gap): A coluna 5 deve ficar vazia para criar respiro visual.
       Coluna Direita (Lista): Ocupa as colunas 6 a 12. Contém a lista de perguntas (Accordion).

### 2. Estilo Visual e Tipografia (Tailwind CSS)

   Paleta de Cores: Suporte a Dark Mode.
       Light: Fundo Off-White/Creme (\`bg-[#EBE9E4]\`), Texto Preto/Cinza Chumbo.
       Dark: Fundo Preto Suave (\`bg-[#0a0a0a]\`), Texto Branco/Cinza Claro.
       Bordas: Linhas muito sutis (\`border-black/10\` ou \`border-white/10\`).
   Tipografia: Contraste entre "Editorial" e "Técnico".
       Títulos: Fonte Serifada (ex: \`font-serif\`), tamanhos grandes (6xl a 8xl), \`leading\` apertado (0.85).
       Rótulos/Labels: Fonte Sans-serif, tamanho pequeno (xs), caixa alta (\`uppercase\`), espaçamento entre letras largo (\`tracking-widest\`).
       Corpo: Fonte Sans-serif ou Serif de leitura, tamanho confortável, boa altura de linha.

### 3. Comportamento do Acordeão (Lógica React)

   Estado: Apenas um item pode estar aberto por vez. Ao clicar em um novo item, o anterior deve fechar automaticamente.
   Interação (Clique):
       O título da pergunta ativa deve deslizar levemente para a direita (\`translate-x-4\`).
       A cor do título deve mudar para indicar atividade (ex: de cinza para preto/branco).
       O ícone (seta ou +) deve rotacionar ou mudar de estado.
   Animação de Altura: O conteúdo da resposta deve expandir/colapsar suavemente (use \`grid-template-rows\` transition ou uma biblioteca como \`framer-motion\` / \`gsap\` para altura \`auto\`).

### 4. Motion Design (GSAP ScrollTrigger)

Implemente animações de entrada acionadas pelo scroll:

1.  Sticky Header Reveal: O conteúdo da esquerda deve entrar vindo de baixo (\`y: 80\`), com opacidade, de forma lenta e elegante (\`duration: 1.4\`, \`ease: "power4.out"\`).
2.  Waterfall List: Os itens da lista de perguntas devem entrar em cascata (\`stagger: 0.15\`). Cada item entra vindo de baixo (\`y: 40\`) com fade-in.
3.  Delay: A lista deve começar a animar ligeiramente depois do cabeçalho para criar hierarquia visual.

### 5. Exemplo de Estrutura de Código (Skeleton)

\`\`\`tsx
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Plus } from 'lucide-react';

// Dados mockados
const FAQ_ITEMS = [
  { id: 1, question: "Qual o valor da sessão?", answer: "..." },
  { id: 2, question: "Como funciona a criação?", answer: "..." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  // Lógica do Accordion
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animações GSAP
  useEffect(() => {
    // Implementar ScrollTrigger aqui:
    // 1. Animar .sticky-content (Esquerda)
    // 2. Animar .faq-item (Direita) com stagger
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#EBE9E4] dark:bg-[#0a0a0a]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUNA ESQUERDA (Sticky) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky-content lg:sticky lg:top-32">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block">Suporte</span>
            <h2 className="font-serif text-7xl mb-8">Dúvidas <br/> <span className="italic opacity-50">Frequentes</span></h2>
            {/* Botão de Contato */}
          </div>
        </div>

        {/* COLUNA DIREITA (Lista) */}
        <div className="lg:col-span-7 lg:col-start-6">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={item.id} className="faq-item border-b border-black/10 dark:border-white/10">
              <button 
                onClick={() => toggleItem(idx)}
                className="w-full py-10 flex justify-between items-center text-left group"
              >
                <h3 className={\`text-3xl font-serif transition-transform duration-500 \${openIndex === idx ? 'translate-x-4' : ''}\`}>
                  {item.question}
                </h3>
                <Plus className={\`transition-transform duration-500 \${openIndex === idx ? 'rotate-45' : ''}\`} />
              </button>
              
              {/* Área de Resposta (Expandable) */}
              <div className={\`overflow-hidden transition-all duration-500 \${openIndex === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}\`}>
                <p className="text-lg opacity-80 max-w-2xl">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
\`\`\`

---

### Checklist de Qualidade

- [ ] O layout quebra graciosamente para coluna única no mobile?
- [ ] O conteúdo "Sticky" para de fixar quando a seção termina?
- [ ] As animações respeitam a preferência \`prefers-reduced-motion\`?
- [ ] A tipografia mantém a legibilidade em telas pequenas?`
  },
  // --- MÓDULO: TEXTOS & POLÍTICAS ---
  {
    id: 'termos-e-politicas-completo',
    title: 'Termos de Uso e Políticas de Privacidade',
    category: 'texts',
    channel: CommunicationChannel.PROMPT,
    description: 'Documento completo de políticas de privacidade e termos de uso com base em LGPD e proteção do desenvolvedor.',
    content: `Termos de Uso e Políticas de Privacidade

A presente Política de Privacidade e Termos de Uso tem como objetivo esclarecer como coletamos, tratamos e protegemos seus dados, bem como estabelecer as regras de uso dos nossos serviços, aplicações e sites desenvolvidos. Ao utilizar nossas plataformas, você concorda com os termos aqui descritos.

1. Políticas de Privacidade e Conformidade com a LGPD

1.1. Coleta e Tratamento de Dados
Nosso compromisso com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) é rigoroso. Coletamos apenas os dados estritamente necessários para o funcionamento das aplicações e para a prestação dos serviços contratados.

1.2. Gerenciamento de Cookies e Scripts de Terceiros
Para garantir a sua privacidade e a conformidade técnica com a LGPD, nossa plataforma utiliza um sistema de gerenciamento de consentimento rígido. Nenhum script de terceiros (como ferramentas de analytics, rastreadores de marketing ou pixels de conversão) é carregado ou executado na aplicação antes que o usuário forneça seu consentimento explícito através do nosso banner de cookies. O usuário pode, a qualquer momento, revogar esse consentimento acessando as configurações de privacidade no rodapé do site.

1.3. Segurança e Limitação de Responsabilidade sobre Vazamentos
Empregamos as melhores práticas de desenvolvimento, criptografia e estruturação de banco de dados para garantir a segurança das informações. No entanto, nenhum sistema é imune a ameaças externas. Em caso de ataques cibernéticos de proporções imprevistas, falhas oriundas da infraestrutura dos provedores de hospedagem terceirizados ou vulnerabilidades exploradas por força maior que resultem em vazamento de dados, a responsabilidade do desenvolvedor e da plataforma é limitada às obrigações de notificação tempestiva aos usuários e à Autoridade Nacional de Proteção de Dados (ANPD), não cabendo responsabilização civil ou financeira por danos indiretos decorrentes de atos criminosos de terceiros.

2. Termos de Serviço e Uso da Aplicação

2.1. Disponibilidade do Sistema e SLA
Buscamos manter nossos sistemas e sites operacionais com a maior taxa de disponibilidade possível. Contudo, para garantir a segurança da infraestrutura e responder a eventuais ataques cibernéticos (como ataques DDoS), manutenções emergenciais ou instabilidades nos servidores de hospedagem e nuvem, reservamo-nos o direito de manter a plataforma indisponível por um período de até 72 (setenta e duas) horas consecutivas. Esta janela de tempo é considerada aceitável e necessária para a contenção de danos e restauração segura dos serviços, não configurando quebra de contrato, falha na prestação de serviço ou motivo para reembolso/multa.

2.2. Propriedade Intelectual e Funcionalidades Sob Medida
Todo o código-fonte, arquitetura, design visual e estruturação dos sistemas desenvolvidos são de propriedade intelectual exclusiva do desenvolvedor titular.
Caso o cliente solicite o desenvolvimento de funcionalidades sob medida, integrações específicas ou módulos personalizados, o código e a lógica de programação subjacentes a essas novas funcionalidades permanecem como propriedade intelectual exclusiva do desenvolvedor. O cliente recebe uma licença de uso irrevogável (enquanto durar o contrato) para operar a funcionalidade em seu projeto, mas não detém os direitos autorais para revenda, redistribuição ou reaproveitamento do código em outras plataformas não autorizadas, a menos que uma cessão total de direitos seja expressamente acordada e precificada em contrato apartado.

2.3. Atualizações destes Termos
Reservamo-nos o direito de atualizar estes Termos e Políticas periodicamente para refletir mudanças tecnológicas ou legais. Recomendamos a revisão constante desta página.`
  }
];
