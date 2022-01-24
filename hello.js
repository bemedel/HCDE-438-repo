let angle = 0;
function spinUW() {
    angle += 30;
    if (angle === 360) {
        angle = 0;
    }
    let uwLogo = document.getElementsByClassName("uw-patch")[0];
    uwLogo.style.transform = "rotate(" + angle + "deg)";
}

setInterval(spinUW, 500);

