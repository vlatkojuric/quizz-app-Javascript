//FORM DOM MANIPULATION
//grabbed the submit button from the html file with this
const submitButton = document.querySelector('[data-js="submit-button"]');
//grabbed the form element with this

const form = document.querySelector('[data-js="form-data"]');

//this prevents the default behavior a form has
form.addEventListener("submit", (event) => {
  event.preventDefault;
  //grabs all the data that is going on in the form
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  //resets the form after being submited
  event.target.reset();
  //focuses back on the picked element,mine in this case is question
  event.target.elements.question.focus();
});
