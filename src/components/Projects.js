import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const Projects = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>Projects</h2>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Homate - Home Service Application</h3>
          <p><strong>Technologies:</strong> Flutter, Firebase, Cloud Firestore, Dart, Mobile App</p>
          <p><strong>Timeline:</strong> August 2024 – Present</p>
          <ViewMoreModal
            title="Homate - Home Service Application"
            description={`A mobile application focused on finding homes in suitable locations without involving brokerage issues and providing a range of home-related services.\n
                          Developing a cross-platform mobile application using Flutter and Firebase to streamline home-related services including shifting, buying furniture, painting, and plumbing.\n
                          Responsible for the entire software development lifecycle, including design, development, testing, and deployment for both Android and iOS platforms.`}
          />
        </div>

        <div className="card">
          <h3>WeightAutoCapture</h3>
          <p><strong>Technologies:</strong> .NET Framework, C#, Desktop App, Serial Port</p>
          <p><strong>Timeline:</strong> June 2024 – July 2024</p>
          <ViewMoreModal
            title="WeightAutoCapture"
            description={`Engineered for Malabar Group, this desktop application monitors a connected weight machine that sends real-time weight updates to the system, displaying these readings in a RichTextBox.\n
                          Implemented data capturing via serial port communication, enabling automated reading and logging of weight measurements, which enhanced efficiency by reducing manual data entry errors.`}
          />
        </div>

        <div className="card">
          <h3>Workerr</h3>
          <p><strong>Technologies:</strong> Flutter, Firebase, Cloud Firestore, Dart, Mobile App</p>
          <p><strong>Timeline:</strong> November 2022 – March 2024</p>
          <ViewMoreModal
            title="Workerr"
            description={`A Mobile Application that acts as a bridge of communication between clients and workers built using Flutter and Firebase as a degree final year project.\n
                          Features an intuitive and easy-to-navigate interface for both job seekers and employers, improving user engagement and satisfaction.\n
                          Implemented features such as user authentication, data storage, and real-time updates.\n
                          Hosted on the Amazon Store: https://www.amazon.com/dp/B0BYWB8L9Z/ref=apps_sf_sta`}
          />
        </div>

        <div className="card">
          <h3>Libera - Library Management System</h3>
          <p><strong>Technologies:</strong> Flutter, Firebase, Cloud Firestore, Dart, Mobile App</p>
          <p><strong>Timeline:</strong> February 2022 – April 2024</p>
          <ViewMoreModal
            title="Libera - Library Management System"
            description={`Provides comprehensive features for managing library resources, including book cataloging, member management, and transaction tracking, ensuring efficient library operations.\n
                          Includes a blogging feature that allows users to share reviews, recommendations, and library-related news, fostering a community of readers and learners.\n
                          Utilizes advanced algorithms to offer personalized book recommendations to users based on their reading history and preferences, enhancing the reading experience.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
