import React from "react";
import {
  WrapperButtonHeader,
  WrapperLiHeader,
  WrapperSearchContainer,
  WrapperSearchIcon,
  WrapperSearchInput,
} from "./style";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Col, Dropdown, Row, Space } from "antd";
function HeaderComponent() {
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
    <div>
      <Row style={{ padding: "20px" }}>
        <Col span={3}>
          <WrapperButtonHeader>
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/6nElpqZmzSe6OWgqaau6Ow/f959b38125f48691f803fb22fe5f47d1/GlobeSimple.svg"
              alt=""
              height={26}
              width={26}
            />
            <span>Việt Nam</span>
          </WrapperButtonHeader>
        </Col>
        <Col span={4} style={{ margin: "auto" }}>
          <Dropdown
            menu={{
              items,
            }}
          >
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

        <Col span={4} style={{ margin: "auto" }}>
          <Dropdown
            menu={{
              items,
            }}
          >
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
        <Col span={1} style={{ marginLeft: "20px", marginTop: "-12px" }}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/7znyJc3Y7SecEoKSYKWoaQ/1236329e586995b3dd96701a57a6fd33/P_G_Logo_RGB.svg"
            alt=""
            width={50}
            height={50}
          />
        </Col>
        <Col span={5} style={{ margin: "auto" }}>
          <Dropdown
            menu={{
              items,
            }}
          >
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
        <Col span={6}>
          <WrapperSearchContainer>
            <WrapperSearchIcon>&#128269;</WrapperSearchIcon>
            <WrapperSearchInput type="text" placeholder="Search..." />
          </WrapperSearchContainer>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderComponent;
