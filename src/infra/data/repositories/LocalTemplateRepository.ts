import { ITemplateRepository } from '@/core/domain/repositories/ITemplateRepository';
import { Template } from '@/core/domain/types';

export class LocalTemplateRepository implements ITemplateRepository {
  async getTemplates(): Promise<Template[]> {
    const { INITIAL_TEMPLATES } = await import('@/core/domain/constants');
    return INITIAL_TEMPLATES;
  }
}
