function fadeIn() {
    document.body.classList.add("fade-in")
}

function unmuteVideo() {
    var vid = document.getElementById("video");
    vid.muted = false;
}

function playPause() {
    var vid = document.getElementById("video");
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}


function showElement() {
    var elementToShow = document.getElementById("hidden");
    elementToShow.classList.add("show");

    var elementToHide = document.getElementById("fade-out")
    elementToHide.classList.add("fade-out")
}