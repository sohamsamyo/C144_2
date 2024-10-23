function preload(){}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        console.log("Position of left eye x = " +results[0].pose.leftEye.x);
        console.log("Position of left eye y = " +results[0].pose.leftEye.y);

    }
}

function modelLoaded()
{
    console.log("Your website is up and running...");
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function Filter()
{
   save("Filtered_image");
}