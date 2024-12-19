import React, { useEffect, useState } from 'react';
import './Places.css';

function Places() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // 10% dari elemen terlihat
    );

    const placesSection = document.querySelector('.places-section');
    if (placesSection) {
      observer.observe(placesSection);
    }

    return () => {
      if (placesSection) {
        observer.unobserve(placesSection);
      }
    };
  }, []);

  return (
    <div className={`places-section ${isVisible ? 'visible' : ''}`}>
      <h3 className="juduls">We&apos;re Getting Married</h3>
      <h4 className="pembukaan">Assalamualaikum Warahmatullahi Wabarakatuh</h4>
      <p className="harapan">
        By asking for the grace and blessing of Allah SWT, we intend to hold a wedding celebration for our sons and daughters, which, Allah SWT willing, will be held on:
      </p>

      {/* Card Acara Akad */}
      <div className="card-container">
        <div className="card">
          <img src="/images/wedding-ring.png" alt="" className="black-image"/>
          <h4 className="card-title">Acara Akad</h4>
          <p className="card-time">09.00 - Selesai</p>
          <p className="card-date">Minggu, 22 Desember 2024</p>
          <p className="card-location">Aula TPA Kepa Listrik Jl. Kepa Duri Listrik Ujung No.46 RT. 007 RW. 004 Kel. Duri Kepa Kec. Kebon Jeruk Kota Jakarta Barat Prov. DKI Jakarta.</p>
          <button
            className="btn"
            onClick={() => window.open('https://maps.app.goo.gl/M9gh6AJjXPdH2jMX6?g_st=ac', '_blank')}
          >
            Open Map
          </button>
        </div>

        {/* Card Acara Resepsi */}
        <div className="card">
        <img src="/images/dinner-table.png" alt="" className="black-image"/>
          <h4 className="card-title">Acara Resepsi</h4>
          <p className="card-time">11.00 - 20.00 WIB</p>
          <p className="card-date">Minggu, 22 Desember 2024</p>
          <p className="card-location">Aula TPA Kepa Listrik Jl. Kepa Duri Listrik Ujung No.46 RT. 007 RW. 004 Kel. Duri Kepa Kec. Kebon Jeruk Kota Jakarta Barat Prov. DKI Jakarta.</p>
          <button
            className="btn"
            onClick={() => window.open('https://maps.app.goo.gl/M9gh6AJjXPdH2jMX6?g_st=ac', '_blank')}
          >
            Open Map
          </button>
        </div>
      </div>

      <div className="divider">
        <img src="/images/floral.png" alt="" />
      </div>
    </div>
  );
}

export default Places;
