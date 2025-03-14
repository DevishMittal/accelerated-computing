import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";
import gal_1 from '../../assets/mou1.jpeg';
import gal_2 from '../../assets/mou2.jpeg';
import gal_3 from '../../assets/mou3.jpeg';

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  // Define the array of slides directly in JSX
  const slides = [
    { src: gal_1, alt: "image 1 for carousel" },
    { src: gal_2, alt: "image 2 for carousel" },
    { src: gal_3, alt: "image 3 for carousel" }
    // Add more slides as needed
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    // Interval to change the slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    // Clear the interval when component unmounts or when the slide changes
    return () => clearInterval(interval);
  }, [slide]); // Re-run effect when the slide changes

  return (
    <div className="all">
      <div className="carousel">
        {/* Previous slide button */}
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

        {/* Render the slides */}
        {slides.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}

        {/* Next slide button */}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

        {/* Slide indicators */}
        <span className="indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};
