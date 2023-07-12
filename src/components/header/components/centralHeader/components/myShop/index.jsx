import "./styles.scss";
import shoppingBag from "../../../../../../assets/icons/shoppingBag.png";
import { Link } from "react-router-dom";

export const MyShop = () => {
  return (
    <Link to="/orders" className="my-shop">
     <div className="my-shop-parent" >
      <div className="myshop-container" >
        <img src={shoppingBag} alt="" className="my-shop-img" />
        <span className="my-shop-title">Իմ գնումները</span>
      </div>
    </div>
    </Link>
  );
};
