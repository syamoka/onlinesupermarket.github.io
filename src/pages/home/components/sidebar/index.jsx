import "./styles.scss";
import { useSelector } from "react-redux";
import { sidebardata } from "./sidebarSlice";
import { useState } from "react";
import { SideBarPopUp } from "./components/sidebarPopup";
import iconSub from "../../../../assets/icons/icon-sub.svg";
import { newData } from "../productSlider/productSliderSlice";

export const Sidebar = () => {
  const sidebarList = useSelector(sidebardata);
  const [isHovered, setIsHovered] = useState({});
  const data = useSelector(newData)

  const objectResolver = (object) => {
    const re = []
    for (const objectKey in object) {
      const ref = object[objectKey]
  
      if (Array.isArray(ref)) re.push(...ref)
      else re.push(...objectResolver(ref))
    }
    return re
  }
  
  const arrayResolver = (array) => {
    const re = [];
  
    array.forEach(arrayElement => {
      if (Array.isArray(arrayElement)) re.push(...arrayElement)
      else re.push(...objectResolver(arrayElement))
    });
     
    return re;
  }

  const products = arrayResolver(data)
   
  return (
    <div className="sidebar">
      <div className="sidebar-ul">
        {sidebarList.map((list, index) => {
          return (
            <>
              <li
                key={list.id}
                className="sidebar-list"
                onMouseEnter={() => {
                  if (index >= 2) {
                    setIsHovered(list);
                  }
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (isHovered === list) {
                      setIsHovered(null);
                    }
                  }, 3000);
                }}
              >
                <a href="#" id="sidebarLink">
                  <img src={list.icon} className="sidebar-icon" />
                  <div className="sidebar-text">{list.title}</div>
                </a>
               
                {isHovered && (
                  <span>
                    <img src={iconSub} alt="" className="icon-sub" />
                  </span>
                )}
              </li>
              {/* {isHovered && <SideBarPopUp  />} */}
              {/* {console.log(isHovered)} */}
         
            </>
          );
        })}
      </div>
    </div>
  );
};
