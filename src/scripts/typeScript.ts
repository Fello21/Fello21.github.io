// Restart test
const buttonReset: HTMLButtonElement | null = document.getElementById("btn_reset") as HTMLButtonElement;
const radioBtn = document.getElementsByTagName("input");
const result = document.getElementById("result");
function resetTest() {
  for (let item of radioBtn) {
    item.checked = false;
  }
  if (result) {
    result.classList.add("none");
  }
}

buttonReset.addEventListener("click", resetTest);
