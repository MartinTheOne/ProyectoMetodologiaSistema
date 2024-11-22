import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import credenciales from '../../../utils/credenciales';

const libraries = ["places"];

// Mover el componente LoadScript fuera del componente Map
const MapContainer = () => {
  return (
    <LoadScript 
      googleMapsApiKey={credenciales.mapKey}
      libraries={libraries}
      loadingElement={<div className="font-julius">Cargando...</div>}
    >
      <Map />
    </LoadScript>
  );
};

const Map = () => {
  const [mapCenter, setMapCenter] = useState({ 
    lat: -26.829016067306707, 
    lng: -65.21085431445901 
  });
  const [zoom, setZoom] = useState(15);
  const mapContainerStyle = { width: "100%", height: "400px" };
  const iconURL = <img src="/img/OIP.png" alt="" />;

  const posiciones = [
    { 
      id: 1, 
      posicion: { lat: -26.829016067306707, lng: -65.21085431445901 }, 
      icon: iconURL, 
      name: " Salta 78 - SMT"
    },
    { 
      id: 2, 
      posicion: { lat: -26.820399995688597, lng: -65.20123886404359 }, 
      icon: iconURL, 
      name: " Santa Fé 440 - SMT" 
    },
    { 
      id: 3, 
      posicion: { lat: -26.80416611949677, lng: -65.29354830034139 }, 
      icon: iconURL, 
      name: " Lobo de la Vega 850 - YB" 
    },
  ];

  const cambiarPosicion = (e) => {
    const posicion = posiciones.find(p => p.name === e.target.value);
    if (posicion) {
      setMapCenter(posicion.posicion);
      setZoom(17);
    }
  };

  return (
    <>
      <GoogleMap
        center={mapCenter}
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
      >
        {posiciones.map(p => (
          <MarkerF
            key={p.id}
            position={p.posicion}
            icon={p.icon}
          />
        ))}
      </GoogleMap>

      <div className="h-[46px] flex justify-end ">
        <select 
          className="bg-[#1e5e39] h-8 rounded-md text-[18px] mt-2 focus:outline-none shadow font-julius" 
          name="sucursales" 
          onChange={cambiarPosicion}
        >
          {posiciones.map(p => (
            <option className="appearance-none" key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MapContainer;