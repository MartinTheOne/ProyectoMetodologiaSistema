import React from 'react';
import pelado from "../../../../img/Pelado.png";
import Ensalada from  "../../../../img/EnsaladaPollo.webp";

const Home = () => {
  const text = "Olys Bowls... ¡COMPRA YA!";

  return (
    <>
      <div id='Panel' className="border-8  border-[#0E3C09] border-opacity-5 shadow-lg rounded-[30px] bg-[#72bf78] bg-opacity-5 flex flex-col mt-[150px] mx-12">
        <div id="Titulo-Olys" className="relative cursor-pointer left-6 font-julius text-opacity-90 text-[#0E3C09] text-7xl text-center mt-6"> 
          <h1 className='hover:scale-110 transition-transform duration-300'>Olys</h1>
        </div>

        <div className="flex justify-center items-center">
          <div id="Subtitulo-Bowls-Izquierdo" className="transform -rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300">
            <span className="inline-block text-center rounded-[20px] bg-[rgb(114,191,120)] bg-gradient-to-r from-[rgba(114,191,120,1)_31%] via-[rgba(106,187,112,1)_56%] to-[rgba(111,207,119,1)_80%] px-4 py-2 shadow-lg font-julius text-[#0E3C09] text-6xl whitespace-nowrap">
              Bowls <br /> Nutritivos
            </span>
          </div>

          <div id="Pelado" className="mx-4 cursor-pointer ">
            <img src={pelado} alt="Pelado" />
          </div>

          <div id="Subtitulo-Bowls-Derecho" className="transform rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300">
            <span className="inline-block text-center rounded-[20px] bg-[rgb(114,191,120)] bg-gradient-to-r from-[rgba(114,191,120,1)_31%] via-[rgba(106,187,112,1)_56%] to-[rgba(111,207,119,1)_80%] px-4 py-2 shadow-lg font-julius text-[#0E3C09] text-6xl whitespace-nowrap">
              Bowls <br /> Nutritivos
            </span>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div id='xDdDDD' className='rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-300 items-center flex justify-center mt-[40px] h-[110px] w-[900px] bg-[#72bf78] bg-opacity-5 border-8 border-[#0E3C09] border-opacity-10'>
          <h2 className='text-[4rem]'>
            {text.split("").map((char, index) => (
              <span 
                key={index}
                className="inline-block animate-bounce"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  color: 'rgba(14, 60, 9, 0.5)',
                  opacity: '',
                  fontFamily: 'Julius',
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
          Sobre Nosotros
        </h2>
      </div>

      <div className="bg-black h-[1200px] w-[1900px] mt-[90px] flex justify-between">
         
        <div id="MarcoExterior1" className="mt-[100px]  ml-[150px]"> 

          <div id='MarcoN1' className="bg-white h-[500px] w-[700px] mb-10 flex flex-col items-center gap-6">
                    
                <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md">
                    <img className='w-full h-full object-cover' src={Ensalada} alt="" />

                </div>

                  <div className="bg-yellow-400 h-[140px] w-[500px] ">
                    <h2 className='text-center'>Este es un titulo</h2>
                    <h3>
                      Esto es una descripcion sobre el local Olys
                    </h3>

                </div>
          </div>
                
          <div id='MarcoN2' className="bg-white h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
            
            <div className="bg-slate-900 h-[300px] w-[500px] mt-4 overflow-hidden rounded-md ">
                <img className='w-full h-full object-cover ' src={Ensalada} alt="" />
            </div>


            <div className="bg-yellow-400 h-[140px] w-[500px] ">
                    <h2 className='text-center'>Este es un titulo</h2>
                    <h3>
                      Esto es una descripcion sobre el local Olys
                    </h3>
            </div>
          </div>
        </div>
          
          <div  id="MarcoExterior2"  className="mt-[100px] mr-[150px]">

                <div id='MarcoN3' className="bg-white h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
                    
                    <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md ">
                        <img className='w-full h-full object-cover' src={Ensalada} alt="" />
                    </div>


                    <div className="bg-yellow-400 h-[140px] w-[500px] ">
                        <h2 className='text-center'>Este es un titulo</h2>
                        <h3>
                           Esto es una descripcion sobre el local Olys
                        </h3>
                    </div>
                </div>

                <div id='MarcoN4' className="bg-white h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
                   
                    <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md">
                        <img className='w-full h-full object-cover' src={Ensalada} alt="" />
                    </div>


                    <div className="bg-yellow-400 h-[140px] w-[500px] ">
                      <h2 className='text-center'>Este es un titulo</h2>
                      <h3>
                        Esto es una descripcion sobre el local Olys
                      </h3>
                    </div>
                </div>

          </div>
      </div>

      <div className='h-[1000px]'>
      </div>

      
    </>
  );
}

export default Home;
