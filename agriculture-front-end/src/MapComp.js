import {APIProvider, Map, ControlPosition, MapControl} from "@vis.gl/react-google-maps"
import React, { useState } from 'react';

const MapComp = () => {
    const [showLabels, setShowLabels] = useState(true);

    const mapClickEvent = (ev) => {
        console.log(ev)
        const latLng = ev.detail.latLng;
        const lat = latLng.lat;
        const lng = latLng.lng;
        console.log(lat)
        console.log(lng)
    };

    const toggleLabels = () => {
        setShowLabels(!showLabels)
    };

    const mapStylesWithoutLabels = [
        {
          featureType: 'all',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ];

      const mapStylesWithLabel = []; //for clarity

    return <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map 
        style = {{width: '100vw', height: '100vh'}}
        defaultCenter={{lat:22.54992, lng:0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapTypeId={'hybrid'}
        zoomControl={true}
        fullscreenControl={true}
        styles={showLabels ? mapStylesWithLabel : mapStylesWithoutLabels}
        onClick={ev => mapClickEvent(ev)}>
            <MapControl position={ControlPosition.TOP}>
                <button onClick={toggleLabels}>Toggle Labels</button>
            </MapControl>
        </Map>
    </APIProvider>
};

export default MapComp;