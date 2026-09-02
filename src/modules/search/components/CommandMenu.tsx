import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, CornerDownLeft, FileText, Layers, Hash, Copy, Check, ExternalLink, X } from 'lucide-react';
import { useAppStore } from '@/core/application/useAppStore';
import { CommunicationChannel, Template } from '@/core/domain/types';
import { CATEGORIES } from '@/core/domain/constants';
import { useFocusTrap } from '@/shared/utils/useFocusTrap';

const CommandMenuContent: React.FC = () => {
  const { setIsSearchModalOpen, setSelectedTemplate, templates } = useAppStore();
  const [query, setQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  
  const focusTrapRef = useFocusTrap(true);

  // Focus input when opened
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, []);

  // Filter Logic
  const filteredItems = useMemo(() => {
    const safeTemplates = templates || [];
    let list = safeTemplates;

    if (selectedCategoryFilter !== 'all') {
      list = list.filter(t => t.category === selectedCategoryFilter);
    }

    if (!query.trim()) {
      return selectedCategoryFilter === 'all' ? list.slice(0, 6) : list;
    }
    
    const normalize = (str: string) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
    const q = normalize(query.trim());

    return list.filter(t => {
      const fields = [t.title, t.description, t.content, t.subject, t.secondaryContent];
      return fields.some(field => normalize(field || '').includes(q));
    });
  }, [query, templates, selectedCategoryFilter]);

  const handleSelect = useCallback((template: Template) => {
    setSelectedTemplate(template);
    setIsSearchModalOpen(false);
  }, [setSelectedTemplate, setIsSearchModalOpen]);

  const handleOpenInNewTab = (e: React.MouseEvent, template: Template) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}?template=${encodeURIComponent(template.id)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async (e: React.MouseEvent, template: Template) => {
    e.stopPropagation();
    if (!template.content) return;

    try {
      await navigator.clipboard.writeText(template.content);
      setCopiedId(template.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredItems, selectedIndex, setIsSearchModalOpen, handleSelect]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current && listRef.current.children[selectedIndex]) {
        const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
        if (selectedElement) {
            selectedElement.scrollIntoView({ block: 'nearest' });
        }
    }
  }, [selectedIndex]);

  const getIcon = (channel: CommunicationChannel) => {
      switch(channel) {
          case CommunicationChannel.EMAIL: return <FileText size={14} />;
          case CommunicationChannel.PROMPT: return <Hash size={14} />;
          default: return <Layers size={14} />;
      }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  return (
    <motion.div
      ref={focusTrapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100]"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/90 backdrop-blur-sm"
        onClick={() => setIsSearchModalOpen(false)}
      />

      {/* Modal Container */}
      <div className="absolute inset-0 flex items-start justify-center pt-[6vh] sm:pt-[15vh] px-3 sm:px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl 2xl:max-w-3xl bg-white shadow-2xl border border-[#E5E5E5] overflow-hidden pointer-events-auto flex flex-col max-h-[85vh] sm:max-h-[70vh] rounded-2xl sm:rounded-none"
        >
          {/* Search Header */}
          <div className="flex flex-col border-b border-[#E5E5E5] shrink-0 bg-white relative">
            <div className="flex items-center px-4 sm:px-8 py-4 sm:py-6 relative z-10">
              <Search className="text-editorial-black/40 mr-3 sm:mr-6 shrink-0" size={20} strokeWidth={1.5} aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-menu-list"
                aria-activedescendant={filteredItems.length > 0 ? `cmd-item-${filteredItems[selectedIndex]?.id}` : undefined}
                placeholder="Buscar arquivo ou prompt..."
                className="flex-1 bg-transparent text-lg sm:text-2xl text-editorial-black placeholder:text-editorial-gray/40 outline-none font-serif italic"
                value={query}
                onChange={handleQueryChange}
              />
              <div className="flex items-center gap-2 relative z-10">
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="p-1 hover:bg-black/5 rounded-full text-editorial-gray hover:text-editorial-black transition-colors mr-1"
                    aria-label="Limpar texto"
                  >
                    <X size={14} />
                  </button>
                )}
                <span className="hidden md:inline-block text-[10px] font-semibold text-editorial-gray border border-editorial-gray/20 rounded-full px-2.5 py-0.5 tracking-[0.1em] uppercase">ESC</span>
              </div>
            </div>

            {/* Category Quick Chips */}
            <div className="flex items-center gap-1.5 px-4 sm:px-8 pb-3 overflow-x-auto custom-scrollbar relative z-10">
              <button
                onClick={() => { setSelectedCategoryFilter('all'); setSelectedIndex(0); }}
                className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase transition-colors shrink-0 ${
                  selectedCategoryFilter === 'all'
                    ? 'bg-editorial-black text-white'
                    : 'bg-editorial-bg text-editorial-gray hover:text-editorial-black border border-black/5'
                }`}
              >
                Todas
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategoryFilter(cat.id); setSelectedIndex(0); }}
                  className={`px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase transition-colors shrink-0 ${
                    selectedCategoryFilter === cat.id
                      ? 'bg-editorial-black text-white'
                      : 'bg-editorial-bg text-editorial-gray hover:text-editorial-black border border-black/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-editorial-black/[0.02] to-transparent pointer-events-none"></div>
          </div>

          {/* Results List */}
          <div 
            id="command-menu-list"
            role="listbox"
            ref={listRef} 
            className="overflow-y-auto custom-scrollbar p-6"
          >
            {filteredItems.length === 0 ? (
              <div className="py-24 text-center text-editorial-gray">
                <p className="text-xl font-serif italic opacity-60">Nenhum resultado encontrado.</p>
              </div>
            ) : (
              filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  id={`cmd-item-${item.id}`}
                  role="option"
                  aria-selected={idx === selectedIndex}
                  className={`
                    w-full flex items-center justify-between p-6 transition-all duration-300 group text-left relative overflow-hidden rounded-md cursor-pointer
                    ${idx === selectedIndex ? 'bg-editorial-bg' : 'hover:bg-editorial-bg/50'}
                  `}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <button 
                    onClick={() => handleSelect(item)}
                    className="flex-1 flex items-center gap-6 min-w-0 text-left z-10 relative"
                    tabIndex={-1}
                  >
                    <div className={`
                        w-10 h-10 flex items-center justify-center shrink-0 border rounded-full transition-all duration-300
                        ${idx === selectedIndex ? 'border-editorial-black text-editorial-black' : 'border-[#E5E5E5] text-editorial-gray'}
                    `}>
                        {getIcon(item.channel)}
                    </div>
                    <div className="min-w-0 flex-1">
                       <h4 className={`text-[var(--text-xl)] font-serif italic truncate transition-colors duration-300 ${idx === selectedIndex ? 'text-editorial-black' : 'text-editorial-gray'}`}>
                         {item.title}
                       </h4>
                       <p className={`text-[10px] uppercase font-semibold tracking-[0.2em] truncate max-w-[300px] mt-2 transition-colors duration-300 ${idx === selectedIndex ? 'text-editorial-black/60' : 'text-editorial-gray/60'}`}>
                         {item.category}
                       </p>
                    </div>
                  </button>

                  <div className="flex items-center gap-4 z-10 relative">
                    <AnimatePresence>
                      {copiedId === item.id && (
                        <motion.span 
                          initial={{ opacity: 0, x: 10, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-emerald-600 text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1"
                        >
                          Copiado
                        </motion.span>
                      )}
                    </AnimatePresence>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Open in new tab Button */}
                      <button
                          onClick={(e) => handleOpenInNewTab(e, item)}
                          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-editorial-gray hover:text-editorial-black hover:border-editorial-black transition-all duration-300 opacity-80 sm:opacity-0 group-hover:opacity-100"
                          title="Abrir em nova guia"
                          aria-label="Abrir em nova guia"
                      >
                          <ExternalLink size={15} />
                      </button>

                      {/* Copy Button */}
                      <button
                          onClick={(e) => handleCopy(e, item)}
                          className={`
                              w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white
                              transition-all duration-300
                              ${copiedId === item.id 
                                  ? 'text-emerald-600 border-emerald-200 bg-emerald-50 opacity-100 scale-110' 
                                  : 'text-editorial-gray hover:text-editorial-black hover:border-editorial-black opacity-80 sm:opacity-0 group-hover:opacity-100'
                              }
                          `}
                          title="Copiar conteúdo"
                          aria-label="Copiar conteúdo"
                      >
                          {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>

                      {idx === selectedIndex && (
                          <div className="hidden md:flex items-center text-editorial-black opacity-40">
                              <ArrowRight size={20} strokeWidth={1.5} />
                          </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-white border-t border-[#E5E5E5] px-8 py-6 flex justify-between items-center text-[10px] text-editorial-gray font-semibold uppercase tracking-[0.2em]">
             <span>{filteredItems.length} Encontrados</span>
             <div className="flex gap-6">
                <span className="flex items-center gap-2"><div className="flex -space-x-1"><ArrowRight size={12} className="rotate-[-90deg]"/><ArrowRight size={12} className="rotate-90"/></div> Mover</span>
                <span className="flex items-center gap-2"><CornerDownLeft size={12}/> Abrir</span>
             </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export const CommandMenu: React.FC = () => {
  const { isSearchModalOpen } = useAppStore();

  return (
    <AnimatePresence>
      {isSearchModalOpen && <CommandMenuContent />}
    </AnimatePresence>
  );
};



