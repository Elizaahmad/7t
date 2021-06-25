img="";
function preload(){
img=loadImage('Dog.png');
}
function setup(){
  canvas=createCanvas(400,420);
  canvas.center();
}

function draw(){
image(img, 0,0,400,420);
fill("orange");
textSize(20);
text("Dog", 20,30);
fill("purple ")
noFill();
stroke('purple ');
rect(10,29,330,390);
}