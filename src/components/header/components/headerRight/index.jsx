import "./styles.scss";

import basketIcon from "../../../../assets/icons/rightbasketIcon.png";
import exclamationMark from "../../../../assets/icons/mark.svg";
import favorite from "../../../../assets/icons/head-favorite.png";

import {
  counter,
  favoriteCounter,
} from "../../../../pages/home/components/productSlider/productSliderSlice";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HeaderRight = () => {
  const counterr = useSelector(counter);
  const CounterFavorite = useSelector(favoriteCounter);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="header-right">
      <div className="webContacts">
   
        <div className="yellow-phone" 
          onMouseEnter={()=> setIsHovered(true)}
          onMouseLeave={()=> setIsHovered(false)}
        >
          անվճար առաքում
          <img src={exclamationMark} alt="" className="exclamation-mark" />
        </div>

        {isHovered && (
            <div className="yello-phone-sub">
              Մինչև 10 000 դր գնումների դեպքում առաքման արժեքը 500 դր է, <br />
              իսկ ֆիքսված ժամերին՝ 10 000 դր դրամ և ավելի գնումների դեպքում
              առաքումը կլինի անվճար:
            </div>
          )}

        <div className="online-phone">011 555 555</div>
       
      </div>

      <div className="topBasket">
        <Link to="/favoritepage" className="basket">
          <img src={favorite} alt="" className="favorite-icon" />
          <span className="yellow-zero favorite-zero">
            <span>{CounterFavorite}</span>
          </span>
        </Link>
      </div>

      <div className="topBasket">
        <Link to="/basket" className="basket">
          <img src={basketIcon} alt="" className="basket-icon" />
          <span className="yellow-zero">
            <span>{counterr}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
