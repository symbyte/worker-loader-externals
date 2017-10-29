// just making sure sqlite3 is properly ignored in main bundle
// should see 'ignoring sqlite3' in webpack output
import { Database } from 'sqlite3';

import Worker from 'worker-loader!./Worker.js';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {
  console.log(event)
};

new Database();
