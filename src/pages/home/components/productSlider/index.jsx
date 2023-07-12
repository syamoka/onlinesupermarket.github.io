import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

import minusIcon from "../../../../assets/topSale-images/control-button-minus.png";
import plusIcon from "../../../../assets/topSale-images/control-button-plus.png";
import delIcon from "../../../../assets/icons/del.svg";

import {
  incrementCount,
  decrementCount,
  incrementCounter,
  incrementFavoriteCounter,
  deletefromFavorite,
} from "../productSlider/productSliderSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export const ProductSLider = ({ data }) => {
  const dispatch = useDispatch();
  const { isActive, setActive } = useState(false);

  return (
    <div className="productSlider-section">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((el) => {
          return (
            <SwiperSlide className="swiper-item" key={el.id} >
              <span
                className="heart-item1"
                onClick={() => dispatch(incrementFavoriteCounter(el))}
              >
                
              </span>
              <Link to={`/products/${el.id}`} className="swiper-item-link">
                <div className="item-img-parent">
                  <img src={el.image} alt="" className="item-img" />
                </div>
                <div className="item-name">{el.name}</div>
              </Link>

              <div className="item-price">
                <div className="price-container">
                  <div className="price-normal">
                    <span>
                      <strong className="price">{el.price} դր</strong>
                    </span>
                  </div>
                </div>

                <div className="money-to-count">
                  <label htmlFor="" className="money-input-parent">
                    <span
                      className="controlbtn"
                      onClick={() => dispatch(decrementCount(el))}
                    >
                      <img src={minusIcon} alt="" className="minusIcon" />
                    </span>
                    <div className="toCount">{el.count}</div>
                    <span
                      className="controlbtn"
                      onClick={() => dispatch(incrementCount(el))}
                    >
                      <img src={plusIcon} alt="" className="plusIcon" />
                    </span>
                  </label>
                </div>

                <div
                  className="add-parent"
                  onClick={() => dispatch(incrementCounter(el))}
                >
                  <button
                    className="add-button"
                    onClick={() => {
                      setActive(true);
                      dispatch(incrementCounter(el));
                    }}
                  >
                    Ավելացնել
                  </button>
                </div>
              </div>

              {el.count > 1 && (
                <div className="add-to-basket-parent">
                  <div className="add-to-basket">Ավելացրեք զամբյուղի մեջ</div>

                  {isActive && (
                    <div className="inBasket">
                      <span className="quantity">
                        Զամբյուղում՝ <span>{el.count}</span>
                      </span>

                      <a href="#" className="del">
                        <img src={delIcon} alt="" className="del-icon" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
