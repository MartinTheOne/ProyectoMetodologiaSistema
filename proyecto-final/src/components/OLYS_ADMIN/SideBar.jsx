import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaShoppingCart, FaBoxes, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Dashboard from "../OLYS_ADMIN/DashBoard";
import ProtectedRoute from "./ProtectedRoute";
import GestionProductos from "./GestionProductos";
import GestionPedidos from "./Pedido/GestionPedido";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Dashboard");
    const navigate = useNavigate();

    const menuItems = [
        { name: "Dashboard", icon: FaTachometerAlt, href: "" },
        { name: "Gestion Pedidos", icon: FaShoppingCart, href: "" },
        { name: "Gestion Productos", icon: FaBoxes, href: "" },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };

    const handlerLogOut = () => {
        localStorage.removeItem('token');
        navigate("/admin/login");
    };

    return (
        <div className="flex h-screen">
            <button
                className="md:hidden fixed z-20 top-4 left-4 p-2 rounded-md bg-[#9BC885] text-white focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-60 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 bg-[#9BC885] shadow`}
            >
                <div className="flex flex-col h-full border-r-2 border-[#0e3c09] border-opacity-40 p-3">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold font-julius text-[#0E3C09]">Gestion OLYS</h2>
                            <button
                                className="md:hidden p-2 rounded-md bg-[#9BC885] text-gray-300 hover:text-white focus:outline-none"
                                onClick={toggleSidebar}
                                aria-label="Close sidebar"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <nav>
                            <ul className="space-y-1 cursor-pointer">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <a                                         
                                            className={`flex items-center p-2 space-x-3 rounded-md text-[#0E3C09] ${activeItem === item.name ? "border-2 border-[#0E3C09] border-opacity-40 text-gray-800" : "hover:bg-[#7ab35e]"} focus:outline-none`}
                                            onClick={() => handleItemClick(item.name)}
                                        >
                                            <item.icon className="w-6 h-6 text-black text-opacity-80" />
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="mt-auto flex items-center p-2 space-x-3 rounded-md text-[#0E3C09] hover:bg-[#7ab35e] focus:outline-none">
                        <button onClick={handlerLogOut} className="flex gap-2">
                            <FaSignOutAlt className="w-6 h-6 text-black text-opacity-80" />
                            <h1>Cerrar Sesion</h1>
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-10 bg-gray-100  overflow-y-auto">
                {activeItem === "Dashboard" && <ProtectedRoute><Dashboard /></ProtectedRoute> }
                {activeItem=="Gestion Productos" && <ProtectedRoute><GestionProductos/></ProtectedRoute>}
                {activeItem=="Gestion Pedidos" && <ProtectedRoute><GestionPedidos/></ProtectedRoute>}
            </div>
        </div>
    );
};

export default Sidebar;
