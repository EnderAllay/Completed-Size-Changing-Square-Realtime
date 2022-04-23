noseX= 0;
noseY= 0;
difference= 0;
rightWristX= 0;
leftWristX= 0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(500,500);
    canvas.position(560,150)

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#00ffc3');
    document.getElementById("square_side").innerHTML="Height and Width of the square is: " + difference + "px";
    fill('#ad0c00');
    stroke('#ad0c00');
    square(noseX,noseY,difference);
}

function modelLoaded() {
console.log("PoseNet is Loaded.");
}

function gotPoses(results){
if (results.length > 0) {
 console.log(results);

 noseX= results[0].pose.nose.x;
 noseY= results[0].pose.nose.y;

 console.log("NoseX= " + noseX + " NoseY= " + noseY);

rightWristX= results[0].pose.rightWrist.x;
leftWristX= results[0].pose.leftWrist.x;

difference= floor(leftWristX - rightWristX);
}
}

