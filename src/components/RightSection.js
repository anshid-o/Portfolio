import React from 'react';
import './RightSection.css';

const RightSection = () => {
  return (
    <div className="right-section">
      {/* Summary Section */}
      <div className="summary-section">
        <h3>Summary</h3>
        <p>
        Passionate about software development, I have been honing my skills in multiple technologies such as Flutter, .NET, and React. I completed internships where I worked on .NET applications and freelanced in Python development. Additionally, I led a startup in the home service domain. I then secured a campus placement at IBM, Kochi ISL as a Software Developer, with a dual offer of an internship and full-time job. My internship is expected to begin in December or January, providing me an opportunity to gain real-world experience in enterprise-level applications.

</p>
      </div>

      {/* Tech Skills and Personal Details Section */}
      <div className="bottom-section">
        {/* Tech Skills Section */}
        <div className="skills-section-sum">
          <h4>Tech Skills</h4>
          <p><strong>Frameworks / Libraries:</strong> Flutter, .NET, React, Django</p>
          <p><strong>Languages:</strong> Python, Java, C, Dart, C#</p>
          <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript, Bootstrap</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</p>
          <p><strong>Developer Tools:</strong> Git, Firebase, Visual Studio, Android Studio, VS Code</p>
        </div>

        {/* Personal Details Section */}
        <div className="personal-details-section">
          <h4>Personal Details</h4>
          <p><strong>Residence:</strong> India</p>
          <p><strong>City:</strong> Calicut</p>
          <p><strong>Age:</strong> 23</p>
          <p><strong>Contact:</strong> +919645805081</p>
          <p><strong>Email:</strong> anshidkoolimad@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
