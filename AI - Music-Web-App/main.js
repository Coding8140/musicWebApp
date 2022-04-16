var songE="";
var songF=""; 

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    songE = loadSound("BTSEuphoria.mp3");
    songF = loadSound("BTSFilter.mp3");
}

function song_name()
{
    songE.play();
    songF.play();
}