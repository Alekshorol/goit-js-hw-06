function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.body;
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const changeColor = (event) => {
  spanEl.textContent = getRandomHexColor();
  colorEl.style.backgroundColor = spanEl.textContent;
};

btnEl.addEventListener("click", changeColor);
