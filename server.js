var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// profile page created
app.get('/profile', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

/* for cforum site access provided to folder all files if name is correctly provided */
app.get('/cforum', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'cforum.html'));
});
app.get('/assets1/:filename1', function (req, res) {
    var filename2 = req.params.filename1
  res.sendFile(path.join(__dirname, 'ui/assets1', filename2));
});
app.get('/animate1/:filename1', function (req, res) {
    var filename2 = req.params.filename1
  res.sendFile(path.join(__dirname, 'ui/animate1', filename2));
});
app.get('/animate1/Images1/:filename1', function (req, res) {
    var filename2 = req.params.filename1
  res.sendFile(path.join(__dirname, 'ui/animate1/Images1', filename2));
});
/* cforum related ends here */



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
