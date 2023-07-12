import { useSelector } from "react-redux";
import { counter } from "../../../productSlider/productSliderSlice";
import { EmptyRightBasket } from "./components/emptyRightBasket";
import { RightBasketComponent } from "./components/rightBasketComponent";

export const RightBasket = () => {
  const basketCounter = useSelector(counter);

  return (
    <>
      {basketCounter !== 0 ? <RightBasketComponent /> : <EmptyRightBasket /> }
    </>
  );
};
