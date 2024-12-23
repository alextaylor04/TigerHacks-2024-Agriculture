from npk_api import npk
from ph_api import ph
from weather_apis import weather
import crop_recommender_nn as recommender

def raw_api_data(lat, lon, fertilizer):
    nitrogen, phosporus, potassium = npk(fertilizer)
    ph_ = ph(lat,lon)
    temp, humidity, precipitation = weather(lat,lon)

    if ph_ == None:
        ph_ = (nitrogen * .1) + (phosporus * .05) + 6 # Nitrogen affects ph more than phosporus. There needs to be a baseline.
    return [nitrogen, phosporus, potassium, temp, humidity, ph_, precipitation]
def raw_to_dict(data):
    labels = ['nitrogen', 'phosphorous', 'potassium', 'temp', 'humidity', 'ph', 'precipitation']
    dictionary = dict(zip(labels, data))
    dictionary['temp'] = (dictionary['temp'] * 9 / 5) + 32 #convert to fahrenheit
    return dictionary


def prediction(lat,lon, fertilizer):

    # In order
    #print(nitrogen, phosporus, potassium, temp, humidity, ph_, precipitation)
    # print(pre1)
    # print(pre2)
    # print(pre3)

    data = raw_api_data(lat, lon, fertilizer)
    return recommender.predict_crop(data)

     #, pre1, pre2, pre3

print(prediction(39.099724, -94.578331, 1))
# prediction(38, -94, 2)
# prediction(37, -93, 3)
# prediction(37, -94, 4)
# prediction(37, -95, 5)
# prediction(37, -94.5, 6)
# prediction(38, -95, 7)
# prediction(38, -94, 8)
# prediction(38, -93, 9)
# prediction(38, -94.5, 10)
# prediction(38, -95, 11)