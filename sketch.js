var platform1;
var ob1;
var player;
var ob1Group;

function setup() {
  createCanvas(1500, 600);
  platform1=createSprite(800,275,1600,40);

  player=createSprite(65,231,30,30);
  ob1Group = new Group();
}

function draw() {
  background(61,140,255);
  fill("black");
text(mouseX+","+mouseY,mouseX,mouseY);

if(keyIsDown(38) && player.y>=200){
  player.velocityY=-12;
}
if(keyIsDown(39)){
  player.x=player.x+5;
}
if(keyIsDown(37)){
  player.x=player.x-5;
}

player.velocityY=player.velocityY+0.8;

  

  
  
  drawSprites();
  Obstacles();
  if(player.isTouching(ob1Group)){
    player.x=65;
    player.y=231;
    console.log("touching");
      }
      player.collide(platform1);
}
function Obstacles(){
  for(var i=110;i<=1400;i=i+90){
    ob1=createSprite(i,250,20,30);
    ob1Group.add(ob1);
      }
      
}