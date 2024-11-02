import requests

def ph(lat, lon):
    # URL for SoilGrids REST API with coordinates
    url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
    params = {
        "lat": lat,      # Latitude of the location
        "lon": lon,    # Longitude of the location
        "property": ["phh2o"],  # Soil property for pH in water
        "depth": ["0-5cm"],  # Depth interval to query
        "value": ["mean"]  # Statistical values to retrieve
    }

    # Send GET request
    response = requests.get(url, params=params)

    # Check the response status and parse JSON
    if response.status_code == 200:
        soil_data = response.json()
        # print(soil_data)
        ph_value_raw = soil_data['properties']['layers'][0]['depths'][0]['values']['mean']
        if isinstance(ph_value_raw, int):
            ph_value = ph_value_raw / 10  # Convert to actual pH by dividing by 10
            print("Soil pH (0-5cm):", ph_value) # Regular ph level: 0-14
        else:
            lat = int(lat)
            lon = int(lon)
            params = {
                "lat": lat,      # Latitude of the location
                "lon": lon,    # Longitude of the location
                "property": ["phh2o"],  # Soil property for pH in water
                "depth": ["0-5cm"],  # Depth interval to query
                "value": ["mean"]  # Statistical values to retrieve
            }
            # Send GET request
            response = requests.get(url, params=params)

            # Check the response status and parse JSON
            if response.status_code == 200:
                soil_data = response.json()
                # print(soil_data)
                ph_value_raw = soil_data['properties']['layers'][0]['depths'][0]['values']['mean']
                ph_value = ph_value_raw / 10  # Convert to actual pH by dividing by 10
                # print("Soil pH (0-5cm):", ph_value) # Regular ph level: 0-14
                return ph_value
            else:
                print("Error:", response.status_code)
    else:
        print("Error:", response.status_code)

print(ph(39.099724,-94.578331)) # Kansas City
