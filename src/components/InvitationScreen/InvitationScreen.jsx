import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InvitationScreen.css';

function InvitationScreen({ onOpenInvitation }) {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleInvitationClick = () => {
    onOpenInvitation(); // Menyembunyikan undangan
    navigate('/'); // Navigasi ke halaman utama
  };

  return (
    <div className="invitation-screen">
      <div className="invitation-card">
        <h1>Hello, {name}!</h1>
        <p>We invite you to attend our wedding</p>
        <div className="qr-code" />
        <button onClick={handleInvitationClick}>Open Invitation</button>
      </div>
    </div>
  );
}

InvitationScreen.propTypes = {
  onOpenInvitation: PropTypes.func.isRequired,
};

export default InvitationScreen;
