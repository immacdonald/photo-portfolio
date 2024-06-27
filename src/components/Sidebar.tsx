import React, { ComponentType, useRef } from 'react';
import clsx from 'clsx';
import { Accordion, Button, Column, IconProps, MoonFilled, Row, SunFilled, UnstyledButton, useOutsideClick, useResponsiveContext } from 'phantom-library';
import { Instagram, LinkedIn, Mail } from '@assets/icons';
import { logo, signature } from '@assets/images';
import { useWebsiteContext } from '@contexts/useWebsiteContext';
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

    const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

    const sidebarContent = (
        <Column>
            <div className={style.signature}>
                <img src={signature} alt="Kam's Signature" />
            </div>
            <nav className={style.navigation}>
                <Button label="Home" link="/" visual="text" align="start" full />
                <Button label="Biography" link="/biography" visual="text" align="start" full />
                <Accordion className={style.sublinks} label="Works" Icon={null} buttonStyle="text" borderless compact defaultState={false}>
                    <Button label="Orion" link="/works/orion" visual="text" align="end" size="small" full />
                    <Button label="Tub" link="/works/tub" visual="text" align="end" size="small" full />
                </Accordion>
                <Button label="CV" link="/cv" visual="text" align="start" full />
            </nav>
            <Column verticalAlign="end">
                <Row gap="4px">
                    {socials.map((social) => (
                        <Button key={social.platform} Icon={social.logo} link={social.link} visual="text" rounded />
                    ))}
                    <Button Icon={theme == 'light' ? SunFilled : MoonFilled} onClick={toggleTheme} visual="text" rounded />
                </Row>
            </Column>
            <br />
        </Column>
    );

    const ref = useRef<HTMLElement>(null);

    useOutsideClick(ref, () => {
        if (sidebar && isMobile) {
            setSidebar(false);
        }
    });

    const sidebarClasses = clsx(style.sidebar, {
        [style.closed]: !sidebar
    });

    return (
        <aside
            className={sidebarClasses}
            ref={ref}
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
