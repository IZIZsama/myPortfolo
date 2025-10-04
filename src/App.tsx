import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Portfolio from '../src/components/Portfolio';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import ProjectDetails from './ProjectDetails';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                  <Header />
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Portfolio />
                    <Experience />
                    <Contact />
                  </main>
                  <Footer />
                </div>
              }
            />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;