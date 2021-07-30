var spaceImg, issImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var iss, spacecraft;
var  hasDocked = false;


function preload(){
spaceImg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spacecraft1Img = loadImage("spacecraft1.png");
spacecraft2Img = loadImage("spacecraft2.png");
spacecraft3Img = loadImage("spacecraft3.png");
spacecraft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 100);
  iss.addImage(issImg);
  iss.scale = 0.2;

  spacecraft = createSprite(50,300);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.10;
}

function draw() {
  background(spaceImg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(1,-1);
    if(keyDown("DOWN_ARROW")){
      spacecraft.y=spacecraft.y+10;
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.y=spacecraft.y-10;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x=spacecraft.x-10;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x=spacecraft.x+10;
    }
  }

  if(spacecraft.isTouching(iss)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!",400,300);
  }

  drawSprites();
}