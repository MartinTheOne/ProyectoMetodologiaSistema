import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ArmarBowlCard from '../ArmarBowl/ArmarBowlCard.jsx';
import ArmarBowlInfo from '../ArmarBowl/ArmarBowlInfo.jsx';
import axios from 'axios';
import pelado from  "../../../../img/Pelado.png"

Modal.setAppElement('#root');

const ArmarBowl = () => {
    const [productos, setProductos] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mostrarIcon, setMostrarIcon] = useState([]);
    const [VerBotonPresionado, SetVerBotonPresionado] = useState();
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

    return (
        <div>

            <div id='Panel' className=" border-8 border-[#0E3C09] border-opacity-5 shadow-lg rounded-[30px]  bg-[#0E3C09] bg-opacity-5 flex flex-col mt-[150px] mx-12">
                <div id="Titulo-Olys" className="relative left-6  font-julius text-opacity-90 text-[#0E3C09] text-7xl text-center mt-6">
                    <h1>Olys</h1>
                </div>

                <div className="flex justify-center items-center">
                    <div id="Subtitulo-Bowls-Izquierdo" className="transform -rotate-90">
                        <span className="inline-block text-center rounded-[20px] bg-[#9BC885] px-4 py-2 shadow-lg font-julius text-[#0E3C09] text-6xl whitespace-nowrap">
                            Bowls <br /> Nutritivos
                        </span>
                    </div>

                    <div id="Pelado" className="mx-4">
                        <img src={pelado} alt="Pelado" />
                    </div>

                    <div id="Subtitulo-Bowls-Derecho" className="transform rotate-90">
                        <span className="inline-block text-center rounded-[20px] bg-[#9BC885] px-4 py-2 shadow-lg font-julius  text-[#0E3C09] text-6xl whitespace-nowrap">
                            Bowls <br /> Nutritivos
                        </span>
                    </div>
                </div>
            </div>

            <div id='Sobre_nosotros' className="mb-20 bg-[#9BC885]">
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
                <div>
                    <ArmarBowlInfo
                        isOpen={modalIsOpen}
                        setIsOpen={setModalIsOpen}
                        onRequestClose={closeModal}
                        productos={productosFiltrados}
                        tipoProducto={selectedTipoProduct}
                        cantidadElegir={cantidadElegir}
                        setMostrarIcon={setMostrarIcon}  // Pasar setMostrarIcon como prop
                        VerBotonPresionado={VerBotonPresionado}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArmarBowl;
