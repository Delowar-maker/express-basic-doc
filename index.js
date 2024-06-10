var express = require('express');
var app = express();
app.get('/', function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + ' ' + lastName);
});


app.listen(3000);
console.log('Example app listening on port 3000!');


