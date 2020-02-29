var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100)+ "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate=video.playbackRate-(.2*video.playbackRate);
	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate=video.playbackRate +(.25*video.playbackRate);
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	currentTime = video.currentTime;
	videoLength = video.duration;
	console.log("DUR:" + videoLength);
	console.log("Current location is " + video.currentTime);
	if((60+currentTime) >= videoLength){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	else{
		video.currentTime = video.currentTime + 60;
	}
}

function mute() {
	if (video.muted==false){
		video.muted= true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Muted");
		}
	else{
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Unmuted");
			}
}

function changeVolume() {
	vol=document.querySelector("#volumeSlider").value;
	video.volume=vol/100;
	console.log(vol);
	document.querySelector('#volume').innerHTML= vol+"%";

	console.log("Volume is "+video.volume);
}


function gray() {
	video.className="grayscale";
	console.log("In grayscale");
}

function color() {
	video.className="color";
	console.log("In color");
}
