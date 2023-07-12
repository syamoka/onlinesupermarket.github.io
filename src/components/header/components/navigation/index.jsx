import "./styles.scss";
import { useDispatch } from "react-redux";
import economiclist from "../../../../JSON/economicList.json";
import { changeToEconomic } from "../../../../pages/home/components/sidebar/sidebarSlice";
import foodlist from "../../../../JSON/sidebarFoodlist.json";
import { changeToFoodlist } from "../../../../pages/home/components/sidebar/sidebarSlice";
import navBurger from "../../../../assets/icons/navBurger.png";
import { useState } from "react";

export const Navigation = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navigation">
        <div className="list-menu">
          <li
            className="menu-item foodlist"
            onClick={() => dispatch(changeToFoodlist(foodlist))}
          >
            <a href="#" className="menu-item-link">
              ՍՆՆԴԱՄԹԵՐՔ
            </a>
          </li>
          <li
            className="menu-item  "
            onClick={() => dispatch(changeToEconomic(economiclist))}
          >
            <a href="#" className="menu-item-link">
              ՏՆՏԵՍԱԿԱՆ ԱՊՐԱՆՔՆԵՐ
            </a>
          </li>

          <li
            className="menu-item"
            onClick={() => dispatch(changeToEconomic(economiclist))}
          >
            <a href="#" className="menu-item-link">
              ԾԱՂԻԿՆԵՐ
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};
