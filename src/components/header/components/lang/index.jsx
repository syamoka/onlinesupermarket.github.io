import "./styles.scss";
import armenianLang from "../../../../assets/images/armeian.svg";
import russianLang from "../../../../assets/images/russian.svg";
import englishLang from "../../../../assets/images/english.svg";
import dropdownArrowBottom from "../../../../assets/icons/dropdownArrow.png";
import dropdownArrowUp from "../../../../assets/icons/dropdownArrowUp.png";
import { useState } from "react";

export const Lang = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lang">
      <div className="lang-dropdown-toggle"
       onMouseEnter={()=> setIsHovered(true)}
       onMouseLeave={()=> setIsHovered(false)}
       onClick={()=> setIsHovered(!isHovered)}
       >
        <a className="langLink" href="#">
          <span>
            <img src={armenianLang} alt="" />
          </span>
           <span className="lang-name">Հայերեն</span>
          
          {
            isHovered ? (
              <img className="dropdown-arrow" src={dropdownArrowUp} alt="" />
            ) : (
              <img className="dropdown-arrow" src={dropdownArrowBottom} alt="" />
            )
          }
        </a>

        {isHovered && (
          <div className="lang-dropdown-menu">
            <div className="lang-dropdown-item">
              <span>
                <img src={russianLang} alt="" />
              </span>
              <span>Russian</span>
            </div>

            <div className="lang-dropdown-item">
              <span className="lang-dropdown-item">
                <img src={englishLang} alt="" />
              </span>
              <span>English</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
