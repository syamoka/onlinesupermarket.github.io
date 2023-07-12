import "./styles.scss";

import searchIcon from "../../../../assets/icons/searchIcon.png";
import searchDeleteIcon from "../../../../assets/icons/search-delete-icon.png";
import { useState } from "react";
import { Popup } from "./components/popup";
import { newData } from "../../../../pages/home/components/productSlider/productSliderSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const HeaderSearch = () => {
  const [value, setValue] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const data = useSelector(newData);
  const [mydata, setmydata] = useState([]);

  const objectResolver = (object) => {
    const re = [];

    for (const objectKey in object) {
      const ref = object[objectKey];
      if (Array.isArray(ref)) re.push(...ref);
      else re.push(...objectResolver(ref));
    }

    return re;
  };

  const arrayResolver = (array) => {
    const re = [];

    array.forEach((arrayElement) => {
      if (Array.isArray(arrayElement)) re.push(...arrayElement);
      else re.push(...objectResolver(arrayElement));
    });

    return re;
  };

  const products = arrayResolver(data);


  useEffect(() => {
    setmydata(() => {
      const filteredData = products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      return [...filteredData];
    });
  }, [value]);

  return (
    <div className="header-search-parent">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setisOpen(true);
        }}
        className="top-search-form"
      >
        <div className="search-parent">
          <a href="#" className="search-icon-parent">
            <img src={searchIcon} alt="" className="search-icon" />
          </a>

          <label className="search-input-parent">
            <input
              className="search-input"
              type="text"
              name="search"
              value={value}
              autoComplete="off"
              placeholder="Մուտքագրեք ապրանքի անունը կամ ապրանքանիշը"
              onChange={(event) => setValue(event.target.value)}
            ></input>
          </label>
        </div>

        {value && (
          <span className="search-delete-button" onClick={()=> setValue("")} >
            <img src={searchDeleteIcon} alt="" className="search-delete-icon" />
          </span>
        )}
      </form>
      {isOpen && value && <Popup data={mydata} />}
    </div>
  );
};
