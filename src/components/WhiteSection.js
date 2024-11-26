import React from 'react';
import '../styles/WhiteSection.css';
import Navbar from './Navbar';

function WhiteSection() {
  const images = [
    '/img/slider2_1.jpg', '/img/slider2_2.jpg', '/img/slider2_3.jpg',
    '/img/slider2_4.jpg', '/img/slider2_5.jpg', '/img/slider2_6.jpg',
    '/img/slider2_7.jpg', '/img/slider2_8.jpg'
  ];
  
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="white-section-content">
      <Navbar/>
      <header className="hero">
        <h1>Welcome to Mad Books</h1>
        <p>Explore the world of stories, knowledge, and imagination.</p>
      </header>

      <div className="slider" style={{ "--time": "12s", "--quantity": images.length }}>
        <ul>
          {duplicatedImages.map((src, index) => (
            <li key={index} style={{ "--index": index + 1 }}>
              {/* Update the image path to start from the root */}
              <img src={`${process.env.PUBLIC_URL}${src}`} alt={`Slider ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhiteSection;
