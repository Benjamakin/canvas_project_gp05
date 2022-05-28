class DrawingRectangle extends PaintFunction {
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
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.strokeRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );


    }
    onMouseMove() { }
    onMouseUp(coord, event) {

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
        setStyleLine ()
        setColorSet()
        this.contextReal.fill();
        this.contextReal.stroke();
        restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;

    }
    onMouseLeave() { }
    onMouseEnter() { }
}