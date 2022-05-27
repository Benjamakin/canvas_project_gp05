class DrawingPoly extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        setColorSet ()
        this.contextDraft.lineWidth = 1;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
    }
    onDragging() {  
    }
    onMouseMove(coord, event) {
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
     }
    onMouseUp(coord,event) { 
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;
    }
    onMouseLeave() {}
    onMouseEnter() {}
}