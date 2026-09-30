const surpriseBtn = document.getElementById("surprise-btn");
const funFact = document.getElementById("fun-fact");

surpriseBtn.addEventListener("click", function () {
  funFact.textContent = "I haven't been on a plane since I was 4 years old!";
});