import React from 'react';

interface PreviewContentProps {
  subject?: string;
  content: string;
  secondaryContent?: string;
  secondaryLabel?: string;
}

export const PreviewContent: React.FC<PreviewContentProps> = ({ 
  subject, 
  content, 
  secondaryContent, 
  secondaryLabel 
}) => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pb-32">
      <div className="max-w-3xl mx-auto space-y-8">
        {subject && (
          <div className="bg-editorial-bg p-6 rounded-xl border border-editorial-black/10">
            <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-2">Assunto</span>
            <p className="text-lg font-medium text-editorial-black">{subject}</p>
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-p:leading-relaxed text-editorial-black whitespace-pre-wrap font-serif">
          {content}
        </div>

        {secondaryContent && (
           <div className="mt-12 pt-8 border-t border-editorial-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-4">
                {secondaryLabel || 'Conteúdo Adicional'}
              </span>
              <div className="prose prose-lg max-w-none prose-p:leading-relaxed text-editorial-black whitespace-pre-wrap font-serif">
                {secondaryContent}
              </div>
           </div>
        )}
      </div>
    </div>
  );
};
