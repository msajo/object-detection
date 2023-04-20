Img ="";
status2 = "";
objects = [];

function preload(){
    Img = loadImage("dog_cat.jpg");
}
function setup(){
    Canvas = createCanvas(640,420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function draw(){
    image(Img,0,0,640,420);
    if(status2 != ""){
        for(i= 0;i< objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Object detected";
        fill("red");
        textSize(20);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+ " " + percent + "%",objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
        }
        
    }
    

  
}
function modelLoaded(){
    console.log("ModelLoaded");
    status2 = true;
    objectDetector.detect(Img,gotposes);
}
function gotposes(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}