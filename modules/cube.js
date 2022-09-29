export function calculateCubeSurfaceArea(lengthOfCube) {
  if (!lengthOfCube) {
    throw new Error("Length of cube is required");
  }

  if (typeof lengthOfCube !== "number") {
    throw new Error("Length of cube must be number");
  }

  if (!(lengthOfCube > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return 6 * (lengthOfCube * 2);
}

export function calculateCubeVolume(lengthOfCube) {
  if (!lengthOfCube) {
    throw new Error("Length of cube is required");
  }

  if (typeof lengthOfCube !== "number") {
    throw new Error("Length of cube must number");
  }

  if (!(lengthOfCube > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return lengthOfCube ** 3;
}
