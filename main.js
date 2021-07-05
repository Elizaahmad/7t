video="";
status="";

function preload()
{
    video=createVideo('video.mp4');
video.hide();
}

function setup(){
canvas=createCanvas(490,400);
canvas.position(490,270);
}
function draw(){
    image(video,0,0,490,400);
}

function Start(){
    objectDetector=ml5.objectDetector('cococssd',modelloaded);
    document.getElementById('Status').innerHTML='Status:Detecting Objects';
}
function modelloaded(){
    console.log('modelloaded');
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}