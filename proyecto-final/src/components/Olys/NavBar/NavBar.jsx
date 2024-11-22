import React, { useEffect, useState } from 'react';
import { LuStore } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Carrito from '../Carrito/Carrito.jsx';

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [Contadorprod, setContadorProd] = useState(null);

  const actualizarContadorCarrito = () => {
    const savedCart = localStorage.getItem("carrito");
    if (savedCart) {
      const prod=JSON.parse(savedCart)
      const cantidadProd = prod.map(p=>p.cantidad);
     setContadorProd(cantidadProd.reduce((acumulador, valorActual) => acumulador + valorActual, 0))

    }
  };

  useEffect(() => {

    actualizarContadorCarrito();
    window.addEventListener('updateCartCounter', actualizarContadorCarrito);
    return () => {
      window.removeEventListener('updateCartCounter', actualizarContadorCarrito);
    };
  }, [cartOpen]);
  return (
    <>
      <nav id='pppp' className="z-10  bg-[#cacfca] pb-2 fixed w-full top-0 left-0 flex items-center justify-between p-2 text-[#0A4B2E]">
        <Link to="/" >
          <div className="bg-[#cacfca] border bg-opacity-60 ml-4 movil-sm:ml-1 w-[90px] h-[90px]  movil-s:w-[70px] movil-s:h-[70px] movil-sm:w-[60px] movil-sm:h-[60px] cursor-pointer rounded-full border-b-[#0E3C09] border-t-[#0E3C09] border-y-2 border-opacity-55  border-r-[#0E3C09] border-l-[#0E3C09] hover:scale-110 hover:border-opacity-50 transition-transform duration-300 group">
            <h1 className="hover:text-[#345e37] text-[30px] mt-6 movil-s:text-[20px] movil-s:mt-5  movil-sm:text-[20px] movil-sm:mt-4   font-julius text-center font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Olys
            </h1>
          </div>
        </Link>

        <ul className="   flex space-x-8 mr-8 movil-s:ml-3 movil-sm:space-x-4 movil-sm:ml-2 ">
          <li className='focus:outline-none'>
            <Link to="/tienda" className="flex items-center space-x-1  opacity-100 hover:scale-110 transition-transform duration-300 font-julius hover:text-[#0a4b2e]">
              <LuStore className="text-2xl movil-sm:text-lg movil-smm:text-[13px]" />
              <h4 className=" focus:outline-none text-lg movil-sm:text-base movil-smm:text-[13px] ">Tienda</h4>
            </Link>
          </li>

          <li className='focus:outline-none'>
            <Link to="/nutricionista" className="flex items-center space-x-1  opacity-100 hover:scale-110 transition-transform duration-300 font-julius hover:text-[#0A4B2E]">
              <BsInfoCircle className="text-2xl movil-sm:text-lg movil-smm:text-[13px] " />
              <h4 className=" focus:outline-none text-lg movil-sm:text-base movil-smm:text-[13px]">Nutricionista</h4>
            </Link>
          </li>

          <li className='focus:outline-none hover:text-[#345e37]'>
            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center space-x-1  opacity-100  transition-transform duration-300 font-julius"
            >
              <IoCartOutline className="text-2xl movil-sm:text-lg movil-smm:text-[13px] text-[#345e37]" />
              {Contadorprod > 0 && (
                <span className="border-[#345e37] absolute mb-8 border movil-smm:pb-[2px] pt-1 text-xs rounded-full h-[15px] w-[15px] movil-smm:h-[12px] movil-smm:w-[12px] flex items-center justify-center movil-smm:text-[9px] movil-smm:top-[22px] movil-smm:flex">
                  {Contadorprod}
                </span>
              )}
              <h4 className=" focus:outline-none text-lg movil-sm:text-base movil-smm:text-[13px]">Carrito</h4>
            </button>
          </li>
        </ul>
      </nav>

      <Carrito setCartOpen={setCartOpen} cartOpen={cartOpen} setContadorProd={setContadorProd} />
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
