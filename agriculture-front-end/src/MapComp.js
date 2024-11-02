import React from 'react';
import {useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import raw from './passwords.txt';

const MapComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stringKey, setKey] = useState('');

  useEffect(() => {
    // Set a timeout to change the visibility after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setKey(text);
    console.log(text);
  });
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Example latitude (San Francisco)
    lng: -122.4194, // Example longitude (San Francisco)
  };
  var Mapclick = function (event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat)
  }
    return (
      <div>
      {isVisible ? (
      
        <LoadScript googleMapsApiKey={stringKey}>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '85vh',
              }}
            center={center}
            zoom={19}
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