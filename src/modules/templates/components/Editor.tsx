import React from 'react';
import { Template } from '@/core/domain/types';
import { motion } from 'framer-motion';
import { PreviewHeader } from '@/modules/templates/components/PreviewHeader';
import { PreviewContent } from '@/modules/templates/components/PreviewContent';
import { CopyFloatingButton } from '@/modules/templates/components/CopyFloatingButton';

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
  return (
    <motion.div 
      className="h-full flex flex-col relative overflow-hidden bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PreviewHeader 
        title={template.title}
        description={template.description}
        onClose={onClose}
      />

      <PreviewContent 
        subject={template.subject}
        content={template.content}
        secondaryContent={template.secondaryContent}
        secondaryLabel={template.secondaryLabel}
      />

      <CopyFloatingButton 
        subject={template.subject}
        content={template.content}
      />
    </motion.div>
  );
};
