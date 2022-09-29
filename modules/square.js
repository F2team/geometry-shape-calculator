export const calculateSquarePerimeter = (sideLength) => {
  if (sideLength <= 0) {
    throw new Error("Length of cube must be over 0");
  }

  return sideLength * 4;
};

export const calculateSquareArea = (sideLength) => {
  if (sideLength <= 0) {
    throw new Error("Length of cube must be over 0");
  }

  return sideLength ** 2;
};
