import "./styles.scss";

import { NavLink } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-body">
        <ul>
          <li className="topnav-list">
            <NavLink to="/about" className="topnav-link">
              Online Supermarket-ի մասին
            </NavLink>
          </li>

          <li className="topnav-list">
            <NavLink to="#" className="topnav-link">
              Թափուր աշխատատեղեր
            </NavLink>
          </li>

          <li className="topnav-list">
            <NavLink to="#" className="topnav-link">
              Հաճախորդների կարծիքներ
            </NavLink>
          </li>

          <li className="topnav-list">
            <NavLink to="#" className="topnav-link">
              Կապ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
