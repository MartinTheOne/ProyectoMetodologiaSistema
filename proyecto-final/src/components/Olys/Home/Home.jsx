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
        <Link to="/tienda" ><div id='xDdDDD' className='rounded-2xl 700-md:hidden movil-m:hidden movil-s:hidden movil-sm:hidden  cursor-pointer hover:scale-110 transition-transform duration-300 items-center flex justify-center mt-[40px] h-[110px] w-[900px] bg-[#72bf78] bg-opacity-5 border-8 border-[#0E3C09] border-opacity-10'>
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

      <div className="flex justify-center mt-[100px] movil-sm:mt-[60px] ">
        <h2 className='font-julius text-[#0E3C09] text-6xl 700-md:text-6xl movil-m:text-[50px] movil-s:text-[44px] movil-sm:text-[30px]  font-extrabold'>
          Sobre Nosotros
        </h2>
      </div>

      <div className="flex justify-center mt-[100px] movil-s:mt-[60px] movil-sm:mt-[60px] mb-10">
        <p className='font-julius text-[#0E3C09]  text-3xl 700-md:text-[26px] movil-m:text-[22px] movil-s:text-[18px] movil-sm:text-[16px] movil-smm:text-[12px] font-extrabold'>
          Un poco de Gourmet del mejor local de ensaldas
        </p>
      </div>

      <PhotoCarousel />

    

      <div id="MarcoExterior1" className="mt-[100px] flex flex-col items-center mb-10 ">

      <div id='Texto descriptivo' className="h-[90px] w-[896px] mb-20 700-md:h-[110px] 700-md:max-w-2xl movil-m:h-[110px] movil-m:w-[500px] movil-s:h-[110px] movil-s:w-[500px] movil-sm:h-[110px] movil-sm:w-[400px] movil-smm:max-w-[300px] movil-smm:h-[170px] shadow-lg rounded-lg bg-[#6cb472]">
           <h2 className='text-center mt-4 text-xl font-julius movil-m:text-[20px] movil-s:text-[18px] movil-sm:text-[16px]'>
                Contamos con tres locales, dos en San miguel y uno en Yerba Buena <br />¿Que esperas para acercarte a conocerlos?
          </h2>
      </div>

      <p className='font-julius mb-10 text-[#0E3C09] text-4xl movil-m: movil-s:text-[30px] movil-sm:text-[26px] movil-smm:text-[20px] font-extrabold'>
          ¿En donde nos encontramos?
        </p>         

        <div id='MarcoN2' className=" mb-12 flex flex-col items-center gap-6">

          <div id='img' className=" h-[440px]  w-[896px] 700-md:max-w-2xl movil-m:w-[600px] movil-s:w-[526px] movil-sm:w-[446px] movil-smm:w-[300px] mt-4 overflow-hidden rounded-lg ">
            <Map />
          </div>

          

        </div>

      </div>

      <Footer />


    </>
  );
}

export default Home;