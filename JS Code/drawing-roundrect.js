class DrawingRoundRect extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "cornflowerblue";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "cornflowerblue";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
            this.origX,
            this.origY, 
            coord[0] - this.origX, 
            coord[1] - this.origY
            );
    }
    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        this.contextReal.strokeStyle=strokecolor;
        this.contextReal.lineWidth = 1;
        this.contextReal.beginPath();
        this.contextReal.quadraticCurveTo(this.origX,coord[1], coord[0]-10, coord[1]-10);
        // this.contextReal.moveTo(coord[0],coord[1]-10);
        // this.contextReal.quadraticCurveTo(coord[0],coord[1], coord[0]-10, coord[1]-10);
        // this.contextReal.lineTo(this.origX-10,coord[1]);
        // this.contextReal.quadraticCurveTo(this.origX,coord[1],this.origX-10,coord[1]+10);
        // this.contextReal.lineTo(this.origX,this.origY-10);
        // this.contextReal.quadraticCurveTo(this.origX,this.origY,this.origX-10,this.origY-10);
        // this.contextReal.lineTo(coord[0]+10,this.origY);
        // this.contextReal.quadraticCurveTo(coord[0],this.origY,coord[0]+10,this.origY-10);
        // this.contextReal.lineTo(coord[0],coord[1]+10);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
console.log(contexReal);

// coord[0] - this.origX, 
//             coord[1] - this.origY