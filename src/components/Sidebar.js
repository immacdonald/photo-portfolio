import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";
import NavSublinks from "./NavSublinks";

const Sidebar = () => {

    const logo = require("../static/images/icons/logo.png");

    return (
    <div className={style.sidebar}>
        <div className={style.sidebarContent}>
            <div className={style.navigation}>
                <nav className={style.links}>
                    <NavLink label="Home" link="/"/>
                    <NavLink label="Bio" link="/biography"/>
                    <NavSublinks label="WORKS" starting={true}>
                        <NavLink label="ORION" link="/orion"/>
                        <NavLink label="GALAXY" link="/galaxy"/>
                    </NavSublinks>
                    <NavLink label="CV" link="/cv"/>
                </nav>
            </div>
        </div>
        <div className={style.toggleButton}>
            <img src={logo}/>
            <div className={style.visual}></div>
        </div>
    </div>
  )
};

export default Sidebar;