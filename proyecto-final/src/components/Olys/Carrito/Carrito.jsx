import React, { useState, useEffect } from "react";
import { LuTrash2 } from "react-icons/lu"

const Carrito = ({ cartOpen, setCartOpen, SetNotifiqueishon }) => {
    const [productos, setProductos] = useState([]);

    const manejarClick = () => {
        // Crear un evento personalizado que lleve datos
        const eventoPersonalizado = new CustomEvent('cambiarEstado', {
          detail: { nuevoEstado: true }, // Aquí pasas el nuevo estado
        });
        
        // Disparar el evento en el documento
        window.dispatchEvent(eventoPersonalizado);
      };

    useEffect(() => {
        if (cartOpen) {
            const savedCart = localStorage.getItem("carrito");
            if (savedCart) {
                setProductos(JSON.parse(savedCart));
            }
        }
    }, [cartOpen]);

    const handleClickRestar = (producto) => {



        if (producto.cantidad > 1) {
            const ProductosActualizados = productos.map((prod) =>
                prod.name === producto.name ? { ...prod, cantidad: prod.cantidad - 1 } : prod
            );
            setProductos(ProductosActualizados);
            localStorage.setItem("carrito", JSON.stringify(ProductosActualizados));

            manejarClick()
        }

    };

    const handleClickSumar = (producto) => {
        if (producto.cantidad < 10) {
            const ProductosActualizados = productos.map((prod) =>
                prod.name === producto.name ? { ...prod, cantidad: prod.cantidad + 1 } : prod
            );
            setProductos(ProductosActualizados);
            localStorage.setItem("carrito", JSON.stringify(ProductosActualizados));
        }
    };

    const handlerClickDelete = (producto) => {
        let actualizarProductos = productos.filter(p => producto.name != p.name)
        console.log(actualizarProductos)
        let prodActualizados = [...actualizarProductos]
        setProductos(prodActualizados)
        localStorage.setItem("carrito", JSON.stringify(prodActualizados))
        manejarClick()
    }

    let fechahoy = new Date()
    let fecha = new Date(1732395325132);
    console.log(fecha)
    console.log(fechahoy)




    return (
        <>
            <div
                className={`fixed top-0 right-0 w-[450px] h-full bg-[#72bf78] shadow-lg transform ${cartOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-20`}
            >
                <div className="p-4">
                    <button
                        className="text-black text-opacity-70 float-right w-7 rounded-md shadow"
                        onClick={() => setCartOpen(false)}
                    >
                        ✕
                    </button>
                    <h2 className="text-2xl font-julius font-bold mb-4 text-center">Carrito</h2>
                    
                    {productos && productos.length > 0 ? (
                        <div>
                            {productos.map((producto, index) => (

                                
                                <div id="Estructuracarta" key={index} className="flex -ml-[5px] mb-2 rounded-lg shadow justify-between items-center h-[120px] w-[430px]">
                                    <div className="ml-1"><img className="rounded-md" src={producto.img} alt="ensalada" width="80px" /></div>

                                    <div id="PPPPP" className="flex">

                                        <div className="acomodadordecantidadtrashmasymenos flex-col mb-1">
                                            <h3 className="mb-2 text-center text-lg">Cantidad</h3>
                                            <div className="flex">
                                                
                                                <button onClick={() => handleClickRestar(producto)} className="text-black text-opacity-70 float-right w-7 rounded-md shadow mr-1">-</button>
                                                 <p>{producto.cantidad}</p>
                                                <button onClick={() => handleClickSumar(producto)} className="text-black text-opacity-70 float-right w-7 text-center rounded-md shadow ml-1">+</button>

                                            </div>
                                        
                                            <div className="text-center mt-2">
                                                <button className="shadow  w-[50px] rounded-xl text-[12px]" onClick={() => handlerClickDelete(producto)}>Eliminar</button>
                                            </div>
                                        </div>

                                    </div>

                                    <p className="text-lg mb-2">{producto.name}</p>

                                    <div className="acomodadordeprecionombreprecio mr-3 mb-3">

                                        <h3 className="mb-1 text-center text-lg">Precio</h3>
                                        <p className="">${(parseFloat(producto.price) * parseFloat(producto.cantidad))}</p>

                                    </div>

                                </div>

                               
                            ))}
                        </div>
 
                        
                    ) : (
                        <p className='font-julius'>No hay productos en el carrito.</p>
                    )}

                        <div className="inputs text-center mt-6 font-julius">
                            
                             <h3 className="mb-4 text-xl">Por favor ingrese sus datos</h3>

                             <h3 className="text-xl mb-2">Nombre</h3>
                             <input className="rounded-lg outline-none bg-[#6cb472] shadow-inner h-[35px] w-[250px] text-center" type="text" />

                             <h3 className="mt-4 text-xl mb-2">Numero de celular</h3>
                             <input className="rounded-lg outline-none h-[35px] bg-[#6cb472] shadow-inner w-[250px] text-center" type="text" />

                             <div className="flex justify-center mt-2 items-center">
                                
                                <input className="appearance-none h-4 w-4 bg-[#77c77d] shadow mr-1 rounded checked:bg-[#1d5222] cursor-pointer checked:border checked:border-[#2b8135]" type="checkbox" name="" id="" /> <h3>Envio a domicilio</h3>
                             </div>
                             
                             
                            
                             <h3 className="mt-4 text-xl mb-2">Direccion</h3>
                             <input className="rounded-lg outline-none h-[35px] bg-[#6cb472] shadow-inner w-[250px] text-center" type="text" />

                        </div>

                        <div className="flex flex-col text-start items-start mt-10">
                            <span className="text-[12px]">De click aqui para generar link de pago</span>
                            <button className="shadow h-12 w-[200px] rounded-md mt-2">Finalizar Pedido</button>
                        </div>

                        <div className="flex flex-col text-start items-end mt-10">
                            <span className="text-[12px]">De click para ir a Mercado Pago</span>
                            <button className="shadow h-12 w-[200px] rounded-md mt-2">Mercado Pago</button>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;
