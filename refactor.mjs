import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileMap = {
  'components/CommandMenu.tsx': 'src/modules/search/components/CommandMenu.tsx',
  'components/EditorialFeed.tsx': 'src/modules/templates/components/EditorialFeed.tsx',
  'components/Editor.tsx': 'src/modules/templates/components/Editor.tsx',
  'components/PreviewHeader.tsx': 'src/modules/templates/components/PreviewHeader.tsx',
  'components/PreviewContent.tsx': 'src/modules/templates/components/PreviewContent.tsx',
  'components/CopyFloatingButton.tsx': 'src/modules/templates/components/CopyFloatingButton.tsx',
  'components/EditorialCard.tsx': 'src/modules/templates/components/EditorialCard.tsx',
  'components/HeroSection.tsx': 'src/modules/templates/components/HeroSection.tsx',
  'components/AppHeader.tsx': 'src/shared/ui/components/AppHeader.tsx',
  'components/AppFooter.tsx': 'src/shared/ui/components/AppFooter.tsx',
  'components/HighlightedText.tsx': 'src/shared/ui/components/HighlightedText.tsx',
  'components/StaggeredMenu.tsx': 'src/shared/ui/components/StaggeredMenu.tsx',
  
  'hooks/useSmoothScroll.ts': 'src/shared/ui/hooks/useSmoothScroll.ts',
  'hooks/useStaggeredMenuAnimations.ts': 'src/shared/ui/hooks/useStaggeredMenuAnimations.ts',
  'hooks/useWindowColumns.ts': 'src/shared/utils/useWindowColumns.ts',
  'hooks/useDebounce.ts': 'src/shared/utils/useDebounce.ts',
  'hooks/useFocusTrap.ts': 'src/shared/utils/useFocusTrap.ts',
  'hooks/useTemplateCopier.ts': 'src/modules/templates/hooks/useTemplateCopier.ts',
  'hooks/useKeyboardShortcuts.ts': 'src/core/application/useKeyboardShortcuts.ts',
  
  'store/useAppStore.ts': 'src/core/application/useAppStore.ts',
  
  'utils/telemetry.ts': 'src/shared/utils/telemetry.ts',
  'utils/textUtils.ts': 'src/shared/utils/textUtils.ts',
  
  'types.ts': 'src/core/domain/types.ts',
  'constants.tsx': 'src/core/domain/constants.tsx',
  
  'App.tsx': 'src/App.tsx',
  'index.tsx': 'src/index.tsx',
  'index.css': 'src/index.css'
};

const moduleAliases = {
  'CommandMenu': '@/modules/search/components/CommandMenu',
  'EditorialFeed': '@/modules/templates/components/EditorialFeed',
  'Editor': '@/modules/templates/components/Editor',
  'PreviewHeader': '@/modules/templates/components/PreviewHeader',
  'PreviewContent': '@/modules/templates/components/PreviewContent',
  'CopyFloatingButton': '@/modules/templates/components/CopyFloatingButton',
  'EditorialCard': '@/modules/templates/components/EditorialCard',
  'HeroSection': '@/modules/templates/components/HeroSection',
  'AppHeader': '@/shared/ui/components/AppHeader',
  'AppFooter': '@/shared/ui/components/AppFooter',
  'HighlightedText': '@/shared/ui/components/HighlightedText',
  'StaggeredMenu': '@/shared/ui/components/StaggeredMenu',
  'useSmoothScroll': '@/shared/ui/hooks/useSmoothScroll',
  'useStaggeredMenuAnimations': '@/shared/ui/hooks/useStaggeredMenuAnimations',
  'useWindowColumns': '@/shared/utils/useWindowColumns',
  'useDebounce': '@/shared/utils/useDebounce',
  'useFocusTrap': '@/shared/utils/useFocusTrap',
  'useTemplateCopier': '@/modules/templates/hooks/useTemplateCopier',
  'useKeyboardShortcuts': '@/core/application/useKeyboardShortcuts',
  'useAppStore': '@/core/application/useAppStore',
  'telemetry': '@/shared/utils/telemetry',
  'captureException': '@/shared/utils/telemetry',
  'logEvent': '@/shared/utils/telemetry',
  'initTelemetry': '@/shared/utils/telemetry',
  'textUtils': '@/shared/utils/textUtils',
  'getAccentInsensitiveRegex': '@/shared/utils/textUtils',
  'types': '@/core/domain/types',
  'Template': '@/core/domain/types',
  'Category': '@/core/domain/types',
  'CommunicationChannel': '@/core/domain/types',
  'constants': '@/core/domain/constants',
  'CATEGORIES': '@/core/domain/constants',
  'INITIAL_TEMPLATES': '@/core/domain/constants',
  'App': '@/App'
};

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// 1. Move files
console.log("Moving files...");
for (const [oldPath, newPath] of Object.entries(fileMap)) {
  if (fs.existsSync(oldPath)) {
    fs.mkdirSync(path.dirname(newPath), { recursive: true });
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${oldPath} -> ${newPath}`);
  }
}

// Move data to infra/data
if (fs.existsSync('data')) {
  copyRecursiveSync('data', 'src/infra/data');
  fs.rmSync('data', { recursive: true, force: true });
  console.log('Moved data -> src/infra/data');
}

// 2. Helper to find all ts/tsx files
function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules') getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// 3. Update imports in all files
console.log("Updating imports...");
const allFiles = getAllFiles('src');

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  // A naive but effective regex to rewrite internal imports to use @/ alias
  // We match import statements and check what they import
  content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, p1) => {
    // If it's a relative import
    if (p1.startsWith('.')) {
      // Get the filename being imported
      const importedName = p1.split('/').pop().replace(/\.(tsx|ts)$/, '');
      
      // Special case for types/constants/useAppStore which are commonly imported
      if (importedName === 'types' || importedName === 'constants' || importedName === 'useAppStore' || importedName === 'telemetry' || importedName === 'textUtils') {
          return `from '${moduleAliases[importedName]}'`;
      }

      // Check if we have an alias for the exact filename
      if (moduleAliases[importedName]) {
        return `from '${moduleAliases[importedName]}'`;
      }
      
      // Handle data imports in constants.tsx
      if (p1.includes('data/templates') || p1.includes('templates/index')) {
        return `from '@/infra/data/templates'`;
      }
      
      if (importedName === 'index') {
          return match; // probably fine, let's keep it or fix manually
      }
    }
    return match;
  });

  // Specifically handle constants.tsx data import
  if (file.endsWith('constants.tsx')) {
      content = content.replace(/from '.\/data\/templates'/g, "from '@/infra/data/templates'");
  }

  // Rewrite index.css path in index.tsx
  if (file.endsWith('index.tsx')) {
      content = content.replace(/import '.\/index.css';/g, "import '@/index.css';");
      content = content.replace(/import App from '.\/App';/g, "import App from '@/App';");
  }

  fs.writeFileSync(file, content);
}

// 4. Update index.html
if (fs.existsSync('index.html')) {
  let html = fs.readFileSync('index.html', 'utf8');
  html = html.replace(/src="\.\/index\.tsx"/g, 'src="/src/index.tsx"');
  fs.writeFileSync('index.html', html);
  console.log("Updated index.html");
}

console.log("Refactoring complete.");
