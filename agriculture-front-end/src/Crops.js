import React from 'react';
import './crops.css';
import { useNavigate } from 'react-router-dom';

const Crops = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/', { state: { reload: true } });
      };
      
    return (<div>
        <div className="Home-Icon" onClick={goToHome}>Home</div>
        <p>crops</p>
        <div className='multiCropHolder'>
            <div className="cropHolder">
                <p>Corn</p>
                <img src="https://i.ytimg.com/vi/1VbZE6YhjKk/maxresdefault.jpg"></img>
            </div>
            <div className="cropHolder">
                <p>Corn</p>
                <img src="https://i.ytimg.com/vi/1VbZE6YhjKk/maxresdefault.jpg"></img>
            </div>
        </div>
    </div>);
}

export default Crops;