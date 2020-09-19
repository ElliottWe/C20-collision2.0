var movingBlock, fixedBlock;


function setup() {
  createCanvas(800,400);
  fixedBlock = createSprite(600, 200, 50, 100);
  movingBlock = createSprite(200,200,50,50);
  //movingBlock.shapeColor = "red";
  //fixedBlock.shapeColor = "red";
  movingBlock.debug = true;
  fixedBlock.debug = true;
  movingBlock.velocityX = 2
  fixedBlock.velocityX = -2
}

function draw() {
  background("white");
  movingBlock.shapeColor = "red";
  fixedBlock.shapeColor = "red";
   if(movingBlock.x - fixedBlock.x < movingBlock.width/2 + fixedBlock.width/2 &&
    fixedBlock.x - movingBlock.x < movingBlock.width/2 + fixedBlock.width/2)
    {
    movingBlock.velocityX = movingBlock.velocityX * (-1);
    fixedBlock.velocityX = fixedBlock.velocityX * (-1);
        movingBlock.shapeColor = "green";
    fixedBlock.shapeColor = "green";
    
    }


if( movingBlock.y - fixedBlock.y < movingBlock.width/2 + fixedBlock.height/2 &&
    fixedBlock.y - movingBlock.y < movingBlock.width/2 + fixedBlock.height/2){
        movingBlock.velocityY = movingBlock.velocityY * (-1);
        fixedBlock.velocityY = fixedBlock.velocityY * (-1);
        movingBlock.shapeColor = "green";
    fixedBlock.shapeColor = "green";
    
    }

  drawSprites();
}