import React from 'react';
import {useState} from 'react';

const Box = () => {
  const [bob, updateBob] = useState('');
  window.onload = (event) => {
    updateBob("no");
  };
    return (<ul className="list-group">
        <li className="list-group-item">An item: {bob}</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>);
}
export default Box;