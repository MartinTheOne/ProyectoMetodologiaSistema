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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    width: '350px',
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
                    left:"-4px"
                },
            }}
        >
            <button 
                onClick={onRequestClose}
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
                {producto.name}
            </h2>
            <div style={{
                backgroundColor: '#ffffff   ',
                borderRadius: '15px',
                width: '90%',
                height: '150px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                
            }}>
                <div style={{ color: '#9BC885', fontSize: '70px', fontFamily: "julios" }}>OLYS</div>
            </div>
            <h3 style={{
                fontSize: '20px',
                color: '#ffffff',
                marginBottom: '15px',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
                INGREDIENTES
            </h3>
            <ul style={{
                listStyleType: "inherit",
                padding: 0,
                margin: 0,
                textAlign: 'center',
                color: '#ffffff',
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