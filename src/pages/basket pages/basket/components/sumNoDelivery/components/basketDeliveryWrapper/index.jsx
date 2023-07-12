import "./styles.scss";

import basketDeliveryIcon from "../../../../../../../assets/icons/basketDelivery.svg";

export const BasketDeliveryWrapper = () => {
  return (
    <div className="basket-delivery-wrapper">
      <div className="basket-delivery">
        <img src={basketDeliveryIcon} alt="" className="basket-delivery-icon" />
        <span className="basket-delivery-title">Առաքում</span>
      </div>
      <span id="freeDelivery">10 000 դրամ և ավելի գնումների դեպքում առաքումը կլինի անվճար:</span>
    </div>
  );
};
