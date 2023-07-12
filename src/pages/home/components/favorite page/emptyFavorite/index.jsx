import { Urls } from "../../../../urls";

import "./styles.scss";
import { RightBasket } from "../../product page/components/rightBasket";

import favorteIcon from "../../../../../assets/icons/favorite.png";

export const EmptyFavorite = () => {
  return (
    <div className="empty-favorite-page">
      <Urls />

      <div className="empty-favorite-wrapper">
        <div className="empty-favorite">
          <h1>Նախընտրածների ցուցակ</h1>

          <div className="empty-favorite-content">
            <div>
              Նախընտրածներ բաժինը դեռ դատարկ է Ապրանքը որպես նախընտրած
              ավելացնելու համար ապրանքի էջում սեղմեք
              <span>
                <img src={favorteIcon} alt="" />
              </span>
              նշանի վրա:
            </div>
          </div>
        </div>

        <RightBasket />
      </div>
    </div>
  );
};
