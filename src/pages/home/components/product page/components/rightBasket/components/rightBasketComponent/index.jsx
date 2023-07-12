import "./styles.scss";
import basketIcon from "../../../../../../../../assets/icons/basket.png";
import {
  basketState,
  deliveryCount,
  fullamount,
  orderCount,
  ordercount,
} from "../../../../../productSlider/productSliderSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  deleteAllBasket,
} from "../../../../../productSlider/productSliderSlice";

export const RightBasketComponent = () => {
  const basketData = useSelector(basketState);
  // const deliveryAmount = useSelector(deliveryCount)
  // const fullAmount =  useSelector(fullamount)
  // const ordercount =  useSelector(ordercount)
  const dispatch = useDispatch();

  return (
    <div className="right-basket">
      <div className="rightBasket-head">
        <div className="rightBasketImg">
          <img src={basketIcon} alt="" />
          <h4>ՁԵՐ ԶԱՄԲՅՈՒՂԸ</h4>
        </div>

        <div className="right-basket-delete-all"
         onClick={() => dispatch(deleteAllBasket())}
         >X</div>
      </div>

      <div className="rightBasket-body">
        <div className="rightBasket-products">
          {basketData.map((item) => {
            return (
              <table>
                <tbody>
                  <tr className="rightBasket-workCount" key={item.id}>
                    <td className="rightBasket-productItem rb-count">
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </td>

                    <td className="rightBasket-productItem rb-name">
                      <a href="">{item.name}</a>
                    </td>

                    <td className="rightBasket-productItem rb-price">
                      {item.price}դր
                    </td>
                    <td
                      className="rightBasket-productItem rb-del"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      X
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>

        <table className="rightBasket-tab">
          <tbody>
            <tr>
              <table>
                <tbody>
                  <tr className="rb-tab-items">
                    <th className="rb-note">Պատվերի արժեքը</th>
                    <td className="rb-sum"> 100</td>
                  </tr>

                  <tr>
                    <th className="rb-note">Առաքում</th>
                    <td className="rb-sum"> 2000 դր</td>
                  </tr>

                  <tr>
                    <th className="rb-note">Ընդհանուր</th>
                    <td className="rb-sum"> 3000</td>
                  </tr>

                  <div className="rb-delivery-mess">
                    <img
                      src="https://supermarket.am/images/svg_files/basket_delivery_mess_icon.svg"
                      alt="img"
                    />
                    <span>
                      10 000 դրամ և ավելի գնումների դեպքում առաքումը կլինի
                      անվճար:
                    </span>
                  </div>
                </tbody>
              </table>
            </tr>

            <tr>
              <td className="rb-buttons">
                <a href="/basket">ԶԱՄԲՅՈՒՂ</a>
                <a href="">ՊԱՏՎԻՐԵԼ</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
