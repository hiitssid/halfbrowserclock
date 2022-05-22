function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  minute = checkTime(minute);
  second = checkTime(second);
  let time = document.querySelector(".time");
  time.innerText = `${hour} : ${minute} : ${second}`;

  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
//------------NOSLEEP-----------------------
var noSleep = new NoSleep();

var wakeLockEnabled = false;
var toggleEl = document.querySelector("#toggle");
toggleEl.addEventListener(
  "click",
  function () {
    if (!wakeLockEnabled) {
      noSleep.enable(); // keep the screen on!
      wakeLockEnabled = true;
      toggleEl.innerText = "Enabled";
      // document.body.style.backgroundColor = "green";
      toggleEl.classList.toggle("hidden");
    } else {
      noSleep.disable(); // let the screen turn off.
      wakeLockEnabled = false;
      toggleEl.innerText = "Disabled";
      // document.body.style.backgroundColor = "";
    }
  },
  false
);
//--------------------------------------
