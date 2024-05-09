import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import "./style.css";
function Page3() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset === 0 ? -50 : 0));
    }, 5000); // Đặt khoảng thời gian giữa các lượt qua ở đây (đơn vị là mili giây), ví dụ: 3000ms = 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <Row style={{ marginTop: "20px", overflow: "hidden" }}>
      <Col span={24}>
        <div
          style={{
            width: "200%",
            height: "30vw",
            maxHeight: "550px",
            position: "relative",
            left: `${offset}%`,
            transition: "left 0.5s ease-in-out",
          }}
        >
          <Row>
            <Col span={9}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"
                alt=""
                style={{
                  borderRadius: "300px",
                  height: "90%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col span={15} style={{ position: "relative" }}>
              <div
                style={{
                  backgroundColor: " rgba(36, 10, 207, 1)", // Màu xanh đè lên với độ trong suốt 50%
                  width: "45%", // Chiều rộng overlay
                  height: "90%", // Chiều cao overlay
                  position: "absolute",
                  top: "0",
                  left: "0",
                  zIndex: "1", // Đảm bảo overlay hiển thị phía trên hình ảnh
                  borderBottomLeftRadius: "300px", // Border radius cho góc dưới bên phải
                  borderTopLeftRadius: "300px", // Border radius cho góc trên bên phải
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "900",
                    textAlign: "center",
                    width: "450px",
                    margin: "auto",
                    marginTop: "100px",
                    color: "#fff",
                  }}
                >
                  Từng bước giảm tác động đến môi trường
                </div>
                <button class="animated-button">
                  <span>Nỗ lực của chúng tôi</span>
                  <span></span>
                </button>
              </div>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"
                alt=""
                style={{
                  borderRadius: "300px",
                  height: "90%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: "0", // Đảm bảo hình ảnh hiển thị phía dưới overlay
                }}
              />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Page3;
