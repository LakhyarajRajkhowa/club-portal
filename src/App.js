import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ClubDirectory from './pages/ClubDirectory';
import Dashboard from './pages/Dashboard'; // <-- new import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clubs" element={<ClubDirectory />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* new route */}
      </Routes>
    </Router>
  );
}

export default App;
