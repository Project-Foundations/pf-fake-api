const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

router.render = function (req, res) {
  res.jsonp({
    statusCode: res.statusCode,
    data: res.locals.data
  });
};

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use('/msBase/api/v1', router);

server.listen(3005);
