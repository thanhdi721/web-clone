import React from "react";
import { WrapperTitle } from "../../BodyComponent/SlideShow/Page2";
import image1 from "../../../Image/a.png";
import image2 from "../../../Image/b.png";
import image3 from "../../../Image/a1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
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
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <WrapperTitle>Các Nhãn Hàng Của Chúng Tôi</WrapperTitle>
      <div className="slider-container" style={{ marginTop: "120px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <div className="overlay">
                <span style={{ margin: "auto" }}>Đến trang</span>
              </div>
              <img src={image} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </Slider>
      </div>
      <button className="btn-p2mb">
        <span style={{ fontSize: "16px" }}>
          Xem các thương hiệu mang tính biểu tượng của chúng tôi
        </span>
      </button>
    </div>
  );
}

export default Page2;
