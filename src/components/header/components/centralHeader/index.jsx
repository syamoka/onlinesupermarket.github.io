import "./styles.scss";

import { HeaderLeft } from "../headerLeft";
import { HeaderSearch } from "../headerSearch";
import { HeaderRight } from "../headerRight";
import { MyShop } from "./components/myShop";

export const CentralHeader = () => {
  return (
    <div className="central-header">
        <HeaderLeft />
        <HeaderSearch />
        <HeaderRight />
        <MyShop />
    </div>
  );
};
