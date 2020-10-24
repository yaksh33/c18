var monkey = createSprite(380,380,20,20);
//var monkey_1,monkey_2,monkey_3,monkey_4,monkey_5,monkey_6,monkey_7,,monkey_8,monkey_9,monkey_10;

var stone = createSprite(360,380,20,20);
stone.addImage(stone);

var banana = createSprite(360,360,10,10);
banana.addImage(banana);
banana.velocityY = 4;

monkey.addImage(monkey_1,monkey_2,monkey_3,monkey_4,monkey_5,monkey_6,monkey_7,monkey_8,monkey_9,monkey_10);
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var jungle = creatSprite(400,400,20,20);
  jungle.addImage = ("jungle.png");
}