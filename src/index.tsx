import 'phantom-library/styles';
import './styles/index.module.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { WebsiteContextProvider } from './contexts/WebsiteContext';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WebsiteContextProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <App />
            </BrowserRouter>
        </WebsiteContextProvider>
    </React.StrictMode>
);
