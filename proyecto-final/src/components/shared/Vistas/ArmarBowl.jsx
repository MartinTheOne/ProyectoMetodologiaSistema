import React, { useState } from 'react';
import Modal from 'react-modal';
import ArmarBowlCard from '../ArmarBowlCard';
import ArmarBowlInfo from '../ArmarBowlInfo';

Modal.setAppElement('#root');


const ArmarBowl = ( )=>{

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const salads = [
        { img: "../../../../img/EnsaladaPollo.webp",cantidad:1 ,name: "Base", BaseVerde:['lechuga crespa','Espinaca','Rucula','Mix de verdes','Repollo morado'] ,BasePastas:['tirabuzon'],BaseArroz: ['integral','yamani']},
        { img: "../../../../img/EnsaladaPollo.webp",cantidad:4, name: "Ingredientes",  aaaaa:['lechuga crespa','Espinaca','Rucula','Mix de verdes','Repollo morado'] ,BasePastas:['tirabuzon'],BaseArroz: ['integral'] },
        { img: "../../../../img/EnsaladaTomate.jpg",cantidad:1, name: "Queso",  BaseVearde:['lechuga crespa','Espinaca','Rucula','Mix de verdes','Repollo morado'] ,BasePastas:['tirabuzon'],BaseArroz: ['integral'] },
        { img: "../../../../img/EnsaladaTomate.jpg",cantidad:1,  name: "Premium", BaseVaaaerde:['lechuga crespa','Espinaca','Rucula','Mix de verdes','Repollo morado'] ,BasePastas:['tirabuzon'],BaseArroz: ['integral']}
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
                    <ArmarBowlCard 
                        key={index} 
                        product={salad} 
                        index={index} 
                        openModal={openModal} 

                    />
                ))}
            </div>

            <ArmarBowlInfo
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                producto={selectedProduct}
            />
             <div className='h-[5000px]'></div>

        </div>
        
    );
}

export default ArmarBowl;