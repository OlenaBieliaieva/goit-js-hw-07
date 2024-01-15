const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: email.value.trim,
    password: password.value.trim,
  };
  console.log(formData);
  e.target.reset();
}
