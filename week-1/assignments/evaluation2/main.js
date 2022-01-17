const displayInput = document.querySelector(".display-input");

// ADD HIDDEN CLASS TO INFORMATION DISPLAY SECTION TO HIDE IT UNTIL SUBMIT IS CLICKED
displayInput.classList.add("hidden");

// THIS FUNCTION RETURNS THE INFORMATION ENTERED BY USER ON CLICK OF SUBMIT BUTTON
function showInput() {
  document.querySelector(".display-email").innerHTML =
    `Email: ` + document.querySelector(".email").value;
  document.querySelector(".display-date").innerHTML =
    `Date: ` + document.querySelector(".date-of-visit").value;
  document.querySelector(".display-comment").innerHTML =
    `Comment: ` + document.querySelector(".comment").value;
  displayInput.classList.remove("hidden");
}
