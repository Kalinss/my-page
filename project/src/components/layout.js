import React from "react";
import './layout.scss';
import './style.scss'
import Header from "./header";
const Layout = (props)=>{
    return(
        <div className={`wrapper ${props.className ||''}`.trim()}>
            <Header/>
            {props.children}
        </div>
    )
};

export default Layout;