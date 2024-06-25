import { useContext } from 'react';
import { WebsiteContext } from './WebsiteContext';

const useWebsiteContext = () => {
    const context = useContext(WebsiteContext);

    if (context === undefined) {
        throw new Error('useWebsiteContext was used outside of its Provider');
    } else if (!context) {
        throw new Error('useWebsiteContext is null');
    }

    return context;
};

export { useWebsiteContext };
