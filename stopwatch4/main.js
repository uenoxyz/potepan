const timeCount = document.querySelector(".timeCount");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
  
let startTime;
let elapsedTime = 0;
let timerId;
let timeToadd = 0;
  
function updateTimeText() {
  let m = Math.floor(elapsedTime / 60000);
  let s = Math.floor(elapsedTime % 60000 / 1000);
  let ms = Math.floor(elapsedTime % 1000);
  
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);
  ms = ('0' + ms).slice(-3);
  
  timeCount.textContent = m + ':' + s + ':' + ms;
}
  
function conutUp() {
  timerId = setTimeout(function() {
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimeText();
    conutUp();
  },10);
}

function startTimer() {
  startTime = Date.now();
  conutUp();
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
}

function stopTimer() {
  clearInterval(timerId);
  timeToadd += Date.now() - startTime;
  stopBtn.setAttribute("disabled", true);
  startBtn.removeAttribute("disabled");
}

function resetTimer() {
  clearInterval(timerId);
  elapsedTime = 0;
  timeToadd = 0;
  updateTimeText();
  startBtn.setAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
  resetBtn.setAttribute("disabled", true);
}
  
    