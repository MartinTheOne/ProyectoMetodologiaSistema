import { useNavigate } from 'react-router-dom';
import PeladoComponent from '../Home/PeladoComponent';
import Footer from '../Home/Footer';

const Nutricionista = () => {
    const navigate = useNavigate();

    const handleTurnosClick = (dia) => {
        navigate(`/nutricionista/turnos/${dia.toLowerCase()}`);
    };
   
    return (
        <>
            <PeladoComponent/>  

            <div className="flex justify-center mt-[100px]">
                 <h2 className="font-julius text-[#0E3C09] text-6xl font-extrabold">
                    Nutricionista
                 </h2>
            </div>

            <div className="flex justify-start ml-[100px] mt-[100px]">
                 <h2 className="font-julius text-[#0E3C09] text-4xl font-extrabold">
                    Lic. Florencia Cassanova
                 </h2>
            </div>

            <div className="flex justify-center mt-[100px]">
                 <h2 className="font-julius text-[#0E3C09] text-4xl font-extrabold">
                    Turnos
                 </h2>
            </div>

            <div className="flex flex-col items-center">
                <div className="Lunes">
                    <div className="flex justify-center mt-[100px]">
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Lunes
                        </h2>
                    </div>

                    <button 
                        onClick={() => handleTurnosClick('Lunes')}
                        className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center"
                    >
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Ver turnos disponibles
                        </h2>
                    </button>
                </div>

                <div className="Miercoles">
                    <div className="flex justify-center mt-[100px]">
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Miercoles
                        </h2>
                    </div>

                    <button 
                        onClick={() => handleTurnosClick('Miercoles')}
                        className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center"
                    >
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Ver turnos disponibles
                        </h2>
                    </button>
                </div>

                <div className="Viernes">
                    <div className="flex justify-center mt-[100px]">
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Viernes
                        </h2>
                    </div>

                    <button 
                        onClick={() => handleTurnosClick('Viernes')}
                        className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center"
                    >
                        <h2 className="font-julius text-[#0E3C09] text-3xl font-extrabold">
                            Ver turnos disponibles
                        </h2>
                    </button>
                </div>
            </div>

            <Footer></Footer>
        </>        
    );
};

export default Nutricionista;