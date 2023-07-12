import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Product } from "./components/product";
import { RightBasket } from "./components/rightBasket";
import "./styles.scss";
import { newData } from "../productSlider/productSliderSlice";
import { useEffect, useState, useMemo } from "react";

import leftArrow from "../../../../assets/icons/leftArrow.png";
import { MarketInResponsive } from "../minimarket/components/marketInResponsive";

export const ProductPage = () => {
  const param = useParams();
  const [mydata, setmydata] = useState(null);
  const data = useSelector(newData);

  const objectResolver = (object) => {
    const re = [];
    for (const objectKey in object) {
      const ref = object[objectKey];

      if (Array.isArray(ref)) re.push(...ref);
      else re.push(...objectResolver(ref));
    }

    return re;
  };

  const arrayResolver = (array) => {
    const re = [];

    array.forEach((arrayElement) => {
      if (Array.isArray(arrayElement)) re.push(...arrayElement);
      else re.push(...objectResolver(arrayElement));
    });

    return re;
  };

  const products = arrayResolver(data);

  useEffect(() => {
    const product = products.map((item) => item.id == param.id);
    console.log(product);
    setmydata([...mydata, ...product]);
  }, [param.id]);

  // console.log(mydata)

  return (
    <div className="product-section">
      <div className="productt">
        <div className="product-catalog-title">
          <a href="/">
            <span className="product-page-resp-arrow">
              <img src={leftArrow} alt="" />
            </span>
            <span>Վերադառնալ ապրանքների</span>
          </a>
        </div>

        <div className="product-page">
          {/* <Product product={mydata} /> */}
          <RightBasket />
        </div>
      </div>

      <MarketInResponsive />
    </div>
  );
};
