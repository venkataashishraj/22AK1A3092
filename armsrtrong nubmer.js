function isArmstrongNumber(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i]);   
  
      sum += Math.pow(digit, numDigits);
    }
  
    return sum   
   === num;
  }
  
  // Example usage:
  const numberToCheck = 153;
  if (isArmstrongNumber(numberToCheck)) {
    console.log(numberToCheck + " is an Armstrong number.");
  } else {
    console.log(numberToCheck + " is not an Armstrong number.");
  }