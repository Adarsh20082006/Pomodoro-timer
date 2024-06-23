const startBtn=document.querySelector(".timer-start");
const stopBtn=document.querySelector(".timer-stop");
const restartBtn=document.querySelector(".timer-reset");
let minutes=document.querySelector(".minutes");
let seconds=document.querySelector(".seconds");

startBtn.addEventListener("click",start);

stopBtn.addEventListener("click",stop);

restartBtn.addEventListener("click", restart);

function start() {
    interval = setInterval(() => {
        // seconds.textContent=seconds.textContent.toString().padStart(2,"0");
        if (seconds.textContent > 0 && seconds.textContent < 60) {
            seconds.textContent--;
        }
        else if (seconds.textContent == 0 && minutes.textContent != 0) {
            seconds.textContent = 59;
            minutes.textContent--;
        }
        if (minutes.textContent == 0 && seconds.textContent <= 0) {
            seconds.textContent = 0;
            completed();
        }
    }, 1000);
    startBtn.setAttribute("disabled", "disabled");
}

function stop(){
        clearInterval(interval);
        startBtn.removeAttribute("disabled","disabled");
    }

function restart(){
        minutes.textContent= 25;
        seconds.textContent= 0;
        stop();
}

function completed() {
    setTimeout(() => (alert("Timer completed..!")), 1000);
    restart();
}

