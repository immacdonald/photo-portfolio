import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './NavSublinks.module.scss';

interface NavSublinksProps {
    label: string;
    children: ReactNode;
    baseLink: string;
    starting?: boolean;
}

const NavSublinks: React.FC<NavSublinksProps> = ({ label, children, baseLink, starting = true }) => {
    const [sublinksOpen, setSublinksOpen] = useState<boolean>(starting);
    const [offsetHeight, setOffsetHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (!offsetHeight) {
                setOffsetHeight(contentRef.current.offsetHeight);
            }
            const height = sublinksOpen ? `${offsetHeight}px` : '0px';
            contentRef.current.style.height = height;
        }
    }, [sublinksOpen, contentRef, offsetHeight]);

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
            <button type="button" onClick={toggleSublinks} className={getClassName()}>
                {label}
            </button>
            <div ref={contentRef}>{children}</div>
        </div>
    );
};

export { NavSublinks };
