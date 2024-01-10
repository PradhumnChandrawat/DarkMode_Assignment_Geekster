const toggleBtn = document.querySelector("#checkbox");
const toggleBallText = document.querySelector("#toggle-ball-p");
console.log(toggleBallText);

toggleBtn.addEventListener("change", function (e) {
  if (toggleBtn.checked) {
    document.body.classList.add("dark-mode");
    toggleBallText.textContent = "Light";
  } else {
    document.body.classList.remove("dark-mode");
    toggleBallText.textContent = "Dark";
  }
});
