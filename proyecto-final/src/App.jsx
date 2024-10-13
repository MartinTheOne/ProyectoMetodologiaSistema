import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import NavBar from "./components/shared/NavBar.jsx";
import Home from './components/shared/Vistas/Home.jsx';
import Nutricionista from './components/shared/Vistas/Nutricionista.jsx';
import Tienda from './components/shared/Vistas/Tienda.jsx';
import Carrito from "./components/shared/Vistas/Carrito.jsx";
import Menu from "./components/shared/Vistas/Menu.jsx";
import ArmarBowl from "./components/shared/Vistas/ArmarBowl.jsx";
import Login from "./components/Login.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Admin from './components/Admin.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div id="Controlador_abuelo_Router">
      <Router>
        <LayoutWithNavbar />
      </Router>
    </div>
  );
}

function RoutesProtected() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function LayoutWithNavbar() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/admin/login' || location.pathname === '/admin';

  return (
    <>
      {!hideNavBar && <NavBar />}
      <div id="Controlador_padre_Routes">
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nutricionista" element={<Nutricionista />} />
          <Route path="/armarBowl" element={<ArmarBowl />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/*" element={<RoutesProtected />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
