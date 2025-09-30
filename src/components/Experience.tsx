import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experienceRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(experienceRef);

  const experiences = [
    {
      title: t('experience.job1.title'),
      company: t('experience.job1.company'),
      period: t('experience.job1.period'),
      description: t('experience.job1.description'),
      location: t('experience.job1.location'),
      type: t('experience.job1.type'),
      skills: t('experience.job1.skills').split(' '),
    },
    {
      title: t('experience.job2.title'),
      company: t('experience.job2.company'),
      period: t('experience.job2.period'),
      description: t('experience.job2.description'),
      location: t('experience.job2.location'),
      type: t('experience.job2.type'),
      skills: t('experience.job2.skills').split(' '),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={experienceRef} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('experience.title')}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } ml-12 md:ml-0`}>
                    <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible ? 'animate-fadeInUp' : ''
                    }`}
                    style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {experience.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar className="mr-1" size={16} />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <MapPin className="mr-1" size={16} />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                        <Briefcase className="mr-2" size={16} />
                        <span className="text-sm">{experience.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;