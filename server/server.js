var http = require('http');


var hostname  = '127.0.0.1';

var port      = 3000;


var app = http.createServer(function(req, res) {

            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                firstName: "John",
                lastName: "Doe"
              })
            );
          });


app.listen(port, hostname);