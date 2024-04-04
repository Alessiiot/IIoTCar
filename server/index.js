var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/cars', function(req, res, next) {
    res.send('List of cars: [TODO]');
    return next();
});

server.get('/cars/:id', function(req, res, next) {
    res.send('Current values for car ' + req.params['id'] + ': [TODO]');
    return next();
});

server.post('/cars/:id', function(req, res, next) {
    res.send('Data received from car [TODO]');

    console.log(req.body);

    return next();
});

server.listen(8050, function() {
    console.log('%s listening at %s', server.name, server.url);
});
