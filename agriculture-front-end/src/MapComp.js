import React from 'react';
import {useEffect, useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import raw from './passwords.txt';
import { useLocation } from 'react-router-dom';

const MapComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stringKey, setKey] = useState('');
  const [mapWidth, setWidth] = useState((window.innerWidth * 0.6) + "px");

  useEffect(() => {
    const handleResize = () => setWidth((window.innerWidth * 0.6) + "px");
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  // ChatGPT
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
      <div className="screen">
      {isVisible ? (
      
      
        
    
      <LoadScriptNext className="googleHolder" googleMapsApiKey={stringKey}>
                <GoogleMap mapContainerStyle={{
                    width: mapWidth,
                    height: '100vh',
                    }}
                  center={center}
                  options={options}
                  zoom={3}
                  onClick= {ev => {
                    Mapclick(ev)
                  }}
                  >           
            
              
                </GoogleMap>
              </LoadScriptNext>
              
              ) : (
                <h1></h1>
            )}
   </div>
    );
};

export default MapComp;