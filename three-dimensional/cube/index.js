const lengthOfCube = document.querySelector("#length-of-cube");
const volumeOfCube = document.querySelector("#volume");
const surfaceAreaOfCube = document.querySelector("#surface-area");
const formElement = document.querySelector('form');

function calculateSurfaceArea(lengthOfCube) {
  return 6 * (lengthOfCube * 2);
}

function calculateVolume(lengthOfCube) {
  return lengthOfCube ** 3;
}

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultCalculateSurfaceArea = calculateSurfaceArea(lengthOfCube.value);
  const resultCalculateVolume = calculateVolume(lengthOfCube.value);

  volumeOfCube.innerText = resultCalculateVolume;
  surfaceAreaOfCube.innerText = resultCalculateSurfaceArea;
});