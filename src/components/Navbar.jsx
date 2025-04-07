import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: '#1e40af',
};

const linkStyle = {
  color: 'white',
  margin: '5px 10px',
  textDecoration: 'none',
  fontWeight: '500',
};

function Navbar() {
  return (
    <div style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/clubs" style={linkStyle}>Clubs</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
    </div>
  );
}

export default Navbar;



