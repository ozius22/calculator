let buttons = document.getElementsByTagName("button");
let user_input = document.getElementById("input");
let display_result = document.getElementById("result");

let firstNumber = null;
let operation = null;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let buttonId = this.id;
    let input = parseFloat(user_input.value);

    switch (buttonId) {
      case "add":
        firstNumber = input;
        operation = "+";
        break;
      case "subtract":
        firstNumber = input;
        operation = "-";
        break;
      case "multiply":
        firstNumber = input;
        operation = "*";
        break;
      case "divide":
        firstNumber = input;
        operation = "/";
        break;
      case "clear":
        user_input.value = 0;
        display_result.textContent = 0;
        firstNumber = null;
        operation = null;
        break;
      case "equal":
        if (operation && firstNumber !== null) {
          let result;
          switch (operation) {
            case "+":
              result = add(firstNumber, input);
              break;
            case "-":
              result = minus(firstNumber, input);
              break;
            case "*":
              result = multiply(firstNumber, input);
              break;
            case "/":
              result = divide(firstNumber, input);
              break;
          }
          display_result.textContent = result;
          user_input.value = result;
          firstNumber = null;
          operation = null;
        }
        break;
    }
  });
}

function add (firstNumber, input) {
  let result;
  result = firstNumber + input;
  return result;
}

function minus (firstNumber, input) {
  let result;
  result = firstNumber - input;
  return result;
}

function multiply (firstNumber, input) {
  let result;
  result = firstNumber * input;
  return result;
}

function divide (firstNumber, input) {
  let result;
  result = firstNumber / input;
  return result;
}