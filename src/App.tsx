import { useEffect } from 'react';
import { PhantomApp, useResponsiveContext } from 'phantom-library';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '@components/Footer';
import { Sidebar } from '@components/Sidebar';
import { Biography, CV, Home, Orion, Tub } from '@views';

const App = () => {
    const { isMobile } = useResponsiveContext();

    useEffect(() => {
        document.documentElement.setAttribute('data-mobile', `${isMobile}`);
    }, [isMobile]);

    return (
        <PhantomApp anchors={false}>
            <Sidebar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="biography" element={<Biography />} />
                <Route path="works">
                    <Route path="orion" element={<Orion />} />
                    <Route path="tub" element={<Tub />} />
                </Route>
                <Route path="cv" element={<CV />} />
            </Routes>
            <Footer />
        </PhantomApp>
    );
};

export { App };
