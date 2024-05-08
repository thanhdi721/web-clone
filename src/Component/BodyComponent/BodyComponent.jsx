import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import Page2 from "./SlideShow/Page2/Page2";
import Page3 from "./SlideShow/Page3/Page3";
import Page4 from "./SlideShow/Page4/Page4";

function BodyComponent() {
  return (
    <div>
      <SlideShow />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default BodyComponent;
