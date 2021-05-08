import tensorflow as tf
from tensorflow import keras
import numpy as np

(train_images, train_labels), (test_images, test_labels) = keras.datasets.mnist.load_data()

print(train_images.shape)

f = lambda x: 1 if x!=0 else 0

f = np.vectorize(f)

train_images = f(train_images)
test_images = f(test_images)

# train_images = train_images / 255.0
# test_images = test_images / 255.0^

train_images = train_images.reshape(train_images.shape[0], 28, 28, 1)
test_images = test_images.reshape(test_images.shape[0], 28, 28, 1)

model = keras.models.Sequential([
    keras.layers.Conv2D(28, kernel_size=(3,3), input_shape=(28, 28, 1)),
    # keras.layers.Flatten(input_shape=(28,28)),
    keras.layers.MaxPooling2D(pool_size=(2,2)),
    keras.layers.Flatten(),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation="softmax")
])

model.compile(optimizer='adam', 
              loss='sparse_categorical_crossentropy', 
              metrics=['accuracy'])

print(model.summary())

model.fit(train_images, train_labels, epochs=10, validation_data=(test_images, test_labels))

loss, accuracy = model.evaluate(test_images, test_labels)

print("loss: {}, accuracy: {}".format(loss, accuracy))

model.save("./model/model.h5")
