import Modal from 'react-modal';

const ModalProducto = ({ IsOpen, onRequestClose,IsStock ,prod}) => {

    const handlerClick=()=>{
        IsStock(prod)
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
                    width: '250px',
                    height: '150px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: "#fff",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 'none',
                    position: 'relative',
                    top: "350px",
                    left: "-4px"
                },
            }}>
            <div className='text-center'>
                <div className='mb-5'>
                    <p>¿Esta seguro que desea sacar este producto de stock?</p>
                </div>
                <div className="flex mt-2 ml-8 ">
                    <button onClick={handlerClick} className='bg-[#9BC885] text-white px-6 py-2 mr-4 rounded hover:bg-[#8AB775] transition-colors'>SI</button>
                    <button onClick={onRequestClose} className='bg-[#e33939] text-white px-5 py-2 rounded hover:bg-[#bd3939] transition-colors'>NO</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalProducto;