document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const canvasCtx = canvas.getContext("2d");

  let clicking = false;

  canvas.addEventListener("mousedown", (event) => {
    const canvasX = event.pageX - canvas.offsetLeft;
    const canvasY = event.pageY - canvas.offsetTop;

    clicking = true;
    canvasCtx.beginPath();
    canvasCtx.moveTo(canvasX, canvasY);
  });
  canvas.addEventListener("mousemove", (event) => {
    const canvasX = event.pageX - canvas.offsetLeft;
    const canvasY = event.pageY - canvas.offsetTop;

    if (clicking) {
      canvasCtx.lineTo(canvasX, canvasY);
      canvasCtx.stroke();
    }
  });
  canvas.addEventListener("mouseup", (event) => {
    clicking = false;
  });
  canvas.addEventListener("mouseout", (event) => {});
});
