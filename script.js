const startBtn = document.querySelector(".timer-start");
const stopBtn = document.querySelector(".timer-stop");
const restartBtn = document.querySelector(".timer-reset");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let i = 0;



startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

restartBtn.addEventListener("click", restart);

function start() {
    interval = setInterval(() => {
        console.log(((minutes.textContent == 0) && (seconds.textContent <= 0)) )
        if ((minutes.textContent == 0) && (seconds.textContent <= 0)) {
            seconds.textContent = 0;
            completed(i);
        }

        if (seconds.textContent > 0 && seconds.textContent < 60) {
            // seconds.textContent--;
            seconds.textContent = (seconds.textContent - 1).toString().padStart(2, "0");
        }
        else if (seconds.textContent == 0 && minutes.textContent != 0) {
            seconds.textContent = 59;
            // minutes.textContent--;
            minutes.textContent = (minutes.textContent - 1).toString().padStart(2, "0");
        }
        
    }, 1000);
    startBtn.setAttribute("disabled", "disabled");
}

function stop() {
    clearInterval(interval);
    startBtn.removeAttribute("disabled", "disabled");
}

function restart() {
    minutes.textContent = 25;
    seconds.textContent = 0;
    seconds.textContent = seconds.textContent.toString().padStart(2, "0");
    stop();
    localStorage.clear()
}

function completed(a) {
    if (a !== 0){
    setTimeout(() => (alert("Timer completed..!")), 1000);
    restart();
    }
}

window.addEventListener('blur', stor(i));

// console.log(window.Notification.requestPermission);
// window.addEventListener('load', Notification.requestPermission());
// console.log((Notification.permission));
// options={
//     body:"Please enter your name",
// }
// // new Notification("Adarsh M M here..!",options);

function stor(iterate) {
    if (iterate == 1) {
        start();
    }
    localStorage.setItem("minutes", minutes.textContent);
    localStorage.setItem("seconds", seconds.textContent);
    i++;
}

minutes.textContent = localStorage.getItem("minutes");
seconds.textContent = localStorage.getItem("seconds");
