import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { LuStore } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav id='pppp' className="bg-[#9BC885] pb-2 fixed w-full top-0 left-0 flex items-center justify-between p-2 border-b-[7px] border-b-[#0E3C09] border-opacity-25 ">
      <Link to="/home" >
        <div className="ml-4 w-[90px] h-[90px] cursor-pointer border rounded-full border-b-[#0E3C09] border-t-[#0E3C09] border-opacity-25 border-r-[#efefef] border-l-[#efefef] hover:scale-110 hover:border-opacity-50 transition-transform duration-300 group">
          <h1 className="text-[30px] mt-6 font-julius text-center text-[#0E3C09] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            OLYS
          </h1>
        </div>
      </Link>

      <ul className="flex space-x-8 mr-8">
        <li>
          <Link to="/home" className="flex items-center space-x-1 text-[#0E3C09]  opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
            <AiOutlineHome className="text-2xl" />
            <h4 className="text-lg text-shadow">Sobre Nosotros</h4>
          </Link>
        </li>
        <li>
          <Link to="/tienda" className="flex items-center space-x-1 text-[#0E3C09] opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
            <LuStore className="text-2xl" />
            <h4 className="text-lg">Tienda</h4>
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="flex items-center space-x-1 text-[#0E3C09]  opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
            <IoCartOutline className="text-2xl" />
            <h4 className="text-lg">Carrito</h4>
          </Link>
        </li>
        <li>
          <Link to="/novedades" className="flex items-center space-x-1 text-[#0E3C09] opacity-100 hover:scale-110 transition-transform duration-300 font-julius">
            <BsInfoCircle className="text-2xl" />
            <h4 className="text-lg">Novedades</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
