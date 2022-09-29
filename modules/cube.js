export function calculateCubeSurfaceArea(lengthOfCube) {
  if (lengthOfCube <= 0) {
    throw new Error("Length of cube must be over 0");
  }

  return 6 * (lengthOfCube * 2);
}

export function calculateCubeVolume(lengthOfCube) {
  if (lengthOfCube <= 0) {
    throw new Error("Length of cube must be over 0");
  }

  return lengthOfCube ** 3;
}
