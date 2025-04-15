import type { IconProps } from 'phantom-library';
import type { ComponentType } from 'react';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Accordion, Button, Column, LinkedInIcon, Row, tokens, UnstyledButton, useNoScroll, useOutsideClick, useResponsiveContext } from 'phantom-library';
import { InstagramIcon, MailIcon } from '@assets/icons';
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
        platform: 'LinkedIn',
        logo: LinkedInIcon,
        handle: 'Kam Lin on LinkedIn',
        link: 'https://www.linkedin.com/in/kam-lin-567670186/'
    },
    {
        platform: 'Instagram',
        logo: InstagramIcon,
        handle: '@kamlinphotography',
        link: 'https://instagram.com/kamlinphotography'
    },
    {
        platform: 'Email',
        logo: MailIcon,
        handle: 'kammiea.lin@gmail.com',
        link: 'mailto:kammiealin@gmail.com'
    }
];

const Sidebar: React.FC = () => {
    const { sidebar, setSidebar } = useWebsiteContext();
    const { isMobile } = useResponsiveContext();
    const ref = useRef<HTMLElement>(null);
    const noScroll = useNoScroll();

    const toggleSidebar = (): void => {
        setSidebar(!sidebar);
    };

    const hoverSidebar = (hovering: boolean): void => {
        if (!isMobile && hovering) {
            setSidebar(hovering);
        }
    };

    const sidebarContent = (
        <Column stretch>
            <div className={style.signature}>
                <img src={signature} alt="Kam's Signature" />
            </div>
            <nav className={style.navigation}>
                <Button link="/" variant="text" align="start" full>
                    Home
                </Button>
                <Button link="/biography" variant="text" align="start" full>
                    Biography
                </Button>
                <Accordion className={style.sublinks} label="Works" Icon={null} borderless compact defaultState={false} buttonStyle="text">
                    <Button link="/works/orion" variant="text" align="end" size="small" full>
                        Orion
                    </Button>
                    <Button link="/works/tub" variant="text" align="end" size="small" full>
                        Tub
                    </Button>
                </Accordion>
                <Button link="/cv" variant="text" align="start" full>
                    CV
                </Button>
            </nav>
            <Row gap={tokens.space.xxs} style={{ marginBlock: `auto ${tokens.space.md}` }}>
                {socials.map((social) => (
                    <Button key={social.platform} Icon={social.logo} link={social.link} variant="text" rounded external />
                ))}
            </Row>
        </Column>
    );

    useOutsideClick(ref, () => {
        if (sidebar && isMobile) {
            setSidebar(false);
        }
    });

    useEffect(() => {
        noScroll(sidebar && isMobile);
    }, [sidebar, isMobile]);

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
