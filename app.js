const switchButton = document.querySelector("#flexSwitch");

switchButton.addEventListener("click", () => {
  if (switchButton.checked === true) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (switchButton.checked === false) {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "black";
  }
});
