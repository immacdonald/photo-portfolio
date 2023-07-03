import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import CV from "./pages/CV";
import Orion from "./pages/Orion";
import Tub from "./pages/Orion";
import Sidebar from "./components/Sidebar";

// Site-wide base styling
import "./App.module.scss";
import { Fragment } from "react";
import { WebsiteContext, WebsiteContextProvider } from "./contexts/WebsiteContext";

export default function App() {
    const { theme, setTheme, mobile, setMobile, sidebar, setSidebar } = useContext(WebsiteContext);

  return(
    <Fragment>
      <WebsiteContextProvider>
        <Sidebar/>
        <Routes>
              <Route index element={<Home />} />
              <Route path="biography" element={<Biography />} />
              <Route path="works">
                <Route path="orion" element={<Orion />} />
                <Route path="tub" element={<Orion />} />
              </Route>
              <Route path="cv" element={<CV />} />
        </Routes>
      </WebsiteContextProvider>
    </Fragment>
  );
}