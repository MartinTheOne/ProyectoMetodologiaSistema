import pelado from "../../../../img/Pelado.png";

const PeladoComponent = () => {
    return (
        <div id='Panel' className="border-8  border-[#0E3C09] border-opacity-5 shadow-lg rounded-[30px] bg-[#72bf78] bg-opacity-5 flex flex-col mt-[150px] mx-12 ">
            <div id="Titulo-Olys" className="relative cursor-pointer left-6 font-julius text-opacity-90 text-[#0E3C09] text-7xl text-center mt-6">
                <h1 className='hover:scale-110 transition-transform duration-300'>Olys</h1>
            </div>

            <div className="flex justify-center items-center">
                <div id="Subtitulo-Bowls-Izquierdo" className="  transform -rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="  Porvosnegro:px-[40px]  Porvosnegro:ml-[40px]  Porvosnegro:text-2xl  Porvosnegro:py-5  xl:px-[70px] xl:text-4xl xl:py-5 AD:px-[60px] AD:ml-[40px] AD:text-3xl AD:py-5 lg:px-[60px] lg:ml-[40px] lg:text-2xl lg:py-5  inline-block text-center rounded-[20px] bg-[rgb(114,191,120)] bg-gradient-to-r from-[rgba(114,191,120,1)_31%] via-[rgba(106,187,112,1)_56%] to-[rgba(111,207,119,1)_80%] 2xl:px-4 2xl:py-2 shadow-lg font-julius text-[#0E3C09] 2xl:text-6xl">
                        Bowls <br /> Nutritivos
                    </span>
                </div>

                <div id="Pelado" className="mx-4 cursor-pointer ">
                    <img src={pelado} alt="Pelado" />
                </div>

                <div id="Subtitulo-Bowls-Derecho" className="transform rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className=" Porvosnegro:px-[40px]  Porvosnegro:mr-[40px]  Porvosnegro:text-2xl Porvosnegro:py-5 xl:px-[70px] xl:text-4xl xl:py-5 AD:mr-[40px] AD:px-[60px] AD:text-3xl AD:py-5 lg:px-[60px] lg:mr-[40px] lg:text-2xl lg:py-5 inline-block text-center rounded-[20px] bg-[rgb(114,191,120)] bg-gradient-to-r from-[rgba(114,191,120,1)_31%] via-[rgba(106,187,112,1)_56%] to-[rgba(111,207,119,1)_80%] 2xl:px-4 2xl:py-2 shadow-lg font-julius text-[#0E3C09] 2xl:text-6xl">
                        Bowls <br /> Nutritivos
                    </span>
                </div>
            </div>
        </div>)
}

export default PeladoComponent;