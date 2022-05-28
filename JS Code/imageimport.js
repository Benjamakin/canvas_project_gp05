var imageLoader = document.getElementById('addImage');
    imageLoader.addEventListener('change', handleImage, false);
var canvasR = document.getElementById('canvas-real');
var ctx = canvasR.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){

            var hRatio = canvasR.width  / img.width    ;
            var vRatio =  canvasR.height / img.height  ;
            var ratio  = Math.min ( hRatio, vRatio );
            var centerShift_x = ( canvasR.width - img.width*ratio ) / 2;
            var centerShift_y = ( canvasR.height - img.height*ratio ) / 2;  
            ctx.clearRect(0,0,canvasR.width, canvasR.height);
            ctx.drawImage(img, 0,0, img.width, img.height,centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  

        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
    restoreArray.push(contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height));
        index += 1;

}