import { Link } from 'react-router-dom';
import PeladoComponent from '../Home/PeladoComponent';
import Footer from '../Home/Footer';
import menudelDiaFoto from "/img/Menu.jpeg"
import armatubowl from "/img/armatubowl.jpeg"

const Tienda = () => {

    return (
        <>
             <PeladoComponent/>

            <div className="flex justify-center mt-[100px] ">
              <h2 className='font-julius text-[#d4d5c8] text-6xl movil-sm:text-5xl font-extrabold'>
                Tienda
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 700-md:gap-2 justify-items-center mt-10 mx-10 movil-s:flex movil-s:flex-col  movil-sm:flex movil-sm:flex-col  movil-smm:flex movil-smm:flex-col">

            <Link to="/menu">
                <div className="text-center movil-s:flex movil-s:flex-col movil-s:items-center movil-sm:flex movil-sm:flex-col movil-sm:items-center movil-smm:flex movil-smm:flex-col movil-smm:items-center">
                    <h2 className="mt-4 font-julius movil-sm:text-4xl  text-[#e0e0e0] text-5xl font-extrabold mb-10">Menu</h2>
                    <div className="bg-[#1e5e39]  movil-s:w-[250px]  p-3 rounded-xl shadow-lg   hover:scale-105 transition-transform duration-300 ease-in-out ">
                        <img src={menudelDiaFoto} alt="menu" className="w-full movil-s:h-[300px] movil-sm:h-[300px] movil-smm:h-[300px]   700-md:h-[400px] h-[450px] object-cover rounded-lg " />
                    </div>
                </div>

            </Link>

            <Link to="/armar-bowl">
                <div className="text-center movil-s:flex movil-s:flex-col movil-s:items-center movil-sm:flex movil-sm:flex-col movil-sm:items-center movil-smm:flex movil-smm:flex-col movil-smm:items-center ">
                    <h2 className="mt-4 font-julius movil-sm:text-4xl  text-[#e0e0e0] text-5xl font-extrabold mb-10">Bowl</h2>
                    <div className="bg-[#1e5e39] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={armatubowl} alt="menu" className="w-full movil-s:h-[300px] movil-sm:h-[300px] movil-smm:h-[300px]   700-md:h-[400px] h-[450px] object-cover rounded-lg " />
                    </div>
                </div>
             </Link>
            </div>

            <Footer></Footer>

        </>
    )
}

export default Tienda;