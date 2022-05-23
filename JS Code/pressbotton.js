$("#BtnRect").click(function () {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#BtnPencil").click(function () {
    currentFunction = new DrawingLine(contextReal, contextDraft);
  });
  $("#BtnRubber").click(function () {
    currentFunction = new Rubber(contextReal, contextDraft);
  });