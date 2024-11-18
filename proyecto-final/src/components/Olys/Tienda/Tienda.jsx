import { Link } from 'react-router-dom';
import PeladoComponent from '../Home/PeladoComponent';
import Footer from '../Home/Footer';
import menudelDiaFoto from "/img/Menu.jpeg"
import armatubowl from "/img/armatubowl.jpeg"

const Tienda = () => {

    return (
        <>
             <PeladoComponent/>

            <div className="flex justify-center mt-[100px]">
              <h2 className='font-julius text-[#0E3C09] text-6xl movil-sm:text-5xl font-extrabold'>
                Tienda
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 700-md:gap-2 justify-items-center mt-10 mx-10">

            <Link to="/menu">
                <div className="text-center ">
                    <h2 className="mt-4 font-julius movil-sm:text-4xl  text-[#0E3C09] text-5xl font-extrabold mb-10">Menu</h2>
                    <div className="bg-[#72bf78]  p-3 rounded-xl shadow-lg   hover:scale-105 transition-transform duration-300 ease-in-out ">
                        <img src={menudelDiaFoto} alt="menu" className="w-full 700-md:h-[400px] h-[450px] object-cover rounded-lg " />
                    </div>
                </div>

            </Link>

            <Link to="/armar-bowl">
                <div className="text-center">
                    <h2 className="mt-4 font-julius movil-sm:text-4xl  text-[#0E3C09] text-5xl font-extrabold mb-10">Bowl</h2>
                    <div className="bg-[#72bf78] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={armatubowl} alt="menu" className="w-full 700-md:h-[400px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>
             </Link>
            </div>

            <Footer></Footer>

        </>
    )
}

export default Tienda;