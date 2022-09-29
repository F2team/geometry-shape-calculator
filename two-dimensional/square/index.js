import {
  calculateSquareArea,
  calculateSquarePerimeter,
} from "../../modules/square.js";


const sideLengthElement = document.getElementById("side-length");
const squareAreaElement = document.getElementById("area");
const squarePerimeterElement = document.getElementById("perimeter");
const errorTextElement = document.getElementById("error");
const formElement = document.querySelector("form");

const appendResultSquarePerimeter = (sideLength) => {
  try {
    const resultSquarePerimeter = calculateSquarePerimeter(sideLength);

    squarePerimeterElement.innerText = resultSquarePerimeter;
    errorTextElement.innerText = "";
  } catch (error) {
    errorTextElement.innerText = error.message;
    squarePerimeterElement.innerHTML = "";
  }
};

const appendResultSquareArea = (sideLength) => {
  try {
    const resultSquareArea = calculateSquareArea(sideLength);

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
  const sideLength = sideLengthElement.valueAsNumber;

  // Append results to the DOM
  appendResultSquarePerimeter(sideLength);
  appendResultSquareArea(sideLength);
});
