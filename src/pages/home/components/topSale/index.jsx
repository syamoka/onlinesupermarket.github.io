import { useSelector } from "react-redux";
import "./styles.scss";

import { newData } from "../productSlider/productSliderSlice";
import { ProductSLider } from "../productSlider";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../productSlider/productSliderSlice";
import { useParams } from "react-router";

export const TopSale = () => {
  const topsalestate = useSelector(newData);
  const dispatch = useDispatch();
  const param = useParams()

  useMemo(() => {
    dispatch(getData());
  }, []);

  const objectResolver = (object) => {
    const re = []
    for (const objectKey in object) {
      const ref = object[objectKey]

      if (Array.isArray(ref)) re.push(...ref)
      else re.push(...objectResolver(ref))
    }
  
    return re
  }
  
  const arrayResolver = (array) => {
    const re = [];
  
    array.forEach(arrayElement => {
      if (Array.isArray(arrayElement)) re.push(...arrayElement)
      else re.push(...objectResolver(arrayElement))
    });
     
    return re;
  }

  const products = arrayResolver(topsalestate)


  return (
    <>
      <div className="topSale-section">
        <div className="topSale-titles">
          <h2 className="topSale-title">
            TOP
            <span>Վաճառքներ</span>
          </h2>
          <a href="#" className="showAll">
            Ցուցադրել բոլորը
          </a>
        </div>

        <ProductSLider
          data={products.filter((item) => item.category === "topsale")}
        />
      </div>
    </>
  );
};
