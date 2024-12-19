import React, { useEffect, useRef } from 'react';
import './Galery.css';

function Galery() {
  const images = [
    "/images/galery1.JPEG",
    "/images/galery2.JPEG",
    "/images/galery3.JPEG",
    "/images/galery5.JPEG",
    "/images/galery1.JPEG",
  ];

  const galleryRef = useRef(null);
  const titleRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when in view
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      ...galleryRef.current.querySelectorAll('.gallery-item'),
      titleRef.current,
      captionRef.current,
    ];

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h3 className="judul" ref={titleRef}>Our Galery</h3>
      <div className="gallery-container">
        <div className="gallery-grid" ref={galleryRef}>
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
        <div className="gallery-caption" ref={captionRef}>
          <blockquote>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            <br />
            <br />
            &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
          </blockquote>
          <p>AR-Rum 21</p>
        </div>
      </div>
      <div className="divider">
        <img src="/images/floral.png" alt="" />
      </div>
    </>
  );
}

export default Galery;
