function CanvasHandler(dom, canvasId) {
  this.canvas = dom.getElementById(canvasId);
}

Object.defineProperty(CanvasHandler, 'DEFAULT_CIRCLE_SIZE', {value: 1});
Object.defineProperty(CanvasHandler, 'CIRCLE_RADIUS', {value: 2 * Math.PI});

CanvasHandler.prototype.circle = function (x, y, color) {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(x, y, CanvasHandler.DEFAULT_CIRCLE_SIZE, 0, CanvasHandler.CIRCLE_RADIUS);
  context.fillStyle = color || 'red';
  context.fill();
};
