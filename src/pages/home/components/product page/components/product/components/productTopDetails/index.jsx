import { useState } from "react";
import arrowLeft from "../../../../../../../../assets/icons/arrow-bottom.png";

export const ProductTopDetails = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-top-details">
            <div>
              <span className="product-heartIcon">heart</span>
              <h1 className="product-name">{item.name}</h1>
            </div>
            <div className="fav-resp">
              <i className="fav-resp-img"></i>
              <span>Ավելացնել սիրելի</span>
            </div>
            <div className="product-category-parent">
              <a href="" className="product-category">
                {item.category}
              </a>
            </div>

            <div className="product-description">
              <p>Դասական, բնական հանքային ջուր</p>
            </div>

            <div className="product-description-resp">
              <div
                className="product-description-title-resp"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="product-description-resp-parent">
                  <span>նկարագրություն</span>
                   {
                    isOpen ? (
                      <img src={arrowLeft} alt="" className="arrow-up-resp" />
                    ) : (
                      <img src={arrowLeft} alt="" />
                    )
                   }
                </div>
              </div>

              {isOpen && <p>Դասական, բնական հանքային ջուր</p>}
            </div>
          </div>
        );
      })}
    </>
  );
};
