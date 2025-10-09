import React from 'react';
import { Heart, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="text-blue-400 mr-2" size={24} />
            <span className="text-2xl font-bold text-white">
              {t('hero.name')}
            </span>
          </div>
          
          <p className="text-gray-400 mb-6">
            {t('hero.title')}
          </p>

          <div className="flex items-center justify-center text-gray-400">
            <span>Made with</span>
            <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
            <span>using React & TypeScript</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            <p>&copy; 2024 {t('hero.name')}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
