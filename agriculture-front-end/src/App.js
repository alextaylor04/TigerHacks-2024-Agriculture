import React, { useState, useEffect } from 'react';
import Box from './Box';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Crops from './Crops';
import MapComp from './MapComp';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time')  // Using relative path due to proxy setup
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setCurrentTime(data.time))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <nav className='links'>
          <BrowserRouter>
          <Routes>
            <Route index element={
              <>
                <div className="home-flex">
                  <MapComp></MapComp>
                  <Box></Box>
                  <p>The current time is {currentTime}.</p>
                </div>
              </>
              }></Route>
            <Route path="/Crops" element={
              <Crops/>
              }></Route>
          </Routes>
          </BrowserRouter>
        </nav>
      </div>
    );
}
export default App;