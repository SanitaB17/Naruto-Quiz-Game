/* jshint esversion: 8 */ //helped to get rid of JSHint warnings
const rulesDisplay = document.getElementById("rules-display");
const header = document.getElementById("header");
const startQuizBtn = document.getElementById("start-quiz-btn");
const homeMain = document.getElementById("home");
const questionSection = document.getElementById("question-section");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-btn");
// Start of code taken and modified from w3 schools.com
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
rulesDisplay.onclick = () => {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
// End of taken code
//Play song section, will play song when clicked on play image

const playImg = document.getElementById("play-img");
const narutoSong = document.getElementById("song");

playImg.addEventListener("click", togglePlayback);

function togglePlayback() {
  if (narutoSong.paused) {
    narutoSong.play();
    narutoSong.loop = true;
    playImg.src = "assets/images/pause.png";
  } else {
    narutoSong.pause();
    narutoSong.loop = false;
    playImg.src = "assets/images/play.png";
  }
}


// Hide sections when clicked on start quiz button and show questions section only
startQuizBtn.addEventListener("click", () => {
  header.style.display = "none";
  homeMain.style.display = "none";
  questionSection.style.visibility = "visible";
});

// Code taken and modified from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=185s
const questions = [
  {
    question: "What is Naruto Uzumaki's signature jutsu?",
    answers: [
      { text: "Shadow Clone Jutsu", correct: true },
      { text: "Rasengan", correct: false },
      { text: "Rasenshuriken", correct: false },
      { text: "Tailed Beast Mode", correct: false },
    ],
  },
  {
    question: "Which tailed beast is sealed within Naruto?",
    answers: [
      { text: "Shukaku", correct: false },
      { text: "Ratatabi", correct: false },
      { text: "Son Goku", correct: false },
      { text: "Kurama", correct: true },
    ],
  },
  {
    question: "What is the name of Naruto's sensei during his early training days?",
    answers: [
      { text: "Tsunade", correct: false },
      { text: "Iruka", correct: true },
      { text: "Yamato", correct: false },
      { text: "Kakashi", correct: false },
    ],
  },
  {
    question: "What is Naruto's favorite food?",
    answers: [
      { text: "Chips", correct: false },
      { text: "Fish", correct: false },
      { text: "Ramen", correct: true },
      { text: "Rice Balls", correct: false },
    ],
  },
  {
    question: "Who is Naruto's closest friend?",
    answers: [
      { text: "Sakura Haruno", correct: false },
      { text: "Hinata Hyuga", correct: false },
      { text: "Sasuke Uchiha", correct: true },
      { text: "Shikamaru Nara", correct: false },
    ],
  },
  {
    question: "Which village does Naruto belong to?",
    answers: [
      { text: "Hidden in the Clouds", correct: false },
      { text: "Hidden in the Sand", correct: false },
      { text: "Hidden in the Mist", correct: false },
      { text: "Hidden in the Leaves", correct: true },
    ],
  },
  {
    question: "What does Naruto dream of becoming?",
    answers: [
      { text: "Hokage", correct: true },
      { text: "Doctor", correct: false },
      { text: "Anbu", correct: false },
      { text: "Jonin", correct: false },
    ],
  },
  {
    question: "What is the name of Naruto's father?",
    answers: [
      { text: "Jiraiya", correct: false },
      { text: "Itachi", correct: false },
      { text: "Kakashi", correct: false },
      { text: "Minato", correct: true },
    ],
  },
  {
    question: "Who is Naruto's mother?",
    answers: [
      { text: "Tsunade", correct: false },
      { text: "Kushina", correct: true },
      { text: "Mebuki", correct: false },
      { text: "Shizune", correct: false },
    ],
  },
  {
    question: "Which team is Naruto a part of during his early ninja missions?",
    answers: [
      { text: "Team 7", correct: true },
      { text: "Team 2", correct: false },
      { text: "Team 1", correct: false },
      { text: "Team 8", correct: false },
    ],
  },
  {
    question: "Who taught Naruto the Rasengan?",
    answers: [
      { text: "Minato", correct: false },
      { text: "Jiraiya", correct: true },
      { text: "Yamato", correct: false },
      { text: "Kakashi", correct: false },
    ],
  },
  {
    question: "What is Naruto's favorite catchphrase?",
    answers: [
      { text: "Believe it!", correct: true },
      { text: "I Don't Know", correct: false },
      { text: "You can do It!", correct: false },
      { text: "Get Up!", correct: false },
    ],
  },
  {
    question: "What is the name of Naruto's favorite ramen shop?",
    answers: [
      { text: "Ginza Hachigo ramen", correct: false },
      { text: "Menya Nukaji ramen", correct: false },
      { text: "Kiraku ramen", correct: false },
      { text: "Ichiraku Ramen", correct: true },
    ],
  },
  {
    question: "What is the special ability of Naruto's eyes when he is in Sage of the Six Paths mode?",
    answers: [
      { text: "Byakugan", correct: false },
      { text: "Truth-Seeking", correct: true },
      { text: "Rinnegan", correct: false },
      { text: "Sharingan", correct: false },
    ],
  },
  {
    question: "What is the name of the Hokage Monument in the Hidden Leaf Village?",
    answers: [
      { text: "Hokage Rock", correct: true },
      { text: "Shinobi Rock", correct: false },
      { text: "Jonin Rock", correct: false },
      { text: "Anbu Rock", correct: false },
    ],
  },
  {
    question: "What is the name of Naruto's first ninja team captain?",
    answers: [
      { text: "Yamato", correct: false },
      { text: "Kakashi", correct: true },
      { text: "Jiraiya", correct: false },
      { text: "Minato", correct: false },
    ],
  },
  {
    question: "What is the source of Naruto's enormous chakra reserves?",
    answers: [
      { text: "Shukaku", correct: false },
      { text: "Gyuki", correct: false },
      { text: "Kurama", correct: true },
      { text: "Son Goku", correct: false },
    ],
  }
];


const shuffledQuestions = shuffleArray(questions).slice(0, 10);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  // currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  // Shuffle and create answer buttons
  const shuffledAnswers = shuffleArray(currentQuestion.answers);
  shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "inline";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function showScore() {
  // Show the score and display Play Again button.
  resetState();
  questionElement.innerHTML = `Your Score: ${score} of ${shuffledQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "inline";

  // Reloads page, goes back to home page
  nextButton.addEventListener("click", () => {
    location.reload();
  });
}
// Takes an array as input and shuffles its elements randomly, then shuffled array is returned
// Function to shuffle an array code taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

startQuiz();