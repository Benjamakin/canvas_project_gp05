class DrawingRoundRect extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        setColorSet ()
        setStyleLine ()
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(coord[0],coord[1]-((coord[1] - this.origY)/5))
        this.contextDraft.quadraticCurveTo(coord[0],coord[1], coord[0]-((coord[0] - this.origX)/5), coord[1]);
        this.contextDraft.lineTo(this.origX+((coord[0] - this.origX)/5),coord[1]);
        this.contextDraft.quadraticCurveTo(this.origX,coord[1],this.origX, coord[1]-((coord[1] - this.origY)/5));
        this.contextDraft.lineTo(this.origX,this.origY+((coord[1] - this.origY)/5));
        this.contextDraft.quadraticCurveTo(this.origX,this.origY,this.origX+((coord[0] - this.origX)/5), this.origY);
        this.contextDraft.lineTo(coord[0]-((coord[0] - this.origX)/5),this.origY);
        this.contextDraft.quadraticCurveTo(coord[0],this.origY,coord[0], this.origY+((coord[1] - this.origY)/5));
        this.contextDraft.lineTo(coord[0],coord[1]-((coord[1] - this.origY)/5));
        this.contextDraft.closePath();
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord,event){
        setColorSet ()
        setStyleLine ()
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]-((coord[1] - this.origY)/5))
        this.contextReal.quadraticCurveTo(coord[0],coord[1], coord[0]-((coord[0] - this.origX)/5), coord[1]);
        this.contextReal.lineTo(this.origX+((coord[0] - this.origX)/5),coord[1]);
        this.contextReal.quadraticCurveTo(this.origX,coord[1],this.origX, coord[1]-((coord[1] - this.origY)/5));
        this.contextReal.lineTo(this.origX,this.origY+((coord[1] - this.origY)/5));
        this.contextReal.quadraticCurveTo(this.origX,this.origY,this.origX+((coord[0] - this.origX)/5), this.origY);
        this.contextReal.lineTo(coord[0]-((coord[0] - this.origX)/5),this.origY);
        this.contextReal.quadraticCurveTo(coord[0],this.origY,coord[0], this.origY+((coord[1] - this.origY)/5));
        this.contextReal.lineTo(coord[0],coord[1]-((coord[1] - this.origY)/5));
        this.contextReal.closePath();
        this.contextReal.fill();
        this.contextReal.stroke();
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

