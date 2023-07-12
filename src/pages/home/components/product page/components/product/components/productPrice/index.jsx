import "./styles.scss";
import minusIcon from "../../../../../../../../assets/productIcons/minusIcon.png";
import plusIcon from "../../../../../../../../assets/productIcons/plusIcon.png";

export const ProductPrice = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-workCount">
            <div className="product-price-container">
              <div className="price-normal">
                <span>
                  <strong>{item.price}դր</strong>
                </span>
              </div>

              <div className="product-controlButton">
                <span>
                  <img src={minusIcon} alt="" />
                </span>
                <input type="text" value="1" />
                <span>
                <img src={plusIcon} alt="" />
                </span>
              </div>

              <div className="product-addbtn">
                <input type="button" value="Ավելացնել" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
