import React, { useState, createContext, useMemo } from 'react';

export const WebsiteContext = createContext('');

export function WebsiteContextProvider(props) {
    // Stores the site-wide settings for various aspects
    // Theme can be "light" or "dark"
    const [theme, setTheme] = useState('light');
    const [mobile, setMobile] = useState(false);
    // Controls whether the sidebar is open (true) or closed (false)
    const [sidebar, setSidebar] = useState(true);

    const value = useMemo(() => ({
        theme, setTheme, mobile, setMobile, sidebar, setSidebar,
    }), [theme, setTheme, mobile, setMobile, sidebar, setSidebar]);

    return (
        <WebsiteContext.Provider value={value}>
            {props.children}
        </WebsiteContext.Provider>
    );
}
