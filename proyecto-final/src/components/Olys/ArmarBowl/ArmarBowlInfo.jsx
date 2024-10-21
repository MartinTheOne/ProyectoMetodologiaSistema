import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ArmarBowlInfo = ({ isOpen,setIsOpen, onRequestClose, productos, tipoProducto, cantidadElegir,setMostrarIcon,VerBotonPresionado }) => {
    if (!productos) {
        return null;
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

    useEffect(() => {

        setSelectedIds(productosElegidos[tipoProducto] || []);
    }, [isOpen, tipoProducto, productosElegidos]);



    const handleCheckBox = (e, id) => {
        if (e.target.checked) {
            if (selectedIds.length < cantidadElegir) {
                setSelectedIds([...selectedIds, id]);
            } else {
                alert(`No puedes seleccionar más de ${cantidadElegir} ${tipoProducto}.`);
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
            alert(`Debes seleccionar exactamente ${limitePorTipo[tipoProducto]} ${tipoProducto}.`);
            return;
        }
    
        const nuevosProductosElegidos = {
            ...productosElegidos,
            [tipoProducto]: [...selectedIds]
        };
    
        setProductosElegidos(nuevosProductosElegidos);
        localStorage.setItem('productosElegidos', JSON.stringify(nuevosProductosElegidos));
    
        // Aquí agregas el id al estado
        setMostrarIcon((prev) => [...prev, VerBotonPresionado]);
    
        clearSelection();
        setIsOpen(false);
    };
    
    

   
    const clearSelection = () => {
        setSelectedIds([]);
    };

    return (
        <Modal
            isOpen={isOpen}
            
            onRequestClose={() => {
                clearSelection();
                onRequestClose();
            }}
            contentLabel="Detalles del producto"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    width: '650px',
                    height: '650px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#72bf78   ",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top: "200px",
                    left: "-4px"
                },
            }}
        >
            <button
                onClick={() => {
                    clearSelection();
                    onRequestClose();
                }}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: '#ffffff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                X
            </button>
            <h2 style={{
                fontSize: '24px',
                color: '#ffffff',
                marginBottom: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
                {tipoProducto}
            </h2>
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                width: '80%',
                height: '125px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
                <div style={{ color: '#9BC885', fontSize: '50px', fontFamily: "julius" }}>OLYS</div>
            </div>
            <h3 style={{
                fontSize: '20px',
                color: '#ffffff',
                marginBottom: '15px',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
                ELEGÍ {cantidadElegir}
            </h3>
            <ul className='' style={{
                padding: 0,
                margin: 0,
                textAlign: 'center',
                color: '#ffffff',
                width: '100%',
            }}>
                <div className='flex flex-col gap-10 text-[30px]'>
                    <div className='flex flex-col justify-between'>
                        <div className=' '>
                            {productos.map((prod) => (
                                <li key={prod.id} style={{
                                    marginBottom: '8px',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                    textAlign: "left",
                                    marginLeft: "85px",
                                }}>
                                    <input
                                        className='mr-2'
                                        type="checkbox"
                                        id={prod.id}
                                        checked={selectedIds.includes(prod.id)}
                                        onChange={(e) => handleCheckBox(e, prod.id)}
                                    />
                                    {prod.nombre}
                                </li>
                            ))}
                        </div>
                        <div>
                            <button 
                            className='bg-[#3aa762] rounded-lg text-[20px] p-2'
                            onClick={handlerClick}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </ul>
        </Modal>
    );
};

export default ArmarBowlInfo;
