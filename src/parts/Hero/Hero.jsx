import React, { useRef } from 'react';
import './Hero.css';
import Header from '../../components/Header/Header';
import Profile from '../../parts/Profile/Profile'
function Hero() {
  // Menggunakan ref untuk Profile
  const profileRef = useRef(null);

  // Fungsi untuk menggulir ke Profile
  const handleScrollClick = () => {
    // Menggunakan scrollIntoView untuk menggulir ke bagian Profile
    profileRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div className="background-hero">
        <h3>Ya Allah the Most Loving</h3>
        <h3>With You blessing, you brought us together in a holy marriage bond</h3>
        <h3>THE WEDDING OF</h3>
        <h2>Dewi & Handhika </h2>
        <h3>22 . 12 . 2024</h3>

        {/* Ikon scroll yang ketika diklik akan menggulir ke bagian Profile */}
        <div className="scroll-down-icon" onClick={handleScrollClick}>
          <span>&#8595;</span> {/* Tanda panah bawah */}
        </div>
      </div>

      {/* Profile section */}
      <div ref={profileRef}> {/* Menghubungkan Profile dengan ref */}
        {/* Konten Profile Anda di sini */}
        <Profile />
      </div>
    </>
  );
}

export default Hero;
