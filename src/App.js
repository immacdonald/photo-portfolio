import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Orion from "./pages/Orion";
import CV from "./pages/CV";
import Sidebar from "./components/Sidebar";

// Site-wide base styling
import "./App.module.scss";
import { Fragment } from "react";

export default function App() {
  return(
    <Fragment>
      <Sidebar/>
      <Routes>
            <Route index element={<Home />} />
            <Route path="biography" element={<Biography />} />
            <Route path="works/orion" element={<Orion />} />
            <Route path="cv" element={<CV />} />
      </Routes>
    </Fragment>
  );
}