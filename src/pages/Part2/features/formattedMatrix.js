export const formattedMatrix = (matrix, size) => {
  let tmp = [];
  if (Array.isArray(matrix[0])) {
    for (let i = 0; i < size; i++) {
      let hlp = [];
      for (let j = 0; j < size; j++) {
        hlp.push(parseFloat(matrix[i][j]));
      }
      tmp.push(hlp);
    }
  } else {
    for (let i = 0; i < size; i++) {
      tmp.push(parseFloat(matrix[i]));
    }
  }
  return tmp;
};
