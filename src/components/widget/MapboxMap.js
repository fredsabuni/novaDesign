import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Mapbox Access Token
const MAPBOX_TOKEN = "pk.eyJ1IjoiZnJlZHlzYWJ1bmkiLCJhIjoiY200dTZ1em1mMGZqbzJsc2d6ZGNua2ZjYiJ9.4iLbSEz9-uaypcQbtJvVPA";

// Sample locations
const locations = [ 
  { id: 4, name: "Texas", longitude: -97.7431, latitude: 30.2672 }, // Texas 
  { id: 1, name: "North Carolina", longitude: -78.6382, latitude: 35.7796 }, // North Carolina
  { id: 2, name: "Virginia", longitude: -77.4360, latitude: 37.5407 }, // Virginia
  { id: 3, name: "Florida", longitude: -81.3792, latitude: 28.5383 }, // Florida 
];

const MapboxMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: -98.5795, // Center of USA
        latitude: 39.8283,
        zoom: 3,
      }}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      style={{ width: "100%", height: "500px" }}
    >
      {/* Render markers */}
      {locations.map((location) => (
        <Marker
          key={location.id}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
        >
          <div style={{ color: "red", fontSize: "16px" }}>📍</div>
          <span style={{ background: "white", padding: "2px 5px", borderRadius: "4px" }}>
            {location.name}
          </span>
        </Marker>
      ))}
    </Map>
  );
};

export default MapboxMap;
