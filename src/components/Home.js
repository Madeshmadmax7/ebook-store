import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';
import WhiteSection from './WhiteSection';
import BlackSection from './BlackSection';
import Navbar from './Navbar';

function Home() {
  const [navbarClass, setNavbarClass] = useState('white-navbar');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const blackSection = document.querySelector('.black-section');
      if (blackSection) {
        const blackSectionTop = blackSection.offsetTop;

        if (scrollPosition >= blackSectionTop - windowHeight / 2) {
          setNavbarClass('black-navbar');
        } else {
          setNavbarClass('white-navbar');
        }
      }

      const progress = Math.min(scrollPosition / windowHeight, 1);
      const color = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`;
      document.body.style.backgroundColor = color;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="section white-section">
        <Navbar navbarClass={navbarClass} />
        <WhiteSection />
      </div>
      <div className="section black-section">
        <BlackSection />
      </div>
    </div>
  );
}

export default Home;
