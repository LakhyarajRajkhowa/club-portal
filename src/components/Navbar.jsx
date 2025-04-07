import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1e40af',
      color: 'white',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: 0 }}>CampusConnect</h2>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/clubs" style={{ color: 'white', marginRight: '15px' }}>Clubs</Link>
        <Link to="/dashboard" style={{ color: 'white', marginRight: '15px' }}>Dashboard</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
