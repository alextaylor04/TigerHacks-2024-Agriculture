import tensorflow as tf
import numpy as np

loaded_model = tf.keras.models.load_model('crop_recommender_model.keras')

def predict_crop(X):
    prediction = loaded_model.predict(np.array(X))
    return np.argsort(prediction)[-3:][::-1] 