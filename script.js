const countdown = document.getElementById("countdown");
const round = document.getElementById("round")
const phases = document.getElementById("phase")

let secondsLeft = 7;
let phase = "Hang";
let roundsCompleted = 0;

const timer = setInterval(function () {
  secondsLeft--;
  if (secondsLeft === 0) {
    if (phase === "Hang") {
      phase = "Rest";
      secondsLeft = 3;
    } else if (phase === "Rest"){
      roundsCompleted++;

      if (roundsCompleted === 6) {
        phase = "Long Rest";
        secondsLeft = 180;
      } else {
        phase = "Hang";
        secondsLeft = 7;
      }
    } else if (phase === "Long Rest"){
      roundsCompleted = 0;
      phase = "Hang"
      secondsLeft = 7;
      
    }
  }

  countdown.textContent = secondsLeft;
  round.textContent = "Round "+ roundsCompleted + " of 6";
  phases.textContent = phase
}, 1000);
