const textbox = document.getElementById("textbox");
const applyButton = document.getElementById("apply-button");
const card = document.getElementById("card");

applyButton.addEventListener("click", () => {
  if (textbox.value) {
    card.style.backgroundColor = textbox.value;
  } else {
  }
});
