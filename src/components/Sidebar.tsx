import React, { ComponentType, useState } from 'react';
import classNames from 'classnames';
import { Button, IconProps, MoonFilled, Row, SunFilled } from 'phantom-library';
import { Instagram, LinkedIn, Mail } from 'src/assets';
import { useWebsiteContext } from 'src/contexts/useWebsiteContext';
import logo from '../static/images/icons/logo.png';
import signature from '../static/images/icons/signature.png';
import { NavLink } from './NavLink';
import { NavSublinks } from './NavSublinks';
import style from './Sidebar.module.scss';

interface Social {
    platform: string;
    logo: ComponentType<IconProps>;
    handle: string;
    link: string;
}

const Sidebar: React.FC = () => {
    const { sidebar, setSidebar, theme, setTheme, mobile } = useWebsiteContext();

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const hoverSidebar = (hovering: boolean) => {
        if (!mobile) {
            setSidebar(hovering);
        }
    };

    const defaultContactText = 'Contact Me';
    const [contact, setContact] = useState<string>(defaultContactText);

    const assignSocial = (social: Social | null = null) => {
        setContact(social ? social.handle : defaultContactText);
    };

    const socials: Social[] = [
        {
            platform: 'Instagram',
            logo: Instagram,
            handle: '@kamlinphotography',
            link: 'https://instagram.com/kamlinphotography'
        },
        {
            platform: 'LinkedIn',
            logo: LinkedIn,
            handle: 'Kam Lin on LinkedIn',
            link: 'https://www.linkedin.com/in/kam-lin-567670186/'
        },
        {
            platform: 'Email',
            logo: Mail,
            handle: 'kammiea.lin@gmail.com',
            link: 'mailto:kammiealin@gmail.com'
        }
    ];

    const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

    const sidebarClasses = classNames(style.sidebar, {
        [style.closed]: !sidebar
    });

    return (
        <div
            className={sidebarClasses}
            role="presentation"
            onMouseEnter={() => {
                hoverSidebar(true);
            }}
            onMouseLeave={() => {
                hoverSidebar(false);
            }}
        >
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
                <div className={style.socials}>
                    <div className={style.socialsText}>{contact}</div>
                    <Row gap="4px">
                        {socials.map((social) => (
                            <Button key={social.platform} onHover={() => assignSocial(social)} Icon={social.logo} link={social.link} rounded />
                        ))}
                        <Button Icon={theme == 'light' ? SunFilled : MoonFilled} onClick={toggleTheme} rounded />
                    </Row>
                </div>
            </div>
            <div className={style.toggleButton} role="presentation" onClick={toggleSidebar} onKeyDown={toggleSidebar}>
                <img className="logo" src={logo} alt="Toggle Button Logo" />
                <div className={style.visual} />
            </div>
        </div>
    );
};

export { Sidebar };
