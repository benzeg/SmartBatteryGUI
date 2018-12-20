const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});
 
const server = app.listen(port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
  server.close( ()=> console.log('Server shut down complete'));
}