wristL=0;
wristR=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
  
function draw(){
    /*
    Image(video, 250, 200, 550, 500);
*/
background("#969A97");
fill("blue");
text("Anneka", 50, 200);
textSize(difference);
}
function modelLoaded(){
console.log("Model has been loaded!")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    wristL=results[0].pose.leftWrist.x;
    wristR=results[0].pose.rightWrist.x;
    difference=floor(wristL-wristR);
    console.log(wristL);
    console.log(wristR);
    console.log(difference);
}
}
