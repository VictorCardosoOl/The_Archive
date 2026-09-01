import { Template, CommunicationChannel } from '../../../types';

export const design_layout_ultrawide: Template = {
  id: 'design-layout-ultrawide',
  title: "Otimização de Layout Ultrawide",
  category: 'design',
  channel: CommunicationChannel.PROMPT,
  description: "Refatoração para layout fluido em telas 2K/4K (Cinema-style).",
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
`,
};
