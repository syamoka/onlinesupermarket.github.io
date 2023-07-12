import ArrowBottomIcon from "../../../../../../../../assets/icons/bottom-arrow.png";
import "./styles.scss";
import { useState } from "react";

export const LoginSlideThree = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="login-slide-three">
      <div
        
        className="login-slide-three-title"
        onClick={()=> setIsOpen(!isOpen)}
      >
        <span>Գաղտնաբառի վերականգնում</span>
        <img src={ArrowBottomIcon} alt="" />
      </div>

      {isOpen && (
        <div className="login-slide-three">
          <div className="login-slide-three-text">
            Եթե մոռացել եք Ձեր գաղտնաբառը, ապա մուտքագրեք Ձեր էլ. փոստի հասցեն և
            սեղմեք «Վերականգնել»: Դրանից հետո կստանաք նամակ, որում ներառված
            հղումը սեղմելով կարող եք շարունակել գաղտնաբառի վերականգնումը
          </div>

          <form action="" className="login-slide-three-form">
            <label htmlFor="">Էլ․ փոստ</label>
            <input type="text" />
            <button className="login-slide-three-btn">Վերականգնել</button>
          </form>
        </div>
      )}
    </div>
  );
};
