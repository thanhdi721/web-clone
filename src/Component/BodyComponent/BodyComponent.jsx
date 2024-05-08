import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import Page2 from "./SlideShow/Page2/Page2";
import Page3 from "./SlideShow/Page3/Page3";

function BodyComponent() {
  return (
    <div>
      <SlideShow />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default BodyComponent;
