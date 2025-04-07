let video = document.getElementsByClassName("video")[0];
let slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");
let mute = document.querySelector("#mute");
let playbackStep = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = slider.value + "%";	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video");
	playbackStep = playbackStep - 1;
	let playbackTemp = 1.0;
	if (playbackStep < 0) {
		for (let i = playbackStep; i < 0; i++) {
			playbackTemp = playbackTemp - (playbackTemp * 0.1);
		}
	} else if (playbackStep > 0) {
		for (let i = playbackStep; i > 0; i--) {
			playbackTemp = playbackTemp + (playbackTemp * 0.1);
		}		
	}
	video.playbackRate = playbackTemp;
	console.log("Speed is " + video.playbackRate);	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	playbackStep = playbackStep + 1;
	let playbackTemp = 1.0;
	if (playbackStep < 0) {
		for (let i = playbackStep; i < 0; i++) {
			playbackTemp = playbackTemp - (playbackTemp * 0.1);
		}
	} else if (playbackStep > 0) {
		for (let i = playbackStep; i > 0; i--) {
			playbackTemp = playbackTemp + (playbackTemp * 0.1);
		}		
	}
	video.playbackRate = playbackTemp;
	console.log("Speed is " + video.playbackRate);	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if ((video.currentTime + 10) < video.duration) {
		video.currentTime = video.currentTime + 10;
		console.log("Video current time is " + video.currentTime);
	} else {
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute"
	} else {
		video.muted = true;
		mute.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Video");
	video.volume = slider.value/100;
	volume.innerHTML = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove("oldSchool");
});