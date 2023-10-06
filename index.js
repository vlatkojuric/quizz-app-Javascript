// phew… not a lot going on here. Please add some code!
const bookmarkColorChange = document.querySelector(
  '[data-js="bookmark-change-color"]'
);

bookmarkColorChange.addEventListener("click", () => {
  bookmarkColorChange.classList.toggle("bookmark--active");
});

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);

const answer = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer");
});
