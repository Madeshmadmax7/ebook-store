import React from 'react';
import Navbar from './Navbar';
import '../styles/Notification.css';

const Notifications = () => {
  return (
    <div className="xyz-container">
      <Navbar />
      <div className="xyz-content">
        <h1 className="xyz-title">Notifications</h1>
        <div className="xyz-box">
          <p className="xyz-message">No recent notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
