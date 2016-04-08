
var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var routes = require('./routes');
var random = require('./util/random');

app = express();

var server = http.createServer(app);
var socketHandler = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.use(express.static(__dirname + '/public'));

app.get('/stage', routes.stage);


socketHandler.on('connection', (client) => {

  var chaosInterval;

  client.on('join', () => client.emit('join response', random.int(1, 700), random.int(1, 700), 'black'));

  client.on('chaos', () => {
    var colors = ['green', 'blue', 'red', 'yellow', 'white', 'grey', 'orange', 'pink'];

    chaosInterval = setInterval( () => {

      var x = random.int(1,2000);
      var y = random.int(1,2000);
      var color = colors[random.int(0, colors.length - 1)];

      client.emit('draw', x, y , color );
    }, 1);
  });

  client.on('stop chaos', () => {
    clearInterval(chaosInterval);
  });

});

server.listen(3000, () => console.log('Server is up on port 3000'));
