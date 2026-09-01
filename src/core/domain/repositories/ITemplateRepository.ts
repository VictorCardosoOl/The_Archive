import { Template } from '../types';

export interface ITemplateRepository {
  getTemplates(): Promise<Template[]>;
}
