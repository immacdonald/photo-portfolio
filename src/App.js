import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import CV from "./pages/CV";
import Orion from "./pages/Orion";
import Tub from "./pages/Tub";
import Sidebar from "./components/Sidebar";

// Site-wide base styling
import "./App.module.scss";
import { Fragment } from "react";
import { WebsiteContext, WebsiteContextProvider } from "./contexts/WebsiteContext";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
    return (
      <Fragment>
        <WebsiteContextProvider>
          <AppContent />
        </WebsiteContextProvider>
      </Fragment>
    );
  }  

function AppContent() {
    const { theme, setTheme, mobile, setMobile, sidebar, setSidebar } = useContext(WebsiteContext);
  
    const [width, height] = useWindowSize();
    const mobileThreshold = 768;
  
    useEffect(() => {
      if (width) {
        setMobile(width <= mobileThreshold);
      }
    }, [width, setMobile]);

    useEffect(() => {
        document.body.style.overflow = (mobile && sidebar) ? "hidden" : "";
    }, [mobile, sidebar])
  
    return (
      <Fragment>
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
      </Fragment>
    );
  }