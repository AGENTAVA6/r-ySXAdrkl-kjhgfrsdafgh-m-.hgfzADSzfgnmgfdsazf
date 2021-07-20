var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
status = ""
object = []
flag = ""
function setup(){
    canvas = createCanvas(640, 420)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 420)
    video.hide()
    objectDetect = ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
    if(flag == "up"){
    image(video, 0, 0, 640, 420)
    objectDetect.detect(video, gotResult);
    for(i = 0; i < object.length; i++){
fill("#FF0000")
percent = floor(object[i].confidence * 100)
text(object[i].label + " " + percent + "%" , object[i].x, object[i].y);
noFill();
stroke("#FF0000");
rect(object[i].x, object[i].y, object[i].width, object[i].height );
 object_name  = document.getElementById("input").value
 lol  = document.getElementById("input").value
if(object_name  == object[i].label){
speak()
document.getElementById("cell_phone").innerHTML =  object_name + " found yay"
object_name = ""
flag = "down";
}
 }
}
}
 function modelLoaded(){
status = true;
console.log("play fortnite ")
}
function gotResult(error, results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
    }
function speak(){
    if(flag == "up"){
        var synth = window.speechSynthesis;
        speak_data = lol + "found!" 
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }
    }
    function start(){
        flag = "up"
    }