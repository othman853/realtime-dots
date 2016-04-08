window.addEventListener('load', function (){
  server.emit('chaos');

  var handler = new CanvasHandler(document, 'canvas');
  var stopButton = document.getElementById('stop');
  var continueButton = document.getElementById('continue');

  server.on('draw', handler.circle);

  stopButton.addEventListener('click', function() {
    server.emit('stop chaos');
  });

  continueButton.addEventListener('click', function() {
    server.emit('chaos');
  });

});
