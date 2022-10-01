import { calculateCircumference, calculateArea } from "../../modules/circle.js";

const circleRadius = document.querySelector("#radius-of-circle");
const circleArea = document.querySelector("#area");
const circleCircumference = document.querySelector("#circumference");
const errorTextElement = document.getElementById("error");
const formElement = document.querySelector("form");

const appendResultCalculateArea = (radiusOfCircle) => {
  try {
    const resultCalculateArea = calculateArea(radiusOfCircle);

    circleArea.innerText = resultCalculateArea;
  } catch (error) {
    errorTextElement.innerText = error.message;
    circleArea.innerHTML = "";
  }
};

const appendResultCalculateCircumference = (radiusOfCircle) => {
  try {
    const resultCalculateCircumference = calculateCircumference(radiusOfCircle);

    circleCircumference.innerText = resultCalculateCircumference;
  } catch (error) {
    errorTextElement.innerText = error.message;
    circleCircumference.innerHTML = "";
  }
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const radiusOfCircle = circleRadius.valueAsNumber;

  appendResultCalculateArea(radiusOfCircle);
  appendResultCalculateCircumference(radiusOfCircle);
});
