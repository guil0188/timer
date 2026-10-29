const countdown = document.getElementById("countdown");

let secondsLeft = 7;
let phase = "hang";

const timer = setInterval(function () {
  secondsLeft--;

  if (secondsLeft === 0) {
    if (phase === "hang") {
        phase = "rest";
        secondsLeft = 3;
    }

  }
  countdown.textContent = secondsLeft;
}, 500);

// const timer = setInterval(function () {
//   if (phase === "hang") {
//     phase = "rest";
//     secondsLeft = 3;
//   } else if (phase === "rest") {
//     secondsLeft = 3;
//   }
//   if (secondsLeft === 0) {
//     phase = "rest";
//   } else if (secondsLeft === 0) {
//     phase = "hang";
//   }
//   secondsLeft--;
//   countdown.textContent = secondsLeft;
// }, 1000);


