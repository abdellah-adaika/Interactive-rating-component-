const ratingButtons = document.querySelectorAll(".rating-btn");

const ratingValue = document.querySelector(".rating-value");

const submitBtn = document.querySelector(".submit-btn");

const ratingCard = document.querySelector(".rating-card");

const thankyouCard = document.querySelector(".thank-you-card");
let selectedRating = 0;
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    selectedRating = button.textContent;
    ratingValue.textContent = selectedRating;

  });
});


submitBtn.addEventListener("click",() => {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "block";
});