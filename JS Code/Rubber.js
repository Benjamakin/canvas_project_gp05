class Rubber extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord,event){
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.strokeRect(coord[0]-20,coord[1]-20,Styleline.lineWidth,Styleline.lineWidth);
        this.draw(coord[0],coord[1]);
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;    
    }
    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    onMouseLeave(){}
    onMouseEnter(){}
    draw(x,y){
        this.contextReal.clearRect(x-20,y-20,Styleline.lineWidth,Styleline.lineWidth);
    }
}