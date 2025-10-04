import React, { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as dataProjects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const portfolioRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(portfolioRef);
  const [activeFilter, setActiveFilter] = useState('web');

  const projects = dataProjects;

  const categories = [
    { id: 'web', name: 'Web' },
  ];

  const filteredProjects = projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={portfolioRef} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            {t('portfolio.title')}
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                        aria-label="詳細を見る"
                      >
                        <ExternalLink size={20} />
                      </Link>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
                        aria-label="詳細を見る"
                      >
                        <Github size={20} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === 'en' && project.title_en ? project.title_en : project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {language === 'en' && project.description_en ? project.description_en : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium"
                    >
                      {t('portfolio.viewProject')}
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium transition-colors duration-200"
                      >
                        <Github className="mr-1" size={16} />
                        {t('portfolio.viewCode')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;