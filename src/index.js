import Worker from 'worker-loader!./Worker.js';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {
  console.log(event)
};
