'use strict';

const btn = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const buttonInsideSquare = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span');
let body = document.querySelector('body');
let valueInputText;
let valueInputRange;

buttonInsideSquare.style.display = 'none';

rangeSpan.textContent = 50 + '%';

const getTextFromInput = function (e) {
  valueInputText = e.target.value;
};

const getRangeFromInput = function (e) {
  if (e.target.value > 0 || e.target.value < 0) {
    circle.style.width = e.target.value + '%';
    circle.style.height = e.target.value + '%';
    rangeSpan.textContent = e.target.value + '%';
  }
};

const buttonEvent = function () {
  square.style.backgroundColor = valueInputText;

};

inputRange.addEventListener('input', getRangeFromInput);
inputText.addEventListener('change', getTextFromInput);
btn.addEventListener('click', buttonEvent);