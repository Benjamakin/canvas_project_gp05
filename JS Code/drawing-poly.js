class DrawingPoly extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.poly_counter = 0;
    }
    onMouseDown(coord, event) {
        setColorSet()
        this.contextDraft.lineWidth = 1;
        console.log(this.poly_counter);
        console.log(this.origX2 );
        console.log(this.origY2 );
        if (this.poly_counter == 0){
        this.origX = coord[0];
        this.origY = coord[1];
        }else {
            this.contextReal.moveTo(coord[0], coord[1]);
        }
       
    }
    onDragging(coord, event) {

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove(coord, event) {

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }
    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if (this.poly_counter == 0){
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.stroke();
            this.poly_counter = 1;
            }else {
                this.contextReal.lineTo(coord[0], coord[1]);
                this.contextReal.stroke();
            }
       
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;
    }
    onMouseLeave() { }
    onMouseEnter() { }
}