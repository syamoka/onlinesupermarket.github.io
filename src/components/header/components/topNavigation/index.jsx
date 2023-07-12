import "./styles.scss";

import { Currency } from "../../components/currency";
import { Lang } from "../../components/lang/index";
import { Iconapp } from "../../components/iconapp/index";
import { Enter } from "../../components/enter/index";
import dropdownArrow from "../../../../assets/icons/dropdownArrow.png";
import topPhoneIcon from "../../../../assets/icons/topPhone.png";
import whatsappIcon from "../../../../assets/icons/whatsappGreen.png";
import viberIcon from "../../../../assets/icons/viberIconn.svg";
import { useState } from "react";
import dropdownArrowUp from "../../../../assets/icons/dropdownArrowUp.png";

export const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-navigation ">
      <div className="topmenu" >
        <div
          className="top-phone-number-parent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="top-phone-number">
            <span>
              <img src={topPhoneIcon} alt="" className="top-phone-img" />
            </span>
            <span className="top-phone"> 011 555 555</span>
            <span>
              {isOpen ? (
                <img src={dropdownArrowUp} alt="" className="top-phone-arrow" />
              ) : (
                <img src={dropdownArrow} alt="" className="top-phone-arrow" />
              )}
            </span>
          </div>

          {isOpen && (
            <div className="top-phone-dropping">
              <a href="tel:011 555 555">011 555 555</a>
              <a href="https://api.whatsapp.com/send?phone=37433533555">
                <img src={whatsappIcon} alt="" />
                WhatsApp
              </a>
              <a href="viber://chat?number=%2B37433533555">
                <img src={viberIcon} alt="" />
                Viber
              </a>
            </div>
          )}
        </div>

        <div className="topmenu-right-resp ">
          <div className="topmenu-left">
            <Currency />
            <Lang />
            <Iconapp />
          </div>

          <div className="topmenu-right">
            <Enter />
          </div>
        </div>
      </div>
    </div>
  );
};
