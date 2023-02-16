const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let startTime;
let stopTime = 0;
let intervalId;

function displayTime() { 
  intervalId = setInterval(() => {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours()-9).padStart(2, "0");
    const m = String(currentTime.getMinutes()).padStart(2, "0");
    const s = String(currentTime.getSeconds()).padStart(2, "0");
    const ms = String(currentTime.getMilliseconds()).padStart(2, "0").slice(0, 2);
    count.textContent =  h + ":" + m + ":" + s + ":" + ms;
  }, 10);
}

start.addEventListener("click", ()=> {
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("reset").disabled = false;
  
  startTime = Date.now();
  displayTime();
})

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = false;
  
  stopTime += (Date.now() - startTime);
})

reset.addEventListener("click", () => {
  clearInterval(intervalId)
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = true;
  stopTime = 0;
  count.textContent = "00:00:00:00";
})

  