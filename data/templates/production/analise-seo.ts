import { Template, CommunicationChannel } from '../../../types';

export const analise_seo: Template = {
  id: 'analise-seo',
  title: "Analise SEO",
  category: 'production',
  channel: CommunicationChannel.PROMPT,
  description: "Plano de execução para SEO técnico, semântico e estrutural.",
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
Aguarde o meu comando explícito ("Pode implementar") para iniciar as alterações no código.`,
};
