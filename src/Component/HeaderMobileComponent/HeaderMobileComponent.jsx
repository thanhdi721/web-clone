import { Col, Drawer, Menu, Row } from "antd";
import React, { useState } from "react";
import {
  UnorderedListOutlined,
  SearchOutlined,
  CloseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { WrapperButtonHeaderMB } from "./style";
import "./style.css";
function HeaderMobileComponent() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "sub4",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}>
          Các nhãn hiệu của chúng tôi
        </span>
      ),
      icon: (
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/6fknki68vDXik3Dj9icbet/1592eae3a5bc9b3310b2cde93f722e40/Brands_Blue.svg"
          width={40}
          alt=""
        />
      ),
      children: [
        {
          key: "9",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Các nhãn hiệu
            </span>
          ),
        },
        {
          key: "10",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Đổi mới
            </span>
          ),
        },
        {
          key: "11",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              An toàn sản phẩm
            </span>
          ),
        },
        {
          key: "12",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Thành phần
            </span>
          ),
        },
        {
          key: "13",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              #BECRUELTYFREE
            </span>
          ),
        },
      ],
    },
  ];
  return (
    <div>
      <Row
        style={{
          padding: "20px",
          height: "60px",
          background: "#ffff ",
          position: "fixed",
          width: "100%",
          zIndex: "99",
        }}
      >
        <Col span={11}>
          <SearchOutlined style={{ fontSize: "32px" }} />
        </Col>
        <Col span={2}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/7znyJc3Y7SecEoKSYKWoaQ/1236329e586995b3dd96701a57a6fd33/P_G_Logo_RGB.svg"
            alt=""
            width={46}
            height={46}
          />
        </Col>
        <Col span={11} style={{ textAlign: "end" }}>
          <UnorderedListOutlined
            onClick={showDrawer}
            style={{ fontSize: "24px" }}
          />
        </Col>
      </Row>
      <Drawer
        placement={"top"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"top"}
        height={"100%"}
        style={{ background: "hsla(0, 0%, 100%, .9)" }}
      >
        <Row>
          <Col span={15} style={{ margin: "auto 0px" }}>
            <CloseOutlined
              style={{
                padding: "5px",
                border: "1px solid #003da5",
                borderRadius: "50%",
                color: "#003da5",
                fontSize: "24px",
              }}
              onClick={onClose}
            />
          </Col>
          <Col span={9}>
            <WrapperButtonHeaderMB>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/6nElpqZmzSe6OWgqaau6Ow/f959b38125f48691f803fb22fe5f47d1/GlobeSimple.svg"
                alt=""
                height={26}
                width={26}
              />
              <span>Việt Nam</span>
            </WrapperButtonHeaderMB>
          </Col>
        </Row>
        <div style={{ marginTop: "30px", marginLeft: "-20px" }}>
          <Menu
            style={{
              width: 350,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
          <Menu
            style={{
              width: 350,
              marginTop: "16px",
              background: "none !important",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
          <Menu
            style={{
              width: 350,
              marginTop: "16px",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <ul
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgb(0, 61, 165)",
              listStyleType: "none",
              marginLeft: "-3.5em",
            }}
          >
            <li style={{ marginBottom: " 10px" }}>Liên hệ với chúng tôi</li>
            <li style={{ marginBottom: " 10px" }}>Cơ hội việc làm</li>
            <li style={{ marginBottom: " 10px" }}>Đối tác và nhà đầu tư</li>
            <li style={{ marginBottom: " 10px" }}>Công ty chúng tôi</li>
            <li style={{ marginBottom: " 10px" }}>Sơ đồ trang web</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          {/* <Row>
            <Col span={5}></Col>
            <Col span={1}></Col>
            <Col span={1}></Col>
            <Col span={1}></Col>
            <Col span={1}></Col>
            <Col span={1}></Col>
            <Col span={5}></Col>
          </Row> */}
          <ul
            style={{
              fontSize: "14px",
              display: "flex",
              color: "rgb(0, 61, 165)",
              listStyleType: "none",
              justifyContent: "center",
            }}
          >
            <li style={{ marginRight: " 10px" }}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/3XaagqctBS6ayokwIC6yea/4c2e2049ce8b0dafc72a2dc6b3c273f0/icon-facebook-blue.svg"
                alt=""
              />
            </li>
            <li style={{ marginRight: " 10px" }}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/2XygRBczBK04sm8ysoooIE/0e6d1108c44a4b2c6a2733af73be1ab4/icon-tiwtter-blue.svg"
                alt=""
              />
            </li>
            <li style={{ marginRight: " 10px" }}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/4z0eFBPgQogAqUI8AaeUSA/e6272f7783f9fc6410694317447f62b5/icon-youtube-blue.svg"
                alt=""
              />
            </li>
            <li style={{ marginRight: " 10px" }}>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/2AAq3oehaguw6uieckqiW0/66f431fb995e20751e3c9ba9584b0906/icon-instagram-blue.svg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://images.ctfassets.net/ywowj8d94i8y/2PSPqreXCguQ8kioAWuyiO/45085a7852320b3f46335b4b5aaf60ec/icon-linkedin-blue.svg"
                alt=""
              />
            </li>
          </ul>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              color: "rgb(0, 61, 165)",
              listStyleType: "none",
              justifyContent: "center",
            }}
          >
            © 2024 Procter & Gamble
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default HeaderMobileComponent;
