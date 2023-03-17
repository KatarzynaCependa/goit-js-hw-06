const inputEl = document.querySelector("#validation-input");

const inputBlur = () => {
  inputEl.value.length === +inputEl.dataset.length
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
};

inputEl.addEventListener("blur", inputBlur);
