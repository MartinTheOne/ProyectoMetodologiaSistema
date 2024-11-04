import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import credenciales from './credenciales';


const Map = () => {
    const mapCenter = { lat: -26.828990, lng: -65.210788 };
    const mapContainerStyle = { width: "100%", height: "400px" };

    return (
        <LoadScript googleMapsApiKey={credenciales.mapKey}>
            <GoogleMap
                center={mapCenter}
                mapContainerStyle={mapContainerStyle}
                zoom={20}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;