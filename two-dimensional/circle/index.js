import { calculateCircumference, calculateArea } from "../../modules/circle.js";

const circleRadius = document.querySelector("#radius-of-circle");
const circleArea = document.querySelector("#area");
const circleCircumference = document.querySelector("#circumference");
const formElement = document.querySelector("form");

const resultCalculateArea = calculateArea(radiusOfCircle.value);

circleArea.innerText = resultCalculateArea;

const resultCalculateCircumference = calculateCircumference(
  radiusOfCircle.value
);

circleCircumference.innerText = resultCalculateCircumference;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const radiusOfCircle = circleRadius.valueAsNumber;

  resultCalculateArea(radiusOfCircle);
  resultCalculateCircumference(radiusOfCircle);
});
