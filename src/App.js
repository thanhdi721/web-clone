import HeaderComponent from "./Component/HeaderComponent/HeaderComponent";
import "./App.css";
import BodyComponent from "./Component/BodyComponent/BodyComponent";
import FooterComponent from "./Component/FooterComponent/FooterComponent";
import HeaderMobileComponent from "./Component/HeaderMobileComponent/HeaderMobileComponent";
import BodyMobileComponent from "./Component/BodyMobileComponent/BodyMobileComponent";
import FooterMobileComponent from "./Component/FooterMobileComponent/FooterMobileComponent";
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
        <FooterMobileComponent />
      </div>
    </div>
  );
}

export default App;
