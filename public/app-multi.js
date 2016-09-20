
var patternBlock;
var current;

function preload() {
  patternBlock = loadImage("./solo.png");
}

function setup() {
  canvas_context=createCanvas(windowWidth,windowHeight);
  background(176,176,99,0);
  noLoop();
}

function draw(){
  for(var x=0;x<windowWidth/10;x++){
      push();
      translate(random(width), random(height));
      rotate(random(2*PI));
      scale(random(1.5,1.0,2.5));
      makeCup();
      pop();
    }

  makeInstructions();
}

function makeCup() {
  image(patternBlock, 0, 0, 188, 200);
}

function makeInstructions() {
  fill(0,0,0,255);
  rect(0, 0, 250, 20)

  fill(255, 255, 255, 255);
  textSize(12)
  textStyle(BOLD)
  text("Press 'R' to generate a new design!", 10, 15);
}

function keyPressed() {
  if (keyCode === 82) {
    windowResized();
  } else if (keyCode === RIGHT_ARROW) {
    console.log("Key: Right Arrow");
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
