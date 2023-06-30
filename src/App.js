import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Works from "./pages/Works";
import CV from "./pages/CV";
import Sidebar from "./components/Sidebar";

// Site-wide base styling
import "./App.module.scss";

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