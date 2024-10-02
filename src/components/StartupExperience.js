import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const StartupExperience = () => {
  return (
    <div className="section">
      <h2>In-House Startup Experience</h2>
      <div className="cards">
        <div className="card" style={{width:'30%'}}>
          <h3>Homate</h3>
          <p><strong>Role:</strong> Software Developer</p>
          <p><strong>Location:</strong> CITTIC TBI, Cochin University of Science and Technology</p>
          <p><strong>Timeline:</strong> August 2024 – Present</p>
          <ViewMoreModal
            title="Homate - Home Service Application"
            description={`Pitched a comprehensive home service startup idea to CITTIC TBI, successfully secured incubation space and a 3-year collaboration.\n
                          Leading the development of a mobile application using Flutter and Firebase for Android and iOS, focusing on eliminating brokerage issues and providing home-related services.\n
                          Managing project timelines, coordinating with team members, and ensuring the successful execution of the startup’s vision.`}
          />
        </div>
        {/* Add more startup experiences if needed */}
      </div>
    </div>
  );
};

export default StartupExperience;
