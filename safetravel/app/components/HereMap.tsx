"use client";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface IMapProps{
  latitude: number,
  longitude: number
}

const HereMap = ({latitude, longitude}: IMapProps) => {
  useEffect(() => {
    // Ensure that Leaflet only run in client
    if (typeof window === "undefined") 
      return;
  }, []);
  

  return (
    <div className="w-full h-auto">
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        style={{ height: "400px", width: "100%" }}
        key={`${latitude}-${longitude}`}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <LocationMarker/> */}
        <Marker position={[latitude, longitude]} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HereMap;
