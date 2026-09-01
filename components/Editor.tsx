import React from 'react';
import { Template } from '../types';
import { motion } from 'framer-motion';
import { Copy, Check, X } from 'lucide-react';
import { useTemplateCopier } from '../hooks/useTemplateCopier';

interface EditorProps {
  template: Template;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Editor: React.FC<EditorProps> = ({ template, onClose }) => {
  const { copyToClipboard, isCopied } = useTemplateCopier();

  const handleCopyAll = () => {
    const fullText = template.subject 
      ? `Assunto: ${template.subject}\n\n${template.content}` 
      : template.content;
    copyToClipboard(fullText, 'copy-all', true);
  };

  return (
    <motion.div 
      className="h-full flex flex-col relative overflow-hidden bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header */}
      <div className="z-20 shrink-0 relative bg-editorial-bg border-b border-[#e0e0e0] flex items-center justify-between px-8 py-6">
        <div>
          <h2 className="text-2xl font-serif text-editorial-black">{template.title}</h2>
          {template.description && (
             <p className="text-sm text-editorial-gray mt-1">{template.description}</p>
          )}
        </div>
        <button 
          onClick={onClose}
          className="p-3 hover:bg-black/5 rounded-full transition-colors text-editorial-black"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pb-32">
        <div className="max-w-3xl mx-auto space-y-8">
          {template.subject && (
            <div className="bg-editorial-bg p-6 rounded-xl border border-editorial-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-2">Assunto</span>
              <p className="text-lg font-medium text-editorial-black">{template.subject}</p>
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-p:leading-relaxed text-editorial-black whitespace-pre-wrap font-serif">
            {template.content}
          </div>

          {template.secondaryContent && (
             <div className="mt-12 pt-8 border-t border-editorial-black/10">
                <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-4">
                  {template.secondaryLabel || 'Conteúdo Adicional'}
                </span>
                <div className="prose prose-lg max-w-none prose-p:leading-relaxed text-editorial-black whitespace-pre-wrap font-serif">
                  {template.secondaryContent}
                </div>
             </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
        <button 
          onClick={handleCopyAll} 
          className={`
            pointer-events-auto flex items-center gap-3 px-8 py-4 border rounded-full shadow-lg transition-all duration-200 active:scale-95
            ${isCopied('copy-all') 
              ? 'bg-editorial-black text-white border-editorial-black' 
              : 'bg-editorial-black text-white border-editorial-black hover:bg-black/90'}
          `}
        >
          {isCopied('copy-all') ? <Check size={20} /> : <Copy size={20} />}
          <span className="text-sm font-bold uppercase tracking-widest">
            {isCopied('copy-all') ? 'Copiado' : 'Copiar Tudo'}
          </span>
        </button>
      </div>
    </motion.div>
  );
};
