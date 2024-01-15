function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";
boxesEl.style.gap = "16px";
boxesEl.backgroundColor = "#f6f6fe";

btnCreateEl.addEventListener("click", onBtnCreateClick);
btnDestroyEl.addEventListener("click", onBtnDestroyClick);
function onBtnCreateClick() {
  const amount = Number(inputEl.value);
  inputEl.value = "";
  if (amount > 100 || amount < 1)
    return alert(`Input please the number between 1 and 100`);
  const divsArray = [];
  for (let i = 0; i < amount; i++) {
    const element = `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + 10 * i
    }px; height: ${30 + 10 * i}px;"></div>`;
    divsArray.push(element);
  }
  boxesEl.innerHTML = divsArray.join("");
}
function onBtnDestroyClick() {
  boxesEl.innerHTML = "";
}
