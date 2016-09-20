
var patternBlock;
var current;

function preload() {
  burgerBlock = loadImage("./img-food/burger.png");
  pizzaBlock = loadImage("./img-food/pizza.png");
  hotdogBlock = loadImage("./img-food/hotdog.png");
  dessertBlock = loadImage("./img-food/dessert.png");
  spaghettiBlock = loadImage("./img-food/spaghetti.png");
}

function setup() {
  canvas_context=createCanvas(windowWidth,windowHeight);
  background(176,176,99,0);
  noLoop();
}

function makePizza(x,y) {
  var w = 75;
  image(pizzaBlock, x*100, y*100, w, w);
}

function makeBurger(x,y) {
  var w = 75;
  image(burgerBlock, x*100, y*100, w, w);
}

function makeHotdog(x,y) {
  var w = 75;
  image(hotdogBlock, x*100, y*100, w, w);
}

function makeDessert(x,y) {
  var w = 75;
  image(dessertBlock, x*100, y*100, w, w);
}

function makeSpaghetti(x,y) {
  var w = 75;
  image(spaghettiBlock, x*100, y*100, w, w);
}

function makeInstructions() {
  fill(0,0,0,255);
  rect(0, 0, 250, 20)
  noStroke();

  fill(255, 255, 255, 255);
  textSize(12)
  textStyle(BOLD)
  text("Press 'R' to generate a new design!", 10, 15);
}

function draw(){
  for(var x=0;x<windowWidth/40;x++){

    for(var y=0;y<windowHeight/40;y++){
      var t = Math.floor((Math.random() * 20) + 1);
      if(t<=4){
        var w = 75;
        makePizza(x,y);
        rect(x*100-12, y*100-12, 100, 100);
        fill(239,112,157,150);
        noStroke();
      }
      else if (t<=8){
        makeBurger(x,y);
        rect(x*100-12, y*100-12, 100, 100);
        fill(226,239,112,150);
        noStroke();
      }
      else if (t<=14){
        makeHotdog(x,y);
        rect(x*100-12, y*100-12, 100, 100);
        fill(112,228,239,150);
        noStroke();
      }
      else if (t>=17){
        makeSpaghetti(x,y);
        rect(x*100-12, y*100-12, 100, 100);
        fill(240,56,255,150);
        noStroke();
      }
      else {
        makeDessert(x,y);
        rect(x*100-12, y*100-12, 100, 100);
        fill(55,114,255,150);
        noStroke();
      }
    }
  }

  makeInstructions();
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
