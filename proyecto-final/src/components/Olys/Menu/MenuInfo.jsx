import React from 'react';
import Modal from 'react-modal';

const MenuInfo = ({ isOpen, onRequestClose, producto }) => {
    if (!producto) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalles del producto"
            style={{
                overlay: {
                    zIndex: "11",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    width: '500px',
                    height: '550px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#72bf78",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top:"200px",
                    left:"-4px",
                    
                },
            }}
        >
            <button  className='text-opacity-70 float-right w-7 h-7 text-[13px] rounded-md shadow flex justify-center items-center'
                onClick={onRequestClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    
                    border: 'none',
                
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
                {producto.name}
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
                
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
                INGREDIENTES
            </h3>

            <ul className='font-julius' style={{
                listStyleType: "inherit",
                padding: 0,
                margin: 0,
                textAlign: 'center',
                width: '100%',
            }}>
                {producto.ing && producto.ing.map((ingrediente, index) => (
                    <li key={index} style={{ 
                        marginBottom: '8px',
                        fontSize: '16px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                        textAlign: "left",
                        marginLeft: "85px",
                        
                    }}>
                        {ingrediente}
                    </li>
                ))}
            </ul>
        </Modal>
    );
};

export default MenuInfo;