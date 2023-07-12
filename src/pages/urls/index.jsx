import "./styles.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { favoriteCounter } from "../home/components/productSlider/productSliderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Urls = ({ data }) => {
  const favoritecounter = useSelector(favoriteCounter);
  const navigate = useNavigate();

  return (
    <div className="urls">
      <div className="urls-parent">
        <div className="back-parent">
          <div className="back" onClick={() => navigate(-1)}>
            Վերադառնալ
          </div>
        </div>

        {data.map((item) => {
          return (
            <NavLink to={item.path} className="homePage urls-link">
              <span> {item.name}</span>
              {
                item.img && <img src={item.img} />
              }
            </NavLink>
          );
        })}
      </div>

      <a href="/favoritepage" className="favorite-link">
        <span>
          <strong>Նախընտածներ</strong>
          <b>{favoritecounter}</b>
        </span>
      </a>
    </div>
  );
};
