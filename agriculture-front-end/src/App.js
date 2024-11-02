import React from 'react';
import MapComp from './MapComp';
import Box from './Box';
import {Link} from 'react';
/*
<Link to='/'>Home</Link>
<Link to='/Crops'>Crops</Link>
*/
const App = () => {
    return (
      <div>
        <MapComp></MapComp>
        <Box></Box>
        <nav className='links'>
          
        </nav>
      </div>
    );
}
export default App;