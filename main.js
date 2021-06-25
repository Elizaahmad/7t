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

fill("red");
textSize(20);
text("rose", 240,120);
fill("green ")
noFill();
stroke('green');
rect(220,120,80,70);
}