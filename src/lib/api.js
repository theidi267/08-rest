'use strict';

const router = require('./router.js');

router.get('/', (req, res) => { //eslint-disable-line
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write('Hello World');
  res.end();
});

router.post('/data', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.put('/data', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

module.exports = {};