import { Col, Row } from "antd";
import React from "react";
import "./style.css";
function Page4() {
  return (
    <div>
      <Row style={{ marginTop: "150px" }}>
        <Col span={12} style={{ left: "5%" }}>
          <div className="image-container">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/2MSjm1DCPqleAOETyBI7b4/2feecd7a4400c0476b1dc5bcf76f7de9/HP-Investor_Relations.jpg?fm=webp"
              alt=""
              width={"90%"}
              style={{ borderRadius: "50px" }}
            />
            <div className="overlay"></div>
            <div className="overlay_page-4">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://images.ctfassets.net/ywowj8d94i8y/4TDKXUQCFKvF6knfeA9hHP/eeae9ac44abb1f413de4be66cd04d5cf/advocates-icon_1.png?fm=webp"
                  alt=""
                  width={60}
                  height={50}
                />
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#003da5",
                  }}
                >
                  Quan hệ với nhà đầu tư
                </div>
                <button className="btn_p4">
                  <span style={{ fontSize: "16px", color: "#003da5" }}>
                    Thông tin của nhà đầu tư
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12} style={{ left: "7%" }}>
          <div className="image-container">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/6CBoInLDjlFl47X9qfq0jR/11f43eabd41bcb10c04af753de534c55/HP-Careers.jpg?fm=webp"
              alt=""
              width={"90%"}
              style={{ borderRadius: "50px" }}
            />
            <div className="overlay_page-4">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://images.ctfassets.net/ywowj8d94i8y/1QUwv3HwywVJeBDpM2Gk58/3ff77570d9c7312b77c83af6ed164053/employees-icon_1.png?fm=webp"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#003da5",
                  }}
                >
                  Việc làm tại P&G
                </div>
                <button className="btn_p4">
                  <span style={{ fontSize: "16px", color: "#003da5" }}>
                    Tìm cơ hội việc làm
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Page4;
