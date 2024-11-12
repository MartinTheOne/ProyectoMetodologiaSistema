import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ArmarBowlCard from '../ArmarBowl/ArmarBowlCard.jsx';
import ArmarBowlInfo from '../ArmarBowl/ArmarBowlInfo.jsx';
import axios from 'axios';
import PeladoComponent from '../Home/PeladoComponent.jsx';
import Footer from '../Home/Footer.jsx';

Modal.setAppElement('#root');

const ArmarBowl = () => {
    const [productos, setProductos] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mostrarIcon, setMostrarIcon] = useState([]);
    const [VerBotonPresionado, SetVerBotonPresionado] = useState();
    const [selectedTipoProduct, setSelectedTipoProduct] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [cantidadElegir, setCantidadElegir] = useState(null);
    const [selectedItems, setSelectedItems] = useState({});
    const [notificacion, setNotificacion] = useState(true);
    const [borrar, setBorrar] = useState(false);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await axios.get('http://localhost:8080/api/producto/findAll');
                setProductos(respuesta.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        obtenerProductos();


        const notyf = new Notyf({
            duration: 3000,
            position: {
                x: 'center',
                y: 'top',
            },
            types: [
                {
                    type: 'success',
                    background: "#28b463",
                    className: "rounded-[10px] text-black font-julius text-[15px]"
                },
                {
                    type: 'error',
                    background: "#e74c3c",
                    className: "rounded-[10px] text-black font-julius text-[15px]"
                }
            ]
        });
        window.notyf = notyf;


        const manejarEvento = (event) => {
            setNotificacion(event.detail.nuevoEstado);
        };
        window.addEventListener('cambiarEstado', manejarEvento);

        return () => {
            window.removeEventListener('cambiarEstado', manejarEvento);
        };
    }, []);

    useEffect(() => {
        if (productos && selectedTipoProduct) {
            const filtrados = productos.filter(prod => prod.tipoProducto === selectedTipoProduct);
            setProductosFiltrados(filtrados);
        }
    }, [selectedTipoProduct, productos]);

    const salads = [
        { id: 1, img: "../../../../img/EnsaladaPollo.webp", name: "Base", cantidad: 1, MostrarIcon: mostrarIcon.includes(1) ? true : false },
        { id: 2, img: "../../../../img/EnsaladaPollo.webp", name: "Ingrediente", cantidad: 4, MostrarIcon: mostrarIcon.includes(2) ? true : false },
        { id: 3, img: "../../../../img/EnsaladaPollo.webp", name: "Proteina", cantidad: 1, MostrarIcon: mostrarIcon.includes(3) ? true : false },
        { id: 4, img: "../../../../img/EnsaladaTomate.jpg", name: "Queso", cantidad: 1, MostrarIcon: mostrarIcon.includes(4) ? true : false },
        { id: 5, img: "../../../../img/EnsaladaTomate.jpg", name: "Premium", cantidad: 1, MostrarIcon: mostrarIcon.includes(5) ? true : false },
        { id: 6, img: "../../../../img/EnsaladaTomate.jpg", name: "Aderezo", cantidad: 2, MostrarIcon: mostrarIcon.includes(6) ? true : false },
    ];

    const openModal = (product) => {
        setSelectedTipoProduct(product.name);
        setCantidadElegir(product.cantidad);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedTipoProduct(null);
    };
    const agregarAlCarrito = () => {
        const todosSeleccionados = salads.every(item => mostrarIcon.includes(item.id));
        if (!todosSeleccionados) {
            window.notyf.error("Debes completar todos los pasos antes de agregar al carrito");
            return;
        }
    
    
        const ingredientesFinal = Object.values(selectedItems).flat().map(item => ({ id: item.id }));
    
        // Generar un ID único para cada bowl
        const bowlPersonalizadoId = `bowl_${Date.now()}`; // Usamos la marca de tiempo como ID único
    
        const bowlPersonalizado = {
            id: bowlPersonalizadoId, // Nuevo campo de ID único
            name: "Bowl Personalizado",
            img: "../../../../img/EnsaladaPollo.webp",
            price: 6500,
            cantidad: 1,
            ingId: ingredientesFinal,
            carrito: false
        };
    
        const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
        const nuevoCarrito = [...carritoActual, bowlPersonalizado];
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    
        window.notyf.success("Bowl agregado al carrito correctamente");
    
        const event = new CustomEvent('updateCartCounter');
        window.dispatchEvent(event);
    
        setMostrarIcon([]);
        setSelectedItems({});
    };
    

    const updateSelectedItems = (tipo, items) => {
        setSelectedItems(prev => ({
            ...prev,
            [tipo]: items.map(item => ({ id: item.id, name: item.name }))
        }));
    };
    return (
        <div>
            <PeladoComponent />

            <div className="flex justify-center mt-[100px]">
                <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
                    ARMA TU BOWL
                </h2>
            </div>

            <div className="flex justify-center mt-[60px]">
                <h3 className='font-julius text-[#0E3C09] text-5xl font-extrabold text-center'>
                    COMO MAS TE GUSTE <br /> EN 6 PASOS
                </h3>
            </div>

            <div id='ArmarBolw' className="mb-20">
                <div
                    id='Primera_fila'
                    className='gap-8 flex flex-wrap justify-between mr-[300px] ml-[300px] mt-[50px]'
                >
                    {salads.map((salad) => (
                        <ArmarBowlCard
                            key={salad.id}
                            product={salad}
                            openModal={openModal}
                            setSetVerBotonPresionado={SetVerBotonPresionado}
                            mostrarIcon={mostrarIcon}
                        />
                    ))}
                </div>
                <ArmarBowlInfo
                    isOpen={modalIsOpen}
                    setIsOpen={setModalIsOpen}
                    onRequestClose={closeModal}
                    productos={productosFiltrados}
                    tipoProducto={selectedTipoProduct}
                    cantidadElegir={cantidadElegir}
                    setMostrarIcon={setMostrarIcon}
                    VerBotonPresionado={VerBotonPresionado}
                    updateSelectedItems={updateSelectedItems} // Asegúrate de pasar esta función
                />

            </div>

            <div className="flex">
                <button
                    onClick={agregarAlCarrito}
                    className='glow-on-hover relative w-56 h-12 bg-[#72bf78] rounded-lg transition-colors duration-300 focus:outline-none ml-[300px] font-julius'
                >
                    Agregar al carrito
                </button>

                <div className='glow-on-hover flex items-center justify-center relative w-56 h-12 bg-[#72bf78] rounded-lg transition-colors duration-300 focus:outline-none ml-[20px] font-julius'>
                    Precio: $6500
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ArmarBowl;