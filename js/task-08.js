const formEl = document.querySelector(".login-form");
console.log(formEl);

const firstChildEl = formEl.firstElementChild;
const secondChildEl = firstChildEl.nextElementSibling;

formEl.addEventListener("submit", handleSubmitLogin);

function handleSubmitLogin(event) {
  event.preventDefault();

  const emailInputeValue = firstChildEl.firstElementChild.value;
  const passwordInputValue = secondChildEl.firstElementChild.value;

  if (emailInputeValue === "" || passwordInputValue === "") {
    alert(`All filds must have data`);
    return;
  }
  console.log(`Login: ${emailInputeValue}, Password: ${passwordInputValue}`);
  event.currentTarget.reset();
}
