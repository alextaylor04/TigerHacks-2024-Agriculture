import React from 'react';
import Box from './Box';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Crops from './Crops';
import MapComp from './MapComp';

const App = () => {
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