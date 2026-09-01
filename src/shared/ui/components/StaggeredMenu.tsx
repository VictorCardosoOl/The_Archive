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
      hidden: { x: position === 'left' ? '-100%' : '100%', opacity: 0 },
      visible: { 
        x: '0%', 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1], // easeOutQuint
          when: "beforeChildren",
          staggerChildren: 0.05 
        } 
      },
      exit: { 
        x: position === 'left' ? '-100%' : '100%', 
        opacity: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
      }
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
      exit: { opacity: 0, transition: { duration: 0.2 } }
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
                className={`fixed top-0 bottom-0 ${position === 'left' ? 'left-0 border-r' : 'right-0 border-l'} w-full max-w-sm bg-white z-50 flex flex-col border-[#e0e0e0] shadow-2xl p-10 pt-32 overflow-y-auto`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Item List */}
                  <div className="flex flex-col gap-2">
                    {items.filter(it => it.id !== 'all').map((it, idx) => (
                      <motion.button
                        key={it.id}
                        variants={itemVariants}
                        onClick={() => {
                          onSelectItem?.(it.id);
                          setIsOpen(false);
                        }}
                        className={`text-left text-3xl font-serif italic py-3 transition-colors duration-300 ${activeId === it.id ? 'text-editorial-black' : 'text-editorial-gray hover:text-editorial-black'}`}
                      >
                        {it.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Footer (Home) */}
                  <motion.div variants={itemVariants} className="mt-auto pt-12 border-t border-[#e0e0e0]">
                    <button 
                      onClick={() => {
                        onGoHome?.();
                        setIsOpen(false);
                      }} 
                      className="flex items-center gap-4 text-editorial-black group w-full p-4 rounded-xl hover:bg-black/5 transition-colors"
                    >
                      <div className="bg-editorial-bg p-3 rounded-full border border-black/10">
                        <Home size={20} strokeWidth={1.5} />
                      </div>
                      <span className="font-sans font-medium text-sm">Início / Dashboard</span>
                      <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto" />
                    </button>
                  </motion.div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
