import React from 'react';

function Dashboard() {
  const cardStyle = {
    backgroundColor: '#f1f5f9',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '250px',
    margin: '10px'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '50px',
    gap: '20px'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Student Dashboard</h1>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h3>👤 Profile</h3>
          <p>Name: John Doe</p>
          <p>Reg: 12345678</p>
        </div>

        <div style={cardStyle}>
          <h3>🧑‍🤝‍🧑 Joined Clubs</h3>
          <p>• Robotics Club</p>
          <p>• Coding Society</p>
        </div>

        <div style={cardStyle}>
          <h3>📅 Upcoming Events</h3>
          <p>Hackathon - April 10</p>
          <p>Robotics Workshop - April 15</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
