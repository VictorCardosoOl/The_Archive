/**
 * Utils for text manipulation and search.
 */

/**
 * Escapes special characters for RegExp.
 */
export const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Returns an accent-insensitive regex for searching.
 */
export const getAccentInsensitiveRegex = (search: string): RegExp => {
  const escaped = escapeRegExp(search);
  
  // Basic mapping of common accents for Portuguese
  const accentMap: Record<string, string> = {
    'a': '[aáàãâä]',
    'e': '[eéèêë]',
    'i': '[iíìîï]',
    'o': '[oóòõôö]',
    'u': '[uúùûü]',
    'c': '[cç]',
    'n': '[nñ]'
  };

  const regexStr = escaped.toLowerCase().split('').map(char => {
    return accentMap[char] || char;
  }).join('');

  return new RegExp(`(${regexStr})`, 'gi');
};
