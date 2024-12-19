import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './parts/Hero/Hero';
import Profile from './parts/Profile/Profile';
import Places from './parts/Places/Places';
import Galery from './parts/Galery/Galery';
import Gifts from './parts/Gifts/Gifts';
import Feedback from './parts/Feedback/Feedback';
import Header from './components/Header/Header';
import InvitationScreen from './components/InvitationScreen/InvitationScreen'; // Import invitation screen
import './App.css';

function App() {
  const [showInvitation, setShowInvitation] = useState(true);

  const handleOpenInvitation = () => {
    setShowInvitation(false); // Menghilangkan layar undangan
  };

  return (
    <Router>
      <Routes>
        {/* Route untuk halaman undangan */}
        <Route 
          path="/:name" 
          element={<InvitationScreen onOpenInvitation={handleOpenInvitation} />} 
        />
        
        {/* Route untuk halaman utama setelah undangan */}
        <Route 
          path="/" 
          element={
            <>
             
              <Hero />
              <Places />
              <Galery />
              <Gifts />
              <Feedback />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
