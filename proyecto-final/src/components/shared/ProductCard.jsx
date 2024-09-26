import React from 'react';

const ProductCard = ({ product, index, openModal }) => {
    return (
        <div key={index} className={`Marco_externo_${index + 1} shadow-2xl border border-black border-opacity-10 rounded-t-[35px] rounded-b-[10px] w-[520px] h-[650px] flex flex-col justify-between items-center group hover:h-[700px] transition-all duration-300`}>
            <div className="img w-full h-[75%] overflow-hidden rounded-t-[35px]">
                <img className='w-full h-full object-cover' src={product.img} alt={product.name} />
            </div>
            <div className='info-container w-full p-4 bg-[#9BC885] flex flex-col items-center'>
                <h3 className='text-xl font-bold font-julius text-center'>{product.name}</h3>
                <p className='text-lg font-julius text-center'>{product.price}</p>
            </div>
            <div className='boton w-full flex justify-center items-center h-0 group-hover:h-[25%] overflow-hidden transition-all duration-300 rounded-b-[10px] space-x-4'>
                <button className='bg-[#3e9634] font-julius text-[#0E3C09] py-2 px-4 rounded-md hover:bg-[#38882f]'>
                    Comprar
                </button>
                <button onClick={() => openModal(product)} className='bg-[#3e9634] font-julius text-[#0E3C09] py-2 px-4 rounded-md hover:bg-green-600'>
                    Ver mÃ¡s
                </button>
            </div>
        </div>
    );
};

export default ProductCard;