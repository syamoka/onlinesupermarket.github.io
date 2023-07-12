import "./styles.scss";
import favoriteIcon from "../../../../../assets/icons/favorite.png";
import minusIcon from "../../../../../assets/productIcons/minusIcon.png";
import plusIcon from "../../../../..//assets/productIcons/plusIcon.png";
import {
  incrementFavoriteCounter,
  incrementCount,
  decrementCount,
  incrementCounter,
  deletefromFavorite,
  counter
} from "../../../components/productSlider/productSliderSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductsFiltred = ({ products }) => {
  const dispatch = useDispatch();
  const basketCount = useSelector(counter)
  
  return (
    <div className="filtred-products-container">
      {products.map((item) => {
        return (
          <div className="filtred-product-parent">
            <div className="filtred-product-image-parent">
              <div
                className="favicon"
                onClick={() => dispatch(incrementFavoriteCounter(item))}
              >
                <img
                  src={favoriteIcon}
                  alt=""
                  className="filtred-product-fav"
                  onClick={() => dispatch(deletefromFavorite(item))}
                />
              </div>

              <a href={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt=""
                  className="filtred-product-image"
                />
              </a>
            </div>

            <div className="filtred-product-res">
              <a href={`/products/${item.id}`} className="filtred-product-name">
                {item.name}
              </a>

              <div className="filtred-product-price-container">
                <div className="filtred-product-price">
                  <strong>{item.price} դր</strong>
                </div>

                <div className="filtred-product-controlbtn">
                  <span 
                  onClick={() => dispatch(decrementCount(item))} className="minus-parent"
                  >
                    <img src={minusIcon} alt="" />
                  </span>
                  <span className="filtred-product-text-input">
                    <input type="text" value={item.count} />
                  </span>
                  <span 
                  onClick={() => dispatch(incrementCount(item))} className="plus-parent"
                  >
                    <img src={plusIcon} alt="" />
                  </span>
                </div>

                <button
                  className="filtred-product-input"
                  onClick={() => dispatch(incrementCounter(item))}
                >
                  Ավելացնել
                </button>
                  

                  {/* {
                     basketCount > 1 && (
                      <div className="action-msg">Ավելացրեք «զամբյուղի» մեջ</div>
                     )
                  } */}
              
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
