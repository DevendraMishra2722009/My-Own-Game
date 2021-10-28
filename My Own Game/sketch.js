function preload(){
  backgroundImage=loadImage("Images/BG 2.jpg")

}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}
