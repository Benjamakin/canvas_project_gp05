class PaintBucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(coord,event) {
        this.contextReal.fillArea(10, 'blue');
        
    }
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}