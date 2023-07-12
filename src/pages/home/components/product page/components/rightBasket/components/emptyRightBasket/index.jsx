import "./styles.scss";
import basketIcon from "../../../../../../../../assets/icons/basket.png";

export const EmptyRightBasket = () => {
  return (
    <div className="empty-right-basket">
      <div className="rb-head">
        <div className="rb-Img">
          <img src={basketIcon} alt="" />
          <h4>ՁԵՐ ԶԱՄԲՅՈՒՂԸ</h4>
        </div>

        <div>X</div>
      </div>

      <div className="rb-body">
        <span>Ձեր զամբյուղը դատարկ է</span>
      </div>
    </div>
  );
};
