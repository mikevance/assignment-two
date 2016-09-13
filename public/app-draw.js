
var patternBlock;
 //this is global variable
var current;

function preload() {
  patternBlock = loadImage("./face.png");

}

function setup() {
  createCanvas(700,700);
  background(255,255,255,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)
}

for(var x=0;x<8;x++){
  function draw() {
    background(244, 248, 252);
    var u = 200;
    image(patternBlock,mouseX,mouseY,100,100);
    image(patternBlock,mouseX+u%2,mouseY+u,100,100);
    u = u + 100;
  }
}
