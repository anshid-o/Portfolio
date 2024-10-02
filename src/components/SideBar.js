import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={require('./profile.jpg')} alt="Profile" className="profile-img" />
        <h3>Anshid O</h3>
        <p>Software Developer | Flutter | .NET</p>
      </div>

      {/* Frameworks Section */}
      <div className="frameworks-section">
        <h4>Frameworks</h4>
        <div className="frameworks">
          <div className="framework">
            <img src={require('./flutter.png')} alt="Flutter" className="framework-img" />
            <p>Flutter</p>
          </div>
          <div className="framework">
            <img src={require('./dotnet.png')} alt=".NET" className="framework-img" />
            <p>.NET</p>
          </div>
        </div>
        <div className="frameworks">
          <div className="framework">
            <img src={require('./react.png')} alt="React" className="framework-img" />
            <p>React</p>
          </div>
          <div className="framework">
            <img src={require('./django.png')} alt="Django" className="framework-img" />
            <p>Django</p>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="skills-section">
        <h4>Languages</h4>
        <p>Python</p>
        <ProgressBar now={80} label={`${80}%`} />
        <p>Java</p>
        <ProgressBar now={70} label={`${70}%`} />
        <p>C</p>
        <ProgressBar now={75} label={`${75}%`} />
        <p>Dart</p>
        <ProgressBar now={60} label={`${60}%`} />
        <p>C#</p>
        <ProgressBar now={50} label={`${50}%`} />
      </div>

      <a href={require('./Anshid Final Resume.pdf')} download className="btn btn-warning cv-btn">Download CV</a>

      <div className="social-icons">
        <a href="https://github.com/anshid-o" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ margin: '0 10px', color: '#ffc107' }} />
        </a>
        <a href="https://www.linkedin.com/in/anshid-o/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ margin: '0 10px', color: '#ffc107' }} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
