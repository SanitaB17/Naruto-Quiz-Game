const rulesDisplay = document.getElementById("rules-display");
//const myDiv = document.getElementById("myDiv");
const header = document.getElementById("header");
const startQuizBtn = document.getElementById("start-quiz-btn");
const homeMain = document.getElementById("home");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");
const optionButtons = document.getElementById("option-buttons");
const playAgainButton = document.getElementById("play-again-btn");
const backHomeButton = document.getElementById("back-home-btn");
const questionText = document.getElementById("question");

// shows game rules 
// start of code taken and modified from w3 schools.com https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
rulesDisplay.onclick = ()=>{
  var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}
// End of taken code
// Hide sections when clicked on start quiz button and show questions section only
startQuizBtn.addEventListener("click", () => {
  header.style.display = "none"
  homeMain.style.display = "none";
  scoreSection.style.visibility = "hidden";
  questionSection.style.visibility = "visible";
});
