'use strict';

const router = require('../lib/router.js');

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write('Hello World');
  res.end();
});

router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};