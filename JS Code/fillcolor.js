let color_counter=0;
$(".nav-fillcolor").click(function () {
    let current_color_fill = document.getElementById("current-color_fill");
    current_color_fill.classList.add("current-color_fill_z");
    color_counter = color_counter + 1;
});
$(".nav-strokecolor").click(function () {
    let current_color_fill = document.getElementById("current-color_fill");
    current_color_fill.classList.remove("current-color_fill_z");
    color_counter = 0;
});
$(".color-main-box").click(function () {
  if (color_counter === 0) {
    let current_color_fill = document.getElementById("current-color_fill");
    current_color_fill.classList.add("current-color_fill_z");
    color_counter = color_counter + 1;
  } else {
    let current_color_fill = document.getElementById("current-color_fill");
    current_color_fill.classList.remove("current-color_fill_z");
    color_counter = 0;
  };
});
$("#color-panel-black").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-black").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-black").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-white").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-white").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-white").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Maroon").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Maroon").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Maroon").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Brown").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Brown").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Brown").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Pine").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Pine").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Pine").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Ocean").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Ocean").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Ocean").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Azure").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Azure").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Azure").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Violet").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Violet").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Violet").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Wine").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Wine").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Wine").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-IndianRed").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-IndianRed").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-IndianRed").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Orange").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Orange").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Orange").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Coral").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Coral").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Coral").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Khaki").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Khaki").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Khaki").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Indigo").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Indigo").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Indigo").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Navy").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Navy").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Navy").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-RosyBrown").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-RosyBrown").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-RosyBrown").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-Chocolate").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-Chocolate").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("color-panel-Chocolate").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
$("#color-panel-noColor").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("color-panel-noColor").attributes.value.value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color","rgba(255,255,255,1)")
}else{
  let select_color = document.getElementById("color-panel-noColor").attributes.value.value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color","rgba(255,255,255,1)")
}
});
$("#all-color-select").click(function () {
  if (color_counter === 0) {
  let select_color = document.getElementById("all-color-select").value;
  Stylecolor.strokeColor = select_color;
  $(".mainColor_fill").css("background-color",select_color)
}else{
  let select_color = document.getElementById("all-color-select").value;
  Stylecolor.fillColor = select_color;
  $(".mainColor_stroke").css("background-color",select_color)
}
});
