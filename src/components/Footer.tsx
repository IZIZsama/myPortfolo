import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} My Portfolio
    </footer>
  );
};

export default Footer;


