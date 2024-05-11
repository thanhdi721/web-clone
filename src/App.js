import HeaderComponent from "./Component/HeaderComponent/HeaderComponent";
import "./App.css";
import BodyComponent from "./Component/BodyComponent/BodyComponent";
import FooterComponent from "./Component/FooterComponent/FooterComponent";
import HeaderMobileComponent from "./Component/HeaderMobileComponent/HeaderMobileComponent";
import BodyMobileComponent from "./Component/BodyMobileComponent/BodyMobileComponent";
function App() {
  return (
    <div>
      <div className="view-pc">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>

      <div className="view-mobile">
        <HeaderMobileComponent />
        <BodyMobileComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
