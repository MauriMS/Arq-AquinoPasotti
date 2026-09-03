import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home.jsx";
import Proyectos from "./screens/proyectos.jsx";
import Oficina from "./screens/oficina.jsx";
import Novedades from "./screens/novedades.jsx";
import Contacto from "./screens/contacto.jsx";
import Home2 from "./screens/home2";
import Nav from "./components/Nav.jsx";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home2" element={<Home2 />} />
        <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>
        <Route path="/oficina" element={<Oficina></Oficina>}></Route>
        <Route path="/novedades" element={<Novedades></Novedades>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
