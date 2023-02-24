const inputId = document.querySelector("#name-input");
const outputId = document.querySelector("#name-output");

const textInput = (event) => {
  if (inputId.value === "") {
    outputId.textContent = `Anonymous`;
  } else outputId.textContent = event.currentTarget.value;
};

inputId.addEventListener("input", textInput);
