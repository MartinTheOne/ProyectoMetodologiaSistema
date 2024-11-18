import React, { useState } from 'react';
import { useEffect } from 'react';

const ProductCard = ({ product, agregarAlCarrito,openModal }) => {
    const[Notificacion,setNotificacion] = useState(true);


    const Notifiqueishon = () => {
        if (Notificacion) {
            window.notyf.success("Se agrego correctamente")
        
        } else {
            window.notyf.error("No se pueden agregar mas productos")
        }
    }
    useEffect(() => {

        const manejarEvento = (event) => {
            setNotificacion(event.detail.nuevoEstado);
          };
      
          // Escuchar el evento en el objeto global 'window'
          window.addEventListener('cambiarEstado', manejarEvento);
      
          // Limpiar el listener al desmontar el componente
        

        const notyf = new Notyf({
            duration: 3000,
            position: {
                x: 'center',
                y: 'top',
            },
            types: [
                {
                    type: 'success',
                    background: "#28b463     ",
                    className: "rounded-[10px] text-black font-julius text-[15px]"
                }
            ]
           
        });
        window.notyf = notyf;
        return () => {
            window.removeEventListener('cambiarEstado', manejarEvento);
          };
    }, []);
    return (
        <div className={`shadow-2xl border border-black border-opacity-10 rounded-t-[35px] rounded-b-[10px] w-[520px] h-[650px] movil-m:h-[550px] movil-s:h-[350px]  movil-sm:h-[250px] flex flex-col justify-between items-center group hover:h-[700px] hover:movil-m:h-[540px] hover:movil-s:h-[400px]  hover:movil-sm:h-[400px] transition-all duration-300`}>
            <div className="img w-full h-[75%] movil-sm:h-[65%] overflow-hidden rounded-t-[35px]">
                <img className='w-full h-full object-cover' src={product.img} alt={product.name} />
            </div>
            <div className='info-container w-full p-4 flex flex-col items-center'>
                <h3 className='text-xl font-bold font-julius text-center'>{product.name}</h3>
                <p className='text-lg font-julius text-center'>${product.price}</p>
            </div>
            <div className='boton w-full movil-sm:w-[250px] movil-s:w-[320px] movil-m:w-[360px] flex justify-center items-center h-0 group-hover:h-[25%] overflow-hidden transition-all duration-300 rounded-b-[10px] space-x-4'>
                <button 
                    onClick={() => {setNotificacion(agregarAlCarrito(product)); Notifiqueishon()}} // Llamamos a la función cuando se haga clic
                    className='glow-on-hover relative w-56 h-12 movil-m:w-[240px] movil-s:w-[140px] movil-sm:w-[140px] bg-[#72bf78] rounded-lg transition-colors duration-300  focus:outline-none font-julius'>
                    Agregar al carrito
                </button>
                <button onClick={ () => openModal(product)} className='glow-on-hover relative w-24 h-12  movil-s:w-[140px] movil-sm:w-[86px] bg-[#72bf78] rounded-lg transition-colors duration-300  focus:outline-none font-julius'>
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default ProductCard;