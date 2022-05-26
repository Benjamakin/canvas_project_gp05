class drawingSpray extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
        }
onMouseDown(coord, event){ 
    this.origX = coord[0];
    this.origY = coord[1];
    let img = new Image();
    img.src='./link/Spray2.png';
    this.contextReal.drawImage(img, coord[0], coord[1],20,20);
}

onDragging(coord, event){
    this.origX = coord[0];
    this.origY = coord[1];
    let img = new Image();
    img.src='./link/Spray2.png';
    this.contextReal.drawImage(img, coord[0], coord[1],20,20);

}
onMouseMove(){ 
 }
onMouseUp(coord, event){
 }
onMouseLeave(){ }
onMouseEnter(){ }
}