import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import 'phantom-library/styles';
import './styles/index.module.scss';
import { ResponsiveContextProvider } from 'phantom-library';
import { WebsiteContextProvider } from './contexts/WebsiteContext';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResponsiveContextProvider>
            <WebsiteContextProvider>
                <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <App />
                </BrowserRouter>
            </WebsiteContextProvider>
        </ResponsiveContextProvider>
    </React.StrictMode>
);
