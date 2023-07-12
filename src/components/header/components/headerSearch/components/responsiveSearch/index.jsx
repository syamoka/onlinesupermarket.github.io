import "./styles.scss";
import arrowLeft from "../../../../../../assets/icons/arrow-back.png";
import { MarketInResponsive } from "../../../../../../pages/home/components/minimarket/components/marketInResponsive";

export const ResponsiveSearch = () => {
  return (
    <>
    <div className="search-page">
      <div className="search-title">
        <span>
          <a href="">
            <img src={arrowLeft} alt="svg" />
          </a>
          <h1>Մաքրել</h1>
        </span>
      </div>

      <div className="search-content">
        <form>
          <input
            type="text"
            placeholder="Մուտքագրեք ապրանքի անունը կամ ապրանքանիշը"
            className="search-content-input"
          />

          <div className="search-content-price-parent">
            <span className="search-content-price-title">Գինը</span>
            <input type="text" className="search-content-price from" />
            <span className="search-content-explanation">-</span>
            <input type="text" className="search-content-price to" />
          </div>

          <input type="button" value="Գտնել" className="search-content-btn" />
        </form>
      </div>
    </div>
    
    <MarketInResponsive />
    </>
  );
};
