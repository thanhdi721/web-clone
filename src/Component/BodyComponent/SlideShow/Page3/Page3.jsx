import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";

function Page3() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset === 0 ? -80 : 0));
    }, 5000); // Đặt khoảng thời gian giữa các lượt qua ở đây (đơn vị là mili giây), ví dụ: 3000ms = 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <Row>
      <Col span={24} style={{ overflow: "hidden" }}>
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
            <Col span={10}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"
                alt=""
                style={{
                  borderRadius: "300px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col span={14}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"
                alt=""
                style={{
                  borderRadius: "300px",
                  height: "100%",
                  objectFit: "cover",
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
