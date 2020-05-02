const express = require('express');
const app = express();
var fs = require('fs');
var https = require('https');

const httpPort = process.env.PORT || 8000;
const httpsPort = process.env.HTTPS_PORT || 8443;

app.use(express.static('public'));

app.listen(httpPort, function() {
    console.log('server started at http://localhost:%s', httpPort);
});

https
.createServer(
    {
        key: fs.readFileSync(__dirname + '/server.key'),
        cert: fs.readFileSync(__dirname + '/server.cert'),
    },
    app
)
.listen(httpsPort, function() {
    console.log('server started at https://localhost:%s', httpsPort);
});