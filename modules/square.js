export const calculateSquarePerimeter = (lengthOfSquare) => {
  if (!lengthOfSquare) {
    throw new Error("Length of cube is required");
  }

  if (typeof lengthOfSquare !== "number") {
    throw new Error("Length of cube must be number");
  }

  if (!(lengthOfSquare > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return 4 * lengthOfSquare;
}

export const calculateSquareArea = (lengthOfSquare) => {
  if (!lengthOfSquare) {
    throw new Error("Length of cube is required");
  }

  if (typeof lengthOfSquare !== "number") {
    throw new Error("Length of cube must be number");
  }

  if (!(lengthOfSquare > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return lengthOfSquare ** 2;
}
