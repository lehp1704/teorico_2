import React from 'react';
import './CityGallery.css';

const cities = [
  { name: 'Cuso - Machupicchu', img: 'cusco.jpg' },
  { name: 'Arequipa - Yanahuara', img: 'arequipa.jpg' },
  { name: 'Piura - Catacaos', img: 'piura.jpg' },
];

const CityGallery = () => {
  return (
    <div className="city-gallery">
      {cities.map((city, index) => (
        <div key={index} className="city">
          <img src={city.img} alt={city.name} />
          <p>{city.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CityGallery;
