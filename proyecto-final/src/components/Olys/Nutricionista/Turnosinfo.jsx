import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const TurnosInfo = ({ isOpen, onRequestClose, selectedDate, onConfirm }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    celular: '',
    fechaNacimiento: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    dni: '',
    celular: '',
    fechaNacimiento: ''
  });

  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Validaciones específicas para cada campo
    switch(name) {
      case 'nombre':
        // Solo permitir letras y espacios
        newValue = value.replace(/[^A-Za-zÁáÉéÍíÓóÚúÑñ\s]/g, '');
        break;

      case 'dni':
        // Solo permitir números y máximo 8 dígitos
        newValue = value.replace(/\D/g, '').slice(0, 8);
        break;

      case 'celular':
        // Solo permitir números y máximo 10 dígitos
        newValue = value.replace(/\D/g, '').slice(0, 10);
        break;

      case 'fechaNacimiento':
        // Solo permitir números y formatear como fecha
        newValue = value.replace(/[^\d/]/g, '');
        if (newValue.length >= 2 && !newValue.includes('/')) {
          newValue = newValue.slice(0, 2) + '/' + newValue.slice(2);
        }
        if (newValue.length >= 5 && newValue.split('/').length === 2) {
          newValue = newValue.slice(0, 5) + '/' + newValue.slice(5, 9);
        }
        newValue = newValue.slice(0, 10);
        break;

      default:
        break;
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));

    // Validar campos después de la actualización
    validateField(name, newValue);
  };

  const validateField = (name, value) => {
    let error = '';

    switch(name) {
      case 'nombre':
        if (!value.trim()) {
          error = 'El nombre es requerido';
        }
        break;

      case 'dni':
        if (value.length !== 8) {
          error = 'El DNI debe tener 8 dígitos';
        }
        break;

      case 'celular':
        if (value.length !== 10) {
          error = 'El celular debe tener 10 dígitos';
        }
        break;

      case 'fechaNacimiento':
        if (value.length !== 10) {
          error = 'Ingrese una fecha válida (DD/MM/YYYY)';
        } else {
          const [day, month, year] = value.split('/').map(Number);
          const date = new Date(year, month - 1, day);
          const today = new Date();
          
          if (date > today || year < 1900 || month > 12 || day > 31) {
            error = 'Fecha inválida';
          }
        }
        break;

      default:
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  // Verificar si todos los campos son válidos
  useEffect(() => {
    const formIsValid = 
      formData.nombre.trim() !== '' &&
      formData.dni.length === 8 &&
      formData.celular.length === 10 &&
      formData.fechaNacimiento.length === 10 &&
      !Object.values(errors).some(error => error !== '');
    
    setIsValid(formIsValid);
  }, [formData, errors]);

  const handleSubmit = () => {
    if (isValid) {
      onConfirm(formData);
      onRequestClose();
    }
  };

  const inputStyle = "w-full p-2 rounded-lg outline-none bg-[#6cb472] shadow-inner text-center font-julius";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Turno"
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
        onClick={onRequestClose}
      >
        ✕
      </button>
      
      <h2 className="font-julius text-3xl mb-2 text-center">
        DATOS
      </h2>

      <p className="font-julius text-sm mb-5 text-center">
        POR FAVOR INGRESE SUS DATOS
      </p>

      <div className="flex w-full justify-around mb-4">
        <div className="flex flex-col items-center w-[45%]">
          <label className="font-julius mb-1">NOMBRE</label>
          <input 
            className={inputStyle}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder=""
          />
          {errors.nombre && <span className=" text-xs mt-1">{errors.nombre}</span>}
        </div>
        <div className="flex flex-col items-center w-[45%]">
          <label className="font-julius mb-1">DNI</label>
          <input 
            className={inputStyle}
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder=""
          />
          {errors.dni && <span className=" text-xs mt-1">{errors.dni}</span>}
        </div>
      </div>

      <div className="flex w-full justify-around mb-5">
        <div className="flex flex-col items-center w-[45%]">
          <label className="font-julius mb-1">NUMERO CELULAR</label>
          <input 
            className={inputStyle}
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder=""
          />
          {errors.celular && <span className=" text-xs mt-1">{errors.celular}</span>}
        </div>
        <div className="flex flex-col items-center w-[45%]">
          <label className="font-julius mb-1">FECHA DE NACIMIENTO</label>
          <input 
            className={inputStyle}
            type="text"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder=""
          />
          {errors.fechaNacimiento && <span className="text-xs mt-1">{errors.fechaNacimiento}</span>}
        </div>
      </div>

      <p className="font-julius text-sm mb-5 text-center">
        TURNO PARA EL DIA {selectedDate}
      </p>

      <p className="font-julius text-xs mb-5 text-center">
        ANTE CUALQUIER CAMBIO DE HORARIO O CANCELACION DE TURNO AVISAR MINIMO CON UN DIA DE ANTICIPACION
      </p>

      <button 
        className={`font-julius rounded-md shadow w-[150px] p-2 ${
          isValid 
            ? 'bg-[#4a8a4f]  hover:bg-[#3d7341] cursor-pointer' 
            : ' cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={!isValid}
      >
        ACEPTAR
      </button>
    </Modal>
  );
};

export default TurnosInfo;