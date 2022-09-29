import { calculateSquareArea, calculateSquarePerimeter } from "./../../modules/square.js";

const areaOfSquare = document.querySelector("#area");
const perimeterOfSquare = document.querySelector("#perimeter");
const formElement = document.querySelector("form");

const insertResultOfCalculateSquarePerimeterToDOM = (lengthOfSquare) => {
  try {
    const resultCalculateSquarePerimeter = calculateSquarePerimeter(lengthOfSquare);

    perimeterOfSquare.innerText = resultCalculateSquarePerimeter;
  } catch (error) {
    console.error(error)
    perimeterOfSquare.innerHTML = "";
  }
}

const insertResultOfCalculateSquareAreaToDOM = (lengthOfSquare) => {
  try {
    const resultCalculateSquareArea = calculateSquareArea(lengthOfSquare);

    areaOfSquare.innerText = resultCalculateSquareArea;
  } catch (error) {
    console.error(error)
    areaOfSquare.innerHTML = "";
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const lengthOfSquare = Number(document.querySelector("#length-of-square").value);

  insertResultOfCalculateSquarePerimeterToDOM(lengthOfSquare);

  insertResultOfCalculateSquareAreaToDOM(lengthOfSquare);
});
