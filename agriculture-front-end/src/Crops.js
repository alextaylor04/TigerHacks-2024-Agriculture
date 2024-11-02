import React from 'react';
import './crops.css';

const Crops = () => {
    return (<div>
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