import { Sidebar } from "../sidebar";

import sidebarImg1 from "../../../../assets/sidebar-icons/add_img1.svg";
import sidebarimg2 from "../../../../assets/sidebar-icons/add_img2.svg";

import "./styles.scss";

export const Aside = () => {
  return (
    <div className="sidebar-wrapper">
      <Sidebar />

      <div className="sidebar-blocks">
        <div className="sidebar-block1">
          <div className="sidebar-block1-parent">
            <img src={sidebarImg1} alt="" />

            <div className="sidebar-block1-title">Անվճար առաքում</div>
          </div>

          <p>
            <span className="sidebar-block1-text">
              10 000 դր և ավել գնումների դեպքում
            </span>
          </p>
        </div>

        <div className="sidebar-block2">
          <div className="sidebar-block2-img">
            <img src={sidebarimg2} alt="" />
          </div>
          <div className="sidebar-block2-title">
            Շահավետ գնումներ և ակցիաներ
          </div>
        </div>
      </div>
    </div>
  );
};
