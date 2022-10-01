import {
  calculateVolumeSphere,
  calculateSurfaceAreaSphere,
} from "../../modules/sphere";

const sphereRadiusElement = document.getElementById("radius-of-sphere");
const sphereSurfaceAreaElement = document.getElementById("surface-area");
const sphereVolumeElement = document.getElementById("volume");
const errorTextElement = document.getElementById("error");
const formElement = document.querySelector("form");

const appendResultSphereSurfaceArea = (sphereRadius) => {
  try {
    const resultCalculateSphereSurfaceArea =
      calculateSurfaceAreaSphere(sphereRadius);

    sphereSurfaceAreaElement.innerText = resultCalculateSphereSurfaceArea;
  } catch (error) {
    errorTextElement.innerText = error.message;
    sphereSurfaceAreaElement.innerHTML = "";
  }
};

const appendResultSphereVolume = (sphereRadius) => {
  try {
    const resultCalculateSphereVolume = calculateVolumeSphere(sphereRadius);

    sphereVolumeElement.innerText = resultCalculateSphereVolume;
  } catch (error) {
    errorTextElement.innerText = error.message;
    sphereVolumeElement.innerHTML = "";
  }
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const sphereRadius = sphereRadiusElement.valueAsNumber;

  appendResultSphereSurfaceArea(sphereRadius);
  appendResultSphereVolume(sphereRadius);
});
