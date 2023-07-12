import "./styles.scss";
import minusIcon from "../../../../../../assets/productIcons/minusIcon.png";
import plusIcon from "../../../../../../assets/productIcons/plusIcon.png";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { incrementCounter, incrementCount, decrementCount } from "../../../../../../pages/home/components/productSlider/productSliderSlice";

export const Popup = ({ data}) => {
  const dispatch = useDispatch()

  return (
    <div className="searched-products-section">
      {data.map((item) => {
        return (
          <table className="searched-products-list">
            <tbody>
              <tr className="searched-products-workCount">
                <td className="searched-products-names">
                  <a href="" className="searched-products-alink">
                    <span className="searched-products-img">
                      <img
                        src={item.image}
                        alt=""
                      />
                    </span>

                    <span className="searches-products-info">
                      <span className="searched-products-name">{item.name}</span>
                      <span className="searched-products-category">
                      {item.description}
                      </span>
                    </span>
                  </a>
                </td>

                <td className="searched-products-type">
                  <a href="">
                    <span>{item.description}</span>
                  </a>
                </td>

                <td className="searched-products-price">
                  <span>
                    <strong>{item.price} դր</strong>
                    <span>countfor1kg</span>
                  </span>
                </td>

                <td className="searched-products-count">
                  <div className="searched-products-container">
                    <div className="searched-products-count-parent">
                      <span className="searched-minus"
                       onClick={()=> dispatch(decrementCount(item))} 
                       >
                        <img src={minusIcon} alt="" />
                      </span>
                      <input type="text" value={1} className="searched-input" />
                      <span className="searched-plus" 
                      onClick={()=> dispatch(incrementCount(item))} 
                      >
                        <img src={plusIcon} alt="" />
                      </span>
                    </div>

                    <select name="" id="">
                      <option value="">1 հատ 250 դր</option>
                      <option value=""></option>
                    </select>
                  </div>
                </td>

                <td className="searched-products-button">
                  <input type="button" value="Ավելացնել" 
                  onClick={()=> dispatch(incrementCounter(item))}
                   />
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
