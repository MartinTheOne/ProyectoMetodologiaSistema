import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaShoppingCart, FaBoxes, FaBars, FaTimes, FaHome, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const navigate=useNavigate()

    const menuItems = [
        { name: "Dashboard", icon: FaTachometerAlt, href: "/admin/dashboard" },
        { name: "Gestion Pedidos", icon: FaShoppingCart, href: "/admin/gestion-pedidos" },
        { name: "Gestion Productos", icon: FaBoxes, href: "/admin/gestion-productos"},
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };
    const handlerLogOut=()=>{
        localStorage.removeItem('token')
        navigate("/admin/login")
    }

    return (
        <div className="flex h-screen bg-gray-100 ">
            <button
                className="md:hidden fixed z-20 top-4 left-4 p-2 rounded-md bg-[#9BC885] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div
                className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10`}
            >
                <div className="flex flex-col h-full p-3 bg-[#9BC885] shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold  font-julius text-[#0E3C09]">Gestion OLYS</h2>
                            <button
                                className="md:hidden p-2 rounded-md bg-[#9BC885] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                                onClick={toggleSidebar}
                                aria-label="Close sidebar"
                            >
                                <FaTimes />
                            </button>
                        </div>




                        <nav className="">
                            <div>
                                <ul className="space-y-1">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={`flex items-center p-2 space-x-3 rounded-md text-[#0E3C09] ${activeItem === item.name ? "bg-[#9BC885] text-gray-100" : " hover:bg-[#7ab35e] "} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out`}
                                                onClick={() => handleItemClick(item.name)}
                                            >
                                                <item.icon className="w-6 h-6 text-black text-opacity-80" />
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`relative top-[680px] flex items-center p-2 space-x-3 rounded-md text-[#0E3C09] hover:bg-[#7ab35e]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out`}>
                                    <button onClick={handlerLogOut} className="flex gap-2">
                                        <div>
                                            <FaSignOutAlt className="w-6 h-6 text-black text-opacity-80" />
                                        </div>
                                        <div>
                                            <h1>Cerrar Sesion</h1>
                                        </div>
                                    </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-10 text-2xl font-bold">
                {activeItem}
            </div>

            <div>
            </div>
        </div>
    );
};

export default Sidebar;