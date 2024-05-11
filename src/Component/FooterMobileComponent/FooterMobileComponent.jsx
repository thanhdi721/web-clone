import { Col, Row } from "antd";
import React from "react";
import { WrapperButtonHeader } from "../HeaderComponent/style";
import "./style.css";
function FooterMobileComponent() {
  return (
    <div>
      <div
        style={{
          marginTop: "120px",
          overflow: "hidden",
          color: "#fff",
          height: "auto",
        }}
      >
        <div
          className="h-mobile"
          style={{
            height: "auto",
            backgroundColor: "#003da5",
            clipPath: "ellipse(350vw 100% at 50% 100%)",
          }}
        >
          <div style={{ paddingTop: "50px" }}>
            <button class="animated-button_mb">
              <span>Quay trở về đầu tiên</span>
              <span></span>
            </button>
          </div>
          <Row
            style={{
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            <Col span={12} style={{ margin: "auto", textAlign: "center" }}>
              <div>
                <img
                  src="https://images.ctfassets.net/ywowj8d94i8y/1rAlAymnl2aqQGcaaaSaaU/307094433d93dd04ce14ee6274f8e715/icon-contact.svg"
                  alt=""
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "6px",
                  }}
                />
                Liên hệ với chúng tôi
              </div>
            </Col>
            <Col span={12} style={{ margin: "auto", textAlign: "center" }}>
              <div>
                <img
                  src="https://images.ctfassets.net/ywowj8d94i8y/6dseizrX7a4UwmoeWCUs8o/d875d039e634253dee63b7c4c41e9083/icon-careers.svg"
                  alt=""
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "6px",
                  }}
                />
                Cơ hội việc làm
              </div>
            </Col>
          </Row>
          <Row style={{ display: "block", width: "300px" }}>
            <Col>
              <ul
                style={{
                  listStyleType: "none",
                  fontWeight: "500",
                  marginTop: "50px",
                  marginLeft: "-20px",
                }}
              >
                <li style={{ fontWeight: "700", fontSize: "16px" }}>
                  ĐỐI TÁC VÀ NHÀ ĐẦU TƯ
                </li>
                <li>Nhà đầu tư</li>
                <li>Làm đối tác với chúng tôi</li>
                <li>Nhà cung cấp</li>
              </ul>
            </Col>
            <Col>
              <ul
                style={{
                  listStyleType: "none",
                  fontWeight: "500",
                  marginLeft: "-20px",
                }}
              >
                <li style={{ fontWeight: "700", fontSize: "16px" }}>
                  CÔNG TY CHÚNG TÔI
                </li>
                <li>Lãnh đạo</li>
                <li>Cấu trúc & Quản trị</li>
                <li>Chính sách & Thực hành</li>
                <li>Lưu trữ</li>
                <li>Giải thưởng & công nhận</li>
                <li>Tin tức</li>
              </ul>
            </Col>
            <Col>
              <ul
                style={{
                  listStyleType: "none",
                  fontWeight: "500",
                  marginLeft: "-20px",
                }}
              >
                <li style={{ fontWeight: "700", fontSize: "16px" }}>HỮU ÍCH</li>
                <li>Sơ đồ trang web</li>
              </ul>
            </Col>
            <Col>
              <ul
                style={{
                  listStyleType: "none",
                  fontWeight: "500",
                  marginLeft: "-20px",
                }}
              >
                <li style={{ fontWeight: "700", fontSize: "16px" }}>
                  PHÁP LUẬT
                </li>
                <li>Thông báo bảo mật</li>
                <li>Điều khoản & điều lệ</li>
                <li>AdChoices</li>
              </ul>
            </Col>
          </Row>
          <div style={{ paddingLeft: "16px" }}>
            <div
              style={{
                fontWeight: "700",
                fontSize: "14px",
                paddingBottom: "12px",
              }}
            >
              Chọn địa điểm của bạn
            </div>
            <button
              style={{
                borderRadius: "20px",
                display: "flex",
                padding: "10px 10px",
              }}
            >
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/6nElpqZmzSe6OWgqaau6Ow/f959b38125f48691f803fb22fe5f47d1/GlobeSimple.svg"
                alt=""
                height={26}
                width={26}
              />

              <span
                style={{ marginTop: "6px", fontSize: "14px", color: "#003da5" }}
              >
                Việt Nam
              </span>
            </button>
          </div>

          <Row style={{ display: "block" }}>
            <Col span={10} style={{ margin: "auto" }}>
              <Row>
                <Col span={4}>
                  <img
                    src="https://images.ctfassets.net/ywowj8d94i8y/1Bvo7w1JJpIcizCu0YEtWa/4fbc4d8d4750423fb00b725081a9d621/Vector__1_.svg"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://images.ctfassets.net/ywowj8d94i8y/6WmVwun68KFUdMniz5r0Bk/8982480bee745790b92fef93287b663b/x.svg"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://images.ctfassets.net/ywowj8d94i8y/2IkSMPCvmBUqHiwZldTzTD/d5aa0602bf832f8a517d21e94087140a/Group.svg"
                    alt=""
                  />
                </Col>
                <Col span={4}>
                  <img
                    src="https://images.ctfassets.net/ywowj8d94i8y/3secKRSalh6yq8BUjirkqI/33c91efb93291e9a4b46344f5916153b/Group_2281.svg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <img
                    src="https://images.ctfassets.net/ywowj8d94i8y/4Lmzzy9ZQGlZspe3gBjIrs/1bb31c55f8735c04eb1d761a90094b27/Vector.svg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
            <Col
              span={14}
              style={{ margin: "auto", fontSize: "1rem", fontWeight: "500" }}
            >
              © 2024 Procter & Gamble
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FooterMobileComponent;
