const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", questionResponse);
});

function questionResponse(e) {
  e.target.parentElement.children[1].classList.toggle("active");
  e.target.children[1].classList.toggle("active");
  e.target.children[0].classList.toggle("color");
}
