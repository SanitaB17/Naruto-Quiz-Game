const rulesDisplay = document.getElementById("rules-display");
//const myDiv = document.getElementById("myDiv");
const header = document.getElementById("header");
const startQuizBtn = document.getElementById("start-quiz-btn");
const homeMain = document.getElementById("home");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");
const playAgainButton = document.getElementById("play-again-btn");
const backHomeButton = document.getElementById("back-home-btn");
// shows game rules 
// start of code taken and modified from w3 schools.com https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
rulesDisplay.onclick = ()=>{
  var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
};
// End of taken code
// Hide sections when clicked on start quiz button and show questions section only
startQuizBtn.addEventListener("click", () => {
  header.style.display = "none";
  homeMain.style.display = "none";
  scoreSection.style.visibility = "hidden";
  questionSection.style.visibility = "visible";
});

const questions = [
  {
    question: "What is Naruto Uzumaki's signature jutsu?",
      answers: [
        {text: "Shadow Clone Jutsu", correct: true},
        {text: "Rasengan", correct: false},
        {text: "Rasenshuriken", correct: false},
        {text: "Tailed Beast Mode", correct: false},
      ]
  },
  {
    question: "Which tailed beast is sealed within Naruto?",
    answers: [
      {text: "Shukaku", correct: false},
      {text: "Ratatabi", correct: false},
      {text: "Son Goku", correct: false},
      {text: "Kurama", correct: true},
    ] 
  },
  {
    question: "What is the name of Naruto's sensei during his early training days?",
    answers: [
      {text: "Tsunade", correct: false},
      {text: "Iruka", correct: true},
      {text: "Yamato", correct: false},
      {text: "Kakashi", correct: false},
    ] 
  },
  {
    question: "What is Naruto's favorite food?",
    answers: [
      {text: "Chips", correct: false},
      {text: "Fish", correct: false},
      {text: "Ramen", correct: true},
      {text: "Rice Balls", correct: false},
    ] 
  },
  {
    question: "Who is Naruto's closest friend?",
    answers: [
      {text: "Sakura Haruno", correct: false},
      {text: "Hinata Hyuga", correct: false},
      {text: "Sasuke Uchiha", correct: true},
      {text: "Shikamaru Nara", correct: false},
    ] 
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// // Mix all questions
// const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
// // Choses 10 first from mixed questions
// const selectedQuestions = shuffledQuestions.slice(0, 10);


function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  // Clear previous answer buttons
  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
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
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

startQuiz();