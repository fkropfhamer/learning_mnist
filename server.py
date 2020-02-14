from aiohttp import web
import socketio
import numpy as np
import mnist_evaluate
import asyncio

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

async def index(request):
    """Serve the client-side application."""
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')


@sio.on("connect")
def connect(sid, environ):
    print("user with sid {} connected".format(sid))


@sio.on("msg")
def msg(sid, data):
    print(data)

@sio.on("classify")
async def classify(sid, data):
    n = 28
    processed_data = [data[i:i + n] for i in range(0, len(data), n)]

    f = lambda x: 1 if x!=0 else 0

    f = np.vectorize(f)

    processed_data = np.array(processed_data)
    # processed_data = processed_data / 255
    processed_data = f(processed_data)

    for i in processed_data:
        print(i)

    processed_data = processed_data.reshape(28, 28, 1)
    processed_data = processed_data.astype('float32')
    print(processed_data.shape)


    label, probability = mnist_evaluate.predict(processed_data)

    probability = probability.item()
    label = label.item()

    await sio.emit("classified", {'label': label, 'probability': probability})

 
app.router.add_static('/static', path='./static/')
app.router.add_get('/', index)


if __name__ == '__main__':
    web.run_app(app)
