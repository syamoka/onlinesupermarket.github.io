

import { useEffect, useState } from "react";
import React from "react";
import "./styles.scss";

import scrollTop from "../../assets/icons/scrolltop.png";


export function ScrollToTop() {

    const [show, setShow] = useState(false);

    useEffect(()=> {
       window.onscroll = ()=> {
           setShow(window.scrollY > 35 )
        
       }
    }, [])


    const handleCLick = ()=>{
            window.scrollTo(0,0)
    }

    return <button id="to-top" className={` ${show ? 'P-show-scroll':''}`} onClick={handleCLick}>
          <img src={scrollTop} alt="" className="srolltop-img"  />
        </button>
      
  

}