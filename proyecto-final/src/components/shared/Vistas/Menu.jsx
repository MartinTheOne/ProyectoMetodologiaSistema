import React, { useState } from 'react';
import MenuInfo from '../../MenuInfo';
import Modal from 'react-modal';
import ProductCard from '../../ProducCard'; 

Modal.setAppElement('#root');

const Menu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const salads = [
        { img: "../../../../img/Ensalada.jpg", name: "Ensalada César", price: "$200", ing: ["Lechuga romana", "Crutones", "Queso parmesano", "Aderezo César"] },
        { img: "../../../../img/xd.jpg", name: "Ensalada Griega", price: "$11.99", ing: ["Tomate", "Pepino", "Cebolla roja", "Aceitunas", "Queso feta"] },
        { img: "../../../../img/Ensalada.jpg", name: "Ensalada Caprese", price: "$10.99", ing: ["Tomate", "Mozzarella fresca", "Albahaca", "Aceite de oliva"] },
        { img: "../../../../img/xd.jpg", name: "Ensalada de Quinoa", price: "$13.99", ing: ["Quinoa", "Vegetales mixtos", "Aguacate", "Vinagreta de limón"] }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div id='Sobre_nosotros' className="bg-[#9BC885]">
            <div 
                id='Primera_fila' 
                className='gap-8 flex flex-wrap justify-between mr-[300px] ml-[300px] mt-[600px]'
            >
                {salads.map((salad, index) => (
                    <ProductCard 
                        key={index} 
                        product={salad} 
                        index={index} 
                        openModal={openModal} 
                        
                    />
                ))}
            </div>

            <MenuInfo
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                producto={selectedProduct}
            />
        </div>
    );
    
}

export default Menu;




