import React, { useState, useEffect } from "react";
import {
  WrapperButtonHeader,
  WrapperButtonSearch,
  WrapperLiHeader,
} from "./style";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Dropdown, Row, Space } from "antd";

function HeaderComponent() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the scroll position is at the top
      if (scrollPosition === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "1000",
        width: "100%",
        backgroundColor: "hsla(0, 0%, 100%, .85)",
        height: "70px",
      }}
    >
      <Row style={{ padding: "10px" }}>
        <Col span={2}>
          <WrapperButtonHeader>
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/6nElpqZmzSe6OWgqaau6Ow/f959b38125f48691f803fb22fe5f47d1/GlobeSimple.svg"
              alt=""
            />
            <span>Việt Nam</span>
          </WrapperButtonHeader>
        </Col>
        <Col span={5} style={{ margin: "auto" }}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <WrapperLiHeader>
                  Các nhãn hiệu của chúng tôi
                  <DownOutlined />
                </WrapperLiHeader>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={6} style={{ margin: "auto", marginLeft: "-10px" }}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <WrapperLiHeader>
                  Ảnh hưởng của chúng tôi
                  <DownOutlined />
                </WrapperLiHeader>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={2} style={{ position: "absolute", left: "50%" }}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/7znyJc3Y7SecEoKSYKWoaQ/1236329e586995b3dd96701a57a6fd33/P_G_Logo_RGB.svg"
            alt=""
            width={isAtTop ? 75 : 50}
            height={isAtTop ? 75 : 50}
          />
        </Col>
        <Col span={5} style={{ margin: "auto" }}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <WrapperLiHeader>
                  Câu chuyện của chúng tôi
                  <DownOutlined />
                </WrapperLiHeader>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ display: "flex", position: "relative" }}>
          {isInputVisible && (
            <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
          )}
          <WrapperButtonSearch onClick={toggleInputVisibility}>
            <SearchOutlined style={{ fontSize: "24px", marginLeft: "35px" }} />
          </WrapperButtonSearch>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderComponent;
