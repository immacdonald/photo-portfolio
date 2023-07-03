import style from "./Page.module.scss";
import React, { useContext, useEffect } from "react";
import { WebsiteContext } from "../contexts/WebsiteContext";
import classNames from "classnames";

const Page = (props) => {
    const { children, forceTheme = false} = props;

    const { theme, sidebar, mobile } = useContext(WebsiteContext);

    // A specific site theme can be forced for particular pages, overriding user's preferences
    if(forceTheme) {
        document.documentElement.setAttribute('data-mode', forceTheme);
    } else {
        document.documentElement.setAttribute('data-mode', theme);
    }

    // Style the main page body based on if the sidebar is open and if the device is mobile
    const mainClasses = classNames(
        style.main, 
        {
            [style.full]: !sidebar
        },
        {
            [style.mobile]: mobile
        }
    );

    return (
        <div className={style.mainContainer}>
            <div className={mainClasses}>
                <div className={style.responsiveWrapper}>
                    <main className={style.mainContent}>
                        {children}
                    </main>
                    <footer>
                        <div className={style.footer}>
                            <div className={style.footerContent}>
                                <p>&copy; Kam Lin 2023 & Website by Ian MacDonald </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};
  
export default Page;