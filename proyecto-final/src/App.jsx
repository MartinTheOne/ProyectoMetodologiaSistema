import { useState } from "react";
import NavBar from "./components/shared/NavBar.jsx"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/shared/Vistas/Home.jsx'
import Novedades from './components/shared/Vistas/Novedades.jsx'
import Tienda from './components/shared/Vistas/Tienda.jsx'
import Carrito from "./components/shared/Vistas/Carrito.jsx";

function App() {

  return (
    <div >
      <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/novedades" element={<Novedades />} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App
