// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const createButtonEl = document.querySelector("button[data-create]");
// const destroyButtonEl = document.querySelector("button[data-destroy]");
// const divBoxesEl = document.querySelector("#boxes");
// const divControlEl = document.querySelector("#controls");

// createButtonEl.addEventListener("click", createBoxes);
// destroyButtonEl.addEventListener("click", destroyBoxes);

// function destroyBoxes() {
//   divBoxesEl.innerHTML = "";
// }

// function createBoxes() {
//   const quantity = divControlEl.firstElementChild.value;
//   const collectBoxes = [];

//   let baseHeight = `40`;
//   let baseWidth = `40`;

//   for (let i = 0; i < quantity; i += 1) {
//     const box = document.createElement("div");
//     box.style.height = `${baseHeight}px`;
//     box.style.width = `${baseWidth}px`;
//     baseHeight += 10;
//     baseWidth += 10;
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     collectBoxes.push(box);
//   }
//   divBoxesEl.append(...collectBoxes);
//   console.log(divBoxesEl);
// }
