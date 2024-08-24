function matrixAddition(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
  
    const result = [];
    for (let i = 0; i < rows; i++) {
      result[i] = [];
      for (let j = 0; j < cols; j++) {
        result[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
  
    return result;
  }
  
  function matrixSubtraction(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
  
    const result = [];
    for (let i = 0; i < rows; i++) {
      result[i] = [];
      for (let j = 0; j < cols; j++) {
        result[i][j] = matrixA[i][j] - matrixB[i][j];
      }
    }
  
    return result;
  }
  
  function matrixMultiplication(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;   
  
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      throw new Error("Matrix   
   dimensions are incompatible for multiplication.");
    }
  
    const result = [];
    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;   
  
  }
  
  function matrixTrace(matrix) {
    const n = matrix.length;
    let trace = 0;
  
    for (let i = 0; i < n; i++) {
      trace += matrix[i][i];
    }
  
    return trace;
  }
  
  // Example usage:
  const matrixA = [[1, 2], [3, 4]];
  const matrixB = [[5, 6], [7, 8]];
  
  const sumMatrix = matrixAddition(matrixA, matrixB);
  const diffMatrix = matrixSubtraction(matrixA, matrixB);
  const productMatrix = matrixMultiplication(matrixA, matrixB);
  const traceA = matrixTrace(matrixA);
  const traceB = matrixTrace(matrixB);
  
  console.log("Sum Matrix:", sumMatrix);
  console.log("Difference Matrix:", diffMatrix);
  console.log("Product Matrix:", productMatrix);
  console.log("Trace of Matrix A:", traceA);
  console.log("Trace of Matrix B:", traceB);