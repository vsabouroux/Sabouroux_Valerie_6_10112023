import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import NoMatch from "./views/NoMatch/NoMatch";
import Home from "./views/Home/Home";
import APropos from "./views/APropos/APropos";
import FicheLogement from "./views/FicheLogement/FicheLogement";
import Logements from "./datas/Logements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="Home" element={<Home logements={Logements} />} />
        <Route path="APropos" element={<APropos />} />
        <Route path="FicheLogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
