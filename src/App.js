import React from 'react';
import Sidebar from './components/SideBar';
import Education from './components/Education';
import Projects from './components/Projects';
import StartupExperience from './components/StartupExperience';
import Internships from './components/Internships';
import SoftSkills from './components/SoftSkills';
import Volunteering from './components/Volunteering';
import RightSection from './components/RightSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <RightSection />

        <div id="summary">
          <StartupExperience />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="internships">
          <Internships />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="softskills">
          <SoftSkills />
        </div>

        <div id="volunteering">
          <Volunteering />
        </div>
      </div>
    </div>
  );
}

export default App;
