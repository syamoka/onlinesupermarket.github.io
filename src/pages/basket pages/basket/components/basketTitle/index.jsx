import { useDispatch } from "react-redux";

import { deleteAllBasket } from "../../../../home/components/productSlider/productSliderSlice";

import "./styles.scss";

export const BasketTitle = () => {
  const dispatch = useDispatch();

  return (
    <div className="basket-title-wraper">
      <h1 className="basket-title">Ձեր զամբյուղը</h1>

      <div className="delete-all-basket">
        <div className="delete-basket">
          <a href="#"
           onClick={() => dispatch(deleteAllBasket())}
           >
            <span>Դատարկել զամբյուղը</span>
          </a>
        </div>
      </div>
    </div>
  );
};
