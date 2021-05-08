import tensorflow as tf
from tensorflow import keras
import numpy as np
import math


trained_model = keras.models.load_model("model.h5")

def predict(image):
    global trained_model
    prediction = trained_model.predict(np.array([image]))
    predicted_label = np.argmax(prediction)
    prediction_probability = prediction[0][predicted_label]

    print("label: {}, probability: {}".format(predicted_label, prediction_probability))

    return predicted_label, prediction_probability

if __name__ == "__main__":
    (train_images, train_labels), (test_images, test_labels) = keras.datasets.mnist.load_data()
    
    train_images = train_images / 255.0
    test_images = test_images / 255.0

    test_image = test_images[0]

    predict(test_image)