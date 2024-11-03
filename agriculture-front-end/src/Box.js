import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';
import 'ldrs/ring';
import { bouncy } from 'ldrs';



const Box = ({lat, updateLat, long, updateLong, aiData, updateaiData}) => {
  const navigate = useNavigate();
  const [Temp, updateTemp] = useState('');
  const [Rainfall, updateRain] = useState('');
  const [Humidity, updateHum] = useState('');
  const [Ph, updatePh] = useState('');
  const [Nit, updateNit] = useState('');
  const [Phosp, updatePhosp] = useState('');
  const [Pot, updatePot] = useState('');
  var infoJSON = {"Temp": 0, "Rain": 0.0, "Hum": 0.0, "Ph": 0.0, "Nit": 0.0, "Posp": 0.0, "Pot": 0.0};
  const [dataDis, updateDataDis] = useState('d-none');
  const [stageOneDis, updatestageOneDis] = useState('');
  const [coordMargin, updateCoordMargin] = useState('50px');
  const [LoadingState, updateLoadingState] = useState('d-none');
  const [imgDis, updateImgDis] = useState('d-none'); 
  const [myImage, updateMyImage] = useState(require('./Images/Solid_white.png')); // ./Images/51sHm3pQHL._AC.png
  const goToCrops = () => {
    navigate('/Crops', { state: { userId: 123 } }); // ./Images/Solid_white.png'
  };
  // window.onload = (event) => {
  //   updateTemp(infoJSON["Temp"]);
  //   updateRain(infoJSON["Rain"]);
  //   updateHum(infoJSON["Hum"]);
  //   updatePh(infoJSON["Ph"]);
  //   updateNit(infoJSON["Nit"]);
  //   updatePosp(infoJSON["Posp"]);
  //   updatePot(infoJSON["Pot"]);
  // };
  // do checks here
  var submitCoords = async function () {

    const locationData = {
      latitude: lat,
      longitude: long,
      fertilizer: 1
  };

  try {
      const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(locationData),
      });

      const result = await response.json();
      updateTemp(result['temp'])
      updateRain(result['precipitation'])
      updateHum(result['humidity'])
      updatePh(result['ph'])
      updateNit(result['nitrogen'])
      updatePhosp(result['phosphorous'])
      updatePot(result['potassium'])

      console.log(result); // Handle the response from the server
  } catch (error) {
      console.error('Error sending location:', error);
  }

  window.onload = (event) => {
    // 21-0-0_ammonium_sulfate.png
    updateTemp(infoJSON["Temp"]);
    updateRain(infoJSON["Rain"]);
    updateHum(infoJSON["Hum"]);
    updatePh(infoJSON["Ph"]);
    updateNit(infoJSON["Nit"]);
    updatePosp(infoJSON["Posp"]);
    updatePot(infoJSON["Pot"]);
  };
  var submitCoords = function () {
    // do checks here
    updateDataDis("");
    updatestageOneDis("d-none");
    updateCoordMargin("30px");
    updateLoadingState('');
    updateImgDis('d-none');
    updateaiData("bob");
    setTimeout(goToCrops, 2000);
  }
  
  bouncy.register()
  const ImageReq = {
    a:  require('./Images/51sHm3pQHL._AC_.png'),
    b: require('./Images/51sHm3pQHL._AC_.png'),
    c: require('./Images/51sHm3pQHL._AC_.png'),
    d: require('./Images/51sHm3pQHL._AC_.png'),
    e: require('./Images/51sHm3pQHL._AC_.png')
  }
  var valList = ['a', 'b', 'c', 'd', 'e'];
  var pastValue = -1;
  var changeSelect = function (event) {
    var selValue = event.target.value
    if (selValue != pastValue) {
      pastValue = selValue;
      let selString = ImageReq[valList[selValue - 1]];
      updateImgDis('');
      updateMyImage(selString);
    }
  }

    return (
      <div className="leftSidebar">
        <p className={"fertilizer " + stageOneDis}>Select Fertilizer</p>
        <select className={"form-select " + stageOneDis} onChange={changeSelect} style={{"width": "280px"}} aria-label="Default select example">
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
        <img src={myImage} className={"imgPlace " + imgDis}></img>
        <ul className={"list-group " + dataDis}>
          <li className="list-group-item">Temperature: {Temp} °F</li>
          <li className="list-group-item">Rainfall: {Rainfall} mm</li>
          <li className="list-group-item">Humidity: {Humidity}</li>
          <li className="list-group-item">Ph: {Ph}</li>
          <li className="list-group-item">Nitrogen (N): {Nit}%</li>
          <li className="list-group-item">Phosphorus (P): {Phosp}%</li>
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