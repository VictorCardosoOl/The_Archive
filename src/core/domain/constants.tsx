import { Category, CommunicationChannel, Template } from '@/core/domain/types';

export const CATEGORIES: Category[] = [
  { id: 'analysis', name: 'Análise', icon: 'Search' },
  { id: 'architecture', name: 'Arquitetura', icon: 'Layers' },
  { id: 'correction', name: 'Correção de Código', icon: 'Wrench' },
  { id: 'production', name: 'Produção', icon: 'Rocket' },
  { id: 'utility', name: 'Utilitário', icon: 'Terminal' },
  { id: 'design', name: 'Design', icon: 'Layout' },
  { id: 'texts', name: 'Textos & Políticas', icon: 'FileText' },
];

export { INITIAL_TEMPLATES } from '@/infra/data/templates';
