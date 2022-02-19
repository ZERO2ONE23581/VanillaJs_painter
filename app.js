const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
  //offset show coordinate of X-axis, Y-axis
  const x = event.offsetX;
  const y = event.offsetY;
}
function onMouseDown(event) {
  painting = true;
}
function stopPainting() {
  painting = false;
}
function onMouseUp(event) {
  stopPainting();
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); //캔버스에 마우스 움직일때
  canvas.addEventListener("mousedown", onMouseDown); // 마우스 잡고있을때
  canvas.addEventListener("mouseup", onMouseUp); // 마우스 놓았을때
  canvas.addEventListener("mouseleave", onMouseUp); //마우스 나갔을때
}
