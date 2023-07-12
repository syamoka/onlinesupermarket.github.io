import dropdownMenuIcon from "../../../../../../assets/icons/closeIcon.png";
import { NavInResponsive } from "../navInResponsive";
import "./styles.scss";

export const SidebarBurger = ()=> {
  return (
    <div className="sidebar-burger">
      <div className="sidebar-burger-title">
        <span>Ապրանքի կատալոգ</span>
        <img src={dropdownMenuIcon} alt="" />
      </div>

      <NavInResponsive />
    </div>
  );
};
