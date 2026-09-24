// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home.jsx";
import Proyectos from "./screens/proyectos.jsx";
import ProyectoDetalle from "./screens/proyectodetalle.jsx";
import Oficina from "./screens/oficina.jsx";
import Servicios from "./screens/servicios.jsx";
import Novedades from "./screens/novedades.jsx";
import Contacto from "./screens/contacto.jsx";
import Legales from "./screens/legales.jsx";
import Nav from "./components/Nav.jsx";
import ProyectosPorRama from "./screens/Proyectosporrama.jsx";


import "./App.css";

function App() {
  return (
    <HashRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>
        <Route path="/proyectos/:id" element={<ProyectoDetalle />}></Route>
        <Route path="/proyectos/arquitectura" element={<ProyectosPorRama rama="arquitectura" />}></Route>
        <Route path="/proyectos/ingenieria" element={<ProyectosPorRama rama="ingenieria" />}></Route>
        <Route path="/oficina" element={<Oficina></Oficina>}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/novedades" element={<Novedades></Novedades>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/legales" element={<Legales />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;