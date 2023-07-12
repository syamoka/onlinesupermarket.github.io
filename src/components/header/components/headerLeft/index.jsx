
import logo from "../../../../assets/icons/logo.svg";

export const HeaderLeft = () => {
  return (
    <div className="header-left">
      <div className="logo">
        <a className="logo-link" href="/">
          <img src={logo} alt="" />
        </a>
      </div>
    </div>
  );
};
