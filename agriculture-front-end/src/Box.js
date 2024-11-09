import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';
import 'ldrs/ring';
import { bouncy } from 'ldrs';



const Box = ({lat, updateLat, long, updateLong, aiData, updateaiData, effect}) => {
  const navigate = useNavigate();
  const [Temp, updateTemp] = useState('');
  const [Rainfall, updateRain] = useState('');
  const [Humidity, updateHum] = useState('');
  const [Ph, updatePh] = useState('');
  const [Nit, updateNit] = useState('');
  const [Phosp, updatePhosp] = useState('');
  const [Pot, updatePot] = useState('');
  // var infoJSON = {"Temp": 0, "Rain": 0.0, "Hum": 0.0, "Ph": 0.0, "Nit": 0.0, "Posp": 0.0, "Pot": 0.0};
  var infoJSON = {"Temp": 77.4, "Rain": 123.7, "Hum": 14.0, "Ph": 7.0, "Nit": 36.0, "Posp": 30.0, "Pot": 40.0};
  const [dataDis, updateDataDis] = useState('d-none');
  const [stageOneDis, updatestageOneDis] = useState('');
  const [lastStageDis, updateLastStageDis] = useState('d-none');
  const [coordMargin, updateCoordMargin] = useState('20px');
  const [LoadingState, updateLoadingState] = useState('d-none');
  const [imgDis, updateImgDis] = useState('d-none'); 
  const [fertValue, updateFertValue] = useState(-1);

  var listGroupColor = "lightgreen";
  var listGroupBorderColor = "darkgreen";
  const [buttonColor, updateButtonColor] = useState("lightgrey");
  const [buttonBorder, updateButtonBorder] = useState("grey");

  
  const [mapClickStatus, updateMapClickStatus] = useState(-1);
  const [buttonStatus, updateButtonStatus] = useState(-1);
  const [myImage, updateMyImage] = useState(require('./Images/Solid_white.png')); 
  const [logo, updateMyLogo] = useState(require('./Images/tractor-removebg-preview.png')); 
  const goToCrops = () => {
    navigate('/Crops', { state: { userId: 123 } }); 
  };
  var changeButton = function () {
    updateButtonStatus(1);
    updateButtonColor("lightgreen");
    updateButtonBorder("darkgreen");
  }
  useEffect(() => {
    if (effect) {
      updateMapClickStatus(1);
      if (fertValue != -1) {
        changeButton();
      }
    }
  }, [effect]);
  var sumbitPhase = function () {
    updateDataDis('');
    updatestageOneDis('d-none');
    updateImgDis('d-none');
    updateLoadingState('');
  }
  var finishLoading = function () {
    updateLoadingState('d-none');
    updateLastStageDis('');
  }
  var movingToCropsSetup = function () {
    goToCrops();
  }
  var oldSubmit = function () {
    if (buttonStatus === 1) {
      updateTemp(Math.round(infoJSON["Temp"] * 10) / 10);
      updateRain(Math.round(infoJSON["Rain"] * 10) / 10);
      updateHum(Math.round(infoJSON["Hum"] * 10) / 10);
      updatePh(infoJSON["Ph"]);
      updateNit(infoJSON["Nit"]);
      updatePhosp(infoJSON["Posp"]);
      updatePot(infoJSON["Pot"]);
      sumbitPhase();

      var test = setTimeout(finishLoading, 2000);
    }
  }

  var submitCoords = async function () {
    if (buttonStatus === 1) {
        sumbitPhase();
        const locationData = {
          latitude: lat,
          longitude: long,
          fertilizer: fertValue
        };
  
        //ChatGPT was used a little here just to see how fetch requests work with Flask, then was adapted to our codebase
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(locationData),
            });
  
            const result = await response.json();
            updateTemp(Math.round(result['temp'] * 10) / 10)
            updateRain(Math.round(result['precipitation'] * 10) / 10)
            updateHum(Math.round(result['humidity'] * 10) / 10)
            updatePh(Math.round(result['ph'] * 10) / 10)
            updateNit(result['nitrogen'])
            updatePhosp(result['phosphorous'])
            updatePot(result['potassium'])
  
        } catch (error) {
            console.error('Error sending location:', error);
        }
  
      try {
          const response = await fetch('/api/pred/data', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(locationData),
          });
  
          const result = await response.json();
          updateaiData(result);
          finishLoading();
          
      } catch (error) {
          console.error('Error sending location:', error);
      }
  
    }
  }
  
  
  bouncy.register()
  const ImageReq = {
    a:  require('./Images/51sHm3pQHL._AC_-removebg-preview.png'),
    b: require('./Images/9k-removebg-preview.png'),
    c: require('./Images/21-0-0_ammonium_sulfate-removebg-preview.png'),
    d: require('./Images/DAP-Diammonium-Phosphate-baozhuang-removebg-preview.png'),
    e: require('./Images/81hUqcalOwL-removebg-preview.png'),
    f: require('./Images/9k-removebg-preview.png'),
    g: require('./Images/Z-removebg-preview.png'),
    h: require('./Images/Z__1_-removebg-preview.png'),
    i: require('./Images/shopping-removebg-preview.png'),
    j: require('./Images/shopping__1_-removebg-preview.png'),
    k: require('./Images/shopping__2_-removebg-preview.png')
  }
  var valList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  var pastValue = -1;
  var changeSelect = function (event) {
    var selValue = event.target.value
    if (selValue != pastValue) {
      pastValue = selValue;
      let selString = ImageReq[valList[selValue - 1]];
      updateImgDis('');
      updateMyImage(selString);
      updateFertValue(selValue);
      if (mapClickStatus === 1) {
        changeButton();
      }
    }
  }

    return (
      <div className="leftSidebar">
        <div className="logoHolder">
          <p className="textTitle">CropAI</p>
          <img className="logo" src={logo}></img>
        </div>
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
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Temperature: {Temp} °F</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Rainfall: {Rainfall} mm</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Humidity: {Humidity}</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>pH: {Ph}</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Nitrogen (N): {Nit}%</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Phosphorus (P): {Phosp}%</li>
          <li className="list-group-item" style={{"backgroundColor": listGroupColor, "borderColor": listGroupBorderColor}}>Potassium (K): {Pot}%</li>
        </ul>
        <p className="CoordHolder" style={{"marginTop": coordMargin}}>Latitude : {Math.round(lat * 10000) / 10000}     Longitude: {Math.round(long * 10000) / 10000}</p>
        <button className={"submit " + stageOneDis} id="submit" onClick={submitCoords} style={{"backgroundColor": buttonColor, "borderColor": buttonBorder}}>Submit Coords</button>
        <div className={"Loading " + LoadingState}>
          <p>Generating Optimal Crops</p>  
          <div className="test">
          <l-bouncy
            size="35"
            speed="1.75" 
            color="white" 
            ></l-bouncy>
          </div>
        </div>
        <button className={"viewCrop " + lastStageDis} onClick={movingToCropsSetup}>View Crops</button>
      </div>
      );
}
export default Box;