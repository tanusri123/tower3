let value=0;

function preload() {
  img = loadImage('assets/laDefense.jpg');
}

function setup() {
  createCanvas(800,400);
  image(img, 0, 0);
  tint(255,126); // Tint blue
  image(img, 50, 0);

}

function draw() {
  background(255,255,255);
  var ground = new ground(400,200,70,10);
  var ground1 = new ground(100,350,70,10);
  //level1
  block1=new block(330,235,30,40);
  block2=new block(360,235,30,40);   
  block3=new block(390,235,30,40);
  block4=new block(420,235,30,40);
  block5=new block(450,235,30,40);
  //level2
  block6=new block(360,195,30,40);
  block7=new block(390,195,30,40);
  block8=new block(420,195,30,40);
  //top
  block9=new block(390,155,30,40);
  var polygon=new polygon(100,300,20,20);
  world.add(world,polygon);

  
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
function mousePressed(event) {
  console.log(event);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
function mouseDragged(event) {
  console.log(event);
}
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
function keyPressed() {

  return false; 
}
function keyPressed() {
if(keyCode===32)
SlingShot.attach(this.polygon)
 
}
  drawSprites();
