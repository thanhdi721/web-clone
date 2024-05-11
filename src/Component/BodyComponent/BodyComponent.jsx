import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import Page2 from "./SlideShow/Page2/Page2";
import Page3 from "./SlideShow/Page3/Page3";
import Page4 from "./SlideShow/Page4/Page4";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null,
    };
  }

  handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    this.setState({ activeSection: sectionId });
  };

  render() {
    return (
      <div className="sidebar">
        <ul style={{ listStyleType: "none" }}>
          <li key="slideShow" style={{ display: "flex" }}>
            {this.state.activeSection === "slideShow" && (
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "120px",
                  borderRadius: "30px",
                  position: "absolute",
                  left: "-110px",
                  padding: "0.7rem 1rem",
                  top: "0px",
                }}
              >
                <span
                  className="hp-scroll__nav__link"
                  aria-label="Giới thiệu"
                  style={{
                    fontSize: "1rem",
                    color: "#003da5",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    fontFamily: "Montserrat, Arial, sans-serif",
                  }}
                >
                  Giới thiệu
                </span>
              </div>
            )}
            <div onClick={() => this.handleClick("slideShow")}>
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  this.state.activeSection === "slideShow"
                    ? "dot active"
                    : "dot"
                }
              />
            </div>
          </li>
          <li key="page2" style={{ display: "flex" }}>
            {this.state.activeSection === "page2" && (
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "150px",
                  borderRadius: "30px",
                  position: "absolute",
                  left: "-140px",
                  padding: "0.7rem 1rem",
                  top: "40px",
                }}
              >
                <span
                  className="hp-scroll__nav__link"
                  aria-label="Page 2"
                  style={{
                    fontSize: "1rem",
                    color: "#003da5",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    fontFamily: "Montserrat, Arial, sans-serif",
                  }}
                >
                  Cam kết & nổ lực
                </span>
              </div>
            )}
            <div onClick={() => this.handleClick("page2")}>
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  this.state.activeSection === "page2" ? "dot active" : "dot"
                }
              />
            </div>
          </li>
          <li key="page3" style={{ display: "flex" }}>
            {this.state.activeSection === "page3" && (
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "230px",
                  borderRadius: "30px",
                  position: "absolute",
                  left: "-220px",
                  padding: "0.7rem 1rem",
                  top: "80px",
                }}
              >
                <span
                  className="hp-scroll__nav__link"
                  aria-label="Page 3"
                  style={{
                    fontSize: "1rem",
                    color: "#003da5",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    fontFamily: "Montserrat, Arial, sans-serif",
                  }}
                >
                  Nổ lực phát triển bền vững
                </span>
              </div>
            )}
            <div onClick={() => this.handleClick("page3")}>
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  this.state.activeSection === "page3" ? "dot active" : "dot"
                }
              />
            </div>
          </li>
          <li key="page4" style={{ display: "flex" }}>
            {this.state.activeSection === "page4" && (
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "200px",
                  borderRadius: "30px",
                  position: "absolute",
                  left: "-190px",
                  padding: "0.7rem 1rem",
                  top: "120px",
                }}
              >
                <span
                  className="hp-scroll__nav__link"
                  aria-label="Page 4"
                  style={{
                    fontSize: "1rem",
                    color: "#003da5",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    fontFamily: "Montserrat, Arial, sans-serif",
                  }}
                >
                  Các trang web của P&G
                </span>
              </div>
            )}
            <div onClick={() => this.handleClick("page4")}>
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  this.state.activeSection === "page4" ? "dot active" : "dot"
                }
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function BodyComponent() {
  const slides = [
    "https://images.ctfassets.net/ywowj8d94i8y/3WC8n0bihJWAjsbw0SAYKm/c3cf3b56c9faf4306d57e1edf8cff408/HP_1.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/58uzd3lx5yUNV61l3zssLs/427a3168a33243cbb7221fe29d9d3f2c/HP_2.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/6Mej8o2oc2xRqHpGBRkF5t/a656a40af66193e8bd08b4aadf87e980/HP_3.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/3uX2kOpzwUbB2ZLmY1wx7P/9b95fa29f4894af39b25fe9bd3d0cafc/HP_4.jpg?fm=webp",
  ];

  return (
    <div>
      <div id="slideShow">
        <SlideShow slides={slides} />
      </div>
      <div id="page2">
        <Page2 />
      </div>
      <div id="page3">
        <Page3 />
      </div>
      <div id="page4">
        <Page4 />
      </div>
      <Sidebar />
    </div>
  );
}

export default BodyComponent;
