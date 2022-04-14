function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560, 150);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw()
{
    background("#696969");
}


function modelLoaded()
{
    console.log("PoseNet is initialized");
}


function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results);
    }
}