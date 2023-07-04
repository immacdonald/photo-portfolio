import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import style from './Page.module.scss';
import { WebsiteContext } from '../contexts/WebsiteContext';
import Footer from './Footer';

function Page(props) {
    const { children, forceTheme = false, altFooter = false } = props;

    const { theme, sidebar, mobile } = useContext(WebsiteContext);

    // A specific site theme can be forced for particular pages, overriding user's preferences
    if (forceTheme) {
        document.documentElement.setAttribute('data-mode', forceTheme);
    } else {
        document.documentElement.setAttribute('data-mode', theme);
    }

    // Style the main page body based on if the sidebar is open and if the device is mobile
    const mainClasses = classNames(
        style.main,
        {
            [style.full]: !sidebar,
        },
        {
            [style.mobile]: mobile,
        },
    );

    return (
        <div className={style.mainContainer}>
            <div className={mainClasses}>
                <div className={style.responsiveWrapper}>
                    <main className={style.mainContent}>
                        {children}
                    </main>
                    <Footer alt={altFooter} />
                </div>
            </div>
        </div>
    );
}

export default Page;
