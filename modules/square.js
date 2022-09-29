export const calculateSquarePerimeter = (lengthOfSquare) => {
  if (!(lengthOfSquare > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return 4 * lengthOfSquare;
}

export const calculateSquareArea = (lengthOfSquare) => {
  if (!(lengthOfSquare > 0)) {
    throw new Error("Lenght of cube must be over 0");
  }

  return lengthOfSquare ** 2;
}
