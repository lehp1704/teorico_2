import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  { text: 'Excelente servicio...', author: 'Mike Brown' },
  { text: 'Increíble experiencia...', author: 'Sarah Johnson' },
  { text: 'Recomendaría a todos...', author: 'Carlos Ruiz' },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonial">
      <img src="customer.jpg" alt="Customer" />
      <p>{testimonials[currentTestimonial].text}</p>
      <p>{testimonials[currentTestimonial].author}</p>
      <button onClick={handlePrev}>←</button>
      <button onClick={handleNext}>→</button>
    </div>
  );
};

export default Testimonial;
