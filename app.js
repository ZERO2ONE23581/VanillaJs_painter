const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
  //offset show coordinate of X-axis, Y-axis
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function onMouseDown(event) {
  painting = true;
}
function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); //캔버스에 마우스 움직일때
  canvas.addEventListener("mousedown", startPainting); // 마우스 잡고있을때
  canvas.addEventListener("mouseup", stopPainting); // 마우스 놓았을때
  canvas.addEventListener("mouseleave", stopPainting); //마우스 나갔을때
}
