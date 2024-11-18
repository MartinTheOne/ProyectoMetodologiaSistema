import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PeladoComponent from '../Home/PeladoComponent';
import TurnosInfo from './Turnosinfo';
import Footer from '../Home/Footer';

const TurnosPage = () => {
  const { dia } = useParams();
  const [diaFormateado, setDiaFormateado] = useState('');
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [horariosModal, setHorariosModal] = useState(false);
  const [datosModal, setDatosModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [horariosDisponibles, setHorariosDisponibles] = useState({});
  const [selectedTurno, setSelectedTurno] = useState(null);

  const formatearFecha = (fecha) => {
    const opciones = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return fecha.toLocaleDateString('es-ES', opciones);
  };

  const generarHorarios = () => {
    const horarios = {};
    let hora = 15;
    let minutos = 0;
    
    while (hora < 22 || (hora === 22 && minutos === 0)) {
      const horaStr = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
      horarios[horaStr] = true;
      minutos += 30;
      if (minutos >= 60) {
        minutos = 0;
        hora += 1;
      }
    }
    
    return horarios;
  };

  const obtenerNumeroDia = (nombreDia) => {
    const dias = {
      'lunes': 1,
      'miercoles': 3,
      'viernes': 5
    };
    return dias[nombreDia.toLowerCase()];
  };

  const tieneTurnosDisponibles = (turno) => {
    return Object.values(turno.horarios).some(disponible => disponible);
  };

  const generarSiguienteTurno = (ultimaFecha, numeroDia) => {
    let nuevaFecha = new Date(ultimaFecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + 7);
    
    return {
      fecha: nuevaFecha,
      disponible: true,
      id: `turno-${nuevaFecha.getTime()}`,
      horarios: generarHorarios()
    };
  };

  const actualizarTurnos = () => {
    setTurnosDisponibles(prevTurnos => {
      const turnosActivos = prevTurnos.filter(turno => tieneTurnosDisponibles(turno));
      
      while (turnosActivos.length < 5) {
        const ultimoTurno = turnosActivos[turnosActivos.length - 1];
        const numeroDia = obtenerNumeroDia(dia);
        const nuevoTurno = generarSiguienteTurno(
          ultimoTurno ? ultimoTurno.fecha : new Date(),
          numeroDia
        );
        turnosActivos.push(nuevoTurno);
      }
      
      return turnosActivos;
    });
  };

  useEffect(() => {
    const inicializarTurnos = () => {
      const fechaInicial = new Date();
      const numeroDia = obtenerNumeroDia(dia);
      const turnos = [];
      let fechaActual = new Date(fechaInicial);

      while (fechaActual.getDay() !== numeroDia) {
        fechaActual.setDate(fechaActual.getDate() + 1);
      }

      for (let i = 0; i < 5; i++) {
        turnos.push({
          fecha: new Date(fechaActual),
          disponible: true,
          id: `turno-${fechaActual.getTime()}`,
          horarios: generarHorarios()
        });
        fechaActual.setDate(fechaActual.getDate() + 7);
      }

      setTurnosDisponibles(turnos);
    };

    if (dia) {
      inicializarTurnos();
    }
  }, [dia]);

  useEffect(() => {
    if (dia) {
      const formateado = dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
      setDiaFormateado(formateado);
    }
  }, [dia]);

  const handleDateClick = (turno) => {
    setSelectedDate(formatearFecha(turno.fecha));
    setHorariosDisponibles(turno.horarios);
    setSelectedTurno(turno);
    setHorariosModal(true);
  };

  const handleTimeSelect = (hora) => {
    setSelectedTime(hora);
  };

  const handleHorariosConfirm = () => {
    if (selectedTime) {
      setHorariosModal(false);
      setDatosModal(true);
    }
  };

  const closeHorariosModal = () => {
    setHorariosModal(false);
    setSelectedTime('');
  };

  const closeDatosModal = () => {
    setDatosModal(false);
    setSelectedTime('');
  };

  const handleFinalConfirm = () => {
    setTurnosDisponibles(prevTurnos => {
      const nuevosTurnos = prevTurnos.map(turno => {
        if (turno.id === selectedTurno.id) {
          const nuevosHorarios = {
            ...turno.horarios,
            [selectedTime]: false
          };
          return {
            ...turno,
            horarios: nuevosHorarios
          };
        }
        return turno;
      });
      return nuevosTurnos;
    });
    
    setTimeout(() => {
      actualizarTurnos();
    }, 0);
    
    closeDatosModal();
  };

  return (
    <>
      <PeladoComponent />

      <div className="flex justify-center mt-[100px]">
        <h1 className="font-julius text-[#0E3C09]  text-4xl movil-sm:text-[25px] font-extrabold mb-8">
          Turnos Disponibles - {diaFormateado}
        </h1>
      </div>

      <div className="flex flex-col items-center">
        {turnosDisponibles
          .filter(turno => turno.disponible && tieneTurnosDisponibles(turno))
          .map((turno) => (
            <button
              key={turno.id}
              className="flex justify-center h-[150px] w-[600px] movil-sm:w-[320px] movil-sm:h-[120px] movil-s:w-[470px] movil-m:w-[500px] mt-[100px] bg-[#6cb472] hover:scale-105 transition-transform duration-300 rounded-xl shadow-2xl items-center hover:bg-[#5da363] transition-colors"
              onClick={() => handleDateClick(turno)}
            >
              <h2 className="font-julius text-[#0E3C09] text-3xl movil-sm:text-2xl font-extrabold">
                {formatearFecha(turno.fecha)}
              </h2>
            </button>
          ))}
      </div>

      <Modal
         className={`w-full ${window.innerWidth <= 561 ? 'max-w-[90%]' : 'max-w-[600px]'} h-[500px] movil-sm:h-[450px]`} 
        isOpen={horariosModal}
        onRequestClose={closeHorariosModal}
        contentLabel="Selección de Horario"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: "200px",
            borderRadius: '20px',
            width: '600px',
            height: "500px",
            margin: 'auto',
            padding: '20px',
            backgroundColor: "#72bf78",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'none',
            position: 'relative',
          },
        }}
      >
        <button 
          className="absolute top-4 right-4 text-opacity-70 w-7 h-7 text-[13px] rounded-md shadow flex justify-center items-center"
          onClick={closeHorariosModal}
        >
          ✕
        </button>

        <h2 className="font-julius text-2xl mb-4">Seleccione un horario</h2>
        <p className="font-julius mb-4">{selectedDate}</p>
        
        <div className="grid grid-cols-3 gap-4 w-full max-h-[300px] overflow-y-auto p-4">
          {Object.entries(horariosDisponibles).map(([hora, disponible]) => (
            <button
              key={hora}
              onClick={() => handleTimeSelect(hora)}
              disabled={!disponible}
              className={`
                p-2 rounded-lg font-julius
                ${disponible 
                  ? selectedTime === hora 
                    ? 'bg-[#4a8a4f] text-white' 
                    : 'bg-[#6cb472] hover:bg-[#5da363]' 
                  : 'bg-[#4a6e4d] cursor-not-allowed opacity-50'
                }
              `}
            >
              {hora}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={handleHorariosConfirm}
            disabled={!selectedTime}
            className="font-julius rounded-md shadow bg-[#4a8a4f]  px-6 py-2 disabled:opacity-60"
          >
            Aceptar
          </button>
        </div>
      </Modal>

      <TurnosInfo
        isOpen={datosModal}
        onRequestClose={closeDatosModal}
        selectedDate={`${selectedDate} a las ${selectedTime}`}
        onConfirm={handleFinalConfirm}
      />

      <Footer />
    </>
  );
};

export default TurnosPage;