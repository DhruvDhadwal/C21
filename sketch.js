var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(700, 100, 50, 80);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;
}

function draw() {
  background(0,255,255); 

if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}


  drawSprites();
}