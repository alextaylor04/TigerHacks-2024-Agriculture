from flask import Flask, request, jsonify
from flask_cors import CORS
import time

import all_param as apis

app = Flask(__name__)
CORS(app)

@app.route('/api/location', methods=['POST'])
def receive_location():
    data = request.json  # Get JSON data from the request
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    fertilizer = data.get('fertilizer')
    
    # Here, you can process the latitude and longitude as needed
    print(f"Received latitude: {latitude}, longitude: {longitude}")

    apis.prediction(latitude, longitude, fertilizer)



    return jsonify({"message": "Location received", "latitude": latitude, "longitude": longitude})
#TODO: Add a second request for only AI later.


if __name__ == '__main__':
    app.run(debug=True)
