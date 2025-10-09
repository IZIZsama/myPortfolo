import React, { useRef } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Settings,
  Zap,
  Layers,
  Globe,
  Smartphone
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillsRef);

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: Code2,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      skills: [
        { name: 'React', level: 55 },
        { name: 'TypeScript', level: 50 },
        { name: 'Next.js', level: 65 },
        { name: 'Tailwind CSS', level: 40 },
        { name: 'Vue.js', level: 60 },
      ],
    },
    {
      title: t('skills.backend'),
      icon: Server,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900',
      skills: [
        { name: 'Laravel', level: 40 },
        { name: 'PHP', level: 70 },
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 65 },
      ],
    },
    {
      title: t('skills.database'),
      icon: Database,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      skills: [
        { name: 'MySQL', level: 90 },

      ],
    },
    {
      title: t('skills.tools'),
      icon: Settings,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Azure', level: 70 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];
  


  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('skills.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className={category.color} size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            category.color.includes('blue') ? 'bg-blue-600' :
                            category.color.includes('emerald') ? 'bg-emerald-600' :
                            category.color.includes('purple') ? 'bg-purple-600' :
                            'bg-orange-600'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + 500}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t('skills.otherTechnologies')}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Zap, name: 'Performance' },
                { icon: Layers, name: 'Architecture' },
                { icon: Globe, name: 'Web APIs' },
                { icon: Smartphone, name: 'Mobile First' },
              ].map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center p-4 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100 + 1000}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
