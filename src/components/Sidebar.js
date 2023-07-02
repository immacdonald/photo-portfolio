import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";
import NavSublinks from "./NavSublinks";

const Sidebar = () => {

    const signature = require("../static/images/icons/signature.png");
    const logo = require("../static/images/icons/logo.png");

    const [open, setOpen] = useState(true)
    const [forceOpen, setForceOpen] = useState(true)

    const toggleButton = () => {
        setForceOpen(!forceOpen);
    }

    useEffect(() => {
        const width = (open || forceOpen) ? "128px" : "0px"
        document.documentElement.style.setProperty("--nav-width", width);
    }, [open, forceOpen]);

    return (
    <div className={style.sidebar} onMouseEnter={(e) => {setOpen(true)}} onMouseLeave={(e) => {setOpen(false)}}>
        <div className={style.sidebarContent}>
            <div className={style.signature}>
                <img src={signature}/>
            </div>
            <div className={style.navigation}>
                <nav className={style.links}>
                    <NavLink label="Home" link="/"/>
                    <NavLink label="Bio" link="/biography"/>
                    <NavSublinks label="Works" baseLink="/works" starting={true}>
                        <NavLink label="Orion" link="/works/orion"/>
                        <NavLink label="Galaxy" link="/works/galaxy"/>
                    </NavSublinks>
                    <NavLink label="CV" link="/cv"/>
                </nav>
            </div>
        </div>
        <div className={style.toggleButton} onClick={toggleButton}>
            <img className="logo" src={logo}/>
            <div className={style.visual}></div>
        </div>
    </div>
  )
};

export default Sidebar;