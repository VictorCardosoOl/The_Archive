import { Template, CommunicationChannel } from '@/core/domain/types';

export const correcao_performance: Template = {
  id: 'correcao-performance',
  title: "Refatoração para Performance",
  category: 'correction',
  channel: CommunicationChannel.PROMPT,
  description: "Otimiza o código para resolver gargalos de desempenho.",
  content: `[Contexto] Atue como um Especialista em Performance Web/Software.
[Tarefa] O trecho de código a seguir possui gargalos de desempenho (ex: renderizações desnecessárias, loops ineficientes).

[Código Atual]:
[Cole o código aqui]

[Objetivo] Refatore o código para otimizar sua execução ao máximo.
[Output] Forneça a solução exata e corrigida em um bloco de código. Adicione um breve comentário explicando a complexidade de tempo (Big O) ou o ganho de performance obtido.`,
};
