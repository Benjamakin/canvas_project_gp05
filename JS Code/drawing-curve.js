class drawingCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextDraft.strokeStyle = strokecolor;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = 1;
        let CurveCounter = 0;
        if (CurveCounter === 0){
        this.origX = coord[0];
        this.origY = coord[1];
        CurveCounter = CurveCounter+1;
        }else if (CurveCounter === 1){
        this.origX2 = coord[0];
        this.origY2 = coord[1];
        CurveCounter = CurveCounter+1;
        }else{
        this.origX3 = coord[0];
        this.origY3 = coord[1];
        CurveCounter = 0 ;
        }
        console.log(this.origX);
        console.log(this.origX2);
        console.log(this.origX3);
        console.log(CurveCounter);
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
    }
    onMouseMove() { }
    onMouseUp(coord,event) { 
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
    onMouseLeave() {}
    onMouseEnter() { }
    draw(x, y) {
        this.contextReal.lineTo(x, y);
        this.contextReal.moveTo(x, y);
        this.contextReal.stroke();
    }
}