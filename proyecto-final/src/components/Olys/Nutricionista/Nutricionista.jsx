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

            <PeladoComponent />

            <div className="flex justify-center mt-[100px]">
                <h2 className='font-julius text-[#0E3C09] text-6xl movil-sm:text-5xl movil-s:text-5xl movil-m:text-6xl  font-extrabold'>
                    Nutricionista
                </h2>
            </div>

            <div className="flex justify-center mt-[100px] mb-20">
                <div class="flex items-center w-[600px] movil-sm:w-[400px] movil-s:w-[400px] movil-m:w-[500px] justify-center p-4">
                    <div class=" bg-[#6cb472] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div class="flex justify-center">
                            <img className='w-full ' src="/img/Nutri.webp"/>
                                <div class="absolute top-0 right-0 m-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm movil-sm:hidden font-semibold">Gratis</div>
                        </div>
                        <div class="p-6 space-y-4 movil-sm:space-y-4 font-julius text-[#0E3C09]">
                            <h2 class="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300" tabindex="0">Lic. Lopez Ana</h2>
                            <div class="flex items-center space-x-1" aria-label="5 out of 5 stars rating">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#6cb472] transition-transform hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#6cb472] transition-transform hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#6cb472] transition-transform hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#6cb472] transition-transform hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#6cb472] transition-transform hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="flex items-start space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="">24 de septiembre 109</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="">Primera consulta: <span class="  rounded-lg px-[1px] py-1 "> <span className=''>Gratis</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-[50px] ">
                <h2 className="font-julius text-[#0E3C09] text-4xl font-extrabold border-b-2 border-b-green-900" >
                    Turnos
                </h2>
            </div>

            <div className="flex flex-col items-center gap-10">

                <div className="Lunes">

                    <div class="p-4 flex items-center justify-center">

                        <div class="h-[150px] w-[600px] movil-sm:w-[350px] movil-s:w-[400px] movil-m:w-[500px] mt-4 font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">

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
                    <div class="h-[150px] w-[600px] movil-sm:w-[350px] movil-s:w-[400px] movil-m:w-[500px]  font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">

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
                    <div class="h-[150px] w-[600px] movil-sm:w-[350px] movil-s:w-[400px] movil-m:w-[500px] mt-4 font-julius bg-[#6cb472] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-4" role="region" aria-label="Selector de turnos">

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