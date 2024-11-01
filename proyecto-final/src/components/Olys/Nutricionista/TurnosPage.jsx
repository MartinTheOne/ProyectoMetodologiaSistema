import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PeladoComponent from '../Home/PeladoComponent';

const TurnosPage = () => {
    const { dia } = useParams();
    const [diaFormateado, setDiaFormateado] = useState('');

    useEffect(() => {
        if (dia) {
            const formateado = dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
            setDiaFormateado(formateado);
        }
    }, [dia]);

    console.log("Día recibido:", dia);
    console.log("Día formateado:", diaFormateado);

    return (

        <>
            <PeladoComponent/>  

            <div className="flex justify-center mt-[100px]">
                <h1 className="font-julius text-[#0E3C09] text-4xl font-extrabold mb-8">
                    Turnos Disponibles - {diaFormateado}
                </h1>
     
            </div>

            <div className="flex flex-col items-center">

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Lunes 29 de Octubre a las 18:00
                </h2>
            </button>

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Turno el dia 10-10-24
                </h2>
            </button>

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Turno el dia 10-10-24
                </h2>
            </button>

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Turno el dia 10-10-24
                </h2>
            </button>

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Turno el dia 10-10-24
                </h2>
            </button>

            <button className="flex justify-center h-[150px] w-[600px] mt-[100px] bg-[#6cb472] rounded-xl shadow-2xl items-center">
                <h2 className='font-julius text-[#0E3C09] text-3xl font-extrabold'>
                    Turno el dia 10-10-24
                </h2>
            </button>

            </div>

            <div className="mt-[1000px]"></div>

        </>
    );
};

export default TurnosPage;