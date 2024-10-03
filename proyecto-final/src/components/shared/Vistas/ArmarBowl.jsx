import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ArmarBowlCard from '../ArmarBowlCard';
import ArmarBowlInfo from '../ArmarBowlInfo';
import axios from 'axios';

Modal.setAppElement('#root');

const ArmarBowl = () => {
    const [productos, setProductos] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mostrarIcon, setMostrarIcon] = useState(false);
    const [selectedTipoProduct, setSelectedTipoProduct] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [cantidadElegir, setCantidadElegir] = useState(null);

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
    }, []);

    useEffect(() => {
        if (productos && selectedTipoProduct) {
            const filtrados = productos.filter(prod => prod.tipoProducto === selectedTipoProduct);
            setProductosFiltrados(filtrados);
        }
    }, [selectedTipoProduct, productos]);

    const salads = [
        { img: "../../../../img/EnsaladaPollo.webp", name: "Base", cantidad: 1 },
        { img: "../../../../img/EnsaladaPollo.webp", name: "Ingrediente", cantidad: 4 },
        { img: "../../../../img/EnsaladaPollo.webp", name: "Proteina", cantidad: 1 },
        { img: "../../../../img/EnsaladaTomate.jpg", name: "Queso", cantidad: 1 },
        { img: "../../../../img/EnsaladaTomate.jpg", name: "Premium", cantidad: 1 },
        { img: "../../../../img/EnsaladaTomate.jpg", name: "Aderezo", cantidad: 2 },
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

    return (
        <div id='Sobre_nosotros' className="bg-[#9BC885]">
            <div
                id='Primera_fila'
                className='gap-8 flex flex-wrap justify-between mr-[300px] ml-[300px] mt-[600px]'
            >
                {salads.map((salad, index) => (
                    <ArmarBowlCard
                        key={index}
                        product={salad}
                        index={index}
                        openModal={openModal}
                        mostrarIcon={mostrarIcon} 
                    />
                ))}
            </div>
            <div>              
                <ArmarBowlInfo
                    isOpen={modalIsOpen}
                    setIsOpen={setModalIsOpen}
                    onRequestClose={closeModal}
                    productos={productosFiltrados}
                    tipoProducto={selectedTipoProduct}
                    cantidadElegir={cantidadElegir}
                    setMostrarICon={setMostrarIcon}
                />          
            </div>
        </div>
    );
};

export default ArmarBowl;
