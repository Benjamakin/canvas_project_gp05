class drawingBrush extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
        let img = new Image();
        img.src='./link/brush2.png';
    }

// distanceBetween(point1, point2) {
//     return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
// }
// angleBetween(point1, point2) {
//     return Math.atan2(point2.x - point1.x, point2.y - point1.y);
// }
onMouseDown(coord, event){ 
    this.origX = coord[0];
    this.origY = coord[1];
    let img = new Image();
    img.src='./link/brush2.png';
    this.contextReal.drawImage(img, coord[0], coord[1]);
    // let img = new Image();
    // img.src='./link/brush2.png';
    // this.contextReal.drawImage(img, coord[0],coord[1]);
}

onDragging(coord, event){ 
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = 10;
    let img = new Image();
    img.src='./link/brush2.png';
    var dist = Math.sqrt(Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2));
    var angle = Math.atan2(this.origX-coord[0], this.origY-coord[1]);
    this.contextReal.drawImage(img, coord[0], coord[1],coord[1]/10, coord[0]/10);
    console.log(x);
}
onMouseMove(){ 
 }
onMouseUp(coord, event){
    let img = new Image();
    img.src='./link/brush2.png';
    this.contextReal.drawImage(img, coord[0], coord[1]);
    restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;
 }
onMouseLeave(){ }
onMouseEnter(){ }
}



// var el = document.getElementById('c');
// var ctx = el.getContext('2d');
// this.contextReal.lineJoin = this.contextReal.lineCap = 'round';

// var isDrawing, lastPoint;

// el.onmousedown = function (e) {
//     isDrawing = true;
//     lastPoint = { x: e.clientX, y: e.clientY };
// };

// el.onmousemove = function (e) {
//     if (!isDrawing) return;

//     var currentPoint = { x: e.clientX, y: e.clientY };
//     var dist = distanceBetween(lastPoint, currentPoint);
//     var angle = angleBetween(lastPoint, currentPoint);

//     for (var i = 0; i < dist; i++) {
//         x = lastPoint.x + (Math.sin(angle) * i) - 25;
//         y = lastPoint.y + (Math.cos(angle) * i) - 25;
//         ctx.drawImage(img, x, y);
//     }

//     lastPoint = currentPoint;
// };

// el.onmouseup = function () {
//     isDrawing = false;
// };