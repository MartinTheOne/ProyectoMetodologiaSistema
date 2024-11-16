import React from 'react';
import PeladoComponent from './PeladoComponent';
import Map from './Map';
import Footer from "./Footer";
import PhotoCarousel from './Fotocarrusel.jsx';
import { Link } from 'react-router-dom';


const Home = () => {
  const text = "Olys Bowls... ¡COMPRA YA!";

  return (
    <>

      <PeladoComponent />
      <div className='flex justify-center'>
        <Link to="/tienda" ><div id='xDdDDD' className='rounded-2xl 700-md:hidden  cursor-pointer hover:scale-110 transition-transform duration-300 items-center flex justify-center mt-[40px] h-[110px] w-[900px] bg-[#72bf78] bg-opacity-5 border-8 border-[#0E3C09] border-opacity-10'>
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
        </Link>
      </div>

      <div className="flex justify-center mt-[100px]">
        <h2 className='font-julius text-[#0E3C09] text-6xl font-extrabold'>
          Sobre Nosotros
        </h2>
      </div>

      <div className="flex justify-center mt-[100px] mb-10">
        <p className='font-julius text-[#0E3C09] text-4xl font-extrabold'>
          Un poco de Gourmet del mejor local de ensaldas
        </p>
      </div>

      <PhotoCarousel />

      <div className="flex justify-center mt-[100px]">
        <p className='font-julius text-[#0E3C09] text-4xl font-extrabold'>
          ¿En donde nos encontramos?
        </p>
      </div>

      <div id="MarcoExterior1" className="mt-[40px] flex flex-col items-center mb-10">



        <div id='MarcoN2' className=" mb-12 flex flex-col items-center gap-6">

          <div id='img' className=" h-[440px]  w-[896px] 700-md:max-w-2xl mt-4 overflow-hidden rounded-lg ">
            <Map />
          </div>

          <div id='Texto descriptivo' className=" h-[100px] w-[896px] 700-md:max-w-2xl shadow rounded-lg bg-[#6cb472]">

            <h2 className='text-center mt-4 text-xl font-julius'>
              Contamos con tres locales, dos en San miguel y uno en Yerba Buena <br />¿Que esperas para acercarte a conocerlos?
            </h2>
          </div>

        </div>

      </div>

      <Footer />


    </>
  );
}

export default Home;