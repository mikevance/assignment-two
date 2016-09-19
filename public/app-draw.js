
var patternBlock;
 //this is global variable
var current;

function preload() {
  patternBlock = loadImage("./solo.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,255,255,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)
}

function draw(){
  for(var x=0;x<windowWidth/10;x++){

    for(var y=0;y<windowHeight/10;y++){
      if(x%2==0){
        var r = 45;
        push();
        translate(15+x*100, 15+y*115);
        rotate(degrees(r));
        translate();
        image(patternBlock, 0, 0, 188, 200);
        pop();
      }
      else {
        var r = 45;
        push();
        translate(15+x*100, 15+y*115);
        rotate(degrees(r));
        translate();
        image(patternBlock, 0, 0, 188, 200);
        pop();
      }
    }
  }

  for(var x=0;x<8;x++){

    for(var y=0;y<8;y++){
      if(x%2==0){
        var r = y*10+15;
        var imageWidth = 188+y*2;
        push();
        translate(15+x*100, 15+y*115);
        rotate(degrees(r));
        translate();
        image(patternBlock, 0, 0, imageWidth, imageWidth*1.06);
        pop();
        console.log(x)
      }
      else if(x%2==2){
        var r = x*10+15;
        var imageWidth = 188+x*10;
        push();
        translate(15+x*100, 15+y*115);
        rotate(degrees(r));
        translate();
        image(patternBlock, 0, 0, imageWidth, imageWidth*1.06);
        pop();
      }
      else if (x%2==4){
        var r = x*20+15;
        var imageWidth = 188+x*10;
        push();
        translate(15+x*100, 15+y*115);
        rotate(degrees(r));
        translate();
        image(patternBlock, 0, 0, imageWidth, imageWidth*1.06);
        pop();
      }
      else {
        
      }
    }
  }
}
