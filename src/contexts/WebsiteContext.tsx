import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface WebsiteContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    mobile: boolean;
    setMobile: React.Dispatch<React.SetStateAction<boolean>>;
    sidebar: boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebsiteContext = createContext<WebsiteContextProps | undefined>(undefined);

interface WebsiteContextProviderProps {
    children: ReactNode;
}

const WebsiteContextProvider = ({ children }: WebsiteContextProviderProps): JSX.Element => {
    const [theme, setTheme] = useState<string>('light');
    const [mobile, setMobile] = useState<boolean>(false);
    const [sidebar, setSidebar] = useState<boolean>(true);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            mobile,
            setMobile,
            sidebar,
            setSidebar
        }),
        [theme, mobile, sidebar]
    );

    return <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>;
};

export { WebsiteContext, WebsiteContextProvider };
