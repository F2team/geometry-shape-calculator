import {
  calculateSquareArea,
  calculateSquarePerimeter,
} from "../../modules/square.js";

const squareAreaElement = document.querySelector("#area");
const squarePerimeterElement = document.querySelector("#perimeter");
const errorTextElement = document.querySelector("#error");
const formElement = document.querySelector("form");

const appendResultSquarePerimeter = (lengthOfSquare) => {
  try {
    const resultSquarePerimeter = calculateSquarePerimeter(lengthOfSquare);

    squarePerimeterElement.innerText = resultSquarePerimeter;
    errorTextElement.innerText = "";
  } catch (error) {
    errorTextElement.innerText = error.message;
    squarePerimeterElement.innerHTML = "";
  }
};

const appendResultSquareArea = (lengthOfSquare) => {
  try {
    const resultSquareArea = calculateSquareArea(lengthOfSquare);

    squareAreaElement.innerText = resultSquareArea;
    errorTextElement.innerText = "";
  } catch (error) {
    errorTextElement.innerText = error.message;
    squareAreaElement.innerHTML = "";
  }
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form input
  const sideLengthElement = document.querySelector("#side-length");
  const sideLength = sideLengthElement.valueAsNumber;

  // Append results to the DOM
  appendResultSquarePerimeter(sideLength);
  appendResultSquareArea(sideLength);
});
