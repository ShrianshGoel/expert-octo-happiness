var input, i2;
var g1,g2
var gameState = 0;
var back, b1;
var p1, p2, p3, p4, p25;
var sound;
var h2
var birdw;
var player;
function preload() {
  b1 = loadImage("Forest-31.jpg");
  sound = loadSound("ok.mp3");
  p1 = loadAnimation("Screenshot 2021-11-04 7.58.56 PM.png");
  p2 = loadAnimation("p.gif");
  p3 = loadAnimation("p2.gif");
  g1=loadImage("grass.png")
  p4 = loadAnimation("p1.gif");
  birdw = loadImage("bird.gif");
  p25 = loadAnimation("p21.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput("").attribute("placeholder", "Name");
  input.position(width / 2.7, height / 2);
  input.class("o");

  back = createSprite(width / 2.5, height / 2.5);
  back.addImage(b1);
  back.scale = width / 899;

  i2 = createButton("Enter");
  i2.position(width / 2.6, height / 1.65);
  i2.class("o2");
  i2.size(width / 6, height / 9);
  frameCount = 0;

  player = createSprite(width / 2, height / 2);
    player.addAnimation("p1", p1);
 player.addAnimation("p3", p3);
   player.addAnimation("p4", p4);
  player.addAnimation("p2", p2);
  player.addAnimation("p25", p25);
  player.depth = 0;
  
  g2=createSprite(width/92,height/1.50)
  g2.addImage(g1)
  g2.scale=width/250
  sound.play();
}
function key2(){
if(player.velocity.x>0){
  player.velocity.x=  player.velocity.x-0.5
}
  if(player.velocity.x<-1){
  player.velocity.x=  player.velocity.x+0.5
}

}
function draw() {
  background(220);
  drawSprites();
  if (gameState === 0) {
    birds();
     
  }

  i2.mousePressed(() => {
    gameState = 1;
    i2.hide();
    frameCount=0
      h2 = createElement(
      "h2",
      "Hello " + input.value() + " Starting the game Soon "
    );
    
    h2.position(width / 2.5, height / 2.5);
    input.hide();
  });
  if (keyIsDown(ENTER) && gameState === 0) {
    gameState = 1;
    i2.hide();
    input.hide();
    frameCount=0
    h2 = createElement(
      "h2",
      "Hello " + input.value() + " Starting the game Soon "
    );
    h2.position(width / 2.5, height / 2.5);
  }
  if(gameState===1){
    if(frameCount>140){
      h2.hide()
      player.changeAnimation("p1",p1)
      player.depth=3
      player.scale =width/2099
      key2()
      if(keyIsDown(RIGHT_ARROW)){
    player.velocity.x=2
    player.changeAnimation("p2",p2)
  }
if(player.velocity.y===-2){
  player.velocity.y=player.velocity.y+2;
}

          if(keyIsDown(UP_ARROW)){
      player.velocity.y=-2
    player.changeAnimation("p3",p3)
  }
    }
  }
}
function birds() {
  if (frameCount % 100 === 0) {
    var birds = createSprite(width / 1, random(height / 1.2, height / 9));
    birds.addImage(birdw);
    birds.lifetime = 190;
    birds.velocity.x = -2;
    birds.scale = width / 1899;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  i2.size(width / 6, height / 9);
  i2.position(width / 2.6, height / 1.65);
  back.scale = width / 899;
  input.position(width / 2.7, height / 2);
}

