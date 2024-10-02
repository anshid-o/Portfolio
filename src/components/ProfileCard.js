import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-section">
      <img src={require('./profile.jpg')} alt="Profile" className="profile-img" />
      <h3>Anshid O</h3>
      <p>Software Developer | Flutter | .NET</p>
      <div className="personal-details">
        <p><strong>Residence:</strong> India</p>
        <p><strong>City:</strong> Calicut</p>
        <p><strong>Age:</strong> 23</p>
      </div>
    </div>
  );
};

export default ProfileCard;
