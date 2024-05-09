import React, { useState, useEffect } from "react";
import "./style.css"; // File CSS chứa style cho hiệu ứng

const Slide = ({ imageUrl, isActive }) => {
  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <img src={imageUrl} alt="Slide" />
      <h2>Chiến Lược Tăng Trưởng Toàn Diện</h2>
      <button className="btn-ps">
        <span style={{ fontSize: "16px", color: "#003da5" }}>
          Báo cáo thường niên 2023
        </span>
      </button>
    </div>
  );
};

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Đổi slide sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <Slide key={index} imageUrl={slide} isActive={index === currentSlide} />
      ))}
    </div>
  );
};

export default SlideShow;
