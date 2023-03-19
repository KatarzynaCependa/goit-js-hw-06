const inputValue = document.getElementById("name-input");
const outputValue = document.getElementById("name-output");

const inputHandler = (event) => {
  if (inputValue === "") {
    outputValue.textContent = "Anonymous";
  } else {
    outputValue.textContent = event.currentTarget.value;
  }
};

inputValue.addEventListener("input", inputHandler);
