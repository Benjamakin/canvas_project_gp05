class DrawingPoly extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextDraft.strokeStyle = fillcolor;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = 1;
        this.formFinish=false;
        this.formcounter=0;

    }
    onMouseDown(coord, event) {
        
        if(formFinish==false && formcounter==0){
        this.origX = coord[0];
        this.origY = coord[1];
        
    }


    }
    onDragging(coord, event) {
        
            if(formFinish==false && formcounter==0){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        
    };}
    onMouseMove() { }
    onMouseUp(coord,event) { 
        
            if(formFinish==false && formcounter==0){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
    };}
    onMouseLeave() {}
    onMouseEnter() {}
}