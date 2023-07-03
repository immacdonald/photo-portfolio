import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";
import NavSublinks from "./NavSublinks";
import { WebsiteContext } from "../contexts/WebsiteContext";

import { ReactComponent as Instagram } from "../static/images/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "../static/images/icons/linkedin.svg";
import { ReactComponent as Email } from "../static/images/icons/mail.svg";

//import { ReactComponent as }

const Sidebar = () => {

    const signature = require("../static/images/icons/signature.png");
    const logo = require("../static/images/icons/logo.png");

    const { sidebar, setSidebar, theme, setTheme, mobile } = useContext(WebsiteContext);
    const [forceOpen, setForceOpen] = useState(false)

    const toggleButton = () => {
        //setForceOpen(!forceOpen);
        setSidebar(!sidebar);
    }

    useEffect(() => {
        const width = (sidebar || forceOpen) ? document.documentElement.style.getPropertyValue("--nav-width-open") : "0px"
        document.documentElement.style.setProperty("--nav-width", width);
    }, [sidebar, forceOpen]);


    const defaultContactText = "Contact Me"
    const [contact, setContact ] = useState(defaultContactText)
    const [contactLink, setContactLink] = useState(null);
    const assignSocial = (text = null, link = null) => {
        setContact(text ? text : defaultContactText);
        setContactLink(link);
    }

    const visitSocial = () => {
        if(contactLink != null) {
            window.open(contactLink, '_blank', 'noopener,noreferrer')
        }
    }

    const socials = [
        {
            "platform": "Instagram",
            "logo": <Instagram/>,
            "handle": "@kamlinphotography",
            "link": "https://instagram.com/kamlinphotography"
        },
        {
            "platform": "LinkedIn",
            "logo": <LinkedIn/>,
            "handle": "Kam Lin on LinkedIn",
            "link": "https://www.linkedin.com/in/kam-lin-567670186/" 
        },
        {
            "platform": "Email",
            "logo": <Email/>,
            "handle": "kammiea.lin@gmail.com",
            "link": "mailto:kammiealin@gmail.com" 
        }
    ]

    return (
    <div className={style.sidebar} /*onMouseEnter={(e) => {setOpen(true)}} onMouseLeave={(e) => {setOpen(false)}}*/>
        <div className={style.sidebarContent}>
            <div className={style.signature} onClick={(e) => {theme === "light" ? setTheme("dark") : setTheme("light")}}>
                <img src={signature}/>
            </div>
            <div className={style.navigation}>
                <nav className={style.links}>
                    <NavLink label="Home" link="/"/>
                    <NavLink label="Biography" link="/biography"/>
                    <NavSublinks label="Works" baseLink="/works" starting={true}>
                        <NavLink label="Orion" link="/works/orion"/>
                        <NavLink label="Tub" link="/works/tub"/>
                    </NavSublinks>
                    <NavLink label="CV" link="/cv"/>
                </nav>
            </div>
            <div className={style.socials} onClick={visitSocial} onMouseLeave={(e) => assignSocial()}>
                <div className={style.socialsText}>{contact}</div>
                <div className={style.socialsLinks}>
                    {socials.map((social) => {
                        return (
                            <div className={style.iconButton} key={social.platform} onMouseEnter={(e) => assignSocial(social.handle, social.link)}>
                                <div className={style.icon}>
                                    {social.logo}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className={style.toggleButton} onClick={toggleButton}>
            <img className="logo" src={logo}/>
            <div className={style.visual}></div>
        </div>
    </div>
  )
};

export default Sidebar;