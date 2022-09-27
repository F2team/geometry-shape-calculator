const lengthOfSquare = document.querySelector("#length-of-square");
const areaOfSquare = document.querySelector("#area");
const perimeterOfSquare = document.querySelector("#perimeter");
const formElement = document.querySelector('form');

function calculatePerimeter(lengthOfSquare) {
  return 4 * lengthOfSquare;
}

function calculateArea(lengthOfSquare) {
  return lengthOfSquare ** 2;
}

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultCalculatePerimeter = calculatePerimeter(lengthOfSquare.value);
  const resultCalculateArea = calculateArea(lengthOfSquare.value);

  areaOfSquare.innerText = resultCalculateArea;
  perimeterOfSquare.innerText = resultCalculatePerimeter;
});