
var thickness, wall1, bullet1;
var speed, weight;
var damage;
damage = 0;

function setup() {
  createCanvas(1600,725);

  thickness = random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet1 = createSprite(50,200,90,15);
  wall1 = createSprite(1200,200,thickness,height/2);

  bullet1.velocityX = speed;
  bullet1.weight = weight;
}

function draw() {
  background("violet");  
  wall1.shapeColor = color(80,80,80);
  bullet1.shapeColor = ("white");

if(hasCollided(bullet1,wall1)){
    bullet1.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness * thickness * thickness);
  
if(damage>10){
wall1.shapeColor = color(250,0,0);
}
if(damage<10){
wall1.shapeColor = color(0,255,0);
}
}
drawSprites();
fill("black");
textSize(30);
text("Damage: " + Math.floor(damage),50,500);
 }
 function hasCollided(bullet1,wall1){
   bulletRightEdge = bullet1.x + bullet1.width;
   wallLeftEdge = wall1.x;
   if(bulletRightEdge >= wallLeftEdge){
    return true;
   }
  return false;
 }