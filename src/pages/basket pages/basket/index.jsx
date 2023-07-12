import { counter } from "../../home/components/productSlider/productSliderSlice";
import { EmptyBasket } from "../empty basket";
import { useSelector } from "react-redux/es/exports";
import { BasketPage } from "./components/basketPage";

import "./styles.scss";

export const Basket = () => {
  const basketCounter = useSelector(counter);

  return (
    <div className="basket-section">
      {basketCounter === 0 ? <EmptyBasket /> : <BasketPage />}
    </div>
  );
};
