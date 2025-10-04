import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {['React', 'TypeScript', 'Tailwind', 'AWS'].map((s) => (
          <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;


