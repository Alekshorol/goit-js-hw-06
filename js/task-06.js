const inputWithId = document.querySelector("#validation-input");

const dataLength = Number(inputWithId.getAttribute("data-length"));
const inputValidation = (event) => {
  if (event.target.value.length === dataLength) {
    inputWithId.classList.add(`valid`);
    inputWithId.classList.remove(`invalid`);
  } else if (event.target.value.length === 0) {
    inputWithId.classList.remove(`invalid`);
    inputWithId.classList.remove(`valid`);
  } else {
    inputWithId.classList.add(`invalid`);
    inputWithId.classList.remove(`valid`);
  }
};

inputWithId.addEventListener(`blur`, inputValidation);
