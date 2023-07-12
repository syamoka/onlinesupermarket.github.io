import { Aside } from "../aside";
import { Main } from "../main";
import "./styles.scss";

export const Outer = () => {
  return (
    <div className="outer-section">
      <div className="outer">
        <div className="outer-parent">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
};
