import { useEffect, type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledApp, useResponsiveContext } from 'phantom-library';
import { Sidebar } from '@components/Sidebar';
import { ToggleThemeButton } from '@components/ToggleThemeButton';
import { Biography, CV, Home, Orion, Tub } from '@views';

const RoutedApp: FC = () => {
    const { isMobile } = useResponsiveContext();

    useEffect(() => {
        document.documentElement.setAttribute('data-mobile', `${isMobile}`);
    }, [isMobile]);

    return (
        <>
            <Sidebar />
            <ToggleThemeButton />
            <Routes>
                <Route index element={<Home />} />
                <Route path="biography" element={<Biography />} />
                <Route path="works">
                    <Route path="orion" element={<Orion />} />
                    <Route path="tub" element={<Tub />} />
                </Route>
                <Route path="cv" element={<CV />} />
            </Routes>
        </>
    );
};

const App: FC = () => {
    return (
        <StyledApp rootId="root" theme="dark">
            <RoutedApp />
        </StyledApp>
    );
};

export { App };
