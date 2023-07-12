import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./styles.scss";
import { minimarketState } from "../../../productSlider/productSliderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FourBanner } from "../../../../../../components/footer/components/fourBanner";

export const MarketInResponsive = () => {
  const minimarketData = useSelector(minimarketState);
  return (
    <>
      <div className="market-in-resp">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {minimarketData.map((item) => {
            return (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <Link to={`/products/${item.id}`} className="swiper-item-link">
                  <div className="swiper-slide img">
                    <img src={item.image} alt="" className="swiper-item-img" />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <FourBanner />
    </>
  );
};
