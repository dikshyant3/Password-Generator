// DOM Elements
const resultEl = document.getElementById("result");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

//Event Listener
clipboardEl.addEventListener("click", () => {
  //   console.log("clicked");

  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  //   document.body.appendChild("textarea");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  textarea.remove();
  alert("Copied to the clipboard");
});
generateEl.addEventListener("click", generatePassword);
function generatePassword() {
  const length = lengthEl.value;
  let password = "";

  if (upperEl.checked) {
    password += getRandomUpper();
  }
  if (lowerEl.checked) {
    password += getRandomLower();
  }
  if (numberEl.checked) {
    password += getRandomNumber();
  }
  if (symbolEl.checked) {
    password += getRandomSymbol();
  }
  //   console.log(password.length);
  // produces the password until it becomes equals to the required length
  for (let i = password.length; i < length; i++) {
    const result = generateResult();
    password += result;
  }
  resultEl.innerText = password;
}

function generateResult() {
  const results = [];
  if (upperEl.checked) {
    results.push(getRandomUpper());
  }
  if (lowerEl.checked) {
    results.push(getRandomLower());
  }
  if (numberEl.checked) {
    results.push(getRandomNumber());
  }
  if (symbolEl.checked) {
    results.push(getRandomSymbol());
  }
  if (results.length === 0) {
    return "";
  }
  //   console.log(results.length);
  return results[Math.floor(Math.random() * results.length)];
}

// Generator functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
