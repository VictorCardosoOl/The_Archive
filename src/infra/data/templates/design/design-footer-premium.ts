import { Template, CommunicationChannel } from '@/core/domain/types';

export const design_footer_premium: Template = {
  id: 'design-footer-premium',
  title: "Footer Premium",
  category: 'design',
  channel: CommunicationChannel.PROMPT,
  description: "Componente de Footer escuro, sofisticado com noise texture.",
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
`,
};
