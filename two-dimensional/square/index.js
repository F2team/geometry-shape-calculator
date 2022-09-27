const lengthOfSquare = document.querySelector("#length-of-square");
const areaOfSquare = document.querySelector("#area");
const perimeterOfSquare = document.querySelector("#perimeter");
const formElement = document.querySelector("form");

function calculateSquarePerimeter(lengthOfSquare) {
  try {
    if (!lengthOfSquare) {
      throw new Error("Length of square is required");
    }
    if (typeof lengthOfSquare !== "number") {
      throw new Error("Length of square has to be a number");
    }
    return 4 * lengthOfSquare;
  } catch (error) {
    console.error(error);
    alert(error.message);
    return 0;
  }
}

function calculateArea(lengthOfSquare) {
  return lengthOfSquare ** 2;
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const resultcalculateSquarePerimeter = calculateSquarePerimeter(
      lengthOfSquare.value
    );
    const resultCalculateArea = calculateArea(lengthOfSquare.value);

    if (!resultcalculateSquarePerimeter) {
      throw new Error("Perimeter reseult is not available");
    }

    areaOfSquare.innerText = resultCalculateArea;
    perimeterOfSquare.innerText = resultcalculateSquarePerimeter;
  } catch (error) {
    console.error(error);
    alert("Perimeter reseult is not available");
  }
});
