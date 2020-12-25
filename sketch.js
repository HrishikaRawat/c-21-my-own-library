
var fixRec,movRec;

function setup() {
  createCanvas(800,400);
  fixRec = createSprite(400, 200, 50, 80);
  fixRec.shapeColor="green";
  fixRec.debug=true;
  fixRec.velocityY=+3;
  
  movRec = createSprite(400,100,80,50);
  movRec.shapeColor="green";
  movRec.debug=true;
  movRec.velocityY=-3;

  o1 = createSprite(200,100,50,50);
  o1.shapeColor = "green";
  o1.debug= true;
}

function draw() {
  background(0);  
  movRec.x = mouseX;
  movRec.y = mouseY;

if(isTouching(movRec,o1)){
  movRec.shapeColor="red";
  o1.shapeColor="red";
}

 else{
  movRec.shapeColor="blue";
  o1.shapeColor="blue";
 }

 bounceOff(movRec,fixRec)
  drawSprites();
}

