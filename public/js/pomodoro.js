// Initial variables
var minutes = 25;
var seconds = "00";
var timer;
var bell = new Audio('/public/resources/bell.wav');

// Populate timer
function pomodoroTemplate() {
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

// Start timer
function start(min, sec) {

    // Clear previous timers
    clearInterval(timer);

    // Set minutes and seconds
    minutes = min - 1;

    if (sec == 0) {
        seconds = 59;
    }
    else {
        seconds = sec - 1;
    }
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // Set pause button
    let btn = document.getElementById("pause");
    btn.innerHTML = '<i onclick="pause()" class="far fa-pause-circle"></i>';
    btn.value = "pause";

    // Define timer interval
    timer = setInterval(countdown, 1000);

    function countdown() {
        seconds = seconds - 1;
        if (seconds > 9) {
            document.getElementById("sec").innerHTML = seconds;
        }
        else {
            document.getElementById("sec").innerHTML = "0" + seconds;
        }
        document.getElementById("min").innerHTML = minutes;

        // Events when timer or seconds hit 0
        if (seconds <= 0) {
            if (minutes <= 0) {
                // Stop timer
                clearInterval(timer);

                // Play sound
                bell.play();

                // Set pause button to message
                let div = document.getElementById("pause");
                div.innerHTML = "<h2 id='msg'>Time's up!</h2>";
            }
            seconds = 60;
            minutes--;
        }
    }
}

// Pause or resume timer
function pause() {
    // Set minutes and seconds
    let sec = document.getElementById("sec").innerHTML
    let min;

    if (document.getElementById("min").innerHTML == 25) {
        min = 25;
    }
    else if (sec == 0) {
        min = parseInt(document.getElementById("min").innerHTML);
    }
    else {
        min = parseInt(document.getElementById("min").innerHTML) + 1;
    }

    // Events when paused or resumed
    let btn = document.getElementById("pause");
    if (btn.value == "pause") {
        clearInterval(timer);
        btn.innerHTML = '<i onclick="pause()" class="far fa-play-circle"></i>';
        btn.value = "resume";
    }
    else if (btn.value = "resume") {
        start(min, sec);
        btn.innerHTML = '<i onclick="pause()" class="far fa-pause-circle"></i>';
        btn.value = "pause";
    }

}

// Populate pomodoro widget
$(document).ready(() => {
    pomodoroTemplate()
});