import "./styles.scss";
import dropdownArrowBottom from "../../../../assets/icons/dropdownArrow.png";
import dropdownArrowUp from "../../../../assets/icons/dropdownArrowUp.png";
import { useState } from "react";

export const Currency = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="currency">
      <div
        className="dropdown"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=> setIsHovered(!isHovered)}
      >
        <a href="#" className="currency-dropdown-toggle">
          <span className="currency-name"> Արժույթը՝</span>

          <span className="currency-amd"> AMD</span>
          {isHovered ? (
            <img className="dropdown-arrow" src={dropdownArrowUp} alt="" />
          ) : (
            <img className="dropdown-arrow" src={dropdownArrowBottom} alt="" />
          )}
        </a>

        {isHovered && (
          <div className="currency-dropdown-menu">
            <div className="currency-dropdown-item">RUB</div>
            <div className="currency-dropdown-item">USD</div>
            <div className="currency-dropdown-item">EUR</div>
          </div>
        )}
      </div>
    </div>
  );
};
