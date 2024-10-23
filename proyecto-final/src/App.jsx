import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import NavBar from "./components/Olys/NavBar/NavBar.jsx";
import Home from './components/Olys/Home/Home.jsx';
import Nutricionista from './components/Olys/Nutricionista/Nutricionista.jsx';
import Tienda from './components/Olys/Tienda/Tienda.jsx';
import Carrito from "./components/Olys/Carrito/Carrito.jsx";
import Menu from "./components/Olys/Menu/Menu.jsx";
import ArmarBowl from "./components/Olys/ArmarBowl/ArmarBowl.jsx";
import Login from "./components/OLYS_ADMIN/Login.jsx";
import Sidebar from './components/OLYS_ADMIN/SideBar.jsx';
import ProtectedRoute from "./components/OLYS_ADMIN/ProtectedRoute.jsx";
import GestionPedidos from "./components/OLYS_ADMIN/GestionPedido.jsx";
import GestionProductos from "./components/OLYS_ADMIN/GestionProductos.jsx";
import ScrollTop from "./componentUtils/ScrollTop.js"

function App() {
  return (
    <div id="Controlador_abuelo_Router">
      <Router>
        <ScrollTop/>
        <LayoutWithSidebarOrNavbar />
      </Router>
    </div>
  );
}

function RoutesProtected() {
  return (
    <Routes>
  
      <Route
        path="/admin/gestion-pedidos"
        element={
          <ProtectedRoute>
            <GestionPedidos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/gestion-productos"
        element={
          <ProtectedRoute>
            <GestionProductos />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function LayoutWithSidebarOrNavbar() {
  const location = useLocation();

  const showSidebar = location.pathname.startsWith('/admin/dashboard') ||
                      location.pathname.startsWith('/admin/gestion-pedidos') ||
                      location.pathname.startsWith('/admin/gestion-productos');

  const hideNavBar = location.pathname === '/admin/login';

  return (
    <>
      {!hideNavBar && !showSidebar && <NavBar />} 
      {showSidebar && <Sidebar />} 

      <div id="Controlador_padre_Routes">
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nutricionista" element={<Nutricionista />} />
          <Route path="/armar-bowl" element={<ArmarBowl />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/*" element={<RoutesProtected />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
