import "./styles.scss";

import tableViewIcon from "../../../../../assets/productIcons/tableView.svg";
import listViewIcon from "../../../../../assets/productIcons/listView.svg";
import rightIcon from "../../../../../assets/icons/right-icon.png";
import bottomArrow from "../../../../../assets/icons/bottom-arrow.png";

export const FiltredProductNav = () => {

  return (
    <div className="filtred-products-navigation">
      <div className="filtred-products-view">
        <span>
          <img src={tableViewIcon} alt="" />
        </span>

        <span>
          <img src={listViewIcon} alt="" />
        </span>
      </div>

      <div className="filtred-products-blocks">
        <div className="prod-count">1-20 / 34</div>

        <div className="filtred-products-next-parent">
          <span className="filtred-products-next-numbers">
            <span>1</span>
            <a href="">2</a>
          </span>

          <a href="" className="filtred-next-product">
            <span>Հաջորդ</span>
            <img src={rightIcon} alt="" />
          </a>
        </div>

        <div className="best-seller-parent">
          <ul>
            <li>
              <a href="" className="best-seller-title">
                <span> Լավագույն վաճառք</span>
                <img src={bottomArrow} alt="" />
              </a>

              <ul
                className="best-seller-sotred-lists"
                style={{ display: "none" }}
              >
                <li>
                  <a href="">Լավագույն վաճառք</a>
                </li>

                <li>
                  <a href="">Առանց տեսակավորման</a>
                </li>

                <li>
                  <a href="">Սկզբում էժանները</a>
                </li>

                <li>
                  <a href="">Սկզբում թանկերը</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
