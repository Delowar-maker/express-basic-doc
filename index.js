var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/bd', function (req, res) {
    res.redirect('http://localhost:3000/ind');
});
app.get('/ind', function (req, res) {
    res.send('Hello India!');
});


app.listen(3000);
console.log('Example app listening on port 3000!');


