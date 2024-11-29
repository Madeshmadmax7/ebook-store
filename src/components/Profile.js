import React from 'react';
import Navbar from './Navbar';
import userLogo from '../img/img3.jpg'; 

import '../styles/Profile.css'; 

const Profile = () => {
  const dummyUserDetails = {
    name: 'Madesh',
    email: 'Madesh123@gmail.com',
    phone: '+91-9876543210',
  };

  return (
    <div className="profile-container">
      <Navbar />
      <h1>User Profile</h1>
      <div className="profile-box">
        <img src={userLogo} alt="User Logo" className="profile-logo" />
        <div className="profile-details">
          <p><strong>Name:</strong> {dummyUserDetails.name}</p>
          <p><strong>Email:</strong> {dummyUserDetails.email}</p>
          <p><strong>Phone:</strong> {dummyUserDetails.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
