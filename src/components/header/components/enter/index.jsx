import "./styles.scss";

import personIcon from "../../../../assets/icons/personIcon.svg";
import enterDelIcon from "../../../../assets/icons/enter-del-icon.png";
import { useState } from "react";

export const Enter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="enter">
     <div className="enter-head" >
        <div className="enter-head-parent" onClick={()=> setIsOpen(!isOpen)}>
          <a href="/orders">
          <img src={personIcon} alt="" />
          </a>
          <span>Մուտք և գրանցում</span>
        </div>
      </div>
   

      {isOpen && (
        <div className="enter-body">
          <div className="enter-body-parent">
            <img src={enterDelIcon} alt="" onClick={()=> setIsOpen(false)} />

            <form action="#">
              <ul className="enter-form-ul">
                <li className="enter-form-list">
                  <label>Էլ․փոստ</label>
                  <div className="enter-input-parent">
                    <input type="text" />
                  </div>
                </li>

                <li className="enter-form-list">
                  <label>Գաղտնաբառ </label>
                  <div className="enter-input-parent">
                    <input type="password" name="" id="" />
                  </div>
                </li>

                <li className="enter-form-list">
                  <div className="enter-form-submit">
                    <input
                      type="submit"
                      value="ՄՈՒՏՔ"
                      className="enter-submit"
                    />
                  </div>
                </li>

                <a href="/forgotten" className="enter-form-forgetten-password">
                  Մոռացե՞լ եք գաղտնաբառը
                </a>

                <a href="/registration" className="registr">
                  Գրանցում
                </a>
              </ul>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
