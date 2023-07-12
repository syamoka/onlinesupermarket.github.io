import "./styles.scss";
import foodIcon from "../../../../../../assets/icons/navFoodIcon.png";
import economicIcon from "../../../../../../assets/icons/navEconomiic.png";
import flowerIcon from "../../../../../../assets/icons/flowerIcon.jpg";
import { Sidebar } from "../../../sidebar";

export const NavInResponsive = () => {
  return (
    <div className="isresponsive">
      <div className="nav-in-responsive">
        <div className="nav-in food">
          <img src={foodIcon} alt="" />
          <span>Սննդամթերք</span>
        </div>
        <div className="nav-in economic">
          <img src={economicIcon} alt="" />
          <span>Տնտեսական ապրանքներ</span>
        </div>
        <div className="nav-in flower">
          <img src={flowerIcon} alt="" />
          <span>Ծաղիկներ</span>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};
