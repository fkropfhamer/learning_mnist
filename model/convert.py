import tensorflow as tf
from tensorflow import keras
import tensorflowjs as tfjs

trained_model = keras.models.load_model("model.h5")
tfjs.converters.save_keras_model(trained_model, './model/tfjs_model')
