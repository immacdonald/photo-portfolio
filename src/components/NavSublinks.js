import React, { useState, useRef, useEffect } from "react";
import style from "./NavSublinks.module.scss";

const NavSublinks = (props) => {
    const { label, children, starting = true } = props;

    const [sublinksOpen, setSublinksOpen] = useState(starting);
    const [offsetHeight, setOffsetHeight] = useState(null);
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current) {
            if (!offsetHeight) {
                setOffsetHeight(contentRef.current.offsetHeight);
            }
            const height = sublinksOpen ? offsetHeight + 'px' : '0px';
            contentRef.current.style.height = height;
        }
      }, [sublinksOpen, contentRef.current]);

    const toggleSublinks = () => {
        setSublinksOpen(!sublinksOpen);
    }

    return (
        <div className={style.sublinks}>
            <a role="button" onClick={toggleSublinks}>{label}</a>
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    )
}

export default NavSublinks;