import {
  calculateCubeSurfaceArea,
  calculateCubeVolume,
} from "../../modules/cube.js";

const sideLengthElement = document.getElementById("length-of-cube");
const cubeVolumeElement = document.getElementById("volume");
const cubeSurfaceAreaElement = document.getElementById("surface-area");
const textErrorElement = document.getElementById('error');
const formElement = document.querySelector("form");

const appendResultCubeSurfaceArea = (sideLength) => {
  try {
    const resultCubeSurfaceArea =
      calculateCubeSurfaceArea(sideLength);

    cubeSurfaceAreaElement.innerText = resultCubeSurfaceArea;
    textErrorElement.innerText = "";
  } catch (error) {
    textErrorElement.innerText = error.message;
    cubeSurfaceAreaElement.innerHTML = "";
  }
};

const appendResultCubeVolume = (sideLength) => {
  try {
    const resultCubeVolume = calculateCubeVolume(sideLength);

    cubeVolumeElement.innerText = resultCubeVolume;
    textErrorElement.innerText = "";
  } catch (error) {
    textErrorElement.innerText = error.message;
    cubeVolumeElement.innerHTML = "";
  }
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  //Get form input
  const sideLength = sideLengthElement.valueAsNumber;

  //Append result to the DOM
  appendResultCubeSurfaceArea(sideLength);
  appendResultCubeVolume(sideLength);
});
