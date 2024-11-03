import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';
import 'ldrs/ring';
import { bouncy } from 'ldrs'
import myImage from './Images/21-0-0_ammonium_sulfate.png';

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
  const [dataDis, updateDataDis] = useState('d-none');
  const [stageOneDis, updatestageOneDis] = useState('');
  const [coordMargin, updateCoordMargin] = useState('50px');
  const [LoadingState, updateLoadingState] = useState('d-none');
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
  };
  // do checks here
  var submitCoords = function () {
    updateDataDis("");
    updatestageOneDis("d-none");
    updateCoordMargin("30px");
    updateLoadingState('');
  }
  
  bouncy.register()


  const [currentTime, setCurrentTime] = useState(0);
    return (
      <div className="leftSidebar">
        <p className={"fertilizer " + stageOneDis}>Select Fertilizer</p>
        <select className={"form-select " + stageOneDis} style={{"width": "280px"}} aria-label="Default select example">
          <option defaultValue>Select</option>
          <option value="1">Urea</option>
          <option value="2">Ammonium Nitrate</option>
          <option value="3">Ammonium Sulfate</option>
          <option value="4">Diammonium Phosphate</option>
          <option value="5">Monoammonium Phosphate</option>
          <option value="6">Potassium Chloride</option>
          <option value="7">Triple Superphosphate</option>
          <option value="8">Muriate of Potash</option>
          <option value="9">20-20-20</option>
          <option value="10">10-10-10</option>
          <option value="11">16-4-8</option>
        </select>
        <img src={myImage} className={"imgPlace " + stageOneDis}></img>
        <ul className={"list-group " + dataDis}>
          <li className="list-group-item">Temperature: {Temp} °F</li>
          <li className="list-group-item">Rainfall: {Rainfall} mm</li>
          <li className="list-group-item">Humidity: {Humidity}</li>
          <li className="list-group-item">Ph: {Ph}</li>
          <li className="list-group-item">Nitrogen (N): {Nit}%</li>
          <li className="list-group-item">Phosphorus (P): {Posp}%</li>
          <li className="list-group-item">Potassium (K): {Pot}%</li>
        </ul>
        <p className="CoordHolder" style={{"marginTop": coordMargin}}>Longitute: {long}   Latitude: {lat}</p>
        <button className={"submit " + stageOneDis} id="submit" onClick={submitCoords}>Submit Coords</button>
        <div className={"Loading " + LoadingState}>
          <p>Generating Optimal Crops</p>  
          <div className="test">
          <l-bouncy
            size="35"
            speed="1.75" 
            color="black" 
            ></l-bouncy>
          </div>
        </div>
      </div>
      );
}
export default Box;