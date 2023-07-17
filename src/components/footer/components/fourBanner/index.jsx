import "./styles.scss";

import fourBanner1 from "../../../../assets/fourBanner-images/footer_icon1.png";
import fourBanner2 from "../../../../assets/fourBanner-images/footer_icon2.png";
import fourBanner3 from "../../../../assets/fourBanner-images/footer_icon3.png";
import fourBanner4 from "../../../../assets/fourBanner-images/footer_icon4.png";
import { useSelector } from "react-redux";
import { fourBannerState } from "../../../../pages/home/components/productSlider/productSliderSlice";
import { useState } from "react";
import { useEffect } from "react";

export const FourBanner = () => {
  const fourBannerdata = useSelector(fourBannerState);
  const [isVisisble, setIsVisilble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150 && currentScrollY < 3150) {
        setIsVisilble(true);
      } else {
        setIsVisilble(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fourBanner = [
    {
      id: 1,
      title: "Առաքում և վճարում",
      image: fourBanner1,
      page: "deliveryPayment",
    },

    {
      id: 2,
      title: " Հայաստանո՞ւմ չեք",
      image: fourBanner2,
      page: "abroad",
    },

    {
      id: 3,
      title: " Նորություններ",
      image: fourBanner3,
    },

    {
      id: 4,
      title: "  Առաջարկներ և բողոքներ",
      image: fourBanner4,
      page: "SuggestAndComplaints",
    },
  ];

  return (
    <>
      <div className="fourBanner-container main-banner">
        <div className="fourBanner-parent">
          {isVisisble && (
            <div className="four-banner">
              <div className="marks-nav">
                {fourBanner.map((banner) => {
                  return (
                    <a href="" className="markk" key={banner.id}>
                      <img src={banner.image} alt="" className="bannerImage" />
                      <div className="banner-title">{banner.title}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
         
        <div className="marks-fix">
          {fourBanner.map((banner) => {
            return (
              <div key={banner.id}>
                <a href="" className="mark">
                  <img src={banner.image} alt="" className="banner-image" />
                  <div className="bannerTitle">{banner.title}</div>
                </a>
                <div className="banner-title-in-resp">{banner.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
