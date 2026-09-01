import { Template, CommunicationChannel } from '../../../types';

export const analise_holistica_produto_seo: Template = {
  id: 'analise-holistica-produto-seo',
  title: "Auditoria Holística (Produto & SEO)",
  category: 'analysis',
  channel: CommunicationChannel.PROMPT,
  description: "Avaliação técnica e de negócio para mapear alertas críticos e melhorias de conversão.",
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
`,
};
