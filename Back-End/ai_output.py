import openai
from openai import OpenAI
from all_param import prediction
import time

client = OpenAI(api_key="API_KEY")

def american_crop(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    response = client.chat.completions.create(
        model = "gpt-4-turbo",
        messages = [
            {"role": "user", "content": different_plant(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K)}],
    )
    return response.choices[0].message.content

def different_plant(non_american_plant, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    prompt = (
        f"This crop isn’t found in America {non_american_plant}:\n"
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

def crop_description(pre1, pre2, lat, lon, temp, humidity, ph, rainfall, N, P, K):
    resp = client.chat.completions.create(
        model = "gpt-4-turbo",
        messages = [
            {"role": "user", "content": provide_description(pre1, pre2, lat, lon, temp, humidity, ph, rainfall, N, P, K)}],
    ).choices[0].message.content
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


def provide_description(pre1, pre2, lat, lon, temp, humidity, ph, rainfall, N, P, K): # 1 paragraph 3 sentences
    prompt = (
        f"According to our calculations, we have decided we predicted that the best crops to plant are these: {pre1} {pre2}\n"
        f"Here is some important information about Latitude: {lat}, Longitude: {lon}:\n"
        f"temperature - temperature in degrees Celsius: {temp}\n"
        f"humidity - relative humidity in %: {humidity}\n"
        f"ph - pH value of the soil: {ph}\n"
        f"rainfall - rainfall in mm: {rainfall}\n"
        f"N - ratio of Nitrogen content in soil: {N}\n"
        f"P - ratio of Phosphorous content in soil: {P}\n"
        f"K - ratio of Potassium content in soil: {K}\n"
        "YOUR JOB IS TO PLEASE CREATE A NEW PREDICTION. Now we have 3 predictions. Your prediction is the third prediction.\n"
        "Why did we choose each of these predicted crops? Why did you choose your prediction?\n"
        "PROVIDE 3 PARAGRAPHS, 1 FOR EACH CROP, 3 SENTENCES. SEPARATE WITH | AS A DELIMITER. END IN *\n"
        "What are the best growing conditions for each of these predicted crops?\n"
        "PROVIDE 3 PARAGRAPHS, 1 FOR EACH CROP, 3 SENTENCES. SEPARATE WITH | AS A DELIMITER. END IN *\n"
        "When should we harvest each of these crops?\n"
        "How much of this crop should we expect to harvest each season?\n"
        "PROVIDE 3 PARAGRAPHS, 1 FOR EACH CROP, 3 SENTENCES. SEPARATE WITH | AS A DELIMITER. END IN *. Similar to this format:\n"
        "why we choose crop1 in 3 sentences| why we choose crop2 in 3 sentences| why we choose crop3 in 3 sentences*\n"
        "best growing conditions for crop1|best growing conditions for crop2|best growing conditions for crop1*\n"
        "what is the best time to harvest and expected harvest of crop1|what is the best time to harvest and expected harvest of crop2|what is the best time to harvest and expected harvest of crop3*\n"
        "NO HEADERS"
    )
    return prompt

lat = 39.099724
lon = -94.578331
pre1 = "corn"
pre2 = "apples"
pre3 = "bannans"

nitrogen_, phosporus_, potassium_, temp_, humidity_, ph_, precipitation_ = prediction(lat, lon, 1)
crop = "mung beans"
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
