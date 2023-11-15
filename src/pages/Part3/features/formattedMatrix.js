export const formattedMatrix = (matrix, size) => {
    let tmp = [];
    for (let i = 0; i < size; i++) {
        tmp.push(parseFloat(matrix[i]));
    }
    return tmp;
};