import React, { useRef } from 'react';
import { Activity, Code, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { t } = useLanguage();
  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('about.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900 dark:to-emerald-900 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <Code size={80} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Passionate Developer</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Activity className="text-emerald-600 mr-2" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('about.status')}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.currentStatus')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Supabase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Coffee className="text-amber-600" size={24} />
                <span className="text-gray-600 dark:text-gray-300">
                  Coffee-driven development since 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;