import React from "react";
import { useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73ec9d49126465.58abf5327afd8.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7433f3142607191.6269cb3e1436d.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/35758f149741425.62ecc1e8b29cc.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="img-container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="img1" src={data[0]} alt="" />
        <img className="img2" src={data[1]} alt="" />
        <img className="img3" src={data[2]} alt="" />
      </div>
      <div className="icons">
        <span class="material-icons" onClick={prevSlide}>
          navigate_before
        </span>
        <span class="material-icons" onClick={nextSlide}>
          navigate_next
        </span>
      </div>
    </div>
  );
};

export default Slider;
