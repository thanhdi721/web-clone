import { Col, Row } from "antd";
import React from "react";
import "./style.css";
function Page4() {
  return (
    <div>
      <Row style={{ marginTop: "150px" }}>
        <Col span={12} style={{ left: "8%" }}>
          <div className="image-container">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/2MSjm1DCPqleAOETyBI7b4/2feecd7a4400c0476b1dc5bcf76f7de9/HP-Investor_Relations.jpg?fm=webp"
              alt=""
              width={"70%"}
            />
            <div className="overlay"></div>
          </div>
        </Col>
        <Col span={12} style={{ left: "7%" }}>
          <div className="image-container">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/6CBoInLDjlFl47X9qfq0jR/11f43eabd41bcb10c04af753de534c55/HP-Careers.jpg?fm=webp"
              alt=""
              width={"70%"}
            />
            <div className="overlay">hiii</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Page4;
