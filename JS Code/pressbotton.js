let counter = 0;
$("#BtnPolySelection").click(function () {
  if (counter === 0) {
    currentFunction = new polySelection(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_PolySelection");
    hiddenimage_on[0].classList.remove("hidden_on_PolySelection");
    let hiddenimageBack_off = document.getElementById("styled2_PolySelection");
    hiddenimageBack_off.classList.add("hidden_off_PolySelection");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_PolySelection");
    hiddenimageBack_on.classList.add("hidden_on_PolySelection");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_PolySelection");
    hiddenimage_off[0].classList.remove("hidden_off_PolySelection");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnSqSelection").click(function () {
  if (counter === 0) {
    currentFunction = new SqSelection(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_SqSelection");
    hiddenimage_on[0].classList.remove("hidden_on_SqSelection");
    let hiddenimageBack_off = document.getElementById("styled2_SqSelection");
    hiddenimageBack_off.classList.add("hidden_off_SqSelection");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_SqSelection");
    hiddenimageBack_on.classList.add("hidden_on_SqSelection");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_SqSelection");
    hiddenimage_off[0].classList.remove("hidden_off_SqSelection");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnRubber").click(function () {
  if (counter === 0) {
    currentFunction = new Rubber(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_rubber");
    hiddenimage_on[0].classList.remove("hidden_on_rubber");
    let hiddenimageBack_off = document.getElementById("styled2_rubber");
    hiddenimageBack_off.classList.add("hidden_off_rubber");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_rubber");
    hiddenimageBack_on.classList.add("hidden_on_rubber");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_rubber");
    hiddenimage_off[0].classList.remove("hidden_off_rubber");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnPaintBucket").click(function () {
  if (counter === 0) {
    currentFunction2 = new PaintBucket(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_PaintBucket");
    hiddenimage_on[0].classList.remove("hidden_on_PaintBucket");
    let hiddenimageBack_off = document.getElementById("styled2_PaintBucket");
    hiddenimageBack_off.classList.add("hidden_off_PaintBucket");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_PaintBucket");
    hiddenimageBack_on.classList.add("hidden_on_PaintBucket");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_PaintBucket");
    hiddenimage_off[0].classList.remove("hidden_off_PaintBucket");
    counter = 0;
    return currentFunction2 = "";
  };
});
$("#BtnColorPicker").click(function () {
  if (counter === 0) {
    currentFunction = new ColorPicker(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_ColorPicker");
    hiddenimage_on[0].classList.remove("hidden_on_ColorPicker");
    let hiddenimageBack_off = document.getElementById("styled2_ColorPicker");
    hiddenimageBack_off.classList.add("hidden_off_ColorPicker");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_ColorPicker");
    hiddenimageBack_on.classList.add("hidden_on_ColorPicker");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_ColorPicker");
    hiddenimage_off[0].classList.remove("hidden_off_ColorPicker");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnZoom").click(function () {
  if (counter === 0) {
    currentFunction = new Zoom(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Zoom");
    hiddenimage_on[0].classList.remove("hidden_on_Zoom");
    let hiddenimageBack_off = document.getElementById("styled2_Zoom");
    hiddenimageBack_off.classList.add("hidden_off_Zoom");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Zoom");
    hiddenimageBack_on.classList.add("hidden_on_Zoom");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Zoom");
    hiddenimage_off[0].classList.remove("hidden_off_Zoom");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnPencil").click(function () {
  if (counter === 0) {
    currentFunction = new DrawingPencil(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Pencil");
    hiddenimage_on[0].classList.remove("hidden_on_Pencil");
    let hiddenimageBack_off = document.getElementById("styled2_Pencil");
    hiddenimageBack_off.classList.add("hidden_off_Pencil");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Pencil");
    hiddenimageBack_on.classList.add("hidden_on_Pencil");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Pencil");
    hiddenimage_off[0].classList.remove("hidden_off_Pencil");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnBrush").click(function () {
  if (counter === 0) {
    currentFunction = new drawingBrush(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Brush");
    hiddenimage_on[0].classList.remove("hidden_on_Brush");
    let hiddenimageBack_off = document.getElementById("styled2_Brush");
    hiddenimageBack_off.classList.add("hidden_off_Brush");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Brush");
    hiddenimageBack_on.classList.add("hidden_on_Brush");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Brush");
    hiddenimage_off[0].classList.remove("hidden_off_Brush");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnSpray").click(function () {
  if (counter === 0) {
    currentFunction = new drawingSpray(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Spray");
    hiddenimage_on[0].classList.remove("hidden_on_Spray");
    let hiddenimageBack_off = document.getElementById("styled2_Spray");
    hiddenimageBack_off.classList.add("hidden_off_Spray");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Spray");
    hiddenimageBack_on.classList.add("hidden_on_Spray");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Spray");
    hiddenimage_off[0].classList.remove("hidden_off_Spray");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnText").click(function () {
  if (counter === 0) {
    currentFunction = new Text(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Text");
    hiddenimage_on[0].classList.remove("hidden_on_Text");
    let hiddenimageBack_off = document.getElementById("styled2_Text");
    hiddenimageBack_off.classList.add("hidden_off_Text");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Text");
    hiddenimageBack_on.classList.add("hidden_on_Text");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Text");
    hiddenimage_off[0].classList.remove("hidden_off_Text");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnLine").click(function () {
  if (counter === 0) {
    currentFunction = new drawingLine(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Line");
    hiddenimage_on[0].classList.remove("hidden_on_Line");
    let hiddenimageBack_off = document.getElementById("styled2_Line");
    hiddenimageBack_off.classList.add("hidden_off_Line");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Line");
    hiddenimageBack_on.classList.add("hidden_on_Line");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Line");
    hiddenimage_off[0].classList.remove("hidden_off_Line");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnCurve").click(function () {
  if (counter === 0) {
    currentFunction = new drawingCurve(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Curve");
    hiddenimage_on[0].classList.remove("hidden_on_Curve");
    let hiddenimageBack_off = document.getElementById("styled2_Curve");
    hiddenimageBack_off.classList.add("hidden_off_Curve");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Curve");
    hiddenimageBack_on.classList.add("hidden_on_Curve");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Curve");
    hiddenimage_off[0].classList.remove("hidden_off_Curve");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnRect").click(function () {
  if (counter === 0) {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Rect");
    hiddenimage_on[0].classList.remove("hidden_on_Rect");
    let hiddenimageBack_off = document.getElementById("styled2_Rect");
    hiddenimageBack_off.classList.add("hidden_off_Rect");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Rect");
    hiddenimageBack_on.classList.add("hidden_on_Rect");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Rect");
    hiddenimage_off[0].classList.remove("hidden_off_Rect");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnPoly").click(function () {
  if (counter === 0) {
    currentFunction = new DrawingPoly(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Poly");
    hiddenimage_on[0].classList.remove("hidden_on_Poly");
    let hiddenimageBack_off = document.getElementById("styled2_Poly");
    hiddenimageBack_off.classList.add("hidden_off_Poly");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Poly");
    hiddenimageBack_on.classList.add("hidden_on_Poly");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Poly");
    hiddenimage_off[0].classList.remove("hidden_off_Poly");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnCircle").click(function () {
  if (counter === 0) {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_Circle");
    hiddenimage_on[0].classList.remove("hidden_on_Circle");
    let hiddenimageBack_off = document.getElementById("styled2_Circle");
    hiddenimageBack_off.classList.add("hidden_off_Circle");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_Circle");
    hiddenimageBack_on.classList.add("hidden_on_Circle");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_Circle");
    hiddenimage_off[0].classList.remove("hidden_off_Circle");
    counter = 0;
    return currentFunction = "";
  };
});
$("#BtnRoundRect").click(function () {
  if (counter === 0) {
    currentFunction = new DrawingRoundRect(contextReal, contextDraft);
    let hiddenimage_on = document.getElementsByClassName("hidden_on_RoundRect");
    hiddenimage_on[0].classList.remove("hidden_on_RoundRect");
    let hiddenimageBack_off = document.getElementById("styled2_RoundRect");
    hiddenimageBack_off.classList.add("hidden_off_RoundRect");
    counter = counter + 1;
  } else {
    let hiddenimageBack_on = document.getElementById("styled_RoundRect");
    hiddenimageBack_on.classList.add("hidden_on_RoundRect");
    let hiddenimage_off = document.getElementsByClassName("hidden_off_RoundRect");
    hiddenimage_off[0].classList.remove("hidden_off_RoundRect");
    counter = 0;
    return currentFunction = "";
  };
});

// Undo
$("#undo-btn").click(function () {
  undo();
});

// Redo
$("#redo-btn").click(function () {
  redo();
})