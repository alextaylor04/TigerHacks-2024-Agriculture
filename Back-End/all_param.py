from npk_api import npk
from ph_api import ph
from weather_apis import weather

def prediction(lat,lon, fertilizer):
    nitrogen, phosporus, potassium = npk(fertilizer)
    ph_ = ph(lat,lon)
    temp, humidity, precipitation = weather(lat,lon)
    # pre1, pre2, pre3 = "corn", "wheat", "random"

    # In order
    print(nitrogen, phosporus, potassium, temp, humidity, ph_, precipitation)
    # print(pre1)
    # print(pre2)
    # print(pre3)

    return nitrogen, phosporus, potassium, temp, humidity, ph_, precipitation#, pre1, pre2, pre3

prediction(39.099724, -94.578331, 1)
prediction(38, -94, 2)
prediction(37, -93, 3)
prediction(37, -94, 4)
prediction(37, -95, 5)
prediction(37, -94.5, 6)
prediction(38, -95, 7)
prediction(38, -94, 8)
prediction(38, -93, 9)
prediction(38, -94.5, 10)
prediction(38, -95, 11)