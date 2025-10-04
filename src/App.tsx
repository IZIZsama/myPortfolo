import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
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