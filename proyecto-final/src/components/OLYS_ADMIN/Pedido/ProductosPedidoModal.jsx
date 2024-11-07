import Modal from 'react-modal';

const ProductModal = ({ products, onRequestClose, IsOpen }) => {
    if (!products) {
        return null
    }
    return (
        <Modal
            isOpen={IsOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    width: '700px',
                    height: '600px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#fff",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top: "150px",
                    left: "-4px"
                },
            }}>'
            <div className='flex gap-[100px]'>

                <div >
                    <p className='text-3xl mb-5'> Ensaladas</p>
                    <ul>
                        {products && products[0].map((prod, index) =>

                            <li key={index}

                            >
                                <p
                                    className='text-[25px]'>
                                    -{prod}
                                </p>
                            </li>


                        )}
                    </ul>
                </div>
                <div>
                <p className='text-3xl mb-5'>Ingredientes</p>
                    <ul>
                        {products && products[1].map((prod) =>

                            <li key={prod.id}

                            >
                                <p
                                    className='text-[25px]'>
                                    -{prod.nombre}
                                </p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Modal>
    );
};

export default ProductModal;