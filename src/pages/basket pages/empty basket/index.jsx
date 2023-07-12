import { Urls } from "../../urls";
import "./styles.scss";

export const EmptyBasket = () => {
  return (
    <div className="empty-basket">
      {/* <Urls /> */}

      <div className="responsive-empty-basket">
        <div className="empty-basket-resp">
          Չկան ընտրված ապրանքներ:
          <br />
          Ձեր զամբյուղը դատարկ է:
          <br />
          Եթե Դուք արդեն գրանցվել եք մեր կայքում, ապա մուտք կատարեք՝ տեսնելու
          համար նախորդ որոնումից պահպանված զամբյուղը և նախընտրած ապրանքները:
          <br />
          Ամենայն հավանականությամբ, Դուք ոչինչ դեռ չեք ավելացրել: Ապրանքը
          զամբյուղի մեջ ավելացնելու համար անհրաժեշտ է սեղմել “Ավելացնել” կոճակը
          Ձեզ հետաքրքրող ապրանքի կողքին:
          <br />
          Եթե Դուք արդեն ավելացրել եք որևէ ապրանք զամբյուղի մեջ, Ձեզ միայն
          հարկավոր է թարմացնել տվյալ էջը:
          <br />
          Հնարավոր է, որ ընտրված ապրանքներն արդեն իսկ վաճառվել են:
          <br />
          Հավելյալ հարցերի դեպքում կարող եք կապ հաստատել զանգերի կենտրոնի հետ
        </div>
    </div>

      <div className="empty-basket-page">
        <div className="empty-basket-title">Ձեր զամբյուղը դատարկ է</div>

        <div className="empty-basket-message">
          <div className="empty-basket-msg-descr">
            Եթե Դուք արդեն գրանցվել եք մեր կայքում, ապա մուտք կատարեք՝ տեսնելու
            համար նախորդ որոնումից պահպանված զամբյուղը և նախընտրած ապրանքները:
          </div>

          <div className="empty-basket-msg-actions">
            <a href="/enter" className="login-button">
              ՄՈՒՏՔ
            </a>
            <a href="" className="empty-basket-signup-button">
              Գրանցվել
            </a>
          </div>
        </div>

        <ul className="empty-basket-texts">
          <li className="empty-basket-lists">
            <div className="dash"></div>
            Ամենայն հավանականությամբ, Դուք ոչինչ դեռ չեք ավելացրել: Ապրանքը
            զամբյուղի մեջ ավելացնելու համար անհրաժեշտ է սեղմել “Ավելացնել”
            կոճակը Ձեզ հետաքրքրող ապրանքի կողքին:
          </li>

          <li className="empty-basket-lists">
            <div className="dash"></div>
            Եթե Դուք արդեն ավելացրել եք որևէ ապրանք զամբյուղի մեջ, Ձեզ միայն
            հարկավոր է թարմացնել տվյալ էջը:
          </li>

          <li className="empty-basket-lists">
            <div className="dash"></div>
            Հնարավոր է, որ ընտրված ապրանքներն արդեն իսկ վաճառվել են:
          </li>

          <li className="empty-basket-lists">
            <div className="dash"></div>
            Հավելյալ հարցերի դեպքում կարող եք կապ հաստատել զանգերի կենտրոնի հետ
            +374 11 555.555 հեռախոսահամարով:
          </li>
        </ul>
      </div>
    </div>
  );
};
