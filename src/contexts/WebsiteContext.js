import React, { useState, createContext } from 'react';

export const WebsiteContext = createContext("");

export const WebsiteContextProvider = (props) => {
    const [theme, setTheme] = useState("light");
    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebarState] = useState(true);

    const setSidebar = (state) => {
        setSidebarState(state);
        document.body.style.overflow = state ? "hidden" : "";
    }
  
    return (
        <WebsiteContext.Provider value={{ theme, setTheme, mobile, setMobile, sidebar, setSidebar }}>
            {props.children}
        </WebsiteContext.Provider>
    );
  };