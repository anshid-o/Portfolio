import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const Education = () => {
  return (
    <div className="section">
      <h2>Education</h2>
      <div className="cards">
        <div className="card">
          <h3>MCA - Cochin University</h3>
          <p> Computer Science</p>
          <p><strong>Timeline:</strong> July 2023 - May 2025</p>
          <ViewMoreModal
            title="Master's degree"
            description={`Pursuing Master of Computer Applications from Cochin University of Science and Technology.\n
                          Current CGPA: 9.4\n
                          Duration: July 2023 - May 2025`}
          />
        </div>

        <div className="card">
          <h3>BSc CS - Calicut University</h3>
          <p> Computer Science</p>
          <p><strong>Timeline:</strong> 2020 - 2023</p>
          <ViewMoreModal
            title="Bachelor's degree"
            description={`Completed Bachelor's in Computer Science under Calicut University from Sullamussalam Arts and Science College, Malappuram.\n
                          CGPA: 8.9\n
                          Duration: 2020 - 2023`}
          />
        </div>

        <div className="card">
          <h3>Plus Two - Rahmania HSS</h3>
          <p> Computer Science</p>
          <p><strong>Timeline:</strong> 2018 - 2020</p>
          <ViewMoreModal
            title="Higher Secondary"
            description={`Completed Plus Two in the Computer Science stream under the Board of Kerala Pariksha Bhavan from Rahmania HSS, Velliparambu.\n
                          Marks: 90%\n
                          Duration: 2018 - 2020`}
          />
        </div>

        <div className="card">
          <h3>SSLC - GHSS Cheruvadi</h3>
          <p><strong>Timeline:</strong> 2017 - 2018</p>
          <ViewMoreModal
            title="SSLC"
            description={`Completed SSLC under the Board of Kerala Pariksha Bhavan from GHSS Cheruvadi, Malappuram.\n
                          Marks: 98%\n
                          Duration: 2017 - 2018`}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
