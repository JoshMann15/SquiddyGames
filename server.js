var express = require('express');
const app = express()

var fs = require("fs");

app.use(express.static("public"));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html'); 
});


app.listen(8080);

/*
app.use(express.static('public'));

app.listen(8080);
*/
