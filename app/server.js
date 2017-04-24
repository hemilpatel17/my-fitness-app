var express = require('express')
var app = express()
var path = require('path')

//lets your use / as static dir
app.use('/', express.static(path.join(__dirname, '..', 'public')))

app.get('/', function(req, res) {
  res.sendFile('index.css');
    res.sendFile('index.html');

})

app.listen(3000)
