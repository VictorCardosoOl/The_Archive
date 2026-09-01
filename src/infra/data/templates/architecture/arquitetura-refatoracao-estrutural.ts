import { Template, CommunicationChannel } from '@/core/domain/types';

export const arquitetura_refatoracao_estrutural: Template = {
  id: 'arquitetura-refatoracao-estrutural',
  title: "Refatoração e Reorganização Estrutural",
  category: 'architecture',
  channel: CommunicationChannel.PROMPT,
  description: "Promove uma reorganização limpa do projeto e propõe um commit semântico.",
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

Lembre-se: após registrar este marco, suas próximas análises para futuros commits devem considerar APENAS o que for alterado depois dele.`,
};
