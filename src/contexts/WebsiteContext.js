import React, { useState, createContext } from 'react';

export const WebsiteContext = createContext("");

export const WebsiteContextProvider = (props) => {
    // Stores the site-wide settings for various aspects
    // Theme can be "light" or "dark"
    const [theme, setTheme] = useState("light");
    const [mobile, setMobile] = useState(false);
    // Controls whether the sidebar is open (true) or closed (false)
    const [sidebar, setSidebar] = useState(true);
  
    return (
        <WebsiteContext.Provider value={{ theme, setTheme, mobile, setMobile, sidebar, setSidebar }}>
            {props.children}
        </WebsiteContext.Provider>
    );
  };