import Countdown from "./countdown.js";

const countdownTime = new Countdown("02 May 2022 19:00:00 GMT-0300");
const timers = document.querySelectorAll("[data-time]");

function showTimers() {
    timers.forEach((timer, index) => {
        timer.innerHTML = countdownTime.total[index];
    });
}

showTimers();
setInterval(showTimers, 1000);