import React from 'react';
import Box from './Box';
import {Link} from 'react';
import MapComp from './MapComp';
/*
<Link to='/'>Home</Link>
<Link to='/Crops'>Crops</Link>
*/
const App = () => {
    return (
      <div>

        <MapComp/>  
        <nav className='links'>
          
        </nav>
      </div>
    );
}
export default App;