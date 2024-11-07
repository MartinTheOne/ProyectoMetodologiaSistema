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
                    
                },
            }}
        >
            <button className='text-opacity-70 float-right w-7 h-7 text-[13px] rounded-md shadow flex justify-center items-center'
                onClick={() => {
                    clearSelection();
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
                backgroundColor: '#ffffff ',
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
            <ul className='' style={{
                padding: 0,
                margin: 0,
                textAlign: 'center',
                
                width: '100%',
            }}>
                <div className='flex flex-col gap-10 text-[30px]'>
                    <div className='flex flex-col justify-between'>
                        <div className=' '>
                            {productos.map((prod) => (
                                <li key={prod.id} style={{
                                    marginBottom: '8px',
                                    fontSize: '20px',
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
                            className='rounded-md shadow text-[16px] p-2 font-julius' 
                            onClick={handlerClick}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </ul>
        </Modal>
    );
};

export default ArmarBowlInfo;
