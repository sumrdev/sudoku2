let time,
seconds = 0,
minutes = 0,
hours = 0;

setInterval(() => {
    seconds += 1;
    if (seconds > 59) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes > 59) {
        hours += 1;
        minutes = 0;
    }
    time =
        String(hours) + "h " + String(minutes) + "m " + String(seconds) + "s ";

    timer.textContent = time;
}, 1000);

function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}