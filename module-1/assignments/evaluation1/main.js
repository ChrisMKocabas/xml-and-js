//defines the name
const myName = ["Muhammed"];

//query selectors
const nameField = document.querySelector(".name-field");
const selectNameBtn = document.querySelector(".display-name-btn");

//this function displays the Insurance
function displayName() {
  nameField.innerHTML = `${myName}`;
}
