const sqlite = require('sqlite3');

self.onmessage = (event) => {
  console.log('got the message', event.data)
  const db = new sqlite.Database();
  console.log('doing a thing with the sqlite database');
  postMessage('k, its done');
}
