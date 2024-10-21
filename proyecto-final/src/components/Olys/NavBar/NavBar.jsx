import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { LuStore } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false); // Controlar si el carrito está abierto

  return (
    <>
      <nav id='pppp' className="z-10 bg-[#72bf78] pb-2 fixed w-full top-0 left-0 flex items-center justify-between p-2 border-b-[7px] border-b-[#0E3C09] border-opacity-25">
        <Link to="/" >
          <div className="bg-[#72bf78] border bg-opacity-60 ml-4 w-[90px] h-[90px] cursor-pointer rounded-full border-b-[#0E3C09] border-t-[#0E3C09] border-y-2 border-opacity-55  border-r-[#0E3C09] border-l-[#0E3C09] hover:scale-110 hover:border-opacity-50 transition-transform duration-300 group">
            <h1 className="text-[30px] mt-6 font-julius text-center font-bold text-[#0E3C09] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              OLYS
            </h1>
          </div>
        </Link>

        <ul className="flex space-x-8 mr-8">
          <li>
            <Link to="/tienda" className="flex items-center space-x-1 text-[#0E3C09] opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
              <LuStore className="text-2xl" />
              <h4 className="text-lg">Tienda</h4>
            </Link>
          </li>
          
          <li>
            <Link to="/nutricionista" className="flex items-center space-x-1 text-[#0E3C09] opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
              <BsInfoCircle className="text-2xl" />
              <h4 className="text-lg">Nutricionista</h4>
            </Link>
          </li>

          <li>
            <button 
              onClick={() => setCartOpen(true)} 
              className="flex items-center space-x-1 text-[#0E3C09] opacity-100 hover:scale-110 transition-transform duration-300 font-julius"
            >
              <IoCartOutline className="text-2xl" />
              <h4 className="text-lg">Carrito</h4>
            </button>
          </li>
        </ul>
      </nav>

      {/* Panel lateral del carrito */}
      <div
        className={`fixed top-0 right-0 w-[350px] h-full bg-[#72bf78] shadow-lg transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-4">
          <button 
            className="text-gray-500 float-right" 
            onClick={() => setCartOpen(false)}
          >
            ✕
          </button>
          <h2 className="text-2xl font-julius font-bold">Carrito</h2>
          {/* Aquí puedes agregar los productos */}
          <p className='font-julius'>No hay productos en el carrito.</p>
        </div>
      </div>

      {/* Fondo oscuro para cuando el carrito esté abierto */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setCartOpen(false)} // Cierra el carrito al hacer clic fuera de él
        ></div>
      )}
    </>
  );
};

export default Navbar;
