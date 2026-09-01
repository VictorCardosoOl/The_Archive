import { Template, CommunicationChannel } from '@/core/domain/types';

export const utilitario_commit: Template = {
  id: 'utilitario-commit',
  title: "Commit",
  category: 'utility',
  channel: CommunicationChannel.PROMPT,
  description: "Gera uma mensagem semântica, profissional e humana para o Git Commit.",
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
A partir de agora, sempre que eu pedir um novo commit, você DEVE usar esse marco como ponto de corte. Analise APENAS os novos diffs e edições realizados DEPOIS deste marco, ignorando completamente qualquer alteração que já tenha entrado neste commit atual para não misturarmos escopos no histórico do git.`,
};
