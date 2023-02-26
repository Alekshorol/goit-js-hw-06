const inputId = document.querySelector("#font-size-control");
const textId = document.querySelector("#text");

inputId.addEventListener("input", inputChange);

function inputChange(event) {
  textId.style.fontSize = event.currentTarget.value + "px";
}
