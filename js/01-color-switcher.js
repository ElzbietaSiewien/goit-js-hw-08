const startButt = document.querySelector('[data-start]');
const stopButt = document.querySelector('[data-stop]');
const body = document.body;
startButt.addEventListener('click', startColorChange);
stopButt.addEventListener('click', stopColorChange);
stopButt.setAttribute('disabled', true);
let timeId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function ColorChange() {
  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function startColorChange() {
  ColorChange();
  stopButt.removeAttribute('disabled');
  startButt.setAttribute('disabled', true);
}
function stopColorChange() {
  clearInterval(timeId);
  stopButt.setAttribute('disabled', true);
  startButt.removeAttribute('disabled');
}
