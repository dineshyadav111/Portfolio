import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';
import Resume from './components/Resume/resume';
import Contact from './components/Contactme/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
