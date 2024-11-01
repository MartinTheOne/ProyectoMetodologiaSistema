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
                    width: '350px',
                    height: '500px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#fff",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top: "200px",
                    left: "-4px"
                },
            }}>
            <ul>
                {products && products.map(prod =>

                    <li key={prod.id}
                    
                    >
                        <p
                            className='text-[25px]'>
                            -{prod.nombre}
                        </p>
                    </li>


                )}
            </ul>
        </Modal>
    );
};

export default ProductModal;