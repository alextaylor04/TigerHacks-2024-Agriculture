import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Box = () => {
  const navigate = useNavigate();
  const [bob, updateBob] = useState('');
  const goToCrops = () => {
    navigate('/Crops', { state: { userId: 123 } });
  };
  window.onload = (event) => {
    updateBob("no");
  };
    return (
    <>
      <ul className="list-group">
          <li className="list-group-item">An item: {bob}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
        <p onClick={goToCrops}>Crops</p>
      </>
      );
}
export default Box;