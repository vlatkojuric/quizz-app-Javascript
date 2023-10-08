// phew… not a lot going on here. Please add some code!

//added the data js from  the html element to grab it from the html file and put it into a variable
const bookmarkColorChange = document.querySelector(
  '[data-js="bookmark-change-color"]'
);
// use that variable to add evenet listener to listen for click and do a function,in this case the bookmarks should toggle on click
bookmarkColorChange.addEventListener("click", () => {
  bookmarkColorChange.classList.toggle("bookmark--active");
});
//we put the button into a variable
const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
//we put the answer into a variable also so we can use it in a function down below
const answer = document.querySelector('[data-js="answer"]');
//we added a event listener on a button in html file which we saved into a variable so when we click it does something
//then we use the answe variable in which the hidden answer is stored
//we use the conditionals,and if the saved variable "contains" the answer,the answer will show and the button will change it´s "textContent" to Hide answer,so the answer hides again

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show answer";
  }
});
