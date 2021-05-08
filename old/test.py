import tensorflow as tf
from tensorflow import keras
import numpy as np
import random

random.seed()

(train_images, train_labels), (test_images, test_labels) = keras.datasets.mnist.load_data()

f = lambda x: 1 if x!=0 else 0

f = np.vectorize(f)

train_images = f(train_images)
test_images = f(test_images)

train_image = random.choice(train_images)

for i in train_image:
    print(i)

print(train_images.shape[0])