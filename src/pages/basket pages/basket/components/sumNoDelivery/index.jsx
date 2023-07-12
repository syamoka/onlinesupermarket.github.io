import "./styles.scss";

import { BasketDeliveryWrapper } from "./components/basketDeliveryWrapper";
import { BasketActionBook } from "./components/basketActionBook";
import { BasketFullAmount } from "./components/basketFullAmount";

export const SumNoDelivery = () => {
  return (
    <div className="sumNoDelivery">
      <BasketDeliveryWrapper />
      <div className="sum-no-delivery-parent">
        <BasketActionBook />
        <BasketFullAmount />
      </div>
    </div>
  );
};
