import React, { useRef } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import avatarImg from '../images/icon.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(heroRef);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div ref={heroRef} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-8 shadow-xl overflow-hidden">
            <img src={avatarImg} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-gray-600 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl block mb-2">
            {t('hero.greeting')}
          </span>
          {t('hero.name')}
        </h1>

        <p className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
          {t('hero.title')}
        </p>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <Mail className="mr-2" size={20} />
            {t('hero.contactMe')}
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
