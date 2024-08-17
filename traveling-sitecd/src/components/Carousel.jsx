import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  'img1.jpg', // Replace with actual image URLs or paths
  'img2.jpg',
  'img3.jpg',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="Tourism Banner" />
    </div>
  );
};

export default Carousel;
