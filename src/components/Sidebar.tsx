import React, { ComponentType, useState } from 'react';
import classNames from 'classnames';
import { Accordion, Button, Column, IconProps, MoonFilled, Row, SunFilled, UnstyledButton, useResponsiveContext } from 'phantom-library';
import { Instagram, LinkedIn, Mail } from 'src/assets';
import { useWebsiteContext } from 'src/contexts/useWebsiteContext';
import logo from '../static/images/icons/logo.png';
import signature from '../static/images/icons/signature.png';
import style from './Sidebar.module.scss';

interface Social {
    platform: string;
    logo: ComponentType<IconProps>;
    handle: string;
    link: string;
}

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

const Sidebar: React.FC = () => {
    const { sidebar, setSidebar } = useWebsiteContext();
    const { theme, setTheme, isMobile } = useResponsiveContext();

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const hoverSidebar = (hovering: boolean) => {
        if (!isMobile) {
            setSidebar(hovering);
        }
    };

    const defaultContactText = 'Contact Me';
    const [contact, setContact] = useState<string>(defaultContactText);

    const assignSocial = (social: Social | null = null) => {
        setContact(social ? social.handle : defaultContactText);
    };

    const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

    const sidebarClasses = classNames(style.sidebar, {
        [style.closed]: !sidebar
    });

    const sidebarContent = (
        <Column>
            <div className={style.signature}>
                <img src={signature} alt="Kam's Signature" />
            </div>
            <nav className={style.navigation}>
                <Button label="Home" link="/" visual='text' align='start' full />
                <Button label="Biography" link="/biography" visual='text' align='start' full />
                <Accordion className={style.sublinks} label="Works" Icon={null} buttonStyle='text' borderless compact defaultState={false} >
                    <Button label="Orion" link="/works/orion" visual='text' align='end' size='small' full />
                    <Button label="Tub" link="/works/tub" visual='text' align='end' size='small' full />
                </Accordion>
                <Button label="CV" link="/cv" visual='text' align='start' full />
            </nav>
            <Column verticalAlign='end'>
                <span className={style.contact}>{contact}</span>
                <Row gap="4px">
                    {socials.map((social) => (
                        <Button key={social.platform} onHover={() => assignSocial(social)} Icon={social.logo} link={social.link} rounded />
                    ))}
                    <Button Icon={theme == 'light' ? SunFilled : MoonFilled} onClick={toggleTheme} rounded />
                </Row>
            </Column>
            <br/>
        </Column>
    )

    return (
        <aside
            className={sidebarClasses}
            role="presentation"
            onMouseEnter={() => {
                hoverSidebar(true);
            }}
            onMouseLeave={() => {
                hoverSidebar(false);
            }}
        >
            {sidebarContent}
            <UnstyledButton className={style.toggle} onClick={toggleSidebar} onKeyDown={toggleSidebar}>
                <img className="logo" src={logo} alt="Toggle Button Logo" />
                <div className={style.visual} />
            </UnstyledButton>
        </aside>
    );
};

export { Sidebar };
