import React, { useRef, useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = async () => {
      try {
        await audio.play(); // Memulai audio secara otomatis
        setIsPlaying(true); // Perbarui status ke "playing"
      } catch (error) {
        console.warn('Audio gagal diputar secara otomatis:', error);
      }
    };

    playAudio(); // Panggil fungsi playAudio saat komponen pertama kali dirender
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause(); // Pause audio jika sedang bermain
      setIsPlaying(false);
    } else {
      try {
        audio.play(); // Play audio
        setIsPlaying(true);
      } catch (error) {
        console.warn('Audio gagal diputar:', error);
      }
    }
  };

  return (
    <>
      <div className="audio-container">
        <span className="audio-toggle" onClick={toggleAudio}>
          <span
            className={`material-icons ${isPlaying ? 'is-playing' : 'is-paused'}`}
            style={{
              color: isPlaying ? 'green' : 'gray',
              cursor: 'pointer',
              fontSize: '36px',
            }}
          >
            {isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
        </span>
      </div>

      <audio ref={audioRef} src="/songs/wedding.mp3" />
    </>
  );
}

export default Header;
