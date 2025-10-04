import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { findProjectBySlug } from './data/projects';
import { useLanguage } from './contexts/LanguageContext';

const ProjectDetails: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { language } = useLanguage();
  useEffect(() => {
    if (!isImageOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsImageOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isImageOpen]);
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? findProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{language === 'en' ? 'Project not found.' : 'プロジェクトが見つかりませんでした。'}</p>
          <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400">
            <ArrowLeft className="mr-2" size={16} /> {language === 'en' ? 'Back to Home' : 'ホームに戻る'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6">
          <ArrowLeft className="mr-2" size={16} /> {language === 'en' ? 'Back' : '戻る'}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={language === 'en' && project.title_en ? project.title_en : project.title}
            className="w-full h-64 object-cover cursor-zoom-in"
            onClick={() => setIsImageOpen(true)}
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{language === 'en' && project.title_en ? project.title_en : project.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{language === 'en' && project.description_en ? project.description_en : project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {project.details && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{language === 'en' ? 'Overview' : '概要'}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{language === 'en' && project.details.overview_en ? project.details.overview_en : project.details.overview}</p>
                </div>
                {project.details.features && project.details.features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{language === 'en' ? 'Key Features' : '主な機能'}</h2>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                      {(language === 'en' && project.details.features_en ? project.details.features_en : project.details.features).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.details.techStack && project.details.techStack.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{language === 'en' ? 'Tech Stack' : '技術スタック'}</h2>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                      {project.details.techStack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* 課題セクションは非表示（要望により削除） */}
                {/* 成果セクションはユーザー意向により非表示 */}
            </div>
            )}

            <div className="flex space-x-4 mt-8">
              {/* デモボタンは削除（全て非対応のため） */}
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium">
                  <Github className="mr-1" size={16} /> {language === 'en' ? 'View Code' : 'コードを見る'}
                </a>
              )}
            </div>
          </div>
        </div>
        {isImageOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsImageOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={project.image}
              alt={`${project.title} 拡大画像`}
              className="max-w-full max-h-full rounded-lg shadow-2xl cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="閉じる"
              className="absolute top-4 right-4 text-white/90 hover:text-white text-3xl leading-none"
              onClick={() => setIsImageOpen(false)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
