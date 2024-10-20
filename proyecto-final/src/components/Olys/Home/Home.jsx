import React from 'react';
import pelado from "../../../../img/Pelado.png";

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
        <div id='xDdDDD' className='rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-300 items-center flex justify-center mt-[40px] h-[110px] w-[900px] bg-[#72bf78] bg-opacity-5 border-8 border-[#0E3C09] border-opacity-5'>
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

      <div className='h-[1000px]'>
      </div>
    </>
  );
}

export default Home;
