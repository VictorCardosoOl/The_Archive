import { Template } from '@/core/domain/types';

export class SearchService {
  /**
   * Normalizes text for accent-insensitive and case-insensitive search
   */
  public static normalizeText(str: string): string {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  /**
   * Creates a searchable string index for a template
   */
  public static createIndex(template: Template): string {
    return this.normalizeText(
      `${template.title} ${template.description} ${template.content} ${template.subject} ${template.secondaryContent}`
    );
  }

  /**
   * Filters templates based on the search query and category
   */
  public static filterTemplates(
    templates: Template[],
    query: string,
    category: string
  ): Template[] {
    const normalizedQuery = this.normalizeText(query.trim());
    
    // Attach index dynamically if missing to avoid mutating original state, 
    // though ideally indexing is done once during load.
    const indexed = templates.map(t => ({
      ...t,
      _searchIndex: t._searchIndex || this.createIndex(t)
    }));

    if (normalizedQuery) {
      return indexed.filter(t => t._searchIndex.includes(normalizedQuery));
    }
    
    if (category !== 'all') {
      return indexed.filter(t => t.category === category);
    }

    return indexed;
  }
}
