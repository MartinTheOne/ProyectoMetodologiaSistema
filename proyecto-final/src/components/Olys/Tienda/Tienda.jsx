import imagen from '../../../../img/menu.png.webp'
import { Link } from 'react-router-dom';
import pelado from "../../../../img/Pelado.png" 

const Tienda = () => {

    return (
        <>
        <div id='Panel' className=" border-8 border-[#0E3C09] border-opacity-5 shadow-lg rounded-[30px]  bg-[#0E3C09] bg-opacity-5 flex flex-col mt-[150px] mx-12">
      <div id="Titulo-Olys" className="relative left-6  font-julius text-opacity-90 text-[#0E3C09] text-7xl text-center mt-6"> 
        <h1>Olys</h1>
      </div>

      <div className="flex justify-center items-center">
        <div id="Subtitulo-Bowls-Izquierdo" className="transform -rotate-90">
          <span className="inline-block text-center rounded-[20px] bg-[#9BC885] px-4 py-2 shadow-lg font-julius text-[#0E3C09] text-6xl whitespace-nowrap">
            Bowls <br /> Nutritivos
          </span>
        </div>

        <div id="Pelado" className="mx-4">
          <img src={pelado} alt="Pelado" />
        </div>

        <div id="Subtitulo-Bowls-Derecho" className="transform rotate-90">
          <span className="inline-block text-center rounded-[20px] bg-[#9BC885] px-4 py-2 shadow-lg font-julius  text-[#0E3C09] text-6xl whitespace-nowrap">
            Bowls <br /> Nutritivos
          </span>
        </div>
      </div>
    </div>

            <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 mx-10">
                
            <Link to="/menu">
                <div className="text-center">
                    <h2 className="mt-4 text-xl font-semibold text-[#d9e5d3]">Menu</h2>
                    <div className="bg-white p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>

            </Link>
        
            <Link to="/armarBowl">
                <div className="text-center">
                    <h2 className="mt-4 text-xl font-semibold text-[#d9e5d3]">Arma tu Bowl</h2>
                    <div className="bg-white p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>
             </Link>
            </div>

        </>
    )
}

export default Tienda;