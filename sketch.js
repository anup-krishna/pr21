var bullet,speed,weight;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = color("80,80,80");
  bullet.velocityX = speed;
}

function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    if (damage >= 10) {
      wall.shapeColor = color(255,0,0);
    } else if (damage < 10) {
        wall.shapeColor = color(0,255,0);
      }
  }
  bullet.collide(wall);
  drawSprites();
}
