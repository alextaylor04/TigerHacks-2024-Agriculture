import React from 'react';
import './crops.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Crops = ({aiData, updateaiData}) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/', { state: { reload: true } });
      };
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

    const [logo, updateMyLogo] = useState(require('./Images/tractor-removebg-preview.png'));

    window.onload = (event) => {
        updateP1("Corn");
        updateP2("Bananas");
        updateP3("Apples");

        updateI1("https://i.ytimg.com/vi/1VbZE6YhjKk/maxresdefault.jpg");
        updateI2("https://static5.depositphotos.com/1006597/504/i/450/depositphotos_5042422-stock-photo-sliced-banana.jpg");
        updateI3("https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg");
        
        updateA1P1("Corn, also known as maize, is a staple crop originally domesticated in Mexico over 9,000 years ago. It serves as a primary food source for both humans and livestock, and its versatile uses include cornmeal, corn syrup, and biofuels. Today, the United States is the largest producer of corn in the world, accounting for nearly 40% of global production.");
        updateA1P2("Corn thrives in warm climates with well-drained, nutrient-rich soil and requires full sunlight for optimal growth, typically needing around 20 to 30 inches of rainfall during the growing season.");
        updateA1P3("Corn typically yields between 120 to 200 bushels per acre, depending on factors like soil quality, climate, and farming practices. Harvest time usually occurs in late summer to early fall, around 60-100 days after planting, depending on the corn variety and growing conditions.");
        updateA2P1("Bananas are a tropical fruit known for their sweet taste and creamy texture, widely consumed around the world. They grow in clusters on banana plants, thriving in warm, humid climates. Rich in potassium and fiber, bananas offer numerous health benefits, making them a popular choice for a quick and nutritious snack.");
        updateA2P2("Bananas thrive in warm, tropical climates with consistent temperatures between 75°F to 95°F (24°C to 35°C). They require rich, well-drained soil with plenty of organic matter and a steady supply of moisture, as they need about 4-6 inches of rainfall per month. Additionally, banana plants prefer full sunlight and are sensitive to strong winds, which can damage their large leaves and reduce fruit production.");
        updateA2P3("Banana plants typically begin yielding fruit 9 to 12 months after planting, depending on the variety and growing conditions. Each plant produces a single large cluster, or bunch, which can weigh anywhere from 30 to 100 pounds, containing multiple hands of bananas. Harvesting is usually done when the bananas are still green, and they continue ripening after being picked, with harvest times varying year-round in tropical regions.");
        updateA3P1("Apples are one of the most popular and widely cultivated fruits globally, known for their crisp texture and sweet-tart flavor. Originating from Central Asia, they have been grown for thousands of years and come in a wide variety of cultivars, such as Fuji, Gala, and Granny Smith, each with its own unique taste and texture.");
        updateA3P2("Apples grow best in temperate climates with cold winters and moderate summers. They require well-drained, loamy soil with a pH between 6.0 and 7.0, and plenty of sunlight for at least 6 to 8 hours a day. Most apple varieties also need a certain number of chill hours (typically between 500 to 1,000 hours below 45°F) during the winter for proper fruit development.");
        updateA3P3("Apple trees generally begin producing fruit 3 to 5 years after planting, depending on the variety and rootstock. A mature apple tree can yield between 150 to 300 apples per season, with some high-density orchards producing even more. Harvest time varies by variety, but apples are typically picked in late summer to fall, once they reach their desired color and ripeness.");
      };

    return (<div className = "everything">
        <div className="Home-Icon" onClick={goToHome}>
        <img className="logo" src={logo}></img>
        &emsp;Home
        </div>
        <h1 className="optimize">Three AI Optimized Crops:</h1>
        <div className='multiCropHolder'>
            <div className="cropHolder">
                <p className='name'>{plant1}</p>
                <img className='image' src= {image1}></img>
                <p className = "heading">Description:</p>
                <p className = "text" >&emsp;{a1p1}</p>
                <p className = "heading">Best Growing Conditions:</p>
                <p className = "text" >&emsp;{a1p2}</p>
                <p className = "heading">Yield and Harvest Time:</p>
                <p className = "text" >&emsp;{a1p3}</p>
            </div>
            <div className="cropHolder">
            <p className='name'>{plant2}</p>
                <img className='image' src={image2}></img>
                <p className = "heading">Description:</p>
                <p className = "text" >&emsp;{a2p1}</p>
                <p className = "heading">Best Growing Conditions:</p>
                <p className = "text" >&emsp;{a2p2}</p>
                <p className = "heading">Yield and Harvest Time:</p>
                <p className = "text" >&emsp;{a2p3}</p>
            </div>
            <div className="cropHolder">
            <p className='name'>{plant3}</p>
                <img className='image' src={image3}></img>
                <p className = "heading">Description:</p>
                <p className = "text" >&emsp;{a3p1}</p>
                <p className = "heading">Best Growing Conditions:</p>
                <p className = "text" >&emsp;{a3p2}</p>
                <p className = "heading">Yield and Harvest Time:</p>
                <p className = "text" >&emsp;{a3p3}</p>
            </div>
        </div>
    </div>);
}

export default Crops;