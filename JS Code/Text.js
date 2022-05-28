class Text extends PaintFunction {
    constructor(contextReal, canvasDraft) {
        super();
        this.contextReal = contextReal;
        this.canvasDraft = canvasDraft;
        this.tool = {};
        this.tool.lineWidth = 10;
        this.tool.color = "#000000";
        this.tool.startx = 0;
        this.tool.starty = 0;
  
    }

    onMouseDown(coord) {  
        var input = $("#canvasInput");

        this.tool.startx = coord[0] + $("#canvas-draft").offset().left;
        this.tool.starty = coord[1]+ $("#canvas-draft").offset().top;

        input.css({
            display:"block",
            position:"absolute",
            left: this.tool.startx,
            top: this.tool.starty

        })
        input.focus();
      };

      onKeyUp(e) {
        var input = $("#canvasInput");
        var canvasR = $("#canvas-real");
        var context = canvasR[0].getContext('2d')
        if(e.which === 13){
            let font = Font.fontStyle+" "+Styleline.lineWidth+"pt "+Font.fontFamily;
            console.log(font);
            context.font = font;
            context.fillStyle = Stylecolor.fillColor;
            context.strokeStyle = Stylecolor.strokeColor;
            context.fillText(input.val(),  this.tool.startx - $("#canvas-real").offset().left, this.tool.starty - $("#canvas-real").offset().top)
            context.save();
            input.css("display" , "none").val("");
            e.preventDefault();
            restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
            index += 1;
        }
        if(e.which === 27){
            input.css("display" , "none").val("");
            e.preventDefault();
            restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
            index += 1;
        }
       
    };

    
}

