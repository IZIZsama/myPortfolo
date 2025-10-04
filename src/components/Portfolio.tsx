import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <section id="portfolio" className="py-12">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Portfolio</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {language === 'en' && project.title_en ? project.title_en : project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {language === 'en' && project.description_en ? project.description_en : project.description}
              </p>
              <div className="flex items-center gap-4">
                <Link to={`/projects/${project.slug}`} className="text-emerald-600 dark:text-emerald-400">
                  {t('portfolio.viewProject')}
                </Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-gray-600 dark:text-gray-300">
                    {t('portfolio.viewCode')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


