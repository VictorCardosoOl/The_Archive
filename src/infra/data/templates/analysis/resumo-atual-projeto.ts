import { Template, CommunicationChannel } from '@/core/domain/types';

export const resumo_atual_projeto: Template = {
  id: 'resumo-atual-projeto',
  title: "Resumo Atual do Projeto",
  category: 'analysis',
  channel: CommunicationChannel.PROMPT,
  description: "Elabora um resumo executivo técnico e elegante para inclusão em portfólio.",
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

⚠️ DIRETRIZ DE EXECUÇÃO: Não altere nenhum arquivo do projeto. Apenas gere este texto no chat para que eu possa copiar para o meu bloco de notas.`,
};
