const container = document.querySelector(".container");
const ball = document.querySelector(".ball");

console.log(container);
console.log(ball);

container.addEventListener("click", (e) => {
  let containerWidth = container.clientWidth;
  let containerHeight = container.clientHeight;
  let halfOfBall = ball.offsetWidth / 2;

  let x = e.offsetX;
  let y = e.offsetY;

  x = Math.max(halfOfBall, Math.min(x, containerWidth - halfOfBall));
  y = Math.max(halfOfBall, Math.min(y, containerHeight - halfOfBall));

  ball.style.left = `${x - halfOfBall}px`;
  ball.style.top = `${y - halfOfBall}px`;
});
