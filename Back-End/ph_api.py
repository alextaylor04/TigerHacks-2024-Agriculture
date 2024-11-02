import requests

def ph(lat, lon):

    url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
    params = {
        "lat": lat, # latitude
        "lon": lon, # longitude
        "property": ["phh2o"], # Specifies PH
        "depth": ["0-5cm"], # Specifies Depth
        "value": ["mean"]
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        soil_data = response.json()
        ph_value_raw = soil_data['properties']['layers'][0]['depths'][0]['values']['mean']
        if isinstance(ph_value_raw, int):
            ph_value = ph_value_raw / 10
        else:
            lat = int(lat)
            lon = int(lon)
            params = {
                "lat": lat,
                "lon": lon,
                "property": ["phh2o"],
                "depth": ["0-5cm"],
                "value": ["mean"]
            }

            response = requests.get(url, params=params)

            if response.status_code == 200:
                soil_data = response.json()
                ph_value_raw = soil_data['properties']['layers'][0]['depths'][0]['values']['mean']
                ph_value = ph_value_raw / 10
                return ph_value