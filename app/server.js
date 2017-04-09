var express = require('express')
var app = express()
var path = require('path')

// viewed at http://localhost:8080
//app.use('./public', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, '..', 'public')))

app.get('/', function(req, res) {
    res.sendFile('index.html');
})

app.listen(3000)
