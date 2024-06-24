import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import style from './Sidebar.module.scss';
import NavLink from './NavLink';
import NavSublinks from './NavSublinks';
import { WebsiteContext } from '../contexts/WebsiteContext';
//import { Bulb, LinkedIn, Instagram, Mail } from '../assets/index';

import signature from '../static/images/icons/signature.png';
import logo from '../static/images/icons/logo.png'

function Sidebar() {
    const {
        sidebar, setSidebar, theme, setTheme, mobile,
    } = useContext(WebsiteContext);

    // Sidebar can be controlled via hover or click
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const hoverSidebar = (hovering) => {
        if (!mobile) {
            setSidebar(hovering);
        }
    };

    // Social media buttons dynamically set the display and link text
    const defaultContactText = 'Contact Me';
    const [contact, setContact] = useState(defaultContactText);
    const [contactLink, setContactLink] = useState(null);
    const assignSocial = (social = null) => {
        setContact(social ? social.handle : defaultContactText);
        setContactLink(social ? social.link : null);
    };

    const visitSocial = () => {
        if (contactLink != null) {
            window.open(contactLink, '_blank', 'noopener,noreferrer');
        }
    };

    const socials = [
        {
            platform: 'Instagram',
            logo: null, //<Instagram />,
            handle: '@kamlinphotography',
            link: 'https://instagram.com/kamlinphotography',
        },
        {
            platform: 'LinkedIn',
            logo: null, //<LinkedIn />,
            handle: 'Kam Lin on LinkedIn',
            link: 'https://www.linkedin.com/in/kam-lin-567670186/',
        },
        {
            platform: 'Email',
            logo: null, //<Email />,
            handle: 'kammiea.lin@gmail.com',
            link: 'mailto:kammiealin@gmail.com',
        },
    ];

    const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
    const oppositeTheme = (currentTheme) => {
        if (currentTheme === 'light') {
            return 'dark';
        }
        return 'light';
    };

    // Sidebar changes style based on if it is in an open or closed state
    const sidebarClasses = classNames(
        style.sidebar,
        {
            [style.closed]: !sidebar,
        },
    );

    return (
        <div className={sidebarClasses} onMouseEnter={() => { hoverSidebar(true); }} onMouseLeave={() => { hoverSidebar(false); }}>
            <div className={style.sidebarContent}>
                <div className={style.signature}>
                    <img src={signature} alt="Kam's Signature" />
                </div>
                <div className={style.navigation}>
                    <nav className={style.links}>
                        <NavLink label="Home" link="/" />
                        <NavLink label="Biography" link="/biography" />
                        <NavSublinks label="Works" baseLink="/works" starting>
                            <NavLink label="Orion" link="/works/orion" />
                            <NavLink label="Tub" link="/works/tub" />
                        </NavSublinks>
                        <NavLink label="CV" link="/cv" />
                    </nav>
                </div>
                <div className={style.socials} role="presentation" onClick={visitSocial} onKeyDown={visitSocial} onMouseLeave={() => assignSocial()}>
                    <div className={style.socialsText}>{contact}</div>
                    <div className={style.socialsLinks}>
                        {socials.map((social) => (
                            <div className={style.iconButton} key={social.platform} onMouseEnter={() => assignSocial(social)}>
                                <div className={style.icon}>
                                    {social.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.theme} role="presentation" onClick={toggleTheme} onKeyDown={toggleTheme}>
                    <div className={style.themeInner}>
                        <div className={style.themeToggle}>
                            {/*<Bulb />*/}
                        </div>
                        <div className={style.themeLabel}>
                            {`Toggle ${oppositeTheme(theme)} Theme`}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.toggleButton} role="presentation" onClick={toggleSidebar} onKeyDown={toggleSidebar}>
                <img className="logo" src={logo} alt="Toggle Button Logo" />
                <div className={style.visual} />
            </div>
        </div>
    );
}

export default Sidebar;
