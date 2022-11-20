// DOM Elements
const resultEl = document.getElementById("result");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  //   const hasUpper=upperEl.checked;
  //   console.log(hasLower);
  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

// Generator functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols() {
  const symbols = "!@#$%^&*(){}[]=+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
