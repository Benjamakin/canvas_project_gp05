class DrawingPoly extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.start = false;
        this.startx = 0;
        this.starty = 0;
    }
    onMouseDown(coord){
        if (this.start ==false){
            this.contextDraft.strokeStyle = strokecolor;
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.lineWidth = 1;
            this.origX = coord[0];
            this.origY = coord[1];
            this.startx = coord[0];
            this.starty = coord[1];
            this.start =true;
        }else{
            this.contextDraft.strokeStyle = strokecolor;
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.lineWidth = 1;
        }
    }
    onDragging(coord) {
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    onMouseUp(coord) {
        if (Math.abs(this.startx - coord[0] <= 2) && Math.abs(this.starty - coord[1])<= 2){
            this.start = false;
        }
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
        this.origX = coord[0];
        this.origY = coord[1];
    }
}
