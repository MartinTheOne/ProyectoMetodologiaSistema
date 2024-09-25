import imagen from '../../../../img/menu.png.webp'

const Tienda = () => {

    return (
        <>
            <h2 className="text-center text-3xl font-bold mt-[8.5%] text-[#d9e5d3] ">
                TIENDA
            </h2>

            <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 mx-10">
                {/*  menú  */}
                <div className="text-center">
                    <h2 className="mt-4 text-xl font-semibold text-[#d9e5d3]">Menu</h2>
                    <div className="bg-white p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>
                {/* Armar bowl */}

                <div className="text-center">
                    <h2 className="mt-4 text-xl font-semibold text-[#d9e5d3]">Arma tu Bowl</h2>
                    <div className="bg-white p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tienda;