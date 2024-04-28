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

// 
const firstTry = localStorage.getItem("tryNumber");
if (firstTry == null) {
  localStorage.setItem("tryNumber", 1);
};

const calculateSore = () => {

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
  alert(
    `Ваш результат: ${totalScore} из ${questions.length}. Количество попыток: ${tryNumber}`
  );

  tryNumber++;

  localStorage.setItem("tryNumber", tryNumber);
};

buttonCheck.addEventListener("click", calculateSore);

// Restart test
const buttonReset = document.getElementById("btn_reset");
const radioBtn = document.getElementsByTagName("input");

function resetTest() {
  for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].checked = false;
  }
};

buttonReset.addEventListener("click", resetTest);