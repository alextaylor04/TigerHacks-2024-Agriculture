import requests

from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")
CSE_ID = os.getenv("GOOGLE_CX")

def google_image_search(query, num_results=1):

    url = 'https://www.googleapis.com/customsearch/v1'

    params = {
        'key': API_KEY,
        'cx': CSE_ID,
        'q': query,
        'searchType': 'image',
        'num': num_results,
    }

    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        results = response.json()
        images = []
        
        if 'items' in results:
            for item in results['items']:
                images.append(item['link'])
        
        return images
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None
