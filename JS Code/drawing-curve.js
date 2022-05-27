class drawingCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.curveCounter = 0;
        this.curvefinish = 0;
    }
    onMouseDown(coord, event) {
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = 1;
        if (this.curvefinish==0){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    }
    onDragging(coord, event) {
        if (this.curvefinish==0){
            this.origX2 = coord[0];
            this.origY2 = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }else if(this.curvefinish==1){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.origX2,this.origY2);
        this.contextDraft.stroke();
        
    };
    }
    onMouseMove() { }
    onMouseUp(coord,event) { if(this.curvefinish==0){
        this.curvefinish= 1;
    }else if(this.curvefinish==1){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        setColorSet ()
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.quadraticCurveTo(coord[0],coord[1],this.origX2,this.origY2);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.curvefinish=0;
    }
    }
    onMouseLeave() {}
    onMouseEnter() { }
}