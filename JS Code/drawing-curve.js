class drawingCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(coord,event){
        this.contextReal.strokeStyle=strokecolor;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextReal.lineWidth = 10;
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    draw(x,y){
        this.contextReal.lineTo(x,y);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
}