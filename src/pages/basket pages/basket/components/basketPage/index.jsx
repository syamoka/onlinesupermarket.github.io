import { Urls } from "../../../../urls";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { BasketTitle } from "../basketTitle";
import signIcon from "../../../../../assets/productIcons/sign-icon.png";

import {
  basketState,
  deleteProduct,
  incrementSelectedProductCount,
  decrementSelectedProductCount,
} from "../../../../home/components/productSlider/productSliderSlice";

import minusIcon from "../../../../../assets/productIcons/minusIcon.png";
import plusIcon from "../../../../../assets/productIcons/plusIcon.png";
import del from "../../../../../assets/productIcons/del.png";
import { SumNoDelivery } from "../sumNoDelivery";
import rightIcon from "../../../../../assets/icons/right-arrow.png";
import { useState } from "react";
import { newData } from "../../../../home/components/productSlider/productSliderSlice";
import { Link } from "react-router-dom";

export const BasketPage = () => {
  const basket = useSelector(basketState);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const breadcrumbs = [
    {
      id: 1,
      name: "Գլխավոր էջ",
      path: "/",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 2,
      name: "Անձնական էջ",
      path: "/registration",
      img: "https://supermarket.am/images/bread_right.svg",
    },
    {
      id: 3,
      name: "Ձեր զամբյուղը",
      path: "/basket",
    },
  ];

  return (
    <div className="basket-page ">
      <Urls data={breadcrumbs} />
      <BasketTitle />

      <div className="products-wrapper">
        <div className="basket-wrapper">
          <div className="table-header">
            <div className="product-topTitle">Ապրանք</div>
            <div id="price">Գին</div>
            <div id="count" className="prc">
              Քանակ
            </div>
            <div id="totalPrice" className="prc">
              Ընդամենը
            </div>
          </div>

          <div className="basket-top-bar">
            <a href="/basket" className="basket-top-bar-item">
              <span className="basket-top-bar-item">
                <span className="basket-top-bar-item-text">
                  <span>զամբյուղը</span>

                  <img src={rightIcon} alt="" />
                </span>
              </span>
            </a>
            <a href="" className="basket-top-bar-item">
              Մուտք
            </a>
            <a href="/orders" className="basket-top-bar-item">
              Առաքում & վճարում
            </a>
          </div>

          {basket.map((product) => {
            return (
              <div className="product-descr">
                <div className="category-header-parent">
                  <div className="category-header">
                    {product.class} / {product.type}
                  </div>
                </div>

                <div className="product">
                  <Link
                    to={`/products/${product.id}`}
                    className="product-alink"
                  >
                    <div className="img-parent">
                      <img src={product.image} alt="" />
                    </div>
                  </Link>
                  <div className="product-res">
                    <Link
                      to={`/products/${product.id}`}
                      className="product-alink"
                    >
                      <div className="product-name">{product.name}</div>
                    </Link>

                    <div className="product-ress">
                      <div className="product-price">{product.price} դր</div>

                      <div className="quant">
                        <span
                          className="minus-parent productIcons"
                          onClick={() =>
                            dispatch(decrementSelectedProductCount(product))
                          }
                        >
                          <img src={minusIcon} alt="" />
                        </span>

                        <span className="product-count">
                          <input type="text" value={product.count} />
                        </span>

                        <span
                          className="plus-parent productIcons"
                          onClick={() =>
                            dispatch(incrementSelectedProductCount(product))
                          }
                        >
                          <img src={plusIcon} alt="" />
                        </span>
                      </div>

                      <div className="total"> {product.totalPrice} դր</div>

                      <div className="product-comment">
                        <span
                          onClick={() => setIsOpen(true)}
                          className={isOpen ? "sign-is-closed" : "sign-is-open"}
                        >
                          <img src={signIcon} alt="" />
                          Նշում ապրանքի վերաբերյալ
                        </span>
                        {isOpen && (
                          <textarea className="fav-product-comment"></textarea>
                        )}
                      </div>
                    </div>
                    <div className="actions">
                      <span
                        className="del"
                        onClick={() => dispatch(deleteProduct(product))}
                      >
                        <a href="#">
                          <img src={del} alt="" className="del-icon" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SumNoDelivery />
      </div>
    </div>
  );
};
