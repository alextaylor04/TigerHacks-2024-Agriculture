# CropAI  (TigerHacks 2024)

![Screenshot 2024-11-04 162912](https://github.com/user-attachments/assets/798130f9-e255-4c3c-8a49-cf5fcf1da9ae)

Youtube: https://www.youtube.com/watch?v=vEONHM2qx_M <br/>
Devpost: https://devpost.com/software/agriculture-machine-learning-project-tigerhacks-2024

This agriculture project is a real-world application for farmers to choose the best crop to plant in a given piece of farmland. The farmer would start by choosing the location of their farm, as well as the fertilizer they plan to use in order to generate more accurate values for the soil. The farmer is then shown information about the weather at the location they selected as an AI performs a prediction based on the data provided. The response of the AI model (a Neural Network Machine Learning Algorithm) is synthesized using ChatGPT to prepare it for display on the website. The farmer is then given the option to view the top 3 crop suggestions, including one generated separate from the data to guarantee at least one of the crops suggested is commonly grown within the region the farmer chose.


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

