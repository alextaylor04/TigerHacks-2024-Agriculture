import React from 'react';
import {useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import raw from './passwords.txt';

const MapComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stringKey, setKey] = useState('');

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
    disableDefaultUI: false,
    mapTypeId: 'satellite',
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: true
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