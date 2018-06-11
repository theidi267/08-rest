'use strict';

const parser = require('./parser.js');
const router = module.exports = {};

router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach( (method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (req, res) => {
  
  return parser(req)
    .then( req => {
      console.log(req.url.pathname);
      let handler = router.routes[req.method][req.url.pathname];
      console.log(handler);
      if (handler) {
        return handler(req, res);
      }
    })
    .catch(err => { //eslint-disable-line
      console.error('NOT_FOUND', req.url.pathname, 'and method: ' + req.method);
      res.writeHead(404);
      res.end();
    });
};