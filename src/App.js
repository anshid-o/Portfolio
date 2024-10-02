import React from 'react';
import Sidebar from './components/SideBar';
import Education from './components/Education';
import Projects from './components/Projects';
import StartupExperience from './components/StartupExperience';
import Internships from './components/Internships';
import SoftSkills from './components/SoftSkills';
import Volunteering from './components/Volunteering';
import './App.css';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <RightSection />
        
        <StartupExperience />
        <Education />
        <Internships />
        <Projects />
        <SoftSkills />
        <Volunteering />
      </div>
    </div>
  );
}

export default App;
