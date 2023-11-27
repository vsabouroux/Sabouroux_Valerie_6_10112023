import React, { useState } from "react";
import "./Slideshow.scss";

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>
        &#8249;
      </button>
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="next" onClick={nextSlide}>
        &#8250;
      </button>

      <div className="counter">
        {currentSlide + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default Slideshow;
