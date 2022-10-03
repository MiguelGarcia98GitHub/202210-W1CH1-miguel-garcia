// CALCULADORA HTML - CSS

// REFERENCIAS A ELEMENTOS
const calcScreen = document.getElementById("calcScreenValue");

const press_7 = document.getElementById("press7");
const press_8 = document.getElementById("press8");
const press_9 = document.getElementById("press9");
const press_4 = document.getElementById("press4");
const press_5 = document.getElementById("press5");
const press_6 = document.getElementById("press6");
const press_1 = document.getElementById("press1");
const press_2 = document.getElementById("press2");
const press_3 = document.getElementById("press3");
const press_0 = document.getElementById("press0");
const press_DOT = document.getElementById("pressDOT");
const press_CALCULATE = document.getElementById("pressCALCULATE");
const press_SPACE = document.getElementById("pressSPACE");

// LOGICA
let tempCalcValue = "";
let arrayOfValues = [];
press_7.addEventListener("click", function () {
  tempCalcValue += "7";
  calcScreen.textContent += "7";
});

press_8.addEventListener("click", function () {
  tempCalcValue += "8";
  calcScreen.textContent += "8";
});

press_9.addEventListener("click", function () {
  tempCalcValue += "9";
  calcScreen.textContent += "9";
});

press_4.addEventListener("click", function () {
  tempCalcValue += "4";
  calcScreen.textContent += "4";
});

press_5.addEventListener("click", function () {
  tempCalcValue += "5";
  calcScreen.textContent += "5";
});

press_6.addEventListener("click", function () {
  tempCalcValue += "6";
  calcScreen.textContent += "6";
});

press_1.addEventListener("click", function () {
  tempCalcValue += "1";
  calcScreen.textContent += "1";
});

press_2.addEventListener("click", function () {
  tempCalcValue += "2";
  calcScreen.textContent += "2";
});

press_3.addEventListener("click", function () {
  tempCalcValue += "3";
  calcScreen.textContent += "3";
});

press_0.addEventListener("click", function () {
  tempCalcValue += "0";
  calcScreen.textContent += "0";
});

press_DOT.addEventListener("click", function () {
  tempCalcValue += ".";
  calcScreen.textContent += ".";
});

press_SPACE.addEventListener("click", function () {
  arrayOfValues.push(Number(tempCalcValue));
  tempCalcValue = "";
  calcScreen.textContent = "";
});

press_CALCULATE.addEventListener("click", function () {
  calcScreen.textContent = "";
  arrayOfValues.push(Number(tempCalcValue));

  if (arrayOfValues.length === 1) {
    let tempVal = 0;
    tempVal = Math.sqrt(Number(tempCalcValue));
    tempVal = tempVal.toFixed(2);
    calcScreen.textContent = tempVal;
    setTimeout(() => {
      calcScreen.textContent = "";
    }, 2000);
  }

  if (arrayOfValues.length === 2) {
    let twoValuesSum = arrayOfValues[0] + arrayOfValues[1];

    calcScreen.textContent += `Sum of the 2 values: ${twoValuesSum.toFixed(2)}`;

    let twoValuesSubtraction = arrayOfValues[0] - arrayOfValues[1];

    setTimeout(() => {
      calcScreen.textContent = `Subtraction of the 2 values: ${twoValuesSubtraction.toFixed(
        2
      )}`;
    }, 2000);

    let twoValuesMultiplication = arrayOfValues[0] * arrayOfValues[1];
    setTimeout(() => {
      calcScreen.textContent = `Multiplication of the 2 values: ${twoValuesMultiplication.toFixed(
        2
      )}`;
    }, 4000);
    let twoValuesDivision = arrayOfValues[0] / arrayOfValues[1];
    setTimeout(() => {
      calcScreen.textContent = `Division of the 2 values: ${twoValuesDivision.toFixed(
        2
      )}`;
    }, 6000);

    setTimeout(() => {
      calcScreen.textContent = "";
    }, 8000);
  }

  if (arrayOfValues.length > 2) {
    let tempSum = 0;
    for (let i = 0; i < arrayOfValues.length; i++) {
      tempSum += arrayOfValues[i];
    }
    calcScreen.textContent = `Sum of 3 or more values: ${tempSum}`;
    setTimeout(() => {
      calcScreen.textContent = "";
    }, 2000);
  }

  arrayOfValues = [];
  tempCalcValue = "";
});
