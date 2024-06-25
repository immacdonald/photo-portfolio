import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import './App.module.scss';
import { PhantomApp, useWindowSize } from 'phantom-library';
import { useWebsiteContext } from './contexts/useWebsiteContext';
import { Biography, CV, Home, Orion, Tub } from './pages';

const App = () => {
    const { mobile, setMobile, sidebar } = useWebsiteContext();

    const { width } = useWindowSize();
    const mobileThreshold = 768;

    useEffect(() => {
        if (width) {
            setMobile(width <= mobileThreshold);
        }
    }, [width, setMobile]);

    useEffect(() => {
        document.body.style.overflow = mobile && sidebar ? 'hidden' : '';
    }, [mobile, sidebar]);

    return (
        <PhantomApp anchors={false} cssProperties={{ display: 'block' }}>
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
        </PhantomApp>
    );
};

export { App };
