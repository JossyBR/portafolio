import { useState } from "react";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import PathRoutes from "./helpers/Routes.helpers";

//COMPONENTES
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={PathRoutes.HOME} element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
