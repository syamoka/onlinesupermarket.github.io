
import "./styles.scss"

import armFlag from "../../../../../../../../assets/icons/arm-flag.png";
import arrowbottom from "../../../../../../../../assets/icons/arrow-bottom.png";

export const RegistrationTel = () => {
  return (
    <div className="registration-inputs-parent">
      <label htmlFor="">Հեռախոսահամարը</label>
      <div className="registr-tel-parent">
        <div className="registr-arm-flag">
          <img src={armFlag} alt="" className="arm-flag" />
          <img src={arrowbottom} alt="" className="arm-flag-arrow" />
        </div>

        <ul className="registr-tel-countries">
          <li className="registr-tel-list">
            <div>
              <img src={armFlag} alt="" className="arm-flag" />
            </div>

            <span>Armenia</span>
            <span>+</span>
          </li>

          <li className="registr-tel-list">
            <div>
              <img src={armFlag} alt="" className="arm-flag" />
            </div>

            <span>Armenia</span>
            <span>+</span>
          </li>

          <li className="registr-tel-list">
            <div>
              <img src={armFlag} alt="" className="arm-flag" />
            </div>

            <span>Armenia</span>
            <span>+</span>
          </li>

          <li className="registr-tel-list">
            <div>
              <img src={armFlag} alt="" className="arm-flag" />
            </div>

            <span>Armenia</span>
            <span>+</span>
          </li>

          <li className="registr-tel-list">
            <div>
              <img src={armFlag} alt="" className="arm-flag" />
            </div>

            <span>Armenia</span>
            <span>+</span>
          </li>
        </ul>
      </div>

      <input type="text" placeholder="+37477123456" />
    </div>
  );
};
