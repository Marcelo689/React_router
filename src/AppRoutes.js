import Rodape from "components/Rodape";
import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import Sobremim from "./paginas/Sobremim";
function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Sobremim" element={<Sobremim/>}/>
        <Route path="/*" element={<h1>Página não encontrada</h1>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
