import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import CityGallery from './components/CityGallery';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <CityGallery />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
