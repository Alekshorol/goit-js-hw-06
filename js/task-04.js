let conterValue = 0;
let step = 1;

const counterEL = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

counterEL.firstElementChild.addEventListener("click", handleDecrementButtonEl);
counterEL.lastElementChild.addEventListener("click", handleIncrementButtonEl);

function handleDecrementButtonEl() {
  conterValue -= step;
  valueEl.textContent = conterValue;
}

function handleIncrementButtonEl() {
  conterValue += step;
  valueEl.textContent = conterValue;
}
