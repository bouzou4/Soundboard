var express = require('express'),
  path = require('path'),
  app = express();

//set the port
app.set('port', 8050);

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/sounds', (req, res) => {
  res.send("these are your sounds");
})

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});