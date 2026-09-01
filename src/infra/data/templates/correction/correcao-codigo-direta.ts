import { Template, CommunicationChannel } from '@/core/domain/types';

export const correcao_codigo_direta: Template = {
  id: 'correcao-codigo-direta',
  title: "Correção Direta (Solução Exata)",
  category: 'correction',
  channel: CommunicationChannel.PROMPT,
  description: "Analisa um erro ou trecho de código e retorna a correção exata, pronta para uso.",
  content: `[Contexto] Atue como um Desenvolvedor Sênior.
[Tarefa] Analise o código abaixo que está apresentando o seguinte problema/erro: "[Descreva o Erro]".

[Código Atual]:
[Cole o código aqui]

[Objetivo e Regra Crítica] NÃO me dê explicações genéricas ou conselhos vagos sobre o que fazer. Analise o problema e forneça IMEDIATAMENTE a versão final do código corrigido, utilizando as melhores práticas.
[Output] Apenas o bloco de código refatorado e corrigido, acompanhado de uma lista curta com as principais alterações feitas.`,
};
