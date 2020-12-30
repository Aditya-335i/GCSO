var car, wall;
var weight, speed;
var deformation;
function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(700,200,60, 200)

  car = createSprite(50,200,50,50);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  console.log(deformation);

  deformation = (0.5*weight*speed*speed)/22500;

  if(car.collide(wall)){

  if(deformation < 100){
    car.shapeColor = "green";
    
  }

  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow";
    
  }

  if(deformation > 180){
    car.shapeColor = "red";
    
  }
}
}