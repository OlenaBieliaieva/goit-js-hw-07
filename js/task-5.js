function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};
changeColorBtn.addEventListener("click", changeColor);

//2
// const changeColor = function () {
//   textColor.textContent = body.style.backgroundColor =
//     getRandomHexColor();
// };

// 3
// function changeColor() {
//   textColor.textContent = body.style.backgroundColor =
//     getRandomHexColor();
// }

// 4
// const changeColor = () => {
//   const color = getRandomHexColor();
//   body.style.backgroundColor = color;
//   textColor.textContent = color;
// };
