import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Biography from "./components/Biography";
import Works from "./components/Works";
import CV from "./components/CV";
import Sidebar from "./components/Sidebar";

import style from "./App.module.scss";

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="biography" element={<Biography />} />
        <Route path="works" element={<Works />} />
        <Route path="cv" element={<CV />} />
      </Route>
    </Routes>
  )
}