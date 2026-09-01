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
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 2xl:p-12 3xl:p-16 pb-32 3xl:pb-48">
      <div className="max-w-3xl 3xl:max-w-4xl mx-auto space-y-8 2xl:space-y-12">
        {subject && (
          <div className="bg-editorial-bg p-6 rounded-xl border border-editorial-black/10">
            <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-2">Assunto</span>
            <p className="text-lg font-medium text-editorial-black">{subject}</p>
          </div>
        )}

        <div className="text-[1.15rem] leading-[1.8] max-w-none text-editorial-black whitespace-pre-wrap font-serif font-medium">
          {content}
        </div>

        {secondaryContent && (
           <div className="mt-12 pt-8 border-t border-editorial-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-editorial-gray block mb-4">
                {secondaryLabel || 'Conteúdo Adicional'}
              </span>
              <div className="text-[1.15rem] leading-[1.8] max-w-none text-editorial-black whitespace-pre-wrap font-serif font-medium">
                {secondaryContent}
              </div>
           </div>
        )}
      </div>
    </div>
  );
};
