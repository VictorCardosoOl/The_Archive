import React, { useCallback, useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Home, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/core/application/useAppStore';

export interface StaggeredMenuItem {
  id: string;
  label: string;
  link?: string;
  ariaLabel?: string;
}

export interface StaggeredMenuProps {
  items?: StaggeredMenuItem[];
  activeId?: string;
  onSelectItem?: (id: string) => void;
  onGoHome?: () => void;
  position?: 'left' | 'right';
  accentColor?: string;
}

export const StaggeredMenu = forwardRef<{ toggle: () => void; open: () => void; close: () => void; isOpen: boolean }, StaggeredMenuProps>(
  ({ items = [], activeId, onSelectItem, onGoHome, position = 'left', accentColor }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Imperative handle for parent
    useImperativeHandle(ref, () => ({
      toggle: () => setIsOpen(p => !p),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isOpen
    }));

    // Panel Animation Variants
    const panelVariants = {
      hidden: { x: position === 'left' ? '-100%' : '100%', opacity: 1 },
      visible: { 
        x: '0%', 
        opacity: 1,
        transition: { 
          duration: 0.5, 
          ease: [0.16, 1, 0.3, 1]
        } 
      },
      exit: { 
        x: position === 'left' ? '-100%' : '100%', 
        opacity: 1,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
      }
    };

    // Close on escape
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
      <div className="fixed top-0 left-0 h-0 w-0 z-50">
        {/* Toggle Button */}
        <div className={`fixed top-8 ${position === 'left' ? 'left-8' : 'right-8'} z-50`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative inline-flex items-center justify-center h-12 px-6 rounded-full border border-[#E5E5E5] bg-white group hover:border-[#111111] transition-colors shadow-sm"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#111111] leading-none mb-px relative overflow-hidden h-[12px] flex flex-col justify-center">
              <span className={`block transition-transform duration-500 will-change-transform ${isOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                Menu
              </span>
              <span className={`block absolute top-0 transition-transform duration-500 will-change-transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Fechar
              </span>
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              />

              {/* Panel */}
              <motion.aside
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`fixed top-0 bottom-0 ${position === 'left' ? 'left-0 border-r' : 'right-0 border-l'} w-full max-w-md bg-white z-50 flex flex-col border-[#e0e0e0] shadow-2xl p-10 pt-36 overflow-y-auto`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Item List */}
                  <div className="flex flex-col gap-4">
                    {items.filter(it => it.id !== 'all').map((it, idx) => {
                      const isActive = activeId === it.id;
                      return (
                        <button
                          key={it.id}
                          onClick={() => {
                            onSelectItem?.(it.id);
                            setIsOpen(false);
                          }}
                          className="group w-full flex items-center gap-6 py-3 outline-none focus-visible:bg-gray-50"
                        >
                          <span className={`font-sans text-[11px] font-medium tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-editorial-black' : 'text-editorial-gray/30 group-hover:text-editorial-black'}`}>
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className={`font-serif italic text-3xl md:text-4xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'text-editorial-black' : 'text-editorial-gray/60 group-hover:text-editorial-black group-hover:translate-x-3'}`}>
                            {it.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer (Home) */}
                  <div className="mt-auto pt-16 border-t border-[#e0e0e0]">
                    <button 
                      onClick={() => {
                        onGoHome?.();
                        setIsOpen(false);
                      }} 
                      className="flex items-center gap-4 text-editorial-black group w-full py-4 rounded-xl hover:bg-black/5 transition-colors px-4 -ml-4"
                    >
                      <div className="bg-editorial-bg p-3 rounded-full border border-black/10 group-hover:bg-white transition-colors">
                        <Home size={18} strokeWidth={1.5} />
                      </div>
                      <span className="font-sans font-semibold tracking-wide text-sm">Início / Dashboard</span>
                      <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out ml-auto" />
                    </button>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
