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

@app.route('/api/pred/data', methods=['POST'])
def make_prediction():
    data = request.json  # Get JSON data from the request
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    fertilizer = data.get('fertilizer')

    prediction_indices = apis.prediction(latitude, longitude, fertilizer)
    cropOrder = ["Rice", "Maize", "Chickpea", "Kidney Beans", "Pigeon Peas", "Moth Beans", "Mung Nean", "Black Gram", "Lentil", "Pomegranate", "Banana", "Mango", "Grapes", "Watermelon", "Muskmelon", "Apple", "Orange", "Papaya", "Coconut", "Cotton", "Jute", "Coffee"]
    predictions = [cropOrder[i] for i in prediction_indices if i < len(cropOrder)]

    
    nitrogen, phosphorous, potassium, temp, humidity, ph, precipitation = tuple(apis.raw_api_data(latitude, longitude, fertilizer))

    gpt_crop = gpt.american_crop(predictions[0], latitude, longitude, temp, humidity, ph, precipitation, nitrogen, phosphorous, potassium)

    predictions.append(gpt_crop)

    crop_desc = gpt.crop_description(predictions[0], predictions[1], gpt_crop, latitude, longitude, temp, humidity, ph, precipitation, nitrogen, phosphorous, potassium)

    prediction_images = []
    for pred in predictions:
        prediction_images.append(google_image.google_image_search(pred + ' crop'))
    
    labels = ['cropPredictions', 'answer1part1', 'answer2part1', 'answer3part1', 'answer1part2', 'answer2part2', 'answer3part2', 'answer1part3', 'answer2part3', 'answer3part3', 'prediction_images']
    values = [predictions]
    for desc in crop_desc:
        print(desc)
        values.append(desc)
    values.append(prediction_images)

    resp_data = dict(zip(labels, values))
    # for key in resp_data.keys():
    #     print(key)
    # # print(dictionary)

    return jsonify(resp_data)

if __name__ == '__main__':
    app.run(debug=True)
