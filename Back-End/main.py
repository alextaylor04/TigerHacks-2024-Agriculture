from flask import Flask, request, jsonify
from flask_cors import CORS
import time

import all_param as apis
import ai_output as gpt
import google_image

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def api_data():
    data = request.json  # Get JSON data from the request
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    fertilizer = data.get('fertilizer')
    
    # Here, you can process the latitude and longitude as needed
    print(f"Received latitude: {latitude}, longitude: {longitude}")

    raw_api_data = apis.raw_api_data(latitude, longitude, fertilizer)
    raw_api_dict = apis.raw_to_dict(raw_api_data)

    return jsonify(raw_api_dict)

@app.route('/api/predictiondata', methods=['POST'])
def make_prediction():
    data = request.json  # Get JSON data from the request
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    fertilizer = data.get('fertilizer')

    predictions = apis.prediction(latitude, longitude, fertilizer)
    cropOrder = ["rice", "maize", "chickpea", "kidneybeans", "pigeonpeas", "mothbeans", "mungbean", "blackgram", "lentil", "pomegranate", "banana", "mango", "grapes", "watermelon", "muskmelon", "apple", "orange", "papaya", "coconut", "cotton", "jute", "coffee"]
    predictions = cropOrder[predictions]
    
    nitrogen, phosphorous, potassium, temp, humidity, ph, precipitation = tuple(apis.raw_api_data(latitude, longitude, fertilizer))

    gpt_crop = gpt.american_crop(predictions[0], latitude, longitude, temp, humidity, ph, precipitation, nitrogen, phosphorous, potassium)

    predictions.append(gpt_crop)

    crop_desc = gpt.crop_description(predictions[0], predictions[1], gpt_crop, latitude, longitude, temp, humidity, ph, precipitation, nitrogen, phosphorous, potassium)

    prediction_images = []
    for pred in predictions:
        prediction_images.append(google_image.google_image_search(pred))
    
    labels = ['cropPredictions', 'answer1part1', 'answer1part2', 'answer1part3', 'answer2part1', 'answer2part2', 'answer2part3', 'answer3part1', 'answer3part2', 'answer3part3', 'prediction_images']
    values = [predictions, crop_desc, prediction_images]

    dictionary = dict(zip(labels, values))
    return jsonify(dictionary)

if __name__ == '__main__':
    app.run(debug=True)
