let canvas = document.getElementById("snakeBoard");
let context = canvas.getContext("2d");
canvas.style.background = "#ff8";

let numberOfCells = 20;
let cellSize = 20;
let cellWidth = canvas.width / numberOfCells;
let cellHeight = canvas.height / numberOfCells;

let x = canvas.width / 2;
let y = canvas.height /2;

let foodX;
let foodY;

let segments = [{ x: x, y: y }];

context.fillStyle = "green";

function drawS() {
  //context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "green";
  segments.forEach(segment => {
    context.fillRect(segment.x, segment.y, cellSize, cellSize);
});


}

function randomFood(min, max) {
  let foodX;
  do {
    foodX = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (foodX % 20 !== 0);

  let foodY;
  do {
    foodY = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (foodY % 20 !== 0);
  return { foodX, foodY };
  
  

}

function newFood() {
  const food = randomFood(20, 380);

  foodX = food.foodX;
  foodY = food.foodY;
}


function updatCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
 colision();
  drawS();
  drawBoard();
  //  snakeGrow()

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, cellSize, cellSize);

}

document.addEventListener("keydown", function (event) {
  let key = event.key;


  switch (key) {
    case "ArrowUp":
      y -= numberOfCells;
      break;
    case "ArrowLeft":
      x -= numberOfCells;
      break;
    case "ArrowRight":
      x += numberOfCells;
      break;
    case "ArrowDown":
      y += numberOfCells;
      break;
  }
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x + cellSize > canvas.width) x = canvas.width - cellSize;
  if (y + cellSize > canvas.width) y = canvas.height - cellSize;
 
  segments[0] = { x: x, y: y };

  updatCanvas();
});

function colision() {
   if (foodX===x && foodY===y){

      let lastSegment = segments[segments.length - 1];
      segments.push({ x: lastSegment.x, y: lastSegment.y });


    newFood();
   }    

     
   console.log('this are snakes coardinates',x,y,'this are food coardinates',foodX,foodY)
 }


//  function snakeGrow(){

  
//   // let segments=[
//   //   {x: 180, y: 160 },
//   //   {x: 180, y: 140 },
//   //   {x: 180, y: 120 }
//   // ]
//   context.fillStyle = "green";

//   segments.push({x: tailX, y: tailY });

//   segments.forEach(segment => {
//     context.fillRect(segment.x, segment.y, cellSize, cellSize);
// });


// }


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

newFood();
updatCanvas();
