from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    try:
        return jsonify({'time': time.time()})
    except Exception as e:
        app.logger.error(f'Error occurred: {e}')
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
