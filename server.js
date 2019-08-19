var express = require('express'),

app = express();

port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function(req, res) { res.json({ helo: 'word'}); })

console.log('Message RESTful API server started on: ' + port);