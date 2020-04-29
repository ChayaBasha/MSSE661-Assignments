const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8000, function() {
    console.log('server started at http://localhost:%s', 8000);
});