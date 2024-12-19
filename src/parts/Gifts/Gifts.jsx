import React, { useEffect, useRef, useState } from 'react';
import './Gifts.css';

function Gifts() {
  const [isCopied, setIsCopied] = useState(false);
  const giftRef = useRef(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    const giftSection = giftRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 } // Terlihat jika 10% bagian elemen terlihat
    );

    if (giftSection) {
      observer.observe(giftSection);
    }

    return () => {
      if (giftSection) {
        observer.unobserve(giftSection);
      }
    };
  }, []);

  return (
    <div ref={giftRef} className="gift-section">
      <h3 className="gift">Give a Gift</h3>
      <h3 className="gift-description">
        Your Prayer of Blessing is a very meaningful gift to us.
      </h3>
      <div className="gift-descripition-1">
        And if giving is an expression of your love, you can give a gift by sending a digital envelope.
      </div>
      <div className="gift-container">
        {/* Card 1: Digital Wallet */}
        <div className="gift-card digital-wallet">
          <h2>Digital Wallet</h2>
          <p className="note">Note: Tap to copy bank number</p>

          <div className="wallet-card">
            <div className="wallet-info">
              <h4>Dewi Syafira</h4>
              <img src="/images/BCA.png" alt="Logo BCA" className="bank-logo" />
            </div>
            <div className="account-number" onClick={() => handleCopy("5500064538")}>
              5500064538
              <span className="copy-icon">📋</span>
            </div>
          </div>

          <div className="wallet-card">
            <div className="wallet-info">
              <h4>Handhika Widjaja Saputra</h4>
              <img src="/images/BCA.png" alt="Logo BNI" className="bank-logo" />
            </div>
            <div className="account-number" onClick={() => handleCopy("7040142406")}>
              7040142406
              <span className="copy-icon">📋</span>
            </div>
          </div>

          {isCopied && <span className="copy-notification">Copied!</span>}
        </div>

        {/* Card 2: Offline Gift */}
        <div className="gift-card offline-gift">
          <h2>Offline Gift</h2>
          <div className="gift-info">
            <div className="gift-offline">
              <p>
                Alamat pengiriman:
                <br />
                Jl. Asia Baru No.28 A Rt06/Rw04, Kel. Duri Kepa, Kec. Kebon Jeruk, Jakarta Barat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <img src="/images/floral.png" alt="" />
      </div>
    </div>
  );
}

export default Gifts;
