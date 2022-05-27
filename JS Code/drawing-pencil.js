class DrawingPencil extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(coord,event){
        setColorSet ()
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextReal.lineWidth = 1;
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
        
    }
    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextReal.closePath();
        this.contextReal.stroke();
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;
    }
    onMouseLeave(){}
    onMouseEnter(){}
    draw(x,y){
        this.contextReal.lineTo(x,y);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
}