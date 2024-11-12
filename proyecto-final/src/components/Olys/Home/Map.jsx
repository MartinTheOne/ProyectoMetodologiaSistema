import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import credenciales from '../../../utils/credenciales';

const libraries = ["places"];

const Map = () => {
    const [mapCenter, setMapCenter] = useState({ lat: -26.829016067306707, lng: -65.21085431445901 });
    const [zoom, setZoom] = useState(15);
    const mapContainerStyle = { width: "100%", height: "400px" };
    const iconURL = <img src="../../../../img/OIP.png" alt="" />

    const posiciones = [
        { id: 1, posicion: { lat: -26.829016067306707, lng: -65.21085431445901 }, icon: iconURL, name: "📍Salta 78 - SMT" },
        { id: 2, posicion: { lat: -26.820399995688597, lng: -65.20123886404359 }, icon: iconURL, name: "📍Santa Fé 440 - SMT" },
        { id: 3, posicion: { lat: -26.80416611949677, lng: -65.29354830034139 }, icon: iconURL, name: "📍Lobo de la Vega 850 - YB" },
    ];

    const cambiarPosicion = (e) => {
        let posicion = posiciones.find(p => p.name === e.target.value); // Cambio a === para comparar
        if (posicion) {
            setMapCenter(posicion.posicion);
            setZoom(17);
        }
    };

    return (
        <>
            <div className="bg-[#6cb472]">
                <select className="bg-[#6cb472] border border-black rounded-md" name="sucursales" onChange={cambiarPosicion}>
                    {posiciones.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                </select>
            </div>

            <LoadScript
                googleMapsApiKey={credenciales.mapKey}
                libraries={libraries} // Uso de la constante libraries
                loadingElement={<div>Cargando...</div>}
            >
                <GoogleMap
                    center={mapCenter}
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoom}
                >
                    {posiciones.map(p => (
                        <MarkerF
                            key={p.id}
                            position={p.posicion}
                            icon={p.icon} // Aplicación del icono
                        />
                    ))}
                </GoogleMap>
            </LoadScript>

        </>
    );
};

export default Map;