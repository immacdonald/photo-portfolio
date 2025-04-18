import type { SetState } from 'phantom-library';
import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { useSidebar } from '@hooks/useSidebar';

interface WebsiteContextProps {
    sidebar: boolean;
    setSidebar: SetState<boolean>;
}

const WebsiteContext = createContext<WebsiteContextProps | undefined>(undefined);

interface WebsiteContextProviderProps {
    children: ReactNode;
}

const WebsiteContextProvider = ({ children }: WebsiteContextProviderProps): JSX.Element => {
    const [sidebar, setSidebar] = useSidebar();

    const value = useMemo(
        () => ({
            sidebar,
            setSidebar
        }),
        [sidebar]
    );

    return <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>;
};

export { WebsiteContext, WebsiteContextProvider };
