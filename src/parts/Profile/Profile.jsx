import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // 10% dari elemen terlihat di viewport
    );

    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
      observer.observe(profileSection);
    }

    return () => {
      if (profileSection) {
        observer.unobserve(profileSection);
      }
    };
  }, []);

  return (
    <div className={`profile-section ${isVisible ? 'visible' : ''}`}>
      <h3 className='profile-judul'>Meet The Happy Couple</h3>
      <p>Glory be to Allah SWT who has created creatures in pairs. Ya Allah, please accept and bless us</p>
      <div className="profile-card">
        <div className="andhika-profile">
          <img className="andhika-img" src="/images/andhika-profile.JPEG" alt="Andhika Profile" />
          <h3 className="andhika-name">Handhika Widjaja Saputra, S.M.</h3>
          <p>Son Of</p>
          <h3 className="andhika-parents">Mr. Jaja & Mrs. Mursini</h3>
        </div>
        <div className="dewi-profile">
          <img className="dewi-img" src="/images/dewi-profile.JPEG" alt="Dewi Profile" />
          <h3 className="dewi-name">Dewi Syafira, S.M.</h3>
          <p>Daughter Of</p>
          <h3 className="dewi-parents">Mr. Wahyu (Alm) & Mrs. Fisy Safitha (Almh)</h3>
        </div>
      </div>
      <div className="divider">
        <img src="/images/floral.png" alt="" />
      </div>
    </div>
  );
}

export default Profile;
