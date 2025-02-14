// INFO: the big bad boy (just a simple array to get all the main phalculator buttons)
const numberButtons = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
  document.getElementById("0"),
  document.getElementById("+"),
  document.getElementById("-"),
  document.getElementById("*"),
  document.getElementById("/"),
];

// INFO: variables for buttons too small for an array and too special to be apart of the big bad boy
const equalButton = document.getElementById("=");
const clearButton = document.getElementById("C");

// INFO: gets the HTML input tag so the calc is visual and not in the console only
const phalcResult = document.getElementById("resultID");

// INFO: number value variables to calculate user number input
let numberValues = "";
let numberOutput;

// INFO: makes each button a property of numberBtn
// INFO: gets the inner HTML values of each button for the phalculator output
numberButtons.forEach((numberBtn) => {
  numberBtn.onclick = function () {
    numberValues = numberValues.concat(numberBtn.id);
    phalcResult.value = numberValues;
  };
});

// INFO: equal sign to output the result of the user input
equalButton.addEventListener("click", function () {
  numberValues = "";
  phalcResult.value = eval(phalcResult.value);
});

// INFO: clears the user input incase they made a mistake
clearButton.addEventListener("click", function () {
  numberValues = "";
  phalcResult.value = "";
});
