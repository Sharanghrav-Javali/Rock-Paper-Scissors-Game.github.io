let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const drawGame = () => {
  msg.textContent = "😐 It's a draw! Try again...";
  msg.style.backgroundColor = "#081b31";
  animateMsg();
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `🎉 You win! ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.textContent = compScore;
    msg.textContent = `💻 You lost! ${compChoice} beats ${userChoice}.`;
    msg.style.backgroundColor = "crimson";
  }
  animateMsg();
};

const animateMsg = () => {
  msg.classList.add("animate");
  setTimeout(() => msg.classList.remove("animate"), 300);
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin =
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper");
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});
