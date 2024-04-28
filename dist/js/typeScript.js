// Restart test
var buttonReset = document.getElementById("btn_reset");
var radioBtn = document.getElementsByTagName("input");
var result = document.getElementById("result");
function resetTest() {
    for (var i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
    }
    if (result) {
        result.classList.add("none");
    }
}
buttonReset.addEventListener("click", resetTest);
