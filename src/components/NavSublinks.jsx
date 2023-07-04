import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './NavSublinks.module.scss';

function NavSublinks(props) {
    const {
        label, children, baseLink, starting = true,
    } = props;

    const [sublinksOpen, setSublinksOpen] = useState(starting);
    const [offsetHeight, setOffsetHeight] = useState(null);
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current) {
            if (!offsetHeight) {
                setOffsetHeight(contentRef.current.offsetHeight);
            }
            const height = sublinksOpen ? `${offsetHeight}px` : '0px';
            contentRef.current.style.height = height;
        }
    }, [sublinksOpen, contentRef.current]);

    const toggleSublinks = () => {
        setSublinksOpen(!sublinksOpen);
    };

    const location = useLocation();

    const getClassName = () => {
        const selected = location.pathname.includes(baseLink) ? style.selected : '';
        const open = sublinksOpen ? style.open : '';
        return `${selected} ${open}`;
    };

    return (
        <div className={style.sublinks}>
            <button type="button" onClick={toggleSublinks} className={getClassName()}>{label}</button>
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
}

export default NavSublinks;
