import React from 'react';
import Box from './Box';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Crops from './Crops';
import MapComp from './MapComp'
import {useState} from 'react';


//logo was found here: https://stock.adobe.com/search?k=farming+equipment+logo&asset_id=865723398
const App = () => {
  const [lat, updateLat] = useState(0);
  const [long, updateLong] = useState(0);
  const [aiData, updateaiData] = useState('');
  const [effect, setEffect] = useState(false);
  const updateOnClick = () => {
    setEffect(!effect); 
  };
  //ChatGPT was used to help us understand routing with React
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <nav className='links'>
          <BrowserRouter>
          <Routes>
            <Route index element={
              <>
                <div className="home-flex">
                  <MapComp updateOnClick={updateOnClick} lat={lat} updateLat={updateLat} long={long} updateLong={updateLong}></MapComp>
                  <Box effect={effect} lat={lat} updateLat={updateLat} long={long} updateLong={updateLong} aiData={aiData} updateaiData={updateaiData}></Box>
                </div>
              </>
              }></Route>
            <Route path="/Crops" element={
              <Crops aiData={aiData}updateaiData={updateaiData}/>
              }></Route>
          </Routes>
          </BrowserRouter>
        </nav>
      </div>
    );
}
export default App;