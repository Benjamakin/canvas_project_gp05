let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
// undo && redo
let isDrawing = false;
let resetDrawing = false;
let fillStyle = false;
let regularFix = false;
let centerFix = false;

let restoreArray = [];
let reIndex = -1;
let redoArray = [];
let index = -1;


function resizeCanvas() {
  canvasReal.width = $("#canvas-real").width();
  canvasReal.height = $("#canvas-real").height();
}
function resizeCanvasDraft() {
  canvasDraft.width = $("#canvas-draft").width();
  canvasDraft.height = $("#canvas-draft").height();
}
resizeCanvas();
resizeCanvasDraft();

window.addEventListener("resize", function () {
  restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
  index += 1; 
  // function resizeCanvas() {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // }
  // function resizeCanvasDraft() {
  //   canvasDraft.width = window.innerWidth;
  //   canvasDraft.height = window.innerHeight;
  // }
  resizeCanvas();
  resizeCanvasDraft();
  undo()
});
// undo && redo

let Stylecolor = {
  fillColor : 'rgba(255,255,255,1)',
  strokeColor : 'rgba(0,0,0,1)'
}
console.log(typeof Stylecolor);
$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  
  currentFunction.onMouseDown([mouseX, mouseY], e);
  
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

$("#canvasInput").keyup(function (e) {
  currentFunction.onKeyUp(e);
});


class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  onKeyUp() {}

}
}

function setColorSet () {
  console.log(Stylecolor.fillColor);
   contextReal.fillStyle = contextDraft.fillStyle = Stylecolor.fillColor;
   contextReal.strokeStyle = contextDraft.strokeStyle = Stylecolor.strokeColor;
   console.log(Stylecolor.strokeColor);
};
