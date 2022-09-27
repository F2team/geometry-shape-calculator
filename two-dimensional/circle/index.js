const radiusOfCircumference = document.querySelector("#radius-of-circle");
const areaOfCircle = document.querySelector("#area");
const circumferenceOfCircle = document.querySelector("#circumference");
const formElement = document.querySelector("form");

function calculateCircumference(radiusOfCircumference) {
  return 2 * 3.14 * radiusOfCircumference;
}

function calculateArea(radiusOfCircumference) {
  return 3.14 * radiusOfCircumference ** 2;
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const resultCalculateCircumference = calculateCircumference(
    radiusOfCircumference.value
  );
  const resultCalculateArea = calculateArea(radiusOfCircumference.value);

  areaOfCircle.innerText = resultCalculateArea;
  circumferenceOfCircle.innerText = resultCalculateCircumference;
});
