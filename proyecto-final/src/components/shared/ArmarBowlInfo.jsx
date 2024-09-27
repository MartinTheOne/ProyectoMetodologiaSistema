import React from 'react';
import Modal from 'react-modal';

const ArmarBowlInfo = ({ isOpen, onRequestClose, producto: bowlIngredientes }) => {
    if (!bowlIngredientes) {
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
                    width: '650px',
                    height: '650px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#9BC885",
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
                {bowlIngredientes.name.toUpperCase()}
            </h2>
            <div style={{
                backgroundColor: '#ffffff   ',
                borderRadius: '15px',
                width: '80%',
                height: '125px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',

            }}>
                <div  style={{ color: '#9BC885', fontSize: '50px', fontFamily: "julios" }}>OLYS</div>
            </div>
            <h3 style={{
                fontSize: '20px',
                color: '#ffffff',
                marginBottom: '15px',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
                ELEGÍ {bowlIngredientes.cantidad}
            </h3>
            <ul className='' style={{
                padding: 0,
                margin: 0,
                textAlign: 'center',
                color: '#ffffff',
                width: '100%',
            }}>
                <div className='flex flex-col gap-10 text-[30px]'>
                    <div id='santy' className='flex justify-between'>

                        <div className=''>
                            <h2>VERDES</h2>
                            {bowlIngredientes.BaseVerde && bowlIngredientes.BaseVerde.map((productos, index) => (
                                <li key={index} style={{
                                    marginBottom: '8px',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                    textAlign: "left",
                                    marginLeft: "85px",

                                }}>
                                    <input className='mr-2 ' type="checkBox" id={index} />
                                    {productos}
                                </li>
                            ))}
                        </div>

                        <div>
                            <h2>PASTAS</h2>
                            {bowlIngredientes.BasePastas && bowlIngredientes.BasePastas.map((productos, index) => (
                                <li key={index} style={{
                                    marginBottom: '8px',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                    textAlign: "left",
                                    marginLeft: "85px",

                                }}>
                                    <input className='mr-2 ' type="checkBox" id={index} />
                                    {productos}
                                </li>
                            ))}
                        </div>

                    </div>
                    <div className='text-center '>
                        <div className='text-center'>
                            <h2>ARROZ</h2>
                            {bowlIngredientes.BaseArroz && bowlIngredientes.BaseArroz.map((productos, index) => (
                                <li key={index} style={{
                                    marginBottom: '8px',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                    textAlign: "left",
                                    marginLeft: "85px",

                                }}>
                                    <input className='mr-2 ' type="checkBox" id={index} />
                                    {productos}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </ul>
        </Modal>
    );
};

export default ArmarBowlInfo;