import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const Volunteering = () => {
  return (
    <div className="section">
      <h2>Volunteering</h2>
      <div className="cards">
        <div className="card">
          <h3>TinkerHub</h3>
          <p><strong>Role:</strong> Volunteer</p>
          <p><strong>Location:</strong> Sullamussalam College</p>
          <p><strong>Timeline:</strong> May 2021 – Oct 2022</p>
          <ViewMoreModal
            title="TinkerHub Sullamussalam College Volunteering"
            description={`Assisted in organizing and managing technical events and workshops.\n
                          Supported participants by providing guidance and facilitating activities.`}
          />
        </div>

        <div className="card">
          <h3>IEDC</h3>
          <p><strong>Role:</strong> Volunteer</p>
          <p><strong>Location:</strong> Sullamussalam College</p>
          <p><strong>Timeline:</strong> May 2021 – March 2023</p>
          <ViewMoreModal
            title="IEDC Sullamussalam College Volunteering"
            description={`Participated in organizing startup and entrepreneurship events.\n
                          Contributed to planning and executing workshops and seminars for students.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
