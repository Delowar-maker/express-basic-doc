var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/about', function (req, res) {
    res.send('about');
});
app.put('/contact', function (req, res) {
    res.send('contact');
});
app.delete('/terms', function (req, res) {
    res.send('terms');
});
app.listen(3000);
console.log('Example app listening on port 3000!');
