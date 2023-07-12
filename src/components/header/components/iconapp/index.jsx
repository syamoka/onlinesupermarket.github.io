import "./styles.scss";

import mobileIcon from "../../../../assets/icons/mobile.svg";
import appIcon from "../../../../assets/icons/app.svg";
import andriodIcon from "../../../../assets/icons/andriod.svg";
import whatsappIcon from "../../../../assets/icons/whatsapp.svg";
import viberIcon from "../../../../assets/icons/viber.svg";

export const Iconapp = () => {
  return (
    <div className="icons-app">
      <div className="mobile iconapp">
        <a href="#" className="iconapp-img">
          <img src={mobileIcon} alt="" />
        </a>
      </div>
      <div className="app iconapp">
        <a href="#">
          <img src={appIcon} alt="" />
        </a>
      </div>
      <div className="android iconapp">
        <a href="#">
          <img src={andriodIcon} alt="" />
        </a>
      </div>
      <div className="whatsapp iconapp">
        <a href="#">
          <img src={ whatsappIcon } alt="" />
        </a>
      </div>
      <div className="viber iconapp">
        <a href="#">
          <img src={viberIcon} alt="" />
        </a>
      </div>
    </div>
  );
};
