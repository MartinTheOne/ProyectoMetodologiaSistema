import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import NavBar from "./components/shared/NavBar.jsx";
import Home from './components/shared/Vistas/Home.jsx';
import Nutricionista from './components/shared/Vistas/Nutricionista.jsx';
import Tienda from './components/shared/Vistas/Tienda.jsx';
import Carrito from "./components/shared/Vistas/Carrito.jsx";
import Menu from "./components/shared/Vistas/Menu.jsx";
import ArmarBowl from "./components/shared/Vistas/ArmarBowl.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div id="Controlador_abuelo_Router">
      <Router>
        <LayoutWithNavbar />
      </Router>
    </div>
  );
}

function LayoutWithNavbar() {
  const location = useLocation();

  return (
    <>
      {/* Solo muestra el NavBar si NO estás en la ruta /admin/login */}
      {location.pathname !== '/admin/login' && <NavBar />}
      <div id="Controlador_padre_Routes">
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nutricionista" element={<Nutricionista />} />
          <Route path="/armarBowl" element={<ArmarBowl />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
