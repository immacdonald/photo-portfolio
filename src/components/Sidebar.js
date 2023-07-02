import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";
import NavSublinks from "./NavSublinks";

const Sidebar = () => {

    const signature = require("../static/images/icons/signature.png");
    const logo = require("../static/images/icons/logo.png");

    const [open, setOpen] = useState(true)
    const [forceOpen, setForceOpen] = useState(false)

    const toggleButton = () => {
        //setForceOpen(!forceOpen);
        setOpen(!open);
    }

    useEffect(() => {
        const width = (open || forceOpen) ? document.documentElement.style.getPropertyValue("--nav-width-open") : "0px"
        document.documentElement.style.setProperty("--nav-width", width);
    }, [open, forceOpen]);

    return (
    <div className={style.sidebar} /*onMouseEnter={(e) => {setOpen(true)}} onMouseLeave={(e) => {setOpen(false)}}*/>
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
            <div className={style.socials}>
                <div className={style.socialsText}>Contact Me</div>
                <div className={style.socialsLinks}>
                    <div>Text</div>
                    <div>Text</div>
                    <div>Text</div>
                </div>
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