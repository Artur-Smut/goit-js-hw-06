function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeButtonRef = document.querySelector('button.change-color');
const colorRef = document.querySelector('span.color')
const bodyRef = document.querySelector('body')

changeButtonRef.addEventListener('click', event => {
    let color = getRandomHexColor();
    bodyRef.style.backgroundColor = color;
    colorRef.textContent = color;
})