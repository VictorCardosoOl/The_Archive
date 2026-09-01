import { Template, CommunicationChannel } from '@/core/domain/types';

export const producao_sitemap_robots: Template = {
  id: 'producao-sitemap-robots',
  title: "Sitemap & Robots.txt",
  category: 'production',
  channel: CommunicationChannel.PROMPT,
  description: "Auditoria de rotas para geração automatizada de sitemap.xml e robots.txt otimizados.",
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

Aguarde o meu comando explícito ("Pode gerar os arquivos") para salvar o \`sitemap.xml\` e \`robots.txt\` na pasta correspondente.`,
};
