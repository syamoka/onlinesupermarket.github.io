import { useState } from "react";
import "./styles.scss";
import ArrowBottomIcon from "../../../../../../../../assets/icons/bottom-arrow.png";

export const LoginSliderOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="loginSlideOne-parent">
      <div
        className="responsive-loginOne-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Մուտք</span>

        <img src={ArrowBottomIcon} alt="" />
      </div>

      {isOpen && (
        <div className="loginSLideOne">
          <div className="responsive-loginOne-input-parent">
            <div className="responsive-loginOne-form">
              <form action="">
                <label htmlFor="">Էլ․ փոստ</label>
                 <input type="email" name="" id="" />
                <label>Գաղտնաբառ</label>
                <input type="password" name="" id="" />
              </form>
            </div>

            <a href="" className="responsive-loginOne-btn">
              Մուտք
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
