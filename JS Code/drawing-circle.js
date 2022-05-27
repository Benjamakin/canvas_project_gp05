class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, e) {
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, e) {
      let radius = 0;
      let pointX = coord[0] - this.origX;
      let pointY = coord[1] - this.origY;
      radius = Math.sqrt(pointX * pointX + pointY * pointY);
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.clientWidth,
        canvasDraft.height
      );
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
      this.contextDraft.stroke();
    }
    onMouseUp(coord) {
      let radius = 0;
      let pointX = coord[0] - this.origX;
      let pointY = coord[1] - this.origY;
      radius = Math.sqrt(pointX * pointX + pointY * pointY);
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.clientWidth,
        canvasDraft.height
      );
      this.contextReal.beginPath();
      this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
      setColorSet ()
      this.contextReal.fill();
      this.contextReal.stroke();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }