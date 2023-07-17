import "./styles.scss";
import { useSelector } from "react-redux";
import { ProductSLider } from "../productSlider";
import { newData } from "../productSlider/productSliderSlice";
import { useEffect } from "react";
import { useState } from "react";

export const Novelty = () => {
  const noveltyData = useSelector(newData);
  const [products, setProducts] = useState([])

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

  useEffect(()=> {
    const data = arrayResolver(noveltyData).filter((item) => item.category === "novelty");
    setProducts(data)
  }, [])

  return (
    <div className="novelty-section">
      <div className="novelty-section-titles">
        <h2 className="novelty-section-title">Նորույթներ</h2>
        <a href="#" className="showAll">
          Ցուցադրել բոլորը
        </a>
      </div>
      <ProductSLider
        data={products}
      />
    </div>
  );
};
