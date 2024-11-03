import {APIProvider, Map, ControlPosition, MapControl} from "@vis.gl/react-google-maps"
import React, { useState} from 'react';

const MapComp = ({inputLan, updateLat, inputLong, updateLong}) => {
    const [showLabels, setShowLabels] = useState(true);
    const [typeValue, setTypeValue] = useState("hybrid");

    // change mapTypeId from satellite to hybrid

    const mapClickEvent = async (ev) => {
        console.log(ev)
        const latLng = ev.detail.latLng;
        const lat = latLng.lat;
        const lng = latLng.lng;
        updateLat(lat);
        updateLong(lng);
        console.log(lat)
        console.log(lng)
    };

    const toggleLabels = () => {
        setShowLabels(!showLabels)
        if (typeValue == "hybrid") {
          setTypeValue("satellite");
        } else {
          setTypeValue("hybrid");
        }
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
        style = {{width: '60%', height: '100vh'}}
        defaultCenter={{lat:39.03010135948161, lng:-93.2481203134825}}
        defaultZoom={4}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapTypeId={typeValue}
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