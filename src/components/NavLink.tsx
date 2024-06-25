import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './NavLink.module.scss';

interface NavLinkProps {
    label: string;
    link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, link }) => {
    const location = useLocation();

    return (
        <div className={style.link + (link === location.pathname ? ` ${style.selected}` : '')}>
            <Link to={link}>{label}</Link>
        </div>
    );
};

export { NavLink };
