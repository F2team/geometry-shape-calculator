import { calculateSquareArea, calculateSquarePerimeter } from "./../../modules/square.js";

const areaOfSquare = document.querySelector("#area");
const perimeterOfSquare = document.querySelector("#perimeter");
const textError = document.querySelector(".error");
const formElement = document.querySelector("form");

const insertResultOfCalculateSquarePerimeterToDOM = (lengthOfSquare) => {
  try {
    const resultCalculateSquarePerimeter = calculateSquarePerimeter(lengthOfSquare);

    perimeterOfSquare.innerText = resultCalculateSquarePerimeter;
    textError.innerText = "";
  } catch (error) {
    textError.innerText = error.message;
    perimeterOfSquare.innerHTML = "";
  }
}

const insertResultOfCalculateSquareAreaToDOM = (lengthOfSquare) => {
  try {
    const resultCalculateSquareArea = calculateSquareArea(lengthOfSquare);

    areaOfSquare.innerText = resultCalculateSquareArea;
    textError.innerText = "";
  } catch (error) {
    textError.innerText = error.message;
    areaOfSquare.innerHTML = "";
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const lengthOfSquare = Number(document.querySelector("#length-of-square").value);

  insertResultOfCalculateSquarePerimeterToDOM(lengthOfSquare);

  insertResultOfCalculateSquareAreaToDOM(lengthOfSquare);
});
