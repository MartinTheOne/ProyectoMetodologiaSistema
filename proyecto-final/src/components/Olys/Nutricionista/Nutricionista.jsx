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
              <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
                Nutricionista
              </h2>
            </div>

            <div className="flex justify-start ml-[100px] mt-[100px] ">
                 <h2 className="font-julius text-[#0E3C09] text-4xl font-extrabold border-b-4 border-[#0E3C09]">
                    Lic. Florencia Cassanova
                 </h2>
            </div>

            <div className="flex justify-center mt-[100px]">
                 <h2 className="font-julius text-[#0E3C09] text-4xl font-extrabold">
                    Turnos
                 </h2>
            </div>

            <div className="flex flex-col items-center gap-10">

                <div className="Lunes">

                <div class="p-4 flex items-center justify-center">

                    <div class="h-[150px] w-[600px] mt-4 font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">
                       
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                           
                            <div class="space-y-1">
                                <h2 class="text-2xl font-semibold text-gray-800">Lunes</h2>
                               
                            </div>
                            
                            <div class="relative group">
                                <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                <button onClick={() => handleTurnosClick('Lunes')} class="relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#6cb472] to-green-500 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" aria-label="Ver turnos disponibles">
                                    Ver Turnos Disponibles
                                </button>
                            </div>
                        </div>
                        
                        <div class="w-full h-1 bg-gradient-to-r from-[#6cb472] to-green-500 rounded-full "></div>
                    </div>
                    
                </div>

                </div>

                <div className="Miercoles">
                <div class="h-[150px] w-[600px]  font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">
                       
                       <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          
                           <div class="space-y-1">
                               <h2 class="text-2xl font-semibold text-gray-800">Miercoles</h2>
                              
                           </div>
                           
                           <div class="relative group">
                               <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                               <button onClick={() => handleTurnosClick('Miercoles')} class="relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#6cb472] to-green-500 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" aria-label="Ver turnos disponibles">
                                   Ver Turnos Disponibles
                               </button>
                          
                           </div>
                       </div>
                       
                       <div class="w-full h-1 bg-gradient-to-r from-[#6cb472] to-green-500 rounded-full"></div>
                   </div>

                    
                </div>

                <div className="Viernes">
                <div class="h-[150px] w-[600px] mt-4 font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">
                       
                       <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          
                           <div class="space-y-1">
                               <h2 class="text-2xl font-semibold text-gray-800">Viernes</h2>
                              
                           </div>
                           
                           <div class="relative group">
                               <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                               <button onClick={() => handleTurnosClick('Viernes')} class="relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#6cb472] to-green-500 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" aria-label="Ver turnos disponibles">
                                   Ver Turnos Disponibles
                               </button>
                          
                           </div>
                       </div>
                       
                       <div class="w-full h-1 bg-gradient-to-r from-[#6cb472] to-green-500 rounded-full "></div>
                   </div>

                   
                </div>
            </div>

            <Footer></Footer>
        </>        
    );
};

export default Nutricionista;