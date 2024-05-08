import React from "react";
import { WrapperTitle, WrapperTitle_2 } from "./index";
import image1 from "../../../../Image/a.png";
import image2 from "../../../../Image/b.png";
import image3 from "../../../../Image/a.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Import file CSS mới

function Page2() {
  const images = [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
  ];
  const settings = {
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <WrapperTitle>CÁC NHÃN HÀNG CỦA CHÚNG TÔI</WrapperTitle>
      <WrapperTitle_2>Các sản phẩm giúp cuộc sống dễ dàng hơn</WrapperTitle_2>
      <div className="slider-container" style={{ marginTop: "100px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <div className="overlay_page-2">
                <span style={{ margin: "auto" }}>Đến trang</span>
              </div>
              <img src={image} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </Slider>
      </div>
      <button className="btn-p2">
        <span style={{ fontSize: "16px", color: "#003da5" }}>
          Xem các thương hiệu mang tính biểu tượng của chúng tôi
        </span>
      </button>
    </div>
  );
}

export default Page2;
