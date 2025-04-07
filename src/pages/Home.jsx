import React from 'react';

function Home() {
  const container = {
    padding: '40px 20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #e0f7fa, #fff)',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const heading = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#1e3a8a',
  };

  const text = {
    fontSize: '1rem',
    color: '#334155',
    marginBottom: '30px',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const button = {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '12px 24px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={container}>
      <h1 style={heading}>Welcome to CampusConnect 🎓</h1>
      <p style={text}>
        Discover student clubs, events, and opportunities to grow together on campus. Join your favorite clubs and stay updated!
      </p>
      <button style={button}>Explore Clubs</button>
    </div>
  );
}

export default Home;
