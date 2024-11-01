import imagen from '../../../../img/menu.png.webp'
import { Link } from 'react-router-dom';
import PeladoComponent from '../Home/PeladoComponent';

const Tienda = () => {

    return (
        <>
             <PeladoComponent/>

             <div className="xd"></div>

            <div className="flex justify-center mt-[100px]">
              <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
                Tienda
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 mx-10">
                
            <Link to="/menu">
                <div className="text-center">
                    <h2 className="mt-4 font-julius text-[#0E3C09] text-5xl font-extrabold mb-10">Menu</h2>
                    <div className="bg-[#72bf78] p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>

            </Link>
        
            <Link to="/armar-bowl">
                <div className="text-center">
                    <h2 className="mt-4 font-julius text-[#0E3C09] text-5xl font-extrabold mb-10">Arma tu Bowl</h2>
                    <div className="bg-[#72bf78] p-3 rounded-xl shadow-lg">
                        <img src={imagen} alt="menu" className="w-[450px] h-[450px] object-cover rounded-lg" />
                    </div>
                </div>
             </Link>
            </div>

            <div className='mt-[1000px]'>

            </div>

        </>
    )
}

export default Tienda;