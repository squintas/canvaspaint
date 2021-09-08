document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const canvasCtx = canvas.getContext("2d");

  canvas.addEventListener("mousedown", (event) => {
    const canvasX = event.pageX - canvas.offsetLeft;
    const canvasY = event.pageY - canvas.offsetTop;

    canvasCtx.beginPath();
    canvasCtx.moveTo(canvasX, canvasY);
  });
  canvas.addEventListener("mousemove", (event) => {
    const canvasX = event.pageX - canvas.offsetLeft;
    const canvasY = event.pageY - canvas.offsetTop;

    canvasCtx.lineTo(canvasX, canvasY);
    canvasCtx.stroke();
  });
  canvas.addEventListener("mouseup", (event) => {});
  canvas.addEventListener("mouseout", (event) => {});
});
