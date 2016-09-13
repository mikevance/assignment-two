
var patternBlock;
 //this is global variable

function preload() {
  patternBlock = loadImage("./face.png");

}

function setup() {
  createCanvas(700,700);
  background(255,255,255,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
    for(var counter=0;counter<5;counter=counter+1){
      push();
      var r = random(50,100)
      translate(counter*100,x*100);
        image(patternBlock,0,0,100,100);
      translate();
      pop();
    }
  }
}
