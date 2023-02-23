//All categories
const allLinksEl = categories.querySelectorAll(".item");
console.log("Number of categories:", allLinksEl.length);

//first element

const firstEl = categories.firstElementChild;
console.log("Category:", firstEl.firstElementChild.textContent);
const navLastEl = firstEl.lastElementChild;
console.log("Elements:", navLastEl.children.length);

// second element

const secondEl = categories.firstElementChild.nextElementSibling;
console.log("Category:", secondEl.firstElementChild.textContent);
const navMidEl = secondEl.lastElementChild;
console.log("Elements:", navMidEl.children.length);

//third element

const lastEl = categories.lastElementChild;
console.log("Category:", lastEl.firstElementChild.textContent);
const navFinalLastEl = lastEl.lastElementChild;
console.log("Elements:", navFinalLastEl.children.length);
