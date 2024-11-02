import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import raw from './passwords.txt';
import { Button } from 'bootstrap';

const MapComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stringKey, setKey] = useState('');
  const [map, setMap] = useState(null);
  const [showLabels, setShowLabels] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setKey(text);
  });
  const options = {
    disableDefaultUI: true,
    mapTypeId: 'satellite',
    scaleControl: true,
    streetViewControl: false,
    mapTypeControl: true,
    fullscreenControl: true,
    draggableCursor: 'default',
    styles: showLabels ? [] : [{ featureType: 'all', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
  };

  const center = {
    lat: 38.522953693700295, 
    lng: -92.71854679370469, 
  };
  var Mapclick = function (event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log("lat:" + lat);
    console.log("lng:" + lng);
  }
const CustomControlButton = ({ onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#fff',
        border: '2px solid #000',
        borderRadius: '3px',
        padding: '5px',
        cursor: 'pointer',
        margin: '10px',
      }}
      onClick={onClick}
    >
      Click me
    </button>
  );
};

const handleButtonClick = () => {
  setShowLabels((prev) => !prev); // Toggle the state

    if (map) {
      // Update the styles based on the new state
      map.setOptions({
        styles: !showLabels ? [] : [{ featureType: 'all', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
      });
    }
};

const LoadControl = function(map) {
  if (map) {
    const controlDiv = document.createElement('div');

    const buttonElement = ReactDOM.render(
      <CustomControlButton onClick={handleButtonClick} />,
      controlDiv
    );

    const root = ReactDOM.createRoot(controlDiv);
    root.render(<CustomControlButton onClick={handleButtonClick} />);

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
  }
}
useEffect(() => {
  if (map) {
    LoadControl(map); // Add custom control when the map instance is set
    // Update the map options to reflect the current state of showLabels
    map.setOptions({
      styles: showLabels
        ? [] 
        : [{ featureType: 'all', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
    });
  }
}, [map, showLabels]); // Run this effect when map or showLabels changes


    return (
      <div>
      {isVisible ? (
      
        <LoadScript googleMapsApiKey={stringKey}>
          <GoogleMap className="google"
            mapContainerStyle={{
              width: '60%',
              height: '100vh',
              }}
            center={center}
            options={options}
            zoom={15}
            onLoad={(mapInstance) => {
              setMap(mapInstance);
              LoadControl(mapInstance); 
            }}
            onClick= {ev => {
              Mapclick(ev)
            }}
            >           
      
        
          </GoogleMap>
        </LoadScript>
      ) : (
        <h1></h1>
      )}
      </div>
    );
};

export default MapComp;

