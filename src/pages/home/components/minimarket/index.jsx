import "./styles.scss";
import { useSelector } from "react-redux";
import { minimarketState } from "../productSlider/productSliderSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { newData } from "../productSlider/productSliderSlice";

export const Minimarket = () => {
  const minimarketData = useSelector(minimarketState);
  const data = useSelector(newData);
  const param = useParams();
  const [mydata, setmydata] = useState([]);


  return (
    <div className="minimarket-section">
      <h2 className="minimarket-title">ՄԻՆԻՄԱՐԿԵՏՆԵՐ</h2>

      <div className="minimarket-items-parent">
        {minimarketData.map((el) => {
          return (
            <Link
              to={`/categories/${el.category}`}
              className="minimarket-item-parent"
              key={el.id}
            >
              <div className="minimarket-item">
                <img src={el.image} alt="" className="minimarket-img" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
