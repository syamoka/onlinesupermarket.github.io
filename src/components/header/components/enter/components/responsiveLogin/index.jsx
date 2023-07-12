import { LoginSliderOne } from "./components/LoginSlideOne";
import "./styles.scss";
import {MarketInResponsive} from "../../../../../../pages/home/components/minimarket/components/marketInResponsive"
import { LoginSlideTwo } from "./components/LoginSlideTwo";
import { LoginSlideThree } from "./components/LoginSlideThree";

export const ResponsiveLogin = () => {
  return (
    <>
    <div className="responsive-login-page">
       <LoginSliderOne />
       <LoginSlideTwo />
       <LoginSlideThree />
    </div>
     <MarketInResponsive />
    </>
  );
};
