import React from "react";
import './layout.scss';
import './style.scss'
const Layout = (props)=>{
    return(
        <div className={`wrapper ${props.className ||''}`.trim()}>
            {props.children}
        </div>
    )
};

export default Layout;