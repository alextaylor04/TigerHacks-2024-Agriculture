import requests

def google_image_search(api_key, cse_id, query, num_results=1):

    url = 'https://www.googleapis.com/customsearch/v1'

    params = {
        'key': api_key,
        'cx': cse_id,
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

if __name__ == "__main__":
    API_KEY = 'key_here'
    CSE_ID = 'Programmable Search Engine ID'
    query = 'soy bean plant'
    
    image_results = google_image_search(API_KEY, CSE_ID, query)
    if image_results:
        print(image_results)
