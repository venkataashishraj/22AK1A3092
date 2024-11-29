function addMatrices(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions for addition.");
    }
    return matrixA.map((row, i) =>
        row.map((value, j) => value + matrixB[i][j])
    );
}
function subtractMatrices(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions for subtraction.");
    }
    return matrixA.map((row, i) =>
        row.map((value, j) => value - matrixB[i][j])
    );
}
function multiplyMatrices(matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
        throw new Error("Number of columns in Matrix A must equal the number of rows in Matrix B.");
    }
    return matrixA.map((row, i) =>
        matrixB[0].map((_, j) =>
            row.reduce((sum, value, k) => sum + value * matrixB[k][j], 0)
        )
    );
}
function traceMatrix(matrix) {
    if (matrix.length !== matrix[0].length) {
        throw new Error("Matrix must be square to calculate the trace.");
    }
    return matrix.reduce((sum, row, i) => sum + row[i], 0);
}
const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
try {
    console.log("Matrix A:", matrixA);
    console.log("Matrix B:", matrixB);
    const added = addMatrices(matrixA, matrixB);
    console.log("Addition:", added);
    const subtracted = subtractMatrices(matrixA, matrixB);
    console.log("Subtraction:", subtracted);
    const multiplied = multiplyMatrices(matrixA, matrixB);
    console.log("Multiplication:", multiplied);
    const traceA = traceMatrix(matrixA);
    console.log("Trace of Matrix A:", traceA);
} catch (error) {
    console.error(error.message);
}
