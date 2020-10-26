function fadeIn() {
    document.body.classList.add("fade-in")
}

function muteVideo() {
    var vid = document.getElementById("video");
    vid.muted = true;
}


function showElement() {
    var elementToShow = document.getElementById("hidden");
    elementToShow.classList.add("show");

    var elementToHide = document.getElementById("fade-out")
    elementToHide.classList.add("fade-out")
}