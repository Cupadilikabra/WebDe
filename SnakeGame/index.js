let canvas = document.getElementById("snakeBoard");
let context = canvas.getContext("2d");
canvas.style.background = "#ff8";



let numberOfCells = 20;
let cellSize = 20;
let cellWidth = canvas.width / numberOfCells;
let cellHeight = canvas.height / numberOfCells;

let x = 180;
let y = 180;

function drawS() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'green';
  context.fillRect(x, y, cellSize, cellSize);

}

function randomFood(){

  food = Math.floor(Math.random(cellSize)*canvas.height)

  newFood = context.fillRect(food, food, cellSize, cellSize) 
  context.fillStyle='red'

  console.log(newFood)
}







document.addEventListener("keydown", function (event) {

  let key = event.key

  // let up ='ArrowUp';
  // let left = 'ArrowLeft';
  // let right = 'ArrowRight';
  // let down = 'ArrowDown';



  switch (key) {
    case 'ArrowUp':
      y -= numberOfCells;
      break;
    case 'ArrowLeft':
      x -= numberOfCells;
      break;
    case 'ArrowRight':
      x += numberOfCells;
      break;
    case 'ArrowDown':
      y += numberOfCells;
      break;
  }
  console.log('switch')

  if (x < 0) x = 0;
  if (y < 0) y = 0
  if (x + cellSize > canvas.width) x = canvas.width - cellSize;
  if (y + cellSize > canvas.width) y = canvas.height - cellSize;

  drawS()
  drawBoard()

})






function drawBoard() {

  for (let i = 0; i <= canvas.width; i += cellWidth) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, canvas.height);
    context.stroke();
  }

  for (let i = 0; i <= canvas.height; i += cellHeight) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
    context.stroke();
  }

}
drawS();
drawBoard();