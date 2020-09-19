var movingBlock, fixedBlock;


function setup() {
  createCanvas(800,400);
  fixedBlock = createSprite(400, 200, 50, 100);
  movingBlock = createSprite(400,200,50,50);
  movingBlock.shapeColor = "red";
  fixedBlock.shapeColor = "red";
  movingBlock.debug = true;
  fixedBlock.debug = true;
}

function draw() {
  background("white");
   movingBlock.x = World.mouseX;
   movingBlock.y = World.mouseY;
   if(movingBlock.x - fixedBlock.x < movingBlock.width/2 + fixedBlock.width/2 &&
    fixedBlock.x - movingBlock.x < movingBlock.width/2 + fixedBlock.width/2 && 
    movingBlock.y - fixedBlock.y < movingBlock.width/2 + fixedBlock.height/2 &&
    fixedBlock.y - movingBlock.y < movingBlock.width/2 + fixedBlock.height/2){
    movingBlock.shapeColor = "green";
    fixedBlock.shapeColor = "green";
    
    }
else{
  movingBlock.shapeColor = "red";
  fixedBlock.shapeColor = "red";
}

  drawSprites();
}