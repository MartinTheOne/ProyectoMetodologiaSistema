import React, { useState } from 'react';
import MenuInfo from './MenuInfo';
import Modal from 'react-modal';
import ProductCard from '../Productos/ProductCard';

Modal.setAppElement('#root');

const Menu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const salads = [
        { img: "../../../../img/EnsaladaPollo.webp", name: "Ensalada César", price: "$200", ing: ["Lechuga romana", "Crutones", "Queso parmesano", "Aderezo César"] },
        { img: "../../../../img/EnsaladaPollo.webp", name: "Ensalada Griega", price: "$11.99", ing: ["Tomate", "Pepino", "Cebolla roja", "Aceitunas", "Queso feta"] },
        { img: "../../../../img/EnsaladaTomate.jpg", name: "Ensalada Caprese", price: "$10.99", ing: ["Tomate", "Mozzarella fresca", "Albahaca", "Aceite de oliva"] },
        { img: "../../../../img/EnsaladaTomate.jpg", name: "Ensalada de Quinoa", price: "$13.99", ing: ["Quinoa", "Vegetales mixtos", "Palta", "Vinagreta de limón"] }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (

        <div>
            

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
                <div className='h-[5000px]'></div>

            </div>
        </div>

    );

}

export default Menu;