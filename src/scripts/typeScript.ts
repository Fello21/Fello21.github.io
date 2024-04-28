// Restart test
const buttonReset: HTMLButtonElement | null = document.getElementById("btn_reset") as HTMLButtonElement;
const radioBtn = document.getElementsByTagName("input");
const result = document.getElementById("result");
function resetTest() {
  for (let i=0; i<radioBtn.length; i++) {
    radioBtn[i].checked = false;
  }
  if (result) {
    result.classList.add("none");
  }
}

buttonReset.addEventListener("click", resetTest);
