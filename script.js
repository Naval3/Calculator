let userName = prompt("Please enter your name", "");
let firstChar = userName.slice(0, 1);
let upperCaseFirstChar = firstChar.toUpperCase();
let restChar = userName.slice(1, userName.lenght);
let lowerCaseChar = restChar.toLowerCase();
let capatialisedName = upperCaseFirstChar + lowerCaseChar;
document.getElementById("name").innerHTML = "Welcome " + capatialisedName;

let display = document.getElementById("display");
let bracket = 0;

const displayInputValue = (inputValue) => {
  console.log(inputValue);

  if (inputValue == "AC") {
    display.value = "";
  } else if (inputValue == "del") {
    display.value = display.value.slice(0, -1);
  } else if (inputValue == "()") {
    if (bracket == 0) {
      display.value += "(";
      bracket = 1;
    } else if (bracket == 1) {
      display.value += ")";
      bracket = 0;
    }
  } else if (inputValue == "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "error";
    }
  } else {
    display.value = display.value + inputValue;
  }
};
