const ratings = document.querySelectorAll(".rating");
const ratingsContrainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

ratingsContrainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerText;
  }
});

sendButton.addEventListener("click", (e) => {
  panel.innerHTML = `
  <i class="fa-solid fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our coustomer support</p>
    `;
});