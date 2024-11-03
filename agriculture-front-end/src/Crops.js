import React from 'react';
import './crops.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Crops = ({aiData, updateaiData}) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/', { state: { reload: true } });
      };
      window.onload = function () {
        updateaiData(0);
      }
    const [plant1, updateP1] = useState('');
    const [plant2, updateP2] = useState('');
    const [plant3, updateP3] = useState('');

    const [image1, updateI1] = useState('');
    const [image2, updateI2] = useState('');
    const [image3, updateI3] = useState('');
/*What the variables mean: A#P# = Answer# Part#, answer number refers to the plant number it refers too. */
    const [a1p1, updateA1P1] = useState('');
    const [a1p2, updateA1P2] = useState('');
    const [a1p3, updateA1P3] = useState('');
    const [a2p1, updateA2P1] = useState('');
    const [a2p2, updateA2P2] = useState('');
    const [a2p3, updateA2P3] = useState('');
    const [a3p1, updateA3P1] = useState('');
    const [a3p2, updateA3P2] = useState('');
    const [a3p3, updateA3P3] = useState('');


    const clickFunc = (event) => {
        console.log(aiData)
    }

        
    useEffect(() => {
        console.log(aiData)
        updateP1(aiData.cropPredictions[0]);
        updateP2(aiData.cropPredictions[1]);
        updateP3(aiData.cropPredictions[2]);

        updateI1(aiData.prediction_images[0][0]);
        updateI2(aiData.prediction_images[1][0]);
        updateI3(aiData.prediction_images[2][0]);
        
        updateA1P1(aiData.answer1part1);
        updateA1P2(aiData.answer1part2);
        updateA1P3(aiData.answer1part3);
        updateA2P1(aiData.answer2part1);
        updateA2P2(aiData.answer2part2);
        updateA2P3(aiData.answer2part3);
        updateA3P1(aiData.answer3part1);
        updateA3P2(aiData.answer3part2);
        updateA3P3(aiData.answer3part3);
    }, []);

    return (
    <>
    {aiData != 0 ? (<div className = "everything">
        <div className="Home-Icon" onClick={goToHome}>Home</div>
        <h1>Three Optimized Crops:</h1>
        <div className='multiCropHolder'>
            <div className="cropHolder">
                <p>{plant1}</p>
                <img src= {image1}></img>
                <h6>Description of {plant1}</h6>
                <p className = "text" >&emsp;{a1p1}</p>
                <h6>Best Growing Conditions of {plant1}</h6>
                <p className = "text" >&emsp;{a1p2}</p>
                <h6>Yield and Harvest Time of {plant1}</h6>
                <p className = "text" >&emsp;{a1p3}</p>
            </div>
            <div className="cropHolder">
            <p>{plant2}</p>
                <img src={image2}></img>
                <h6>Description of {plant2}</h6>
                <p className = "text" >&emsp;{a2p1}</p>
                <h6>Best Growing Conditions of {plant2}</h6>
                <p className = "text" >&emsp;{a2p2}</p>
                <h6>Yield and Harvest Time of {plant2}</h6>
                <p className = "text" >&emsp;{a2p3}</p>
            </div>
            <div className="cropHolder">
            <p>{plant3}</p>
                <img src={image3}></img>
                <h6>Description of {plant3}</h6>
                <p className = "text" >&emsp;{a3p1}</p>
                <h6>Best Growing Conditions of {plant3}</h6>
                <p className = "text" >&emsp;{a3p2}</p>
                <h6>Yield and Harvest Time of {plant3}</h6>
                <p className = "text" >&emsp;{a3p3}</p>
            </div>
        </div>
        <button onClick={clickFunc}></button>
    </div>
    ) : (
        <div>error </div>
    )} 
    </>
    );
}

export default Crops;