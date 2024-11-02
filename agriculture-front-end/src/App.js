import React from 'react';
import MapComp from './MapComp';
import Box from './Box';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Crops from './Crops';

const App = () => {
    return (
      <div>
        <nav className='links'>
          <BrowserRouter>
          <Routes>
            <Route index element={
              <>
                <MapComp></MapComp>
                <Box></Box>
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