import React, { useEffect, useState } from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Page({ imageUrl, isActive }) {
  return (
    <div>
      <div className={`slide ${isActive ? "active" : ""}`}>
        <img
          src={imageUrl}
          alt="Slide"
          style={{
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

const Page1 = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Đổi slide sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="slideshow-container"
      style={{
        backgroundColor: "#003da5",
        maskImage:
          "radial-gradient(115% 8% at 50% 102%, transparent 50%, #fff 51%)",
      }}
    >
      {slides.map((slide, index) => (
        <Page key={index} imageUrl={slide} isActive={index === currentSlide} />
      ))}
      <div>
        <p
          style={{
            fontSize: "2.8rem",
            lineHeight: "1.2",
            fontWeight: "700",
            width: "95%",
            textAlign: "center",
            justifyContent: "center",
            color: "#ffff",
            marginTop: "-30px",
            position: "relative",
            zIndex: "2",
          }}
        >
          Chiến Lược Tăng Trưởng Toàn Diện
        </p>
      </div>
      <button className="btn-p1mb">
        <span style={{ fontSize: "16px", color: "#fff" }}>
          Báo cáo thường niên 2023
        </span>
      </button>
      <div
        style={{
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: "#f1b434",

          margin: "50px auto",
        }}
      ></div>
    </div>
  );
};

export default Page1;
