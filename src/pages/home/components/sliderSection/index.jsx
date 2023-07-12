import "./styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import adsImage from "../../../../assets/slider-section-images/ads-image.jpg";
import sliderImg1 from "../../../../assets/slider-section-images/sliderImg1.jpg";
import sliderImg2 from "../../../../assets/slider-section-images/sliderImg2.jpg";
import sliderImg4 from "../../../../assets/slider-section-images/sliderImg4.jpg";
import sliderImg5 from "../../../../assets/slider-section-images/sliderImg5.jpg";

export const SliderSection = () => {
  return (
    <div className="slider-wrapper">
      <div className="top-slider">
        <div className="slider-parent">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={sliderImg1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg4} alt="" />3
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="ads-parent">
          <img src={adsImage} alt="" />
        </div>
      </div>
    </div>
  );
};
