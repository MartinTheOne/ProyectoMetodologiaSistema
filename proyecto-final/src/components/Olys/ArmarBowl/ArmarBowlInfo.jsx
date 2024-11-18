import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ArmarBowl.css';

const ArmarBowlInfo = ({ isOpen, setIsOpen, onRequestClose, productos, tipoProducto, cantidadElegir, setMostrarIcon, VerBotonPresionado, Borrar, updateSelectedItems }) => {
    if (!productos) {
        return null;
    }

    if (Borrar) {
        clearSelection();
    }

    const initialProductosElegidos = JSON.parse(localStorage.getItem('productosElegidos')) || {
        Base: [],
        Ingrediente: [],
        Proteina: [],
        Aderezo: [],
        Premium: [],
        Queso: []
    };

    const [selectedIds, setSelectedIds] = useState([]);
    const [productosElegidos, setProductosElegidos] = useState(initialProductosElegidos);

    // Cargar selecciones guardadas cuando se abre el modal


    useEffect(() => {
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
                },
            ]
        });
        window.notyf = notyf;
    }, []);

    // Guardar selecciones temporales cuando cambian
    useEffect(() => {
        localStorage.setItem(`temp_${tipoProducto}`, JSON.stringify(selectedIds));
    }, [selectedIds, tipoProducto]);

    const handleCheckBox = (e, id) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            if (cantidadElegir === 1) {
                // Para tipos que solo permiten una selección
                setSelectedIds([id]);
            } else {
                // Para tipos que permiten múltiples selecciones
                if (selectedIds.length < cantidadElegir) {
                    setSelectedIds([...selectedIds, id]);
                } else {
                    // Eliminar el último elemento seleccionado y agregar el nuevo
                    const newSelection = [...selectedIds.slice(0, -1), id];
                    setSelectedIds(newSelection);
                }
            }
        } else {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        }
    };

    const handlerClick = () => {
        const limitePorTipo = {
            Base: 1,
            Ingrediente: 4,
            Proteina: 1,
            Aderezo: 2,
            Premium: 1,
            Queso: 1
        };

        if (selectedIds.length !== limitePorTipo[tipoProducto]) {
            window.notyf.error(`Debes seleccionar exactamente ${limitePorTipo[tipoProducto]} ${tipoProducto}.`);
            return;
        }

        const nuevosProductosElegidos = {
            ...productosElegidos,
            [tipoProducto]: [...selectedIds]
        };

        setProductosElegidos(nuevosProductosElegidos);
        localStorage.setItem('productosElegidos', JSON.stringify(nuevosProductosElegidos));
        updateSelectedItems(tipoProducto, productos.filter(prod => selectedIds.includes(prod.id)));
        setMostrarIcon((prev) => [...prev, VerBotonPresionado]);

        // Limpiar selecciones temporales y cerrar modal
        localStorage.removeItem(`temp_${tipoProducto}`);
        clearSelection();
        setIsOpen(false);
    };

    const clearSelection = () => {
        setSelectedIds([]);
    };

    return (
        <Modal
        className={`w-full ${window.innerWidth <= 561 ? 'max-w-[90%]' : 'max-w-[600px]'} h-[500px] movil-sm:h-[450px] custom-modal-content`}
            isOpen={isOpen}
            onRequestClose={() => {
                onRequestClose();
            }}
            contentLabel="Detalles del producto"
            style={{
                overlay: {
                    zIndex: "11",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    width: '650px',
                    height: '650px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#72bf78",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top: "200px",
                    left: "-4px",
                    overflow: "auto"
                }
            }}
       
        >
            <button
                className='text-opacity-70 float-right w-7 h-7 text-[13px] rounded-md shadow flex justify-center items-center'
                onClick={() => {
                    onRequestClose();
                }}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                ✕
            </button>
            <h2 className='font-julius' style={{
                fontSize: '24px',
                marginBottom: '20px',
                textAlign: 'center',
            }}>
                {tipoProducto}
            </h2>

            <div className='flex flex-col font-julius' style={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                width: '90%',
                height: '150px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
                <div style={{ color: '#72bf78', fontSize: '70px', fontFamily: "julios" }}>OLYS</div>
                <div className="text-[#6fbb76]">Oliva limon & sal</div>
            </div>

            <h3 className='font-julius' style={{
                fontSize: '20px',
                marginBottom: '15px',
            }}>
                Elegi {cantidadElegir}
            </h3>

            <ul style={{
                padding: 0,
                margin: 0,
                textAlign: 'center',
                width: '100%',
            }}>
                <div className='flex flex-col gap-10 text-[30px] font-julius'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            {productos.map((prod) => {
                                let opacidad = prod.cantidad == 0 ? "opacity-35" : ""
                                return (
                                    <li key={prod.id} style={{
                                        marginBottom: '8px',
                                        fontSize: '20px',
                                        textAlign: "left",
                                        marginLeft: "85px",
                                        display: "flex"
                                    }}>
                                        <input
                                            className={`${opacidad} mt-[5px] mr-1 appearance-none h-4 w-4 bg-[#77c77d] shadow rounded checked:bg-[#1d5222] cursor-pointer checked:border checked:border-[#2b8135]`}
                                            type="checkbox"
                                            id={prod.id}
                                            checked={selectedIds.includes(prod.id)}
                                            disabled={prod.cantidad == 0 ? true : false}
                                            onChange={(e) => handleCheckBox(e, prod.id)}
                                        />
                                        <p className={`${opacidad}`}>
                                            {prod.nombre}
                                        </p>
                                    </li>
                                )
                            })}
                        </div>
                        <div>
                            <button
                                className='rounded-md shadow text-[16px] p-2 font-julius'
                                onClick={handlerClick}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </ul>
        </Modal>
    );
};

export default ArmarBowlInfo;