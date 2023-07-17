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
  const [mydata, setmydata] = useState([]);
  const data = useSelector(newData);
  
 const keys = []
  const objectResolver = (object) => {
    const re = [];

    for (const objectKey in object) {
      const ref = object[objectKey];
  
       if(Object.keys(ref) != param.id || ref.id){
        keys.push(Object.keys(ref))
       }
      if (Array.isArray(ref)) re.push(...ref);
      else re.push(...objectResolver(ref));
    }

    return re
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
console.log(keys)


  useEffect(() => {
    const product = products.filter((item) => item.id == param.id);
    setmydata([...product]);
  }, [param.id]);

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
          <Product product={mydata} />
          <RightBasket />
        </div>
      </div>

      <MarketInResponsive />
    </div>
  );
};
