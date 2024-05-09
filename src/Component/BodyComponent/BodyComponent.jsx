import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import Page2 from "./SlideShow/Page2/Page2";
import Page3 from "./SlideShow/Page3/Page3";
import Page4 from "./SlideShow/Page4/Page4";

function BodyComponent() {
  const slides = [
    "https://images.ctfassets.net/ywowj8d94i8y/3WC8n0bihJWAjsbw0SAYKm/c3cf3b56c9faf4306d57e1edf8cff408/HP_1.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/58uzd3lx5yUNV61l3zssLs/427a3168a33243cbb7221fe29d9d3f2c/HP_2.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/6Mej8o2oc2xRqHpGBRkF5t/a656a40af66193e8bd08b4aadf87e980/HP_3.jpg?fm=webp",
    "https://images.ctfassets.net/ywowj8d94i8y/3uX2kOpzwUbB2ZLmY1wx7P/9b95fa29f4894af39b25fe9bd3d0cafc/HP_4.jpg?fm=webp",
  ];
  return (
    <div>
      <SlideShow slides={slides} />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default BodyComponent;
