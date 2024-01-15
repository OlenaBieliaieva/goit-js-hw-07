const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const placeholder = (event) => {
  const text = event.target.value.trim();
  outputName.textContent = text ? text : "Anonymous";
};

inputName.addEventListener("input", placeholder);
