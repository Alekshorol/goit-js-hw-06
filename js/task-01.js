const allLinksEl = categories.querySelectorAll(".item");
console.log("Number of categories:", allLinksEl.length);

allLinksEl.forEach((link) => {
  const firstEl = link.firstElementChild.textContent;
  const navEl = link.firstElementChild.nextElementSibling.children.length;

  console.log("Category:", firstEl);
  console.log("Elements:", navEl);
});
