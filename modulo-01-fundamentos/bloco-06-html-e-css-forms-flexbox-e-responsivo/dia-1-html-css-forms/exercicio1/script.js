const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function hrefPreventDefault(event) {
  event.preventDefault()
}
HREF_LINK.addEventListener('click', hrefPreventDefault)

function checkBoxPreventDefault(event) {
  event.preventDefault()
}
INPUT_CHECKBOX.addEventListener('click', checkBoxPreventDefault)

function textPreventDefault(event) {
  if (event.key !== 'A') {
    event.preventDefault()
  }
}
INPUT_TEXT.addEventListener('keypress', textPreventDefault)