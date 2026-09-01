import { Template, CommunicationChannel } from '@/core/domain/types';

export const auditoria_arquitetural_roadmap: Template = {
  id: 'auditoria-arquitetural-roadmap',
  title: "Auditoria Arquitetural e Roadmap de Refatoração (Clean Architecture & SOLID)",
  category: 'correction',
  channel: CommunicationChannel.PROMPT,
  description: "Diagnóstico arquitetural e roadmap para Clean Architecture e SOLID.",
  content: `Assuma o papel de um Principal Software Engineer especialista em Clean Architecture, Domain-Driven Design (DDD) e princípios SOLID. Seu objetivo é realizar uma auditoria técnica profunda neste projeto e elaborar um roadmap de refatoração para torná-lo escalável, coeso e altamente manutenível.

Analise a base de código do repositório fornecido e estruture seu diagnóstico em três pilares fundamentais:

1. Screaming Architecture & Organização Física
•	Auditoria de Layout: Avalie se a estrutura de pastas revela o domínio do negócio ou se está mascarada pelo framework ("Screaming Architecture").
•	Estratégia de Modularização: Determine se o projeto está utilizando a melhor abordagem de empacotamento (Package by Layer, Feature ou Component) e proponha a estrutura ideal.
•	Higiene do Repositório: Identifique arquivos rastreados indevidamente pelo Git que deveriam constar no .gitignore (arquivos de IDE, builds, caches, .env locais).

2. Gestão de Dependências & Inversão de Controle
•	Otimização de Build: Analise o gerenciador de pacotes (package.json, pom.xml, etc.). Liste dependências obsoletas, redundantes ou pesadas que geram tech debt e aumentam o tamanho do build.
•	Fluxo de Dependências (DIP): Valide se as regras de negócio centrais estão isoladas de detalhes de implementação (bancos de dados, frameworks web).
•	Isolamento de Terceiros: Aponte onde bibliotecas externas estão acopladas diretamente ao código e sugira a criação de Adapters ou Interfaces para encapsulá-las.

3. Design de Código & Coesão (SOLID)
•	Caça a "God Classes": Identifique violações do Princípio da Responsabilidade Única (SRP), como arquivos que misturam lógica de negócio, UI e persistência.
•	Acoplamento Íntimo: Mapeie funções ou módulos diferentes que dependem excessivamente dos detalhes internos uns dos outros.
•	Padrões de Refatoração: Utilize o catálogo de Martin Fowler para sugerir ações diretas (ex: Extract Function, Move Field, Combine Functions into Class).

Entregáveis (Plano de Ação) Ao concluir o diagnóstico, consolide suas recomendações no seguinte formato:

1.	Árvore de Diretórios (Antes vs. Depois): Mapeamento visual em bloco de código da reestruturação sugerida.
2.	Matriz de Dependências (Kill/Keep/Replace): Lista exata do que remover, manter ou substituir.
3.	Roadmap de Refatoração Passo a Passo: Divida as tarefas separando estritamente as mudanças estruturais (arquivos e pastas) das lógicas (código), para facilitar Code Reviews e mitigar regressões.

Instrução de Inicialização Para calibrarmos o contexto, navegue pelo repositório, identifique a stack principal e faça um breve resumo executivo da arquitetura atual. Aguarde minha confirmação antes de iniciar o relatório profundo de refatoração.`,
};
