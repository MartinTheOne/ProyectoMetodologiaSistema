import React from 'react';
import Ensalada from "../../../../img/EnsaladaPollo.webp";
import Olys from "../../../../img/olys.png"
import Horario from "../../../../img/horarios.jpeg"
import compromiso from "../../../../img/compromiso.png"
import PeladoComponent from './PeladoComponent';
import Map from './Map.jsx';

const Home = () => {
  const text = "Olys Bowls... ¡COMPRA YA!";

  return (
    <>

      <PeladoComponent />
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
            <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
              <h2 className='text-center mt-4 text-xl'>
                ¿Dónde comprar Comida Saludable en San Miguel de Tucumán?
              </h2>
              
              <Map />
            </div>
          </div>

          <div id='MarcoN2' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">

            <div className=" h-[300px] w-[500px] mt-4 overflow-hidden rounded-md ">
              <img className='w-full h-full object-cover ' src={Horario} alt="" />
            </div>

            <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472]">
              <h2 className='text-center mt-4 text-xl'>Horarios de Apertura y Cierre</h2>
              <h3 className='mt-2'>
                🕒Lunes a Viernes: 10:00 AM - 14:30 PM
              </h3>
            </div>

          </div>
        </div>

        <div id="MarcoExterior2" className="mt-[100px] mr-[150px]">

          <div id='MarcoN3' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">

            <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md ">
              <img className='w-full mb-3 object-cover' src={Olys} alt="" />
            </div>

            <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472] flex-auto">
              <h2 className='text-center mt-4 text-xl'>Nosotros</h2>
              <h3 className='mt-2 '>
                En Olys Bowls, te ofrecemos una experiencia gastronómica única y saludable. Nuestra ubicación estratégica en San Miguel de Tucumán te permite disfrutar de nuestros deliciosos bowls de ensaladas, wraps y smoothies en un entorno acogedor y cálido.
              </h3>
            </div>
          </div>

          <div id='MarcoN4' className="h-[500px] w-[700px] mb-10  flex flex-col items-center gap-6">

            <div className="bg-slate-900 h-[300px] w-[500px] overflow-hidden mt-4 rounded-md">
              <img className='w-full h-full object-cover' src={compromiso} alt="" />
            </div>

            <div className=" h-[140px] w-[500px] shadow rounded-lg bg-[#6cb472] ">
              <h2 className='text-center mt-4 text-xl'>Compromiso con la Calidad</h2>
              <h3 className='mt-2'>
                En Olys, priorizamos ingredientes frescos y opciones saludables para asegurar que cada bocado sea nutritivo y delicioso.
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