var video = document.getElementById("myVideo");
var btn = document.getElementById("play");

function myFunction() {

    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video