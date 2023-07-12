import "./styles.scss";
import { useState } from "react";
import { Urls } from "../../urls";
import onlineSweetCover from "../../../assets/productIcons/onlinesweetcover.jpg";
import { RightBasket } from "../components/product page/components/rightBasket";
import { FiltredProductNav } from "./components/filtredProductsNav";
import { ProductsFiltred } from "./components/productsFiltred";
import { newData } from "../components/productSlider/productSliderSlice";
import { useSelector } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const FiltredProduct = () => {
  const data = useSelector(newData)
  const param = useParams();
  const [mydata, setmydata] = useState([]);

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

  const filtredProducts = arrayResolver(data)

  useEffect(() => {
    const product = filtredProducts.filter((item) => item.category === param.category);
    setmydata([...mydata, ...product]);
  }, [param.category]);

  console.log(mydata)

  return (
    <div className="filtred-products-page-contanier">
      <div className="filtred-products-page">
        <div className="urls-container">
          {/* <Urls /> */}
        </div>

        <div className="filtred-products-img">
          <img src={onlineSweetCover} alt="" />
        </div>

        <div className="filtred-products-wrapper">
          <div className="filtred-products-section">
            <h1>Տորթ, խմորեղեն</h1>

            <div className="filtred-products-parent">
              <FiltredProductNav />
              <ProductsFiltred products={filtredProducts}  />
            </div>
          </div>

          <RightBasket />
        </div>
      </div>
    </div>
  );
};
