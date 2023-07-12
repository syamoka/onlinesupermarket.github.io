import { favoriteCounter } from "../productSlider/productSliderSlice";
import { EmptyFavorite } from "./emptyFavorite";
import { Favorite } from "./favorite";
import { RightBasket } from "../product page/components/rightBasket";
import "./styles.scss";
import { useSelector } from "react-redux";

export const FavoritePage = () => {
  const favoritecounter = useSelector(favoriteCounter);

  return (
    <div className="favorite-sections">
      <div className="favorite ">
        <div className="favorite-parent">
          {favoritecounter !== 0 ? <Favorite /> : <EmptyFavorite />}
          <RightBasket />
        </div>
      </div>
    </div>
  );
};
