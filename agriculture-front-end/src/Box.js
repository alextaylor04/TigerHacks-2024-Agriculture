import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';

const Box = ({lat, updateLat, long, updateLong}) => {
  const navigate = useNavigate();
  const [Temp, updateTemp] = useState('');
  const [Rainfall, updateRain] = useState('');
  const [Humidity, updateHum] = useState('');
  const [Ph, updatePh] = useState('');
  const [Nit, updateNit] = useState('');
  const [Posp, updatePosp] = useState('');
  const [Pot, updatePot] = useState('');
  var infoJSON = {"Temp": 70, "Rain": 126.0, "Hum": 42.0, "Ph": 9.6, "Nit": 12.4, "Posp": 12.6, "Pot": 12.2};
  const [test1, updateTest1] = useState('');
  const goToCrops = () => {
    navigate('/Crops', { state: { userId: 123 } });
  };
  window.onload = (event) => {
    updateTemp(infoJSON["Temp"]);
    updateRain(infoJSON["Rain"]);
    updateHum(infoJSON["Hum"]);
    updatePh(infoJSON["Ph"]);
    updateNit(infoJSON["Nit"]);
    updatePosp(infoJSON["Posp"]);
    updatePot(infoJSON["Pot"]);
    updateTest1(""); // d-none
  };
  var submitCoords = function () {
    console.log("test");
  }
  const [currentTime, setCurrentTime] = useState(0);
    return (
      <div className="leftSidebar">
        <ul className={"list-group " + test1}>
          <li className="list-group-item">Temperature: {Temp} °F</li>
          <li className="list-group-item">Rainfall: {Rainfall} mm</li>
          <li className="list-group-item">Humidity: {Humidity}</li>
          <li className="list-group-item">Ph: {Ph}</li>
          <li className="list-group-item">Nitrogen (N): {Nit}%</li>
          <li className="list-group-item">Phosphorus (P): {Posp}%</li>
          <li className="list-group-item">Potassium (K): {Pot}%</li>
        </ul>
        <p>Longitute: {long}   Latitude: {lat}</p>
        <button className="submit" id="submit" onClick={submitCoords}>Submit Coords</button>
      </div>
      );
}
export default Box;