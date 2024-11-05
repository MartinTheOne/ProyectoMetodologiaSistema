import React, { useState, useEffect } from 'react';
import MenuInfo from './MenuInfo';
import Modal from 'react-modal';
import ProductCard from '../Productos/ProductCard';
import PeladoComponent from '../Home/PeladoComponent';

Modal.setAppElement('#root');

const Menu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [carritoProductos, setCarritoProductos] = useState(() => {
        const savedCart = localStorage.getItem("carrito");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const salads = [
        { img: "../../../../img/EnsaldaCesars.png", name: "Ensalada César", price: 5200, ing: ["Lechuga romana", "Crutones", "Queso parmesano", "Aderezo César"], carrito: false, cantidad: 1 },
        { img: "../../../../img/EnsaladaGriega.jpeg", name: "Ensalada Griega", price: 5200, ing: ["Tomate", "Pepino", "Cebolla roja", "Aceitunas", "Queso feta"], carrito: false, cantidad: 1 },
        { img: "../../../../img/caprese.jpg", name: "Ensalada Caprese", price: 5200, ing: ["Tomate", "Mozzarella fresca", "Albahaca", "Aceite de oliva"], carrito: false, cantidad: 1 },
        { img: "../../../../img/quinoa.jpeg", name: "Ensalada de Quinoa", price: 5200, ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"], carrito: false, cantidad: 1 },
        { img: "../../../../img/agridulce.png", name: "Ensalada Agridulce", price: 5200, ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"], carrito: false, cantidad: 1 },
        { img: "../../../../img/EnsaladaWaldorf.png", name: "Ensalada Waldorf", price: 5200, ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"], carrito: false, cantidad: 1 },
        { img: "../../../../img/vegetariana.jpeg", name: "Ensalada Vegetariana", price: 5200, ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"], carrito: false, cantidad: 1 },
        { img: "../../../../img/filipa.jpeg", name: "Ensalada Filipa", price: 5200, ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"], carrito: false, cantidad: 1 }


    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const agregarAlCarrito = (producto) => {
        
        let bandera = true;

        const productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const existeEnCarrito = productosEnCarrito.find(item => item.name === producto.name);

        if (!existeEnCarrito) {
            const actualizado = { ...producto, carrito: true };
            const nuevosProductos = [...productosEnCarrito, actualizado];

            setCarritoProductos(nuevosProductos);
            localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
            
        } else {
            // Si el producto ya existe, verificamos que la cantidad no supere 10
            const nuevosProductos = productosEnCarrito.map(item => {
                if (item.name === producto.name) {
                    // Si la cantidad es menor a 10, incrementamos
                    if (item.cantidad < 10) {

                        return { ...item, cantidad: item.cantidad + 1 }; 

                    } else {
                        bandera = false
                    }
                }
                return item; // Retornamos el producto sin cambios si no es el que buscamos
            });
    
            // Actualizamos el estado y el localStorage
            setCarritoProductos(nuevosProductos);
            localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
        }

        // Emitimos el evento para actualizar el contador del carrito
        const event = new CustomEvent('updateCartCounter');
        window.dispatchEvent(event);
        return bandera
    };




    return (
        <div>
            <PeladoComponent />

            <div className="flex justify-center mt-[100px]">
                <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
                    ENSALADAS DEL DIA
                </h2>
            </div>

            <div id='Menu' className="">
                <div
                    id='Primera_fila'
                    className='gap-8 flex flex-wrap justify-between mr-[300px] ml-[300px] mt-[100px]'
                >
                    {salads.map((salad, index) => (
                        <ProductCard
                            key={index}
                            product={salad}
                            agregarAlCarrito={agregarAlCarrito} // Pasamos la función
                            openModal={openModal}
                        />
                    ))}
                </div>

                <MenuInfo
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    producto={selectedProduct}
                />
            </div>
        </div>
    );
}

export default Menu;