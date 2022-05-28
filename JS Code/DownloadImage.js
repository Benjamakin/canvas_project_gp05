// function download_image(){
//     var canvas = document.getElementById("canvas-real");
//     image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//     var link = document.createElement('a');
//     link.download = "my-image.png";
//     link.href = image;
//     link.click();
//   }
//   function download_image_jpg(){
//     var canvas = document.getElementById("canvas-real");
//     image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
//     var link = document.createElement('a');
//     link.download = "my-image.jpg";
//     link.href = image;
//     link.click();
//   }

function download_image(){
  var canvas = document.getElementById("canvas-real");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}
function download_image_jpg(){
  contextReal.globalCompositeOperation = 'destination-over';
  contextReal.fillStyle = 'white';
  contextReal.fillRect(0, 0,canvasReal.width, canvasReal.height);
  var canvas = document.getElementById("canvas-real");
  image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.jpg";
  link.href = image;
  link.click();
}