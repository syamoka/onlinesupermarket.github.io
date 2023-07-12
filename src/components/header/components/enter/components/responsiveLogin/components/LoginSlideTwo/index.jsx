import ArrowBottomIcon from "../../../../../../../../assets/icons/bottom-arrow.png";
import { useState } from "react";
import "./styles.scss";
import armFlagIcon from "../../../../../../../../assets/icons/arm-flag.png";

export const LoginSlideTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="loginSlideTwo-parent">
      <div
        className="responsive-loginTwo-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Գրանցում</span>

        <img src={ArrowBottomIcon} alt="" />
      </div>

      {isOpen && (
        <div className="loginSLideTwo">
          <div className="responsive-loginTwo-input-parent">
            <div className="responsive-loginTwo-form">
              <form action="">
                <label htmlFor="">Որտե՞ղ եք բնակվում:</label>
                <select name="" id="">
                  <option value="">aa</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>

                <label htmlFor="">
                  Որտեղի՞ց եք իմացել supermarket.am - ի մասին:
                </label>
                <select name="" id="">
                  <option value="">bb</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>

                <label htmlFor="">Էլ. փոստ:</label>
                <input type="email" name="" id="" />

                <label htmlFor="">Հեռախոսահամարը:</label>
                <div className="responsive-login-tel-parent">
                  {/* <img src={armFlagIcon} alt=""  className="responsive-login-tel" /> */}
                  <input type="tel" name="" id="" value="+374 77 123456" />
                </div>

                <label htmlFor="">Գաղտնաբառ:</label>

                <input type="password" name="" id="" />

                <label htmlFor="">Կրկնել գաղտնաբառը:</label>
                <input type="password" name="" id="" />
              </form>

              <a href="" className="responsive-loginTwo-btn">
                Գրանցում
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
