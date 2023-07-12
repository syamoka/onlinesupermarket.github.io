import "./styles.scss";
import { Urls } from "../../../../../urls";
import { ProductPrice } from "./components/productPrice";
import { ProductTabs } from "./components/productTabs";
import { ProductTopDetails } from "./components/productTopDetails";
import { ProductImage } from "./components/productImage";

export const Product = ({ product }) => {
  return (
    <div className="product-wrapper">
      {/* <Urls /> */}
      <div className="product-parent">
        <ProductImage data={product} />

        <div className="product-details">
          <div className="product-top-details-resp">
            <ProductTopDetails data={product} />
            <ProductPrice data={product} />
          </div>
          <ProductTabs data={product} />
        </div>
      </div>
    </div>
  );
};
