import openai
from openai import OpenAI
from all_param import raw_api_data
import time

from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("OPENAI_KEY")

client = OpenAI(api_key=API_KEY)

def american_crop(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    response = client.chat.completions.create(
        model = "gpt-4-turbo",
        messages = [
            {"role": "user", "content": different_plant(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K)}],
    )
    return response.choices[0].message.content

def different_plant(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    prompt = (
        f"This crop isn’t found in the following region {non_american_plant}:\n"
        f"Here is some important information about Latitude: {lat}, Longitude: {lon}:\n"
        f"temperature - temperature in degrees Celsius: {temp}\n"
        f"humidity - relative humidity in %: {humidity}\n"
        f"ph - pH value of the soil: {ph}\n"
        f"rainfall - rainfall in mm: {rainfall}\n"
        f"N - ratio of Nitrogen content in soil: {N}\n"
        f"P - ratio of Phosphorous content in soil: {P}\n"
        f"K - ratio of Potassium content in soil: {K}\n"
        "Please provide us with a different crop we could plant in the region of the coordinates listed earlier.\n"
        "ONLY PROVIDE THE NAME OF THE CROP. NO DESCRIPTION. NO REASONING. NOTHING BESIDES THE CROP NAME"
    )
    # print(prompt)
    # print(type(prompt))
    return prompt

def crop_description(pre1, pre2, gpt_pred, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    resp = client.chat.completions.create(
        model = "gpt-4-turbo",
        messages = [
            {"role": "user", "content": provide_description(pre1, pre2, gpt_pred, lat, lon, temp, humidity, ph, rainfall, N, P, K)}],
    ).choices[0].message.content
    print(resp)
    answer1 = resp.split('*')[0]
    answer2 = resp.split('*')[1]
    answer3 = resp.split('*')[2]

    answer1part1 = answer1.split('|')[0]
    answer1part2 = answer1.split('|')[1]
    answer1part3 = answer1.split('|')[2]

    answer2part1 = answer2.split('|')[0]
    answer2part2 = answer2.split('|')[1]
    answer2part3 = answer2.split('|')[2]

    answer3part1 = answer3.split('|')[0]
    answer3part2 = answer3.split('|')[1]
    answer3part3 = answer3.split('|')[2]

    return answer1part1, answer1part2, answer1part3, answer2part1, answer2part2, answer2part3, answer3part1, answer3part2, answer3part3


def provide_description(pre1, pre2, gpt_pred, lat, lon, temp, humidity, ph, rainfall, N, P, K): # 1 paragraph 3 sentences
    prompt = (
        f"We have analyzed the data and recommend the following crops: {pre1}, {pre2}. You chose: {gpt_pred}.\n"
        f"Key location data for Latitude: {lat}, Longitude: {lon}:\n"
        f"- Temperature (°C): {temp}\n"
        f"- Humidity (%): {humidity}\n"
        f"- Soil pH: {ph}\n"
        f"- Rainfall (mm): {rainfall}\n"
        f"- Nitrogen content (N): {N}\n"
        f"- Phosphorous content (P): {P}\n"
        f"- Potassium content (K): {K}\n"
        "1. Why did we choose each of the recommended crops? Why did you choose your prediction?\n"
        "Provide 3 paragraphs, 1 for each crop, with 3 sentences each, separated by '|'. END WITH *. Format:\n"
        "why we chose crop1| why we chose crop2| why you chose crop3*\n"
        "2. What are the best growing conditions for each of these crops?\n"
        "Provide 3 paragraphs, 1 for each crop, with 3 sentences each, separated by '|'. END WITH *. Format:\n"
        "best conditions for crop1| best conditions for crop2| best conditions for crop3*\n"
        "3. When should each crop be harvested, and what is the expected yield per season?\n"
        "Provide 3 paragraphs, 1 for each crop, with 3 sentences each, separated by '|'. END WITH *. Format:\n"
        "harvest and yield for crop1| harvest and yield for crop2| harvest and yield for crop3*\n"
        "No headers."
    )
    return prompt

lat = 39.099724
lon = -94.578331
pre1 = "corn"
pre2 = "apples"
pre3 = "bannans"

nitrogen_, phosporus_, potassium_, temp_, humidity_, ph_, precipitation_ = tuple(raw_api_data(lat, lon, 1))
crop = "mung beans"
print(different_plant('mungbean', lat, lon, temp_, humidity_, ph_, precipitation_, nitrogen_, phosporus_, potassium_))
# # print(american_crop(crop, lat, lon, temp_, humidity_, ph_, precipitation_, nitrogen_, phosporus_, potassium_))
# answer1part1, answer1part2, answer1part3, answer2part1, answer2part2, answer2part3, answer3part1, answer3part2, answer3part3 = crop_description(pre1, pre2, lat, lon, temp_, humidity_, ph_, precipitation_, nitrogen_, phosporus_, potassium_)
# print(answer1part1)
# print(answer1part2)
# print(answer1part3)
# print(answer2part1)
# print(answer2part2)
# print(answer2part3)
# print(answer3part1)
# print(answer3part2)
# print(answer3part3)
 # non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K
# print(provide_description(pre1, pre2, lat, lon, temp_, humidity_, ph_, precipitation_, nitrogen_, phosporus_, potassium_))
