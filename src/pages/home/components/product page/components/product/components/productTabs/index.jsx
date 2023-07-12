import { useState } from "react";
import "./styles.scss";
import arrowLeft from "../../../../../../../../assets/icons/arrow-bottom.png";

export const ProductTabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="product-tabs-resp">
        <div
          className="product-tabs-resp-head"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="product-tabs-resp-parent">
            <span>Մանրամասներ</span>
            {
                    isOpen ? (
                      <img src={arrowLeft} alt="" className="arrow-up-resp" />
                    ) : (
                      <img src={arrowLeft} alt="" />
                    )
                   }
          </div>
        </div>

        {isOpen && (
          <div className="product-tabs-resp-body">
            <table>
              <tbody>
                <tr className="product-tabs-resp-item">
                  <td className="product-tabs-resp-item1">Արտադրման երկիր</td>
                  <td className="product-tabs-resp-item1">Հայաստան</td>
                </tr>
                <tr className="product-tabs-resp-item">
                  <td>aa</td>
                  <td>bb</td>
                </tr>
                <tr className="product-tabs-resp-item">
                  <td>aa</td>
                  <td>bb</td>
                </tr>
                <tr className="product-tabs-resp-item">
                  <td>aa</td>
                  <td>bb</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="product-tabs">
        <ul className="product-head">
          <li className="selected" rel="1">
            <a href="">Մանրամասներ</a>
          </li>
          <li rel="2">
            <a href="">Պահպանման եղանակը</a>
          </li>
        </ul>

        <div className="product-body">
          <table>
            <tbody>
              <tr className="product-body-item">
                <td>Արտադրման երկիր</td>
                <td>Հայաստան</td>
              </tr>
              <tr className="product-body-item">
                <td>aa</td>
                <td>bb</td>
              </tr>
              <tr className="product-body-item">
                <td>aa</td>
                <td>bb</td>
              </tr>
              <tr className="product-body-item">
                <td>aa</td>
                <td>bb</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
