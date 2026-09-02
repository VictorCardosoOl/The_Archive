# The Archive — Acervo Editorial de Prompts & Engenharia

> Hub central de alta performance para curadoria, pesquisa instantânea e exportação formatada de prompts avançados, frameworks e lógicas de engenharia de software e produto.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/State-Zustand-orange?style=flat-square)](https://github.com/pmndrs/zustand)
[![WCAG 2.1](https://img.shields.io/badge/WCAG-2.1_Compliant-success?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

The Archive é um acervo digital desenvolvido para engenheiros de software, arquitetos e product strategists que demandam prompts de IA refinados e padronizados no dia a dia. A aplicação resolve a dispersão de instruções complexas e a perda de formatação ao copiar comandos entre ferramentas, oferecendo uma experiência de leitura editorial fluida e cópia inteligente para a área de transferência com suporte nativo a Rich Text.

---

## 🚀 Visão de Produto (Features)

- **Command Menu Global (`⌘K` / `Ctrl+K`):** Busca instantânea com correspondência acentuação-insensitiva, chips de filtro rápido por categoria e navegação por teclado sem sair do fluxo de trabalho.
- **Cópia Inteligente em Rich Text (Dual Clipboard):** Preserva formatações de negrito, listas e links com codificação segura de `text/html` e fallback para `text/plain`, pronto para colar em clientes de e-mail, CRMs ou editores de código.
- **Multi-Aba & Deep Linking:** Suporte a abertura de cards em guias separadas (`?template=id`) para análise e comparação de prompts lado a lado.
- **Favoritos Persistentes:** Mecanismo de fixação (pin) de modelos frequentes sincronizado via `localStorage` com validação de esquema em tempo de execução.
- **Design Editorial e Acessibilidade (WCAG 2.1):** Layout cinema-responsive, tipografia com fontes locais sob demanda e suporte a zoom livre em dispositivos móveis sem quebra de viewport.

---

## 🧠 Arquitetura e Engenharia

O projeto foi concebido seguindo princípios de **Clean Architecture**, **Separação de Preocupações (SoC)** e **SOLID**, garantindo baixo acoplamento e escalabilidade:

```
src/
├── core/                  # Camada de Domínio & Aplicação
│   ├── domain/            # Tipos de domínio, entidades e constantes imutáveis
│   └── application/       # Stores reativas (Zustand), roteamento e hooks de ciclo de vida
├── modules/               # Módulos de Feature com isolamento de responsabilidade
│   ├── search/            # Serviços de indexação, busca normalizada e CommandMenu
│   └── templates/         # Componentes de feed, cards editoriais, visualizador e copiers
├── shared/                # Primitivos transversais reutilizáveis
│   ├── ui/                # Componentes visuais atômicos (Header, Footer, Menu, Hooks de Animação)
│   └── utils/             # Utilitários puros (Debounce, FocusTrap, Telemetria, Regex)
└── infra/                 # Camada de dados e acervos versionados
    └── data/templates/    # Coleções estruturadas por domínio (Análise, Arquitetura, etc.)
```

### Qualidade de Código & Performance
- **120Hz Smooth Scroll:** Integração do motor inercial `@studio-freight/lenis` alimentado por loop contínuo de `requestAnimationFrame` nativo, eliminando dependências pesadas de animação e garantindo 60-120 FPS em qualquer display.
- **GPU Layer Isolation:** Otimização de renderização e mix-blend de ruído com `transform: translateZ(0)` e `will-change` para evitar reflows e repaints desnecessários durante a rolagem.
- **Prevenção de Memory Leaks:** Listeners de histórico (`popstate`), redimensionamento de janela e traps de foco são encapsulados em hooks com funções de teardown estritas.

### DevSecOps & Segurança
- **Content Security Policy (CSP):** Meta tags de segurança restringindo fontes externas e prevenindo injeções de scripts maliciosos (XSS).
- **Sanitização de Protocolos no Clipboard:** Validação de esquemas seguros (`https://`, `http://`, `mailto:`, `tel:`) antes da conversão de markdown para HTML, bloqueando vetores com esquemas arbitrários (`javascript:`, `data:`).
- **Tratamento de Exceções & Error Boundaries:** Captura de falhas no topo da árvore de componentes com tela de recuperação graciosa e pipeline de telemetria preparado para Web Workers (Partytown).

### Estratégia de Testes
A base conta com infraestrutura de testes unitários e de integração com **Vitest** + **Testing Library**, e testes ponta a ponta (E2E) com **Playwright**, cobrindo o fluxo crítico de busca, seleção de categoria e cópia de templates.

---

## 💻 Stack Tecnológico

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend & UI** | React 18, TypeScript 5, Tailwind CSS, Framer Motion, Lucide Icons |
| **Performance & Scroll** | `@studio-freight/lenis`, Native `requestAnimationFrame`, CSS Hardware Acceleration |
| **Gerenciamento de Estado** | Zustand 5 (Vanilla & React Binding) |
| **Qualidade & Testes** | Vitest, React Testing Library, Playwright, ESLint 9 |
| **Build & Deploy** | Vite 5, PostCSS, Vercel Edge Network |

---

## 🛠️ Quick Start

### Pré-requisitos
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### 1. Clonar e Instalar Dependências
```bash
git clone https://github.com/VictorCardosoOl/Pauta-V.3.git
cd Pauta-V.3
npm install
```

### 2. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em `http://localhost:5173`.

### 3. Executar Suíte de Testes e Build
```bash
# Executar testes unitários
npm run test:unit

# Executar testes E2E com Playwright
npm run test:e2e

# Gerar build de produção
npm run build
```

---

## 📬 Contato

**Victor Cardoso Cunha**  
Engenheiro de Software & Desenvolvedor Full Stack  

- **LinkedIn:** [linkedin.com/in/victorccunha](https://www.linkedin.com/in/victorccunha/)
- **GitHub:** [github.com/VictorCardosoOl](https://github.com/VictorCardosoOl)
- **Portfólio:** [victorcardoso.vercel.app](https://victorcardoso.vercel.app/)
- **WhatsApp:** [+55 (11) 97744-0146](https://wa.me/5511977440146)