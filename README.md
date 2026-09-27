# CropAI  (TigerHacks 2024)

![Screenshot 2024-11-04 162912](https://github.com/user-attachments/assets/798130f9-e255-4c3c-8a49-cf5fcf1da9ae)

Youtube: https://www.youtube.com/watch?v=vEONHM2qx_M <br/>
Devpost: https://devpost.com/software/agriculture-machine-learning-project-tigerhacks-2024

**Pick a spot on the map and the fertilizer you use, and get three crops worth planting there,
with the reasoning in plain language.** Built at TigerHacks 2024 (November 2024), a university
hackathon.

The farmer chooses the farm's location and fertilizer. The app fills in what the land is like
from public data, runs a small neural network over it, and shows the top three crops with a
short explanation and a picture of each, including one suggestion chosen to be commonly grown
in the farmer's own region.

## How it works

- **The land, from its coordinates.** Temperature, humidity and rainfall come from Open-Meteo.
  Soil pH comes from ISRIC SoilGrids. Nitrogen, phosphorus and potassium come from the chosen
  fertilizer. No farmer has to type a soil report.
- **The model.** A Keras neural network trained on a public crop-recommendation dataset (2,200
  rows, 22 crops, from those seven inputs: N, P, K, temperature, humidity, pH, rainfall) ranks
  the crops. The training notebook is in `Neural Network ML Models/`.
- **The regional check.** That dataset's crops include rice, chickpea, mung bean and
  pomegranate, which can be a poor fit for a farm in Missouri. So the third suggestion comes
  from GPT-4 instead: given the same numbers and the coordinates, it is asked for a different
  crop that grows in that region. GPT-4 also writes the explanation for all three.
- **Pictures** of each crop come from Google Custom Search.
- **The app** is a React front end (`agriculture-front-end/`) talking to a Flask back end
  (`Back-End/`) over two endpoints: `/api/data` for the location's raw numbers and
  `/api/pred/data` for the recommendation.

Setup
---------------
1.) Add an .env file in the agriculture-front-end folder <br/>
2.) Write the line 'REACT_APP_GOOGLE_MAPS_API_KEY=[key here]' <br/>
3.) Replace the [key here] with your own google maps api key <br/>

1.) Add an .env file in the Back-end folder <br/>
2.) Write the lines: <br/>
  'GOOGLE_API_KEY=[key here]' <br/>
  'GOOGLE_CX=[key here]' <br/>
  'OPENAI_KEY=[key here]' <br/>
3.) Replace the [key here]'s with your keys <br/>

1.) Need to setup React/Nodejs files in the agriculture-front-end folder <br/>
2.) Need to setup venv in the Back-end folder <br/>
3.) Need to setup Tensorflow <br/>

Running Instructions
------------------------------------
1.) cd into the Back-end folder <br/>
2.) type: venv/Scripts/activate <br/>
3.) type: flask run <br/>
4.) Then open another terminal <br/>
5.) cd into the agriculture-front-end folder <br/>
6.) type: npm start <br/>
