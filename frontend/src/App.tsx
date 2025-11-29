import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Communities } from './components/Communities';
import { Contact } from './components/Contact';
import { CVPage } from './components/CVPage';

export default function App() {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowCV(window.location.hash === '#cv');
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (showCV) {
    return <CVPage />;
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Communities />
        <Contact />
      </div>
    </div>
  );
}
