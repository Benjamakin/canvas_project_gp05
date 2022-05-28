function undo() {
    if (index >= 0) {
        redoArray.push(restoreArray.pop());
        reIndex += 1;
        index -= 1;
        if (index < 0) {
            contextReal.clearRect(0, 0,canvasReal.width, canvasReal.height);
        } else {
            contextReal.putImageData(restoreArray[index], 0, 0);
        }
    } else {
        index = -1;
    }
}

function redo() {
    if (reIndex > -1) {
        contextReal.putImageData(redoArray[reIndex], 0, 0);
        restoreArray.push(redoArray.pop());
        reIndex -= 1;
        index += 1;
    } else {
        reIndex = -1;
    }
}

function addImage(){
    if (imageBox == false || imageChange == true){
        var imageObj = new Image();
        let theImage = document.getElementById("addImage").value;
        imageObj.scr = theImage;
    }console.log(theImage.value);
}


