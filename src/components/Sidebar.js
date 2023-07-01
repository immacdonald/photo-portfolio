import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
    const [sublinksOpen, setSublinksOpen] = useState(true);
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current) {
          const height = sublinksOpen ? contentRef.current.scrollHeight + 'px' : '0px';
          contentRef.current.style.height = height;
        }
      }, [sublinksOpen]);

    const toggleSublinks = () => {
        setSublinksOpen(!sublinksOpen);
    }



    return (
    <div className={style.sidebar}>
        <div className={style.sidebarContent}>
            <div className={style.navigation}>
                <nav className={style.links}>
                    <div className={style.link}>
                        <Link to="/">HOME</Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/bio">BIO</Link>
                    </div>
                    <div className={style.sublinks} onClick={toggleSublinks}>
                        <a role="button">WORKS</a>
                        <div ref={contentRef}>
                            <div className={style.link}>
                                <Link to="/orion">ORION</Link>
                            </div>
                            <div className={style.link}>
                                <Link to="/tub">TUB</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.link}>
                        <Link to="/cv">CV</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
};

export default Sidebar;