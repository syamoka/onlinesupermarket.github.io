import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

import { orderCount } from "../../../../../../home/components/productSlider/productSliderSlice";
import { useMemo } from "react";

export const BasketFullAmount = () => {
  const orderamount = useSelector((state) => state.productSlider.orderAmount);
  const fullAmount = useSelector((state) => state.productSlider.fullAmount);
  const deliveryPrice = useSelector(
    (state) => state.productSlider.deliveryPrice
  );

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(orderCount());
  }, []);

  return (
    <div className="full-amount-container">
      <div className="order-amount-parent">
        <span className="order-amount">Պատվերի արժեքը: </span>
        <span className="order-amount-prc"> {orderamount}</span>
      </div>

      <div className="delivery-amount-parent">
        <span className="delivery-amount">Առաքում:</span>
        <span className="delivery-amount-prc">{deliveryPrice}</span>
      </div>

      <div className="full-amount-parent">
        <span className="full-amount">Ընդհանուր:</span>
        <span className="full-amount-prc">{fullAmount}</span>
      </div>
    </div>
  );
};
