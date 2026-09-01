import { Template, CommunicationChannel } from '@/core/domain/types';

export const termos_e_politicas_completo: Template = {
  id: 'termos-e-politicas-completo',
  title: "Termos de Uso e Políticas de Privacidade",
  category: 'texts',
  channel: CommunicationChannel.PROMPT,
  description: "Políticas de privacidade e termos de uso em conformidade com a LGPD.",
  content: `Termos de Uso e Políticas de Privacidade

A presente Política de Privacidade e Termos de Uso tem como objetivo esclarecer como coletamos, tratamos e protegemos seus dados, bem como estabelecer as regras de uso dos nossos serviços, aplicações e sites desenvolvidos. Ao utilizar nossas plataformas, você concorda com os termos aqui descritos.

1. Políticas de Privacidade e Conformidade com a LGPD

1.1. Coleta e Tratamento de Dados
Nosso compromisso com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) é rigoroso. Coletamos apenas os dados estritamente necessários para o funcionamento das aplicações e para a prestação dos serviços contratados.

1.2. Gerenciamento de Cookies e Scripts de Terceiros
Para garantir a sua privacidade e a conformidade técnica com a LGPD, nossa plataforma utiliza um sistema de gerenciamento de consentimento rígido. Nenhum script de terceiros (como ferramentas de analytics, rastreadores de marketing ou pixels de conversão) é carregado ou executado na aplicação antes que o usuário forneça seu consentimento explícito através do nosso banner de cookies. O usuário pode, a qualquer momento, revogar esse consentimento acessando as configurações de privacidade no rodapé do site.

1.3. Segurança e Limitação de Responsabilidade sobre Vazamentos
Empregamos as melhores práticas de desenvolvimento, criptografia e estruturação de banco de dados para garantir a segurança das informações. No entanto, nenhum sistema é imune a ameaças externas. Em caso de ataques cibernéticos de proporções imprevistas, falhas oriundas da infraestrutura dos provedores de hospedagem terceirizados ou vulnerabilidades exploradas por força maior que resultem em vazamento de dados, a responsabilidade do desenvolvedor e da plataforma é limitada às obrigações de notificação tempestiva aos usuários e à Autoridade Nacional de Proteção de Dados (ANPD), não cabendo responsabilização civil ou financeira por danos indiretos decorrentes de atos criminosos de terceiros.

2. Termos de Serviço e Uso da Aplicação

2.1. Disponibilidade do Sistema e SLA
Buscamos manter nossos sistemas e sites operacionais com a maior taxa de disponibilidade possível. Contudo, para garantir a segurança da infraestrutura e responder a eventuais ataques cibernéticos (como ataques DDoS), manutenções emergenciais ou instabilidades nos servidores de hospedagem e nuvem, reservamo-nos o direito de manter a plataforma indisponível por um período de até 72 (setenta e duas) horas consecutivas. Esta janela de tempo é considerada aceitável e necessária para a contenção de danos e restauração segura dos serviços, não configurando quebra de contrato, falha na prestação de serviço ou motivo para reembolso/multa.

2.2. Propriedade Intelectual e Funcionalidades Sob Medida
Todo o código-fonte, arquitetura, design visual e estruturação dos sistemas desenvolvidos são de propriedade intelectual exclusiva do desenvolvedor titular.
Caso o cliente solicite o desenvolvimento de funcionalidades sob medida, integrações específicas ou módulos personalizados, o código e a lógica de programação subjacentes a essas novas funcionalidades permanecem como propriedade intelectual exclusiva do desenvolvedor. O cliente recebe uma licença de uso irrevogável (enquanto durar o contrato) para operar a funcionalidade em seu projeto, mas não detém os direitos autorais para revenda, redistribuição ou reaproveitamento do código em outras plataformas não autorizadas, a menos que uma cessão total de direitos seja expressamente acordada e precificada em contrato apartado.

2.3. Atualizações destes Termos
Reservamo-nos o direito de atualizar estes Termos e Políticas periodicamente para refletir mudanças tecnológicas ou legais. Recomendamos a revisão constante desta página.`,
};
