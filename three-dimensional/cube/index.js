import {
  calculateCubeSurfaceArea,
  calculateCubeVolume,
} from "../../modules/cube.js";

const volumeOfCube = document.querySelector("#volume");
const surfaceAreaOfCube = document.querySelector("#surface-area");
const textError = document.querySelector(".error");
const formElement = document.querySelector("form");

const insertResultOfCalculateCubeSurfaceAreaToDOM = (lengthOfCube) => {
  try {
    const resultCalculateCubeSurfaceArea =
      calculateCubeSurfaceArea(lengthOfCube);

    surfaceAreaOfCube.innerText = resultCalculateCubeSurfaceArea;
    textError.innerText = "";
  } catch (error) {
    textError.innerText = error.message;
    surfaceAreaOfCube.innerHTML = "";
  }
};

const insertResultOfCalculateCubeVolumeToDOM = (lengthOfCube) => {
  try {
    const resultCalculateCubeVolume = calculateCubeVolume(lengthOfCube);

    volumeOfCube.innerText = resultCalculateCubeVolume;
    textError.innerText = "";
  } catch (error) {
    textError.innerText = error.message;
    volumeOfCube.innerHTML = "";
  }
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const lengthOfCube = Number(document.querySelector("#length-of-cube").value);

  insertResultOfCalculateCubeSurfaceAreaToDOM(lengthOfCube);

  insertResultOfCalculateCubeVolumeToDOM(lengthOfCube);
});
