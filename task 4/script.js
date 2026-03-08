let time = 3600;
let timer;
let running = false;

const timerDisplay = document.getElementById("timer");
const outer1 = document.querySelector(".outer1");
const outer2 = document.querySelector(".outer2");

function updateDisplay(){
  let minutes = Math.floor(time/60);
  let seconds = time%60;

  seconds = seconds < 10 ? "0"+seconds : seconds;

  timerDisplay.innerText = `${minutes}:${seconds}`;
}

function startTimer(){

  if(running) return;

  running = true;

  outer1.classList.add("active");
  outer2.classList.add("active");

  timer = setInterval(()=>{

    if(time>0){
      time--;
      updateDisplay();
    }
    else{
      clearInterval(timer);
      alert("Time's up!");
    }

  },1000);
}

function pauseTimer(){
  clearInterval(timer);
  running=false;
}

function resetTimer(){
  clearInterval(timer);
  running=false;
  time=3600;
  updateDisplay();

  outer1.classList.remove("active");
  outer2.classList.remove("active");
}

updateDisplay();

function startTimer(){

  if(running) return;

  running = true;

  outer1.classList.add("active");
  outer2.classList.add("active");

  timer = setInterval(()=>{

    if(time>0){
      time--;
      updateDisplay();
    }
    else{
      clearInterval(timer);
      alert("Time's up!");
    }

  },1000);
}