import tensorflow as tf
import numpy as np

loaded_model = tf.keras.models.load_model('crop_recommender_model.keras')


def predict_crop(X):
    input_data = np.array(X)
    input_data = input_data.reshape(1, 7)
    prediction = loaded_model.predict(input_data)
    return np.argsort(prediction[0])[-2:][::-1]
