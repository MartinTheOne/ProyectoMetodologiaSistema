import React from 'react';
import Ensalada from  "../../../../img/EnsaladaPollo.webp";
import PeladoComponent from './PeladoComponent';

const Home = () => {
  const text = "Olys Bowls... ¡COMPRA YA!";

  return (
    <>

      <PeladoComponent/>    
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

      <div className=" h-full w-auto mt-[90px] flex justify-center gap-10 font-julius">
         
        <div id="MarcoExterior1" className="mt-[100px]  ml-[150px]"> 

          <div id='MarcoN1' className=" h-[500px] w-[700px] mb-10 flex flex-col items-center gap-6">
                    
                <div className=" h-[300px] w-[500px] overflow-hidden mt-4 rounded-md">
                    <img className='w-full h-full object-cover' src={Ensalada} alt="" />

                </div>

                  <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
                    <h2 className='text-center mt-4 text-xl'>Este es un titulo</h2>
                    <h3 className='mt-2 '>
                      Esto es una descripcion sobre el local Olys
                    </h3>

                </div>
          </div>
                
          <div id='MarcoN2' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
            
            <div className=" h-[300px] w-[500px] mt-4 overflow-hidden rounded-md ">
                <img className='w-full h-full object-cover ' src={Ensalada} alt="" />
            </div>


            <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
                    <h2 className='text-center mt-4 text-xl'>Este es un titulo</h2>
                    <h3 className='mt-2'>
                      Esto es una descripcion sobre el local Olys
                    </h3>
            </div>
          </div>
        </div>
          
          <div  id="MarcoExterior2"  className="mt-[100px] mr-[150px]">

                <div id='MarcoN3' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
                    
                    <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md ">
                        <img className='w-full h-full object-cover' src={Ensalada} alt="" />
                    </div>


                    <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
                        <h2 className='text-center mt-4 text-xl'>Este es un titulo</h2>
                        <h3 className='mt-2'>
                           Esto es una descripcion sobre el local Olys
                        </h3>
                    </div>
                </div>

                <div id='MarcoN4' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">
                   
                    <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md">
                        <img className='w-full h-full object-cover' src={Ensalada} alt="" />
                    </div>


                    <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
                      <h2 className='text-center mt-4 text-xl'>Este es un titulo</h2>
                      <h3 className='mt-2'>
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