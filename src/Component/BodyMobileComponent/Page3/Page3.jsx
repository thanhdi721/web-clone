import React from "react";
import "./style.css";
function Page3() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        marginTop: "80px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/5XvB2uo4vZKRNevfn0nReB/fdf6d88fabc8d94d04bdbd11fcb47921/1.10.23_Sustainability_Page_Key_Image_-_Mom_and_baby__2HP.jpg?fm=webp"
          alt=""
          style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        />
        <div
          style={{
            backgroundColor: "rgba(0, 61, 165, .8)",
            width: "80vw",
            height: "80vw",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#fff",
              fontSize: "1.8rem",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Từng bước giảm tác động đến môi trường
            <button className="btn-p3mb">
              <span style={{ fontSize: "16px" }}>Nổ lực của chúng tôi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
