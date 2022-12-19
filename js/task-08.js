const formEl = document.querySelector(".login-form");
const emailEl = document.querySelector('.input [name="email"]');
const passEl = document.querySelector('input[name = "password"]');

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "") {
    alert("Enter your email");
    return false;
  } else if (formElements.password.value === "") {
    alert("Enter your password");
    return false;
  }
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formSubmit = {
    mail,
    password,
  };
  console.log(formSubmit);
  formEl.reset();
}
