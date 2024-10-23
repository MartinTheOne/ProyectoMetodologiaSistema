import React, { useState, useEffect } from "react";
import { LuTrash2 } from "react-icons/lu"

const Carrito = ({ cartOpen, setCartOpen, SetNotifiqueishon }) => {
    const [productos, setProductos] = useState([]);

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
    }

    let fechahoy = new Date()
    let fecha = new Date(1732395325132);
    console.log(fecha)
    console.log(fechahoy)




    return (
        <>
            <div
                className={`fixed top-0 right-0 w-[350px] h-full bg-[#72bf78] shadow-lg transform ${cartOpen ? "translate-x-0" : "translate-x-full"
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
                    {productos && productos.length > 0 ? (
                        <div>
                            {productos.map((producto, index) => (
                                <div key={index} className="flex mb-4">
                                    <div><img src={producto.img} alt="ensalada" width="50px" /></div>
                                    <div >
                                        <p>{producto.name}</p>
                                        <div className="flex">
                                            <button onClick={() => handleClickRestar(producto)} className="flex justify-center border border-[#0E3C09] rounded-sm w-[25px] h-[20px] items-center">-</button>
                                            <p>{producto.cantidad}</p>
                                            <button onClick={() => handleClickSumar(producto)} className="flex justify-center border border-[#0E3C09] rounded-sm w-[25px] h-[20px] items-center">+</button>

                                        </div>
                                        <div>
                                            <button onClick={() => handlerClickDelete(producto)}><LuTrash2 /></button>
                                        </div>

                                    </div>

                                    <p className="ml-2">${(parseFloat(producto.price) * parseFloat(producto.cantidad))}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='font-julius'>No hay productos en el carrito.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Carrito;
