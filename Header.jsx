import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>DRIVE BGV</h1>
      <div className="status">
        <span>In Shift</span>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
}

export default Header;
