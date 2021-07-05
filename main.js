video="";
status="";
object=[];
function preload()
{
    video=createVideo('Video.webm');
video.hide();
}

function setup(){
canvas=createCanvas(490,400);
canvas.position(490,270);
}
function draw(){
    image(video,0,0,490,400);
    if(status!="")
    {
        objectDetector.detect(video,gotresults);
        for(i=0;i<object.length;i++)
        {
       document.getElementById("Status").innerHTML="Status:Objects Detected";
       document.getElementById("number_of_object").innerHTML="Number of objects detected are "+object.length;

       r=random(255);
       g=random(255);
       b=random(255);
       fill(r,g,b);
            percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%", object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
      
}

function Start(){
    objectDetector=ml5.objectDetector('cococssd',modelloaded);
    document.getElementById('status').innerHTML='Status:Detecting Objects';
}
function modelloaded(){
    console.log('modelloaded');
    status=true;
    video.loop();
    video.speed(0.5);
    video.volume(0);
}
function gotresults(error,results){
if (error){
    console.log(error);
}
else {
    console.log(results);
    object=results;

}
}