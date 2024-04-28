//Smooth Scroll
const smoothScrollLinks = document.querySelectorAll(".navig__list-item");

for (let link of smoothScrollLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target;
    const elementToScroll = document.querySelector(target.getAttribute("href"));
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Check the test answers
const buttonCheck = document.getElementById("btn_check");
const questions = document.getElementsByName("question");

const firstTry = localStorage.getItem("tryNumber");
if (firstTry == null) {
  localStorage.setItem("tryNumber", 1);
}

const calculateScore = () => {
  let tryNumber = localStorage.getItem("tryNumber");

  let totalScore = 0;

  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let answers = question.getElementsByTagName("input");

    for (let j = 0; j < answers.length; j++) {
      let userAnswer = answers[j];

      if (userAnswer.checked && userAnswer.value === "true") {
        totalScore++;
      }
    }
  }
  result.classList.remove("none");
  result.animate(
    [
      { transform: "scale(0)" }, { transform: "scale(1)" }
    ], 
    {
    duration: 300,
  });

  document.getElementById("answer").textContent = `${totalScore} из 5`;
  document.getElementById("try").textContent = `${tryNumber}`;

  tryNumber++;
  localStorage.setItem("tryNumber", tryNumber);
};

buttonCheck.addEventListener("click", calculateScore);