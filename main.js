import './style.css'
import Draw from 'draw-on-canvas';
import * as tf from '@tensorflow/tfjs';

const predict = async (model, tensor) => {
  const prediction = model.predict(tensor);
  const prediction_data = await prediction.data();

  const predicted_number = prediction_data.indexOf(Math.max(...prediction_data));

  return predicted_number;
}

const main = async () => {
  const root = document.querySelector('#root');
  const clearButton = document.querySelector('#clear-button');
  
  const draw = new Draw(root, 256, 256);

  clearButton.onclick = () => {
    draw.reset();
  }

  const model = await tf.loadLayersModel('/model/tfjs_model/model.json');

  const prediction = await predict(model, tf.zeros([1, 28, 28, 1]));

  console.log(prediction);
}

main();
