import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Novedades = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]);

    const fetchAvailableTimes = (date) => {
        const dias = date.getDay(); 

        
        let fecha;
        if (dias === 1 || dias === 3) { 
            fecha = ['6:00', '6:15', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];
        } else if (dias === 5) { 
            fecha = ['7:00', '8:15', '9:30', '10:45', '12:00'];
        } else { 
            fecha = ['8:00', '9:30', '11:00'];
        }

        setAvailableTimes(fecha);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-3 gap-6">
                
                <div className="col-span-2">
                    <h2 className="text-xl font-bold mb-4">Seleccionar fecha y hora</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="w-full"
                    />
                </div>

                
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-pink-500 text-lg font-bold mb-2">GRATIS</h3>
                    <p className="text-gray-700">Asesoramiento gratuito | Nutrición</p>
                    <div className="flex items-center my-4">
                        <span className="text-sm text-gray-600">⏱ 15 min.</span>
                        <span className="ml-auto text-sm text-gray-600">Gratis</span>
                    </div>
                    {selectedTime && (
                        <p className="mt-4 text-sm text-gray-600">
                            Fecha seleccionada: {selectedDate.toLocaleDateString()} <br />
                            Hora seleccionada: {selectedTime}
                        </p>
                    )}
                </div>
            </div>

           
            <div className="mt-6 grid grid-cols-6 gap-2">
                {availableTimes.length > 0 ? (
                    availableTimes.map((time, index) => (
                        <button
                            key={index}
                            className={`p-2 border rounded ${selectedTime === time ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </button>
                    ))
                ) : (
                    <p className="col-span-6 text-center text-gray-500">No hay horarios disponibles</p>
                )}
            </div>
        </div>
    );
};


export default Novedades;