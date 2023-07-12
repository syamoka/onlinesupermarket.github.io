import "./styles.scss";
import searchIcon from "../../../../../../assets/icons/whiteSearchIcon.png";
import heartIcon from "../../../../../../assets/icons/whiteHeartIcon.png";
import basketIconn from "../../../../../../assets/icons/whiteBasket.png";
import dropdownIcon from "../../../../../../assets/icons/whiteDropdown.png";
import { useState } from "react";
import { SidebarBurger } from "../../../../../../pages/home/components/main/components/sidebarBurger";
import { Link } from "react-router-dom";

export const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="responsive-nav">
      <ul className="responsive-nav-ul">
        <li className="responsive-nav-li" onClick={() => setIsOpen(!isOpen)}>
          {isOpen && <SidebarBurger />}
          <img src={dropdownIcon} alt="" className="responsive-nav-img" />
        </li>

        <Link to="/search">
          <li className="responsive-nav-li nav-search">
            <img src={searchIcon} alt="" className="responsive-nav-img" />
          </li>
        </Link>

        <Link to="/favoritepage">
          <li className="responsive-nav-li">
            <img src={heartIcon} alt="" className="responsive-nav-img" />
          </li>
        </Link>

        <Link to="/basket">
          <li className="responsive-nav-li">
            <img src={basketIconn} alt="" className="responsive-nav-img" />
          </li>
        </Link>
      </ul>
    </div>
  );
};
