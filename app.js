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
  document.body.appendChild("textarea");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  textarea.remove();
  alert("Copied to the clipboard");
});
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

/* Another method */

// generateEl.addEventListener("click", () => {
//   const length = +lengthEl.value;
//   const hasUpper = upperEl.checked;
//   const hasLower = lowerEl.checked;
//   const hasNumber = numberEl.checked;
//   const hasSymbol = symbolEl.checked;
//   //   const hasUpper=upperEl.checked;
//   //   console.log(hasLower);
//   resultEl.innerText = generatePassword(
//     hasUpper,
//     hasLower,
//     hasNumber,
//     hasSymbol
//   );
// });

// // Generate password Function
// function generatePassword(upperCase, lowerCase, number, symbol, length) {
//   const generatedPassword = "";
//   // To determine how many box are checked
//   const typesCount = upperCase + lowerCase + number + symbol;

//   //   typesArr represent the array having checked values
//   const typesArr = [
//     { upperCase },
//     { lowerCase },
//     { number },
//     { symbol },
//   ].filter((item) => Object.values(item)[0]);
//   //   Object.values(item) check whether there is the property value in the object or not and return it.In above condition Object.values(item)[0] checks whether the checkbox is checked or not and return the values which is checked in the form of array and item[0] represent the first object having unchecked property value
//   console.log("typesArr:", typesArr);
//   if (typesCount === 0) {
//     return;
//   }
//   for (let i = 0; i < length; i += typesCount) {
//     typesArr.forEach((type) => {
//       const funcName = Object.keys(type)[0];
//       console.log("funcName: ", funcName);
//       generatedPassword += randomFunc[funcName]();
//     });
//   }
//   const finalPassword = generatedPassword.slice(0, length);
//   return finalPassword;
// }
